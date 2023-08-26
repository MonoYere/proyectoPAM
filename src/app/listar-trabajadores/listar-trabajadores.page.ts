import { Component, OnInit } from '@angular/core';
import { InterfaceTrabajador } from '../interfaces/trabajador.interface';


@Component({
  selector: 'app-listar-trabajadores',
  templateUrl: './listar-trabajadores.page.html',
  styleUrls: ['./listar-trabajadores.page.scss'],
})
export class ListarTrabajadoresPage implements OnInit {
  public titulo: string = "Listado";
  public trabajadores: InterfaceTrabajador[] = [
    {nombre: "Juan", apellido: "Perez", edad: 25, cargo: "Ingeniero"},
    {nombre: "Maria", apellido: "Gomez", edad: 90, cargo: "Contador"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
