import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../app/componentes/principal/principal.component';
import { PostComponent } from '../app/componentes/post/post.component';
import { BlogComponent } from '../app/componentes/blog/blog.component';
import { HomeComponent } from '../app/componentes/home/home.component';
import { BuscadorComponent } from '../app/componentes/buscador/buscador.component';
import { SoporteComponent } from '../app/componentes/soporte/soporte.component';
import { PerfilComponent } from '../app/componentes/perfil/perfil.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RecuperarComponent } from './recuperar/recuperar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'principal', component: PrincipalComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ],
  },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'blog', component: BlogComponent, canActivate: [LoginGuard] },
  { path: 'blog/:idPost', component: PostComponent, canActivate: [LoginGuard] },
  { path: 'browser', component: BuscadorComponent, canActivate: [LoginGuard] },
  { path: 'newPost', component: FormularioComponent, canActivate: [LoginGuard] },
  { path: 'support', component: SoporteComponent, canActivate: [LoginGuard] },
  { path: 'profile', component: PerfilComponent, canActivate: [LoginGuard] },
  { path: 'recuperar' ,component: RecuperarComponent},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
