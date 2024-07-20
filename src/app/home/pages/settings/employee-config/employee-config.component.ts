import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-employee-config',
  standalone: true,
  imports: [CheckboxModule,MatButtonToggleModule,FormsModule,AvatarModule,InputTextModule,MenuModule],
  templateUrl: './employee-config.component.html',
  styleUrl: './employee-config.component.scss'
})
export class EmployeeConfigComponent {
  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

  value: string = 'off';

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
          },
          {
            label: 'Log out',
            icon: 'pi pi-arrow-circle-right',
          },
        ],
      },
    ];
  }
}
