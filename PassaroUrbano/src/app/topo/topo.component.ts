import { OfertasService } from 'src/app/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca: string): void {
    console.log(termoDaBusca)
  }

}
