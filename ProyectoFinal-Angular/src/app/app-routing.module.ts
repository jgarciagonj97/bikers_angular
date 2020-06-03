import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PostComponent } from './post/post.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { SoporteComponent } from './soporte/soporte.component';
import { PerfilComponent } from './perfil/perfil.component';


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
