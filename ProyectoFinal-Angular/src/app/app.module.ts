import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { SoporteComponent } from './soporte/soporte.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    SoporteComponent,
    PerfilComponent,
    BlogComponent,
    PostComponent,
    BuscadorComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
