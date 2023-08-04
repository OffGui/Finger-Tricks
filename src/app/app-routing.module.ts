import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FingerboardCompletoComponent } from './fingerboard-completo/fingerboard-completo.component';
import { ObstaculosComponent } from './obstaculos/obstaculos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'cabecalho', component: CabecalhoComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'fingerboard-completo', component: FingerboardCompletoComponent },
  { path: 'obstaculos', component: ObstaculosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
