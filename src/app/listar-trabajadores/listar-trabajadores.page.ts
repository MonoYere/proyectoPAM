import { Component, OnInit } from '@angular/core';

export interface trabajador{
  nombre: string;
  apellido: string;
  edad: number;
  cargo: string;
}

@Component({
  selector: 'app-listar-trabajadores',
  templateUrl: './listar-trabajadores.page.html',
  styleUrls: ['./listar-trabajadores.page.scss'],
})
export class ListarTrabajadoresPage implements OnInit {
  public titulo: string = "Listado";
  public trabajadores: trabajador[] = [
    {nombre: "Juan", apellido: "Perez", edad: 25, cargo: "Ingeniero"},
    {nombre: "Maria", apellido: "Antonieta", edad: 90, cargo: "Chofer"},
    {nombre: "Pedro", apellido: "Navaja", edad: 27, cargo: "Operario"},
    {nombre: "Luis", apellido: "Jara", edad: 40, cargo: "Secreario"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
