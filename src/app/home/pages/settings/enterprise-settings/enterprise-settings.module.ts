import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseSettingsRoutingModule } from './enterprise-settings-routing.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {MatIconModule} from '@angular/material/icon';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [EnterpriseComponent],
  imports: [
    MatIconModule,TagModule,
    CommonModule,TieredMenuModule,
    EnterpriseSettingsRoutingModule,
    ButtonModule,FormsModule,CommonModule,ListboxModule,MatDialogModule,DividerModule,MatButtonModule,
    InputTextModule, RippleModule, MatSidenavModule, MatTableModule, TabViewModule,
  ]
})
export class EnterpriseSettingsModule { }
