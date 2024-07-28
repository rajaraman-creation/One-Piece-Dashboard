import { Component, Input } from '@angular/core';
import { DashboardMeter } from '../../service/interface.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { TagModule } from 'primeng/tag';
import { DataService } from '../calendar/pilot-calendar/data.service';
import { BehaviorSubjectsService } from '../../service/behaviour-subjects.service';
import { ScrollPanelModule } from 'primeng/scrollpanel';
export interface Staff{
  name:string;
  id:string;
  role:string;
  checked?:boolean;
  details?:any;
}

@Component({
  selector: 'app-dashboard-meter',
  standalone: true,
  imports: [CommonModule,FormsModule,SelectButtonModule,AvatarModule,MenuModule,TagModule,ScrollPanelModule],
  templateUrl: './dashboard-meter.component.html',
  styleUrl: './dashboard-meter.component.scss'
})
export class DashboardMeterComponent {
// 
  staffSelected(staff: Staff) {
    staff.checked = !staff.checked;
    this.rxjsBehavior.setStaffAsChecked(staff);
  }
// 

  @Input() dataSource!:DashboardMeter[];

  staffService:Staff[]=[];

  constructor(private dataService:DataService,private rxjsBehavior:BehaviorSubjectsService){
    console.log(this.dataSource);
    this.staffService = [...this.dataService.serviceStaff];
  }

  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

  value: any= { icon: 'pi pi-align-left', value: 'staff' };

  justifyOptions: any[] = [
      { icon: 'pi pi-sun', value: 'day' },
      { icon: 'pi pi-users', value: 'staff' },
  ];
}
