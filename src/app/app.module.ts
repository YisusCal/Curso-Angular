import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './contador/contador.component.component';
import { TextoComponent } from './texto/texto.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [AppComponent, ContadorComponentComponent, TextoComponent, BotonesComponent, FormularioComponent, BuclesComponent, SwitchComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
