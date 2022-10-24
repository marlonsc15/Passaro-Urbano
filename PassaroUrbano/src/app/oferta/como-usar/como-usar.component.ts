import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
    ) { }

  ngOnInit(): void {
    this.ofertaService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then((descricao: string) => {
      this.comoUsar = descricao
    })
  }

}
