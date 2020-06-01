import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { SoporteComponent } from './soporte/soporte.component';
import { PerfilComponent } from './perfil/perfil.component';
=======
<<<<<<< HEAD
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
=======
import { BuscadorComponent } from './buscador/buscador.component';
>>>>>>> ad54a857bc3188b5329c2b26bbd7dff376765f55
>>>>>>> f06164bada243069a60867ad59d684915c546095
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
>>>>>>> 053709d24354a0492b9a01dcb7ee1c589defe37d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PrincipalComponent,
HomeComponent,
<<<<<<< HEAD
SoporteComponent,
PerfilComponent
=======
<<<<<<< HEAD
BlogComponent,
PostComponent
=======
BuscadorComponent
>>>>>>> ad54a857bc3188b5329c2b26bbd7dff376765f55
>>>>>>> f06164bada243069a60867ad59d684915c546095
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
