import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fingerboard-completo',
  templateUrl: './fingerboard-completo.component.html',
  styleUrls: ['./fingerboard-completo.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf ]

})
export class FingerboardCompletoComponent {

  constructor(private router: Router) { }

  nome: string = "Guilherme";
  sobrenome: string = "Prata";
  fingerboardsCompletos: Array<any> =[
    {
      id: 1,
      produto: 'Fingerboard Completo Jordan Azul',
      foto: 'https://i.ibb.co/p3sjvbm/Fingerboard-Completo-Inove-Collab-Guy-Sneaker-Jordan-Azul.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 2,
      produto: 'Fingerboard Completo Jordan Red',
      foto: 'https://i.ibb.co/K2DTWxS/Finger-Comp-J1.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 3,
      produto: 'Fingerboard Completo - Rod Filmes',
      foto: 'https://i.ibb.co/NZBGGBn/Fingerboard-Completo-Inove-Rod-Filmes.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 4,
      produto: 'Fingerboard Completo - Cheese and Fingers',
      foto: 'https://i.ibb.co/fdgk5cS/Fingerboard-Completo-Inove-Cheese-and-Fingers.png',
      preco: 159,
      favorito: true,
    },
    {
      id: 5,
      produto: 'Fingerboard Completo - Cheese and Fingers',
      foto: 'https://i.ibb.co/fdgk5cS/Fingerboard-Completo-Inove-Cheese-and-Fingers.png',
      preco: 159,
      favorito: true,
    },
    {
      id: 6,
      produto: 'Fingerboard Completo - STU RECIFE',
      foto: 'https://i.ibb.co/Z1zVqB7/STU-nacional-recifre-removebg-preview.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 7,
      produto: 'Fingerboard Completo - STU CRICIUMA',
      foto: 'https://i.ibb.co/RgZxQmN/Fingerboard-Completo-Mini-Ramp-2.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 8,
      produto: 'Fingerboard Completo - STU',
      foto: 'https://i.ibb.co/kmnCnqR/STU-removebg-preview.png',
      preco: 159,
      favorito: false,
    },
    {
      id: 9,
      produto: 'Fingerboard Completo Mini Ramp',
      foto: 'https://i.ibb.co/MCyXTtM/Fingerboard-Completo-Mini-Ramp-1.png',
      preco: 160,
      favorito: false,
    },
    {
      id: 10,
      produto: 'Fingerboard Completo - AK47',
      foto: 'https://i.ibb.co/SJg2fS5/Finger-Comp-AK47.png',
      preco: 284,
      favorito: false,
    }
  ]

}
