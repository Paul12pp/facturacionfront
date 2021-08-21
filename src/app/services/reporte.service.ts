import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes, getRoute } from '../api/api.routes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private reporteRoute: string;
  constructor(private http: HttpClient) {
    this.reporteRoute = getRoute(apiRoutes.reporte);
    console.log('repor services ready');
  }
  getall(pageNumber: number): Observable<any> {
    const route = `${this.reporteRoute}/GetReporteVendedores?pageNumber=${pageNumber}`;
    return this.http.get<any>(route, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).pipe(map(data => data.result));

  }
}
