import { HomeComponent } from './home/home.component';
import { CadastroDpComponent } from './cadastro-dp/cadastro-dp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
 {path:'',
  component: HomeComponent,
  children: [
    {path: 'login',component: LoginComponent},
    {path: 'cadastro', component: CadastroDpComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
