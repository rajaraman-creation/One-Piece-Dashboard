import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { LayoutModule } from 'src/app/layout/layout.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    InputTextModule, 
    FormsModule,
    InputIconModule,
    IconFieldModule,
    LayoutModule,PanelMenuModule,ButtonModule,TabViewModule,CardModule
  ]
})
export class SettingsModule { }
