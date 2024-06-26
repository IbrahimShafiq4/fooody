import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../core/Guards/Admin/admin.guard';
import { userGuard } from '../core/Guards/User/user.guard';
import { HomeComponent } from '../shared/components/home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'home' },
      {
        path: 'admin',
        canActivate: [adminGuard],
        loadChildren: () =>
          import('./../admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'user',
        canActivate: [userGuard],
        loadChildren: () =>
          import('./../user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
