import { ControleAcessoFiltro } from './../models/ControleAcessoFiltro';

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Page } from '../models/Page';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


constructor(private http: HttpClient) { }

/**
 *
 * @param page
 * @param size
 * @returns
 */
buscarVeiculos(page, size) : Observable<Page>{
  const param = new HttpParams()
  .set('page', page)
  .set('size', size);

  var url = environment.base_url.concat('parking-spot');
  console.log(`${url}?page=${page}&size=${size}`);

 return this.http.get<Page>(`${url}?page=${page}&size=${size}`, { headers: this.httpOptions.headers }).pipe(catchError(this.handleError));
}

/**
 *
 * @param filtro
 * @param page
 * @param size
 * @returns Observable<any>
 */
filtroControleAcesso(filtro: ControleAcessoFiltro, page: number, size: number) : Observable<any> {
  let param = new HttpParams()
  .set('page', page)
  .set('size', size);

  if (filtro.numeroVaga) {
    param = param.set("numeroVaga", filtro.numeroVaga);
  }

  if (filtro.nomeResponsavel) {
    param = param.set("nomeResponsavel", filtro.nomeResponsavel);
  }

  if (filtro.numeroPlaca) {
    param = param.set("numeroPlaca", filtro.numeroPlaca);
  }

  if (filtro.corVeiculo) {
    param = param.set("corVeiculo", filtro.corVeiculo);
  }

  if (filtro.bloco) {
    param = param.set("bloco", filtro.bloco);
  }

  if (filtro.numeroApartamento) {
    param = param.set("numeroApartamento", filtro.numeroApartamento);
  }

  if (filtro.marcaVeiculo) {
    param = param.set("marcaVeiculo", filtro.marcaVeiculo);
  }

  if (filtro.modeloVeiculo) {
    param = param.set("modeloVeiculo", filtro.modeloVeiculo);
  }

  var url = environment.base_url.concat('parking-spot/filtro');
  console.log(`${url}?${param}`);
  return this.http.get<any>(`${url}?`, { params: param, headers: this.httpOptions.headers }).pipe(catchError(this.handleError));
}

/**
 * Service que busca a quantidade de veículos por blocos
 * @returns
 */
buscarQuantidadeVeiculosPorBlocos() : Observable<any> {
  // localhost:8080/parking-spot/qtd-veiculos-blocos
  var url = environment.base_url.concat('parking-spot/qtd-veiculos-blocos');
  console.log(url);
  return this.http.get<any>(`${url}`, { headers: this.httpOptions.headers }).pipe(catchError(this.handleError));
}

private handleError(errorResponse: HttpErrorResponse) {
  return throwError(errorResponse.error);
}


}
