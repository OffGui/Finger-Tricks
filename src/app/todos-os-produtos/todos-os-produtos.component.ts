import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todos-os-produtos',
  templateUrl: './todos-os-produtos.component.html',
  styleUrls: ['./todos-os-produtos.component.scss'],
  standalone: true,
  imports: [ MatGridListModule, MatCardModule, NgFor, NgIf, CommonModule, MatIconModule ]
})
export class TodosOsProdutosComponent {

  constructor(private router: Router) { }

  verDetalhes(itemId: string) {
    this.router.navigate(['/detalhes', itemId])
  }

  toggleFavorito(index: number): void {
    this.fingerboardsCompletos[index].favorito = !this.fingerboardsCompletos[index].favorito
    this.obstaculos[index].favorito = !this.obstaculos[index].favorito
  }

  toggleFavoritoRodas(index: number): void {
    this.rodas[index].favorito = !this.rodas[index].favorito
  }
  
  toggleFavoritoTrucks(index: number): void {
    this.trucks[index].favorito = !this.trucks[index].favorito
  }

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
      id: 5,
      produto: 'Fingerboard Completo - Dunk58 Premium',
      foto: 'https://i.ibb.co/59D2vZM/Fing-Comp-Dunk58-Premium-removebg-preview.png',
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
    },
    {
      id: 11,
      produto: 'Fingerboard completo sneaker dunk58',
      foto: 'https://i.ibb.co/sqPjLW6/fing-Comp-sneaker-dunk58-removebg-preview.png',
      preco: 151.90,
      favorito: false
    },
    {
      id: 12,
      produto: 'Fingerboard completo air jordan 1 premium',
      foto: 'https://i.ibb.co/YDwYK7c/Fing-Comp-Air-Jordan1-Premium-removebg-preview.png',
      preco: 159.90,
      favorito: false
    },
    {
      id: 13,
      produto: 'Fingerboard completo dunk58 premium',
      foto: 'https://i.ibb.co/59D2vZM/Fing-Comp-Dunk58-Premium-removebg-preview.png',
      preco: 159.90,
      favorito: false
    }
  ]

  obstaculos: Array<any> =[
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
    {
      id: 6,
      produto: 'IRON ELBOW',
      foto: 'https://i.ibb.co/JHzjrrr/IRON-ELBOW.png',
      preco: 19,
      favorito: false,
    },
    {
      id: 7,
      produto: 'IRON ELBOW',
      foto: 'https://i.ibb.co/Lh60q1t/Iron-Rail-removebg-preview.png',
      preco: 19,
      favorito: false,
    },
    {
      id: 8,
      produto: 'Rampa Mini-Ramp PRO',
      foto: 'https://i.ibb.co/25ZPmgf/Rampa-Mini-Ramp-PRO-Attack-removebg-preview.png',
      preco: 260,
      favorito: true
    }
  ]

  rodas: Array<any> =[
    {
      id: 1,
      produto: 'Rodas Rolamentadas Vermelha',
      foto: 'https://i.ibb.co/JBbZz1j/20230220-170128-vermelha-removebg-preview.png',
      preco: 57.90,
      favorito: false,
    },
    {
      id: 2,
      produto: 'Rodas Rolamentadas Amarela',
      foto: 'https://i.ibb.co/H7F0kzN/RODAROLAMENTADAYELLOW-removebg-preview.png',
      preco: 57.90,
      favorito: false,
    },
    {
      id: 3,
      produto: 'Rodas Rolamentadas Cinza',
      foto: 'https://i.ibb.co/GPZDkvn/Roda-Rolamentada-Cinza-removebg-preview.png',
      preco: 57.90,
      favorito: true,
    },
    {
      id: 4,
      produto: 'Rodas Rolamentadas Branca',
      foto: 'https://i.ibb.co/YTm2NxP/Rodas-Rolamentadas-White.png',
      preco: 57.90,
      favorito: true,
    },
    {
      id: 5,
      produto: 'Rodas Rolamentadas Rosa',
      foto: 'https://i.ibb.co/8MLB2rL/Rodas-Rolamentadas-Pink.png',
      preco: 57.90,
      favorito: true,
    },
    {
      id: 6,
      produto: 'Rodas Swirl Sphrical Pro Roxo/Preto',
      foto: 'https://i.ibb.co/GdshfJb/rodarosa.png',
      preco: 119.90,
      favorito: true,
    },
    {
      id: 7,
      produto: 'Rodas Swirl Sphrical Pro Branca/Cinza',
      foto: 'https://i.ibb.co/pjtWgG8/rodabranca.png',
      preco: 119.90,
      favorito: true,
    },
    {
      id: 8,
      produto: 'Rodas Swirl Sphrical Pro Azul/Preto',
      foto: 'https://i.ibb.co/TRsDX7G/rodaazul.png',
      preco: 119.90,
      favorito: true,
    }
  ]

  trucks: Array<any> =[
    {
      id: 'EFNW0FIW0FW1N2',
      produto: 'Truck PRO Gold',
      foto: 'https://i.ibb.co/mvZdGLT/TRUCK-PRO-GOLD-removebg-preview.png',
      preco: 70,
      favorito: true,
    },
    {
      id: '1902FHJGNBMMIUH',
      produto: 'Truck PRO Silver',
      foto: 'https://i.ibb.co/25h7V0G/TRUCK-PRO-SILVER-removebg-preview.png',
      preco: 70,
      favorito: false,
    },
    {
      id: '0GYNMZXKSOOLKWMS',
      produto: 'Truck Wide Amarelo',
      foto: 'https://i.ibb.co/X7XkswN/truck-Wide2-0-Amarelo32mm-removebg-preview.png',
      preco: 49.90,
      favorito: false,
    },
    {
      id: '902DSKSFPKN3NPFN',
      produto: 'Truck Wide Azul 32mm',
      foto: 'https://i.ibb.co/0M1bTW6/Truck-Wide2-0-Azul32mm-removebg-preview.png',
      preco: 49.90,
      favorito: false,
    },
    {
      id: 'YHJS2392IINWOVWO',
      produto: 'Truck Wide Branco 32mm',
      foto: 'https://i.ibb.co/SK8PR8K/Truck-Wide2-0-Branco32mm-removebg-preview.png',
      preco: 49.90,
      favorito: true,
    },
  ]
  
}
