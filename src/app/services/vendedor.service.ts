import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes, getRoute } from '../api/api.routes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VendedorModel } from '../model/vendedor.model';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private vendedorRoute: string;
  constructor(private http: HttpClient) {
    this.vendedorRoute = getRoute(apiRoutes.vendedor);
    console.log('vend services ready');
  }
  getall(): Observable<any> {
    const route = `${this.vendedorRoute}/getall`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));

  }

  getbyid(id: number): Observable<VendedorModel> {
    const route = `${this.vendedorRoute}/getbyid?id=${id}`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));
  }
  save(model: any) {
    const route = `${this.vendedorRoute}`;
    return this.http.post(route, model);
  }
  update(model: any) {
    const route = `${this.vendedorRoute}`;
    return this.http.put(route, model);
  }
}
