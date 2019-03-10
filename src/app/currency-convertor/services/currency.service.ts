import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Currency } from '../model/currency';
import { Responses } from '../model/response';
@Injectable()
export class CurrencyService {
  constructor( private _httpService: Http){}
   _url:string='http://localhost:8080/currency';
  convertCurrency(Currency): Observable<Responses> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._httpService.post(this._url, Currency, options).pipe(map((response: Response)=>response.json()));
  }
}
