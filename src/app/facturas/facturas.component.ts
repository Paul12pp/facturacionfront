import { Component, OnInit } from '@angular/core';
import { FacturacionService } from '../services/facturacion.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any[] = [];
  constructor(private services: FacturacionService) { }

  ngOnInit(): void {
    this.services.getall()
      .subscribe(result => {
        this.facturas = result;
      });
  }

}
