import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URL_API } from './app_api';
import { Injectable } from '@angular/core';
import { Pedido } from "./shared/pedido.model"
import { HttpClient } from "@angular/common/http"

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {

    }

    public efetivarCompra(pedido: Pedido): Observable<number> {

        let headers: Headers = new Headers()

        return this.http.post( `${URL_API}/pedidos`, pedido).pipe(
                map((resposta: any) => resposta.id)
                
            );
            
            
    }
}