import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent {
  texto_color: string = '';

  button_disabled: boolean = true;

  src: string =
    'https://images.pexels.com/photos/4255486/pexels-photo-4255486.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load';
}
