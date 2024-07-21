import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { TabViewModule } from 'primeng/tabview';
import { ServiceConfigComponent } from "../service-config/service-config.component";
import { EmployeeConfigComponent } from "../employee-config/employee-config.component";
import { InputTextModule } from 'primeng/inputtext';
import { GeneralComponent } from "../general/general.component";
import { PopUpComponent } from '../pop-up/pop-up.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
export interface PeriodicElement {
  name: string;
  rating: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { rating: 4.5, name: 'Dog Station', weight: 1000, symbol: '50,000' },
  { rating: 3.5, name: 'PuppyCharge', weight: 4006, symbol: '10,000' },
];

@Component({
  selector: 'app-sub-account',
  standalone: true,
  imports: [ButtonModule,MatDialogModule,MatButtonModule,InputTextModule, RippleModule, MatSidenavModule, MatTableModule, TabViewModule, ServiceConfigComponent, EmployeeConfigComponent, GeneralComponent],
  templateUrl: './sub-account.component.html',
  styleUrl: './sub-account.component.scss',
})
export class SubAccountComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

  constructor(public dialog: MatDialog) {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PopUpComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openContent() {
    this.showContent = !this.showContent;
    if (this.showContent) {
      this.displayedColumns = ['name', 'rating'];
    } else {
      this.displayedColumns = ['name', 'weight', 'symbol', 'rating'];
    }
  }

  showFiller = false;
  showContent = false;

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'rating'];

  dataSource = ELEMENT_DATA;
}
