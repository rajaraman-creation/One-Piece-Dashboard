import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMeterComponent } from '../../components/dashboard-meter/dashboard-meter.component';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MeterGroupModule } from 'primeng/metergroup';
import { MenuModule } from 'primeng/menu';
import {MatNativeDateModule} from '@angular/material/core';
import { InterfaceService } from '../../service/interface.service';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMeterComponent,
    TimelineModule,
    CardModule,
    ButtonModule,
    ChartModule,
    FieldsetModule,
    AvatarModule,
    PanelModule,
    LayoutModule,
    FormsModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,
    ProgressBarModule,
    MenuModule
  ],
  providers:[InterfaceService]
})
export class DashboardModule { }
