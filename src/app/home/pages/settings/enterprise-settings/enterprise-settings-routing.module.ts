import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceConfigComponent } from '../components/service-config/service-config.component';
import { BusinessHoursComponent } from '../components/business-hours/business-hours.component';
import { SubAccountComponent } from './sub-account/sub-account.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';

const routes: Routes = [
  {
    path:'',
    component:EnterpriseComponent,
    children:[
      {
        path: 'general',
        loadComponent:() =>
          import('../components/general/general.component').then((m) => m.GeneralComponent),
      },
      {
        path: 'project',
        loadComponent:() =>
          import('./project/project.component').then((m) => m.ProjectComponent),
      },
      { path: 'business-hours', component: BusinessHoursComponent },
      { path: 'holiday-closure', component: BusinessHoursComponent },
      { path: 'services', component: ServiceConfigComponent },
    ]
  },
  
  { path: 'sub-account', component: SubAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriseSettingsRoutingModule {}
