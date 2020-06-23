import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

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
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { UsersService } from './servicios/users.service';
import { RecuperarComponent } from './recuperar/recuperar.component';



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
    RegisterComponent,
    FormularioComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
