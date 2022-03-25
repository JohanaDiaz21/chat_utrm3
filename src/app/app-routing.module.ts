import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserServiceGuard } from './auth_guards/user-service.guard';


const routes: Routes = [
  {

    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule )
  },
  {
    path: 'listadeusuarios',
    loadChildren: () => import('./listadeusuarios/listadeusuarios.module').then( m => m.ListadeusuariosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: '',
    canActivate: [UserServiceGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
