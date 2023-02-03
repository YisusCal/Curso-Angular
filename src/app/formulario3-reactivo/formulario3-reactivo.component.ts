import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario3-reactivo',
  templateUrl: './formulario3-reactivo.component.html',
  styleUrls: ['./formulario3-reactivo.component.css'],
})
export class Formulario3ReactivoComponent {
  constructor(private fb: FormBuilder) {}

  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }
  /* Formularios Reactivos con FormGroup */
  /* formUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  }); */

  /* Formularios Reactivos con FormGroup -- es una mejor froma de validar a los formularios cuando son muchos componetes */
  formUser = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  procesar() {
    console.log(this.formUser.value);
  }

  /*  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]); */
}
