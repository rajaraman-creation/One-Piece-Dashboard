import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'home',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  {
    path:'settings',
    component:AppLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('./home/pages/settings/settings.module').then((m)=>m.SettingsModule)
      }
    ]

  },
  {
    path:'booking',
    component:AppLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('./home/pages/bookings/bookings.module').then((m)=>m.BookingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
