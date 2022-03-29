
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


;


@NgModule({
  declarations: [AppComponent, LoginComponent, CadastroDpComponent, HomeComponent ],
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
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, CadastroDpComponent]
})
export class AppModule { }
