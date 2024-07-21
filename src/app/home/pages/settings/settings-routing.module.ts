import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { EmployeeConfigComponent } from './employee-config/employee-config.component';
import { SubAccountComponent } from './sub-account/sub-account.component';
import { EntityConfigurationComponent } from './entity-configuration/entity-configuration.component';
import { FeedingConfigurationComponent } from './feeding-configuration/feeding-configuration.component';
import { MedicationConfigurationComponent } from './medication-configuration/medication-configuration.component';
import { ImmunizationConfigurationComponent } from './immunization-configuration/immunization-configuration.component';

const routes: Routes = [
  { path: '', component: SettingComponent },
  { path: 'service-configuration', component: ServiceConfigComponent },
  { path: 'employee-configuration', component: EmployeeConfigComponent },
  { path: 'workspace-configuration', component: SubAccountComponent },
  { path: 'entity-configuration', component: EntityConfigurationComponent },
  { path: 'immunization-configuration', component: ImmunizationConfigurationComponent },
  { path: 'feeding-configuration', component: FeedingConfigurationComponent },
  { path: 'medication-configuration', component: MedicationConfigurationComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
