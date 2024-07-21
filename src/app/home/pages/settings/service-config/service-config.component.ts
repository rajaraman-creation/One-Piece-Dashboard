import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Dog Grooming', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Dog Wash', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Boarding', weight: 6.941, symbol: 'Li'},
];
@Component({
  selector: 'app-service-config',
  standalone: true,
  imports: [ButtonModule,RippleModule,MatSidenavModule,MatTableModule],
  templateUrl: './service-config.component.html',
  styleUrl: './service-config.component.scss'
})
export class ServiceConfigComponent {
openContent() {
  this.showContent = !this.showContent;
  if(this.showContent){
    this.displayedColumns = ['name'];
  }
}

  showFiller = false;
  showContent= false;

  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  displayedService: string[] = ['name'];

  dataSource = ELEMENT_DATA;


}
