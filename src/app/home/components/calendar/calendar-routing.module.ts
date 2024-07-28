import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotCalendarComponent } from './pilot-calendar/pilot-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: PilotCalendarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
