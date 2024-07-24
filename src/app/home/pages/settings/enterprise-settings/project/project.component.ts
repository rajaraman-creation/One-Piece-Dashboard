import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { MatButtonModule } from '@angular/material/button';
import { SidebarModule } from 'primeng/sidebar';
import { EnterprisePopupComponent } from "../enterprise-popup/enterprise-popup.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [SidebarModule,CommonModule, CheckboxModule, MatButtonModule, TagModule, MatButtonToggleModule, FormsModule, AvatarModule, InputTextModule, MenuModule, EnterprisePopupComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  view = 'CLIENT';
  sidebarVisible: boolean = true;

  open(arg0: string) {
    this.view = arg0;
    this.sidebarVisible = !this.sidebarVisible;
  }

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
