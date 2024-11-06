import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'animaciones',
    loadChildren: () => import('./paginas/animaciones/animaciones.module').then( m => m.AnimacionesPageModule)
  },
  {
    path: 'menu-prinipal',
    loadChildren: () => import('./paginas/menu-prinipal/menu-prinipal.module').then( m => m.MenuPrinipalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./paginas/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./paginas/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'publicacion',
    loadChildren: () => import('./paginas/publicacion/publicacion.module').then( m => m.PublicacionPageModule)
  },
  {
    path: 'agregar-perro',
    loadChildren: () => import('./paginas/agregar-perro/agregar-perro.module').then( m => m.AgregarPerroPageModule)
  },
  {
    path: 'agregar-punto-encuentro',
    loadChildren: () => import('./paginas/agregar-punto-encuentro/agregar-punto-encuentro.module').then( m => m.AgregarPuntoEncuentroPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./paginas/mapa-junta/mapa-junta.module').then(m => m.MapaJuntaPageModule)
  },
  {
    path: 'info-perro',
    loadChildren: () => import('./paginas/info-perro/info-perro.module').then( m => m.InfoPerroPageModule)
  },
  {
    path: 'mapa-junta',
    loadChildren: () => import('./paginas/mapa-junta/mapa-junta.module').then( m => m.MapaJuntaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
