import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HomeComponent } from './componentes/home/home.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { PostComponent } from './componentes/post/post.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
