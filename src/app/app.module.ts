
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';

;


@NgModule({
  declarations: [AppComponent, LoginComponent ],
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
