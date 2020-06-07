import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PostComponent } from './componentes/post/post.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: PrincipalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'browser', component: BuscadorComponent },
  { path: 'support', component: SoporteComponent },
  { path: 'profile', component: PerfilComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
