import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { EmployeeConfigComponent } from './employee-config/employee-config.component';

const routes: Routes = [
  { path: '', component: SettingComponent },
  { path: 'service-configuration', component: ServiceConfigComponent },
  { path: 'employee-configuration', component: EmployeeConfigComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
