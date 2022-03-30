
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { CadastroDpComponent } from './cadastro-dp/cadastro-dp.component';
import { MatSelectModule, } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { CadastroEnComponent } from './cadastro-en/cadastro-en.component';
import { FinalizarComponent } from './finalizar/finalizar.component';


;


@NgModule({
  declarations: [AppComponent, LoginComponent, CadastroDpComponent, HomeComponent, CadastroEnComponent, FinalizarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule

  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, CadastroDpComponent, CadastroEnComponent, FinalizarComponent]
})
export class AppModule { }
