import { Component, Input } from '@angular/core';
import { DashboardMeter } from '../../service/interface.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-meter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-meter.component.html',
  styleUrl: './dashboard-meter.component.scss'
})
export class DashboardMeterComponent {

  @Input() dataSource!:DashboardMeter[];
  constructor(){
    console.log(this.dataSource);
    
  }
}
