import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.component.html',
  styleUrls: ['./contador.component.component.css'],
})
export class ContadorComponentComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  /* La interpolacion se refire a: Almacenar informacion dentro de un componete, esta se almacena dentro de la clase exportada(aqui) */

  /* na de las ventajas de trabaajr con typescript, es que se puede elegir el tipado que puede tener cada variable, esto se hace de esta forma: */
  nombre: string = 'Jesus Calderon';
  edad: number = 24;

  /* Esta es la manera de crear objetos, y para poder elegir el tipado de cada variable, se debe trabajar con (interfaces)  */
  /* Una interfaz se creta en la carpeta app, con el nombe del objeto, en un archivo de tipo typescript(ts) */
  persona: Persona = {
    nombre: 'Marcela',
    edad: 45,
  };

  /* Event Binding o Enlace de evento */
  numero: number = 0;
  decrementar() {
    this.numero--;
  }

  incrementar() {
    this.numero++;
  }
}
