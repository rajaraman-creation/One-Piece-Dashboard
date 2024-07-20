import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.scss',
})
export class AppTopBarComponent {
  view ='';
  
  open(arg0: string) {
    this.view = arg0;
    this.sidebarVisible = !this.sidebarVisible;
  }

  items: MenuItem[] | undefined;
  theme: MenuItem[] = [];
  sidebarVisible: boolean = false;

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
