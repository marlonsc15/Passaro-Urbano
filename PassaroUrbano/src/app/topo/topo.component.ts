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
  public ofertas2!: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('requisição http para api')

        if(termo.trim() === ''){
          return of<Oferta[]>([])
        }

        return this.ofertaService.pesquisaOferta(termo)
      }),
      catchError((erro) => {
        console.log(erro.status)
        return of<Oferta[]>([])
        
      })
      
    ) 
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas);
      
      this.ofertas2 = ofertas
    })
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter: ', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
    
  }

}
 