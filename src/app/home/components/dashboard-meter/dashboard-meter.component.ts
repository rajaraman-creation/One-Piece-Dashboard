import { Component, Input } from '@angular/core';
import { DashboardMeter } from '../../service/interface.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-dashboard-meter',
  standalone: true,
  imports: [CommonModule,FormsModule,SelectButtonModule,AvatarModule,MenuModule,TagModule],
  templateUrl: './dashboard-meter.component.html',
  styleUrl: './dashboard-meter.component.scss'
})
export class DashboardMeterComponent {

  @Input() dataSource!:DashboardMeter[];
  constructor(){
    console.log(this.dataSource);
  }

  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

  value: any= { icon: 'pi pi-align-left', value: 'day' };

  justifyOptions: any[] = [
      { icon: 'pi pi-sun', value: 'day' },
      { icon: 'pi pi-users', value: 'staff' },
  ];
}
