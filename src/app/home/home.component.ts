import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf, MatIconModule, CommonModule ]
})
export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(itemId: string) {
    this.router.navigate(['/detalhes', itemId])
  }

  toggleFavorito(index: number): void {
    this.fingerboards[index].favorito = !this.fingerboards[index].favorito
  }

  nome: string = "Guilherme";
  sobrenome: string = "Prata";
  fingerboards: Array<any> =[
    {
      id: 1,
      produto: 'Fingerboard Completo Jordan Azul',
      foto: 'https://i.ibb.co/p3sjvbm/Fingerboard-Completo-Inove-Collab-Guy-Sneaker-Jordan-Azul.png',
      preco: 284.90,
      favorito: false,
    },
    {
      id: 2,
      produto: 'Fingerboard Completo Jordan Red',
      foto: 'https://i.ibb.co/K2DTWxS/Finger-Comp-J1.png',
      preco: 189.99,
      favorito: false,
    },
    {
      id: 3,
      produto: 'Fingerboard Completo - Rod Filmes',
      foto: 'https://i.ibb.co/NZBGGBn/Fingerboard-Completo-Inove-Rod-Filmes.png',
      preco: 199.90,
      favorito: false,
    },
    {
      id: 4,
      produto: 'Fingerboard Completo - Cheese and Fingers',
      foto: 'https://i.ibb.co/fdgk5cS/Fingerboard-Completo-Inove-Cheese-and-Fingers.png',
      preco: 159.99,
      favorito: true,
    },
    {
      id: 5,
      produto: 'Rodas Especiais PRO Urethane White',
      foto: 'https://i.ibb.co/3TT5LSL/Roda-Special-urethane-white.png',
      preco: 99.90,
      favorito: false,
    }
  ]

  lancamentos: Array<any> =[
    {
      id: 1,
      produto: 'MINIATURA CAVALETE',
      foto: 'https://i.ibb.co/R710GkK/cavaletemini.png',
      preco: 24,
      favorito: false,
    },
    {
      id: 2,
      produto: 'MINIATURA HIDRANTE',
      foto: 'https://i.ibb.co/j8ZZzf9/hidrantemini.png',
      preco: 39,
      favorito: false,
    },
    {
      id: 3,
      produto: 'MINI CONE',
      foto: 'https://i.ibb.co/zrrwwYg/conemini.png',
      preco: 14,
      favorito: false,
    },
    {
      id: 4,
      produto: 'MINI CESTO PRETO',
      foto: 'https://i.ibb.co/ckf0Pkt/cestopretomini.png',
      preco: 19,
      favorito: true,
    },
    {
      id: 5,
      produto: 'DOUBLE IRON BENCH',
      foto: 'https://i.ibb.co/qNbSZJ7/Double-iron-street-bench.png',
      preco: 49,
      favorito: true,
    },
  ]


}
