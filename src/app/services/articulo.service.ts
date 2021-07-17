import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes, getRoute } from '../api/api.routes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticuloModel } from '../model/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private articuloRoute: string;
  constructor(private http: HttpClient) {
    this.articuloRoute = getRoute(apiRoutes.articulo);
    console.log('art services ready');
  }
  getall(): Observable<ArticuloModel> {
    const route = `${this.articuloRoute}/getall`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));

  }

  getbyid(id: number): Observable<ArticuloModel> {
    const route = `${this.articuloRoute}/getbyid?id=${id}`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));
  }
  save(model: any) {
    const route = `${this.articuloRoute}`;
    return this.http.post(route, model);
  }
  update(model: any) {
    const route = `${this.articuloRoute}`;
    return this.http.put(route, model);
  }
}
