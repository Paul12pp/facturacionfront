import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { FacturacionModel } from '../model/facturacion.model';
import { FacturacionService } from '../services/facturacion.service';
import { ClienteModel } from '../model/cliente.model';
import { VendedorModel } from '../model/vendedor.model';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  rows: any[] = [
    { id: 0, articuloId: 0, precioUnitario: 0, cantidad: 0, facturacionId: 0 }
  ];
  dataSource = new MatTableDataSource(this.rows);
  displayedColumns: string[] = ['articuloId', 'precioUnitario', 'cantidad', 'actions'];
  model: FacturacionModel;
  clientes: ClienteModel[] = [];
  vendedores: VendedorModel[] = [];
  constructor(private services: FacturacionService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.clean();
    this.services.getallC()
      .subscribe(result => {
        console.log(result);
        this.clientes = result;
      });
    this.services.getallV()
      .subscribe(result => {
        console.log(result);
        this.vendedores = result;
      });
  }

  borrar(index: number) {
    if (this.rows.length === 1) {
      this.clean();
      // this.dataSource = new MatTableDataSource(this.rows);
    } else {
      this.rows.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.rows);

    }
  }
  agregar() {
    // debugger;
    console.log('aqui')
    this.rows.push({ id: 0, articuloId: 0, precioUnitario: 0, cantidad: 0, facturacionId: 0 });
    // this.dataSource = new MatTableDataSource(this.rows);
    this.dataSource = new MatTableDataSource(this.rows);
  }
  findArticle(i: number, id: number) {
    this.services.getbyidA(id)
      .subscribe(result => {
        if (result) {
          this.rows[i] = result;
          this.rows[i].articuloId = result.id;
          this.dataSource = new MatTableDataSource(this.rows);
        } else {
          this.msg('Articulo no encontrado', 2);
        }
      });
  }
  clean() {
    this.model = {
      id: 0,
      clienteId: 0,
      vendedorId: 0,
      comentario: '',
      fecha: new Date().toISOString(),
      detalle: []
    };
    this.rows = [{ id: 0, articuloId: 0, precioUnitario: 0, cantidad: 0, facturacionId: 0 }]
    this.dataSource = new MatTableDataSource(this.rows);
  }

  onSubmit(form: NgForm) {
    console.log(form)
    Swal.fire({
      title: 'Procesando',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    const id = form.value.id
    if (form.valid) {
      const values = form.value;
      //delete values.id;
      values.estado = values.estado === 'true' ? true : false;
      console.log('aqui', values);
      if (id !== null && id !== 0 && id !== undefined) {
        this.services.update(values).subscribe(result => {
          console.log(result);
          form.resetForm();
          Swal.close();
          console.log('after', this.model);
          this.msg('Guardado', 1);
        });
      } else {
        delete values.id;
        this.services.save(values).subscribe(result => {
          console.log(result);
          form.resetForm();
          Swal.close();
          this.msg('Error', 2);
        });
      }
    } else {
      this.msg('Datos incompletos', 2);
      Swal.close();
    }
  }
  edit(id: number) {
    Swal.fire({
      title: 'Obtenindo datos',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    this.services.getbyid(id).subscribe(result => {
      this.model = result;
      console.log('factura', this.model);
      Swal.close();
    });
    console.log('edit');
  }

  msg(msg: string, type: number) {
    if (type === 1) {
      this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span>' + msg, '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-top-right'
      });
    } else {
      this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span>' + msg, '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-warning alert-with-icon",
        positionClass: 'toast-top-right'
      });
    }
  }

}
