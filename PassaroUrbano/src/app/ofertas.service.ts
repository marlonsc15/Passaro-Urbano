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
        return firstValueFrom(this.http.get(`${URL_API}?destaque=true`))
            .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`${URL_API}?categoria=${categoria}`))
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`${URL_API}?id=${id}`))
            .then((resposta: any) => {
                return resposta
            })
    }

}

