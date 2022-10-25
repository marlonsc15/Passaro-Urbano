import { Injectable } from '@angular/core';
import { Oferta } from "./shared/oferta.model"
import { HttpClient } from "@angular/common/http"

import { URL_API } from './app_api';

import { map } from 'rxjs/operators';
import { firstValueFrom, Observable } from 'rxjs';

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

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return firstValueFrom(this.http.get(`${URL_API}/onde-fica?id=${id}`))
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

    public pesquisaOferta(termo:string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
        .pipe(map((resposta: any)=> resposta.json()))
        }
}

