import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes, getRoute } from '../api/api.routes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClienteModel } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteRoute: string;
  constructor(private http: HttpClient) {
    this.clienteRoute = getRoute(apiRoutes.cliente);
    console.log('cliente services ready');
  }
  getall(): Observable<any> {
    const route = `${this.clienteRoute}/getall`;
    // debugger;
    return this.http.get<any[]>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));

  }

  getbyid(id: number): Observable<ClienteModel> {
    const route = `${this.clienteRoute}/getbyid?id=${id}`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data));
  }
  save(model: any) {
    const route = `${this.clienteRoute}`;
    return this.http.post(route, model);
  }
  update(model: any) {
    const route = `${this.clienteRoute}`;
    return this.http.put(route, model);
  }
}
