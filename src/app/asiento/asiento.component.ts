import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.component.html',
  styleUrls: ['./asiento.component.css']
})
export class AsientoComponent implements OnInit {

  pageNumber = 1;
  rows: any[] = [];
  constructor(private services: ReporteService,) { }

  ngOnInit(): void {
    this.services.getall(this.pageNumber)
      .subscribe(result => {
        this.rows = result;
      });
  }
  getMore(){
    this.services.getall(this.pageNumber)
      .subscribe(result => {
        this.rows = result;
      });
  }
}
