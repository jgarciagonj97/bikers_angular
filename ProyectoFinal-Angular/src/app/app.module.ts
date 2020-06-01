import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PrincipalComponent } from './principal/principal.component';
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
>>>>>>> 053709d24354a0492b9a01dcb7ee1c589defe37d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PrincipalComponent
=======
    LoginComponent,
    RegisterComponent
>>>>>>> 053709d24354a0492b9a01dcb7ee1c589defe37d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
