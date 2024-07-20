import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookingsRoutingModule } from './bookings-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { TimelineModule } from 'primeng/timeline';
import { IconFieldModule } from 'primeng/iconfield';


@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    ToastModule,SplitButtonModule,
    TimelineModule,
    IconFieldModule
  ],
})
export class BookingsModule {}
