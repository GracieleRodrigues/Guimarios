import { FinalizarComponent } from './finalizar/finalizar.component';
import { HomeComponent } from './home/home.component';
import { CadastroDpComponent } from './cadastro-dp/cadastro-dp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { CadastroEnComponent } from './cadastro-en/cadastro-en.component';

const routes: Routes = [
 {path:'',
  component: HomeComponent,
  children: [
    {path: 'login',component: LoginComponent},
    {path: 'cadastro', component: CadastroDpComponent},
    {path: 'cadastroen', component: CadastroEnComponent},
    {path: 'finalizar', component: FinalizarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
