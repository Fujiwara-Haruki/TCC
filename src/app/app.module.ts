import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObterPrecosComponent } from './obter-precos/obter-precos.component';
import { ExibeResultadoComponent } from './exibe-resultado/exibe-resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    ObterPrecosComponent,
    ExibeResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
