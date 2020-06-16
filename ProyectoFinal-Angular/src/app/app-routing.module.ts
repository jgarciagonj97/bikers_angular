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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'blog',
    component: BlogComponent,
    children: [{ path: ':idPost', component: PostComponent }],
  },
  { path: 'browser', component: BuscadorComponent },
  { path: 'newPost', component: FormularioComponent },
  { path: 'support', component: SoporteComponent },
  { path: 'profile', component: PerfilComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
