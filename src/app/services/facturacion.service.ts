import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes, getRoute } from '../api/api.routes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FacturacionModel } from '../model/facturacion.model';
import { ArticuloModel } from '../model/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  private facturacionRoute: string;
  constructor(private http: HttpClient) {
    this.facturacionRoute = getRoute(apiRoutes.facturacion);
    console.log('FACT services ready');
  }
  getall(): Observable<any> {
    const route = `${this.facturacionRoute}/getall`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));

  }

  getbyid(id: number): Observable<FacturacionModel> {
    const route = `${this.facturacionRoute}/getbyid?id=${id}`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));
  }
  save(model: any) {
    const route = `${this.facturacionRoute}`;
    return this.http.post(route, model);
  }
  contabilizar(model: any) {
    const route = `${this.facturacionRoute}/Contabilizar`;
    return this.http.post(route, model);
  }
  update(model: any) {
    const route = `${this.facturacionRoute}`;
    return this.http.put(route, model);
  }
  getallC(): Observable<any> {
    const route = `${getRoute(apiRoutes.cliente)}/getall`;
    // debugger;
    return this.http.get<any[]>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));
  }
  getallV(): Observable<any> {
    const route = `${getRoute(apiRoutes.vendedor)}/getall`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));
  }
  getbyidA(id: number): Observable<ArticuloModel> {
    const route = `${getRoute(apiRoutes.articulo)}/getbyid?id=${id}`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));
  }

}
