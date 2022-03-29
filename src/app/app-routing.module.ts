import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserServiceGuard } from './auth_guards/user-service.guard';


const routes: Routes = [
  {

    path: '',
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
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },

 // {
  //path: '',
  //  canActivate: [UserServiceGuard],
  // children: [
  //    {
        //     path: 'login',
//      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //    }
//  ]
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
