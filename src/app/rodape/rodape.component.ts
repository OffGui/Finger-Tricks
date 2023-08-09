import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
  standalone: true,
  imports: [ MatIconModule, MatToolbarModule, MatButtonModule, NgFor, NgIf ],
})
export class RodapeComponent {

  constructor(private router: Router) { }

  redesSociais: Array<any> =[
    {
      nome: 'Facebook',
      link: 'https://www.facebook.com/',
      icone: 'https://i.ibb.co/McvvPPf/facebookicon.png',
    },
    {
      nome: 'Instagram',
      link: 'https://www.instagram.com/',
      icone: 'https://i.ibb.co/zhfF09N/instagramicon.png',
    },
    {
      nome: 'LinkedIn',
      link: 'https://www.linkedin.com/in/guilhermesprata/',
      icone: 'https://i.ibb.co/R6wrp9q/linkedinicon.png',
    }
  ]

}
