import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMeterComponent } from '../../components/dashboard-meter/dashboard-meter.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MenuModule } from 'primeng/menu';
import {MatNativeDateModule} from '@angular/material/core';
import { InterfaceService } from '../../service/interface.service';

import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DataService } from '../../components/calendar/pilot-calendar/data.service';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMeterComponent,
    CardModule,
    ButtonModule,
    AvatarModule,
    LayoutModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule,
    MenuModule,
    InputIconModule, IconFieldModule, InputTextModule, TagModule,
    MatIconModule, MatButtonToggleModule,
],
  providers:[InterfaceService,DataService]
})
export class DashboardModule { }
