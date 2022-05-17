import { HttpHeaders } from '@angular/common/http';
import { Injectable, PipeTransform} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export abstract class AbstractService{

    pipe:PipeTransform;

    protected _token:String = sessionStorage.getItem('token');
    protected _expirationTime:number = Number(sessionStorage.getItem('expire_in'));
    protected _tokenExpiration:String = sessionStorage.getItem('token_expiration');

    protected _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        Authorization: "Bearer "+this._token
      })
    }; 
}