import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {

  foto="biscoito.png"
  exibir_texto:boolean = false;

  QuebrarBiscoito(){
    if (this.foto=="biscoito.png"){
      this.foto="biscoito-aberto.png"
      this.exibir_texto=!this.exibir_texto
    }
  }

  ReiniciarBiscoito(){
    if (this.foto=="biscoito-aberto.png")
      this.foto="biscoito.png"
  }
  }

