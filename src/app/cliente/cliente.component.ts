import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteModel } from '../model/cliente.model';
import { ClienteService } from '../services/cliente.service';
import Swal from 'sweetalert2';
import { ValidateTool } from '../utils/validate-tool';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  model: ClienteModel;
  clientes: any[] = [];
  constructor(private services: ClienteService, private toastr: ToastrService) { }

  ngOnInit() {
    this.clean();
    this.services.getall()
      .subscribe(result => {
        console.log(result);
        this.clientes = result;
      });
  }
  refresh() {
    this.clientes = [];
    this.services.getall().subscribe(result => {
      this.clientes = result;
      console.log('result', this.clientes);
    });
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
    if (ValidateTool.validDominicanID(form.value.cedula)) {
      if (form.valid) {
        const values = form.value;
        //delete values.id;
        values.estado = values.estado === 'true' ? true : false;
        console.log('aqui', values);
        if (id !== null && id !== 0 && id !== undefined) {
          this.services.update(values).subscribe(result => {
            console.log(result);
            form.resetForm();
            this.refresh();
            Swal.close();
            console.log('after', this.model);
            this.msg('Actualizado!!', 1);
          });
        } else {
          delete values.id;
          this.services.save(values).subscribe(result => {
            console.log(result);
            form.resetForm();
            this.refresh();
            Swal.close();
            this.msg('Guardado!!', 1);
          });
        }
      } else {
        this.msg('Datos incompletos', 2);
        Swal.close();
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cédula invalidad',
      });
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
      console.log('cliente', this.model);
      Swal.close();
    });
    console.log('edit');
  }
  pattern(value: any) {
    console.log(value)
    this.model.cedula = value.replace(/[^0-9]*/g, '');
  }

  clean() {
    this.model = {
      nombreComercial: '',
      cedula: '',
      cuentaContable: '',
      estado: true,
    };

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
