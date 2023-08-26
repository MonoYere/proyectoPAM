import { Component, OnInit } from '@angular/core';
import { InterfaceTrabajador } from '../interfaces/trabajador.interface';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-crear-trabajadores',
  templateUrl: './crear-trabajadores.page.html',
  styleUrls: ['./crear-trabajadores.page.scss'],
})

export class CrearTrabajadoresPage implements OnInit {
  public formTrabajador: FormGroup
  constructor(private fb:FormBuilder) {
    this.formTrabajador = this.fb.group({
      nombre: new FormControl (['']),
      apellido: new FormControl (['']),
      edad: new FormControl (['']),
      profesion: new FormControl([''])
    });
   }

  ngOnInit() {
  }

}
