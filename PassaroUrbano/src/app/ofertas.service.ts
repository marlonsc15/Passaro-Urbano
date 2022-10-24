import { Injectable } from '@angular/core';
import { Oferta } from "./shared/oferta.model"
import { HttpClient } from "@angular/common/http"

import { URL_API } from './app_api';

//import 'rxjs/add/operator/toPromise'
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`${URL_API}/ofertas?destaque=true`))
            .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`${URL_API}/ofertas?categoria=${categoria}`))
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`${URL_API}/ofertas?id=${id}`))
            .then((resposta: any) => {
                return resposta
            })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return firstValueFrom(this.http.get(`${URL_API}/como-usar?id=${id}`))
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

}

