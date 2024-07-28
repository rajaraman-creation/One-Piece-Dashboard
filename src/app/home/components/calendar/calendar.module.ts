import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import { SidebarModule } from 'primeng/sidebar';
import { DashboardMeterComponent } from '../dashboard-meter/dashboard-meter.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { PilotCalendarComponent } from './pilot-calendar/pilot-calendar.component';


@NgModule({
  declarations: [PilotCalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    DayPilotModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    SidebarModule,
    EventManagerComponent,
    MatButtonToggleModule,
    DashboardMeterComponent,
  ]
})
export class CalendarModule { }
