import { Injectable  } from '@angular/core';
import { Oferta } from "./shared/oferta.model"
import { HttpClient } from "@angular/common/http"

//import 'rxjs/add/operator/toPromise'
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OfertasService {

    constructor( private http: HttpClient) {}


    public getOfertas(): Promise<Oferta[]> {
        return firstValueFrom(this.http.get('http://localhost:3000/ofertas?destaque=true'))
        .then((resposta: any) => resposta)
    }
} 

