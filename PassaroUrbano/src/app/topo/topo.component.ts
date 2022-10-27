import { Oferta } from './../shared/oferta.model';
import { debounceTime, Observable, catchError, Subject, switchMap, of, distinctUntilChanged } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {

        if (termo.trim() === '') {
          return of<Oferta[]>([])
        }

        return this.ofertaService.pesquisaOferta(termo)
      }),
      catchError((erro) => {
        return of<Oferta[]>([])
      })
    )
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
