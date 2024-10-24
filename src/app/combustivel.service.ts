import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})

export class CombustivelService {

  resultado: number
  mensagem: string

  constructor() {
    this.resultado = undefined
    this.mensagem = undefined
  
  }

  calcular(alc: number, gas: number){
    if(alc > 0 && gas > 0){
      this.resultado = alc / gas;

      if(this.resultado <= 0.70){
        this.mensagem = "Melhor abastecer com álcool"
      } else {
        this.mensagem = "Melhor abastecer com gasolina"
      }
      return true;
    }
    return false;
  }

  obterResultado(): number | undefined {
    return this.resultado;
  }
}
