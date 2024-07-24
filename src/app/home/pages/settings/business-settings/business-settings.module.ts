import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessSettingsRoutingModule } from './business-settings-routing.module';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BusinessComponent } from './business/business.component';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [BusinessComponent],
  imports: [
    CommonModule,
    BusinessSettingsRoutingModule,MenuModule,
    TieredMenuModule,MatIconModule,MatButtonModule
  ]
})
export class BusinessSettingsModule { }
