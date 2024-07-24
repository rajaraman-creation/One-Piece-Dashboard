import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [ {
  path:'',
  component:BusinessComponent,
  children:[
    {
      path: 'general',
      loadComponent:() =>
        import('../components/general/general.component').then((m) => m.GeneralComponent),
    },
    {
      path: 'business-hours',
      loadComponent:() =>
        import('../components/business-hours/business-hours.component').then((m) => m.BusinessHoursComponent),
    },
    {
      path: 'services',
      loadComponent:() =>
        import('../components/service-config/service-config.component').then((m) => m.ServiceConfigComponent),
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSettingsRoutingModule { }
