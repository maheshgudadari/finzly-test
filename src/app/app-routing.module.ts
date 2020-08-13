import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccoutResolverService } from './core/resolver/accout-resolver.service';

import { AuthGuardService as AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 {
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full',
  resolve: {
    accountInfo: AccoutResolverService
  },
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
