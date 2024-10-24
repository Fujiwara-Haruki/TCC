import { Component } from '@angular/core';
import { CombustivelService } from '../combustivel.service';

@Component({
  selector: 'app-obter-precos',
  templateUrl: './obter-precos.component.html',
  styleUrl: './obter-precos.component.css'
})
export class ObterPrecosComponent {

  constructor(private cs: CombustivelService){

  }

  /** Preço do álcool e da gasolina e repassa ao serviço para que seja realizado o cálculo */
  calcular(alcool: number, gasolina: number){
    this.cs.calcular(alcool, gasolina);

    console.log(this.cs.obterResultado())
  }
}
