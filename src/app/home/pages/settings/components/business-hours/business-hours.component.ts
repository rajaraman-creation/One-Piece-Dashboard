import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-business-hours',
  standalone: true,
  imports: [InputTextModule,MatGridListModule,CommonModule,MatButton,CalendarModule,FormsModule],
  templateUrl: './business-hours.component.html',
  styleUrl: './business-hours.component.scss'
})
export class BusinessHoursComponent {
  showContent = true;
  time: Date[] | undefined;

  weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
}
