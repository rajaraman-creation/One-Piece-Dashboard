import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { EmployeeConfigComponent } from './components/employee-config/employee-config.component';
import { SubAccountComponent } from './enterprise-settings/sub-account/sub-account.component';
import { EntityConfigurationComponent } from './components/entity-configuration/entity-configuration.component';
import { FeedingConfigurationComponent } from './components/feeding-configuration/feeding-configuration.component';
import { MedicationConfigurationComponent } from './components/medication-configuration/medication-configuration.component';
import { ImmunizationConfigurationComponent } from './components/immunization-configuration/immunization-configuration.component';
import { BusinessHoursComponent } from './components/business-hours/business-hours.component';
import { EnterpriseComponent } from './enterprise-settings/enterprise/enterprise.component';

const routes: Routes = [
  { path: '', component: SettingComponent },
  {
    path:'enterprise',
    children:[
      {
        path:'',
        loadChildren:() => import('./enterprise-settings/enterprise-settings.module').then((m)=>m.EnterpriseSettingsModule)
      }
    ]
  },{
    path:'business',
    children:[
      {
        path:'',
        loadChildren:() => import('./business-settings/business-settings.module').then((m)=>m.BusinessSettingsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
