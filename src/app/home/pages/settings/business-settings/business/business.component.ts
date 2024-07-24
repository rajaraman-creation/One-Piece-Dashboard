import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-business',
  standalone: false,
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent {
  mainMenus: MenuItem[] | undefined;
  items: MenuItem[] | undefined;
  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Dog Station',
        items: [
          {
            label: 'General',
            icon: 'stars',
            route: 'general',
          },
        ],
      },
      {
        label: 'Timing',
        items: [
          {
            label: 'Business Hours',
            icon: 'schedule',
            route: 'business-hours',
          },
        ],
      },
      {
        label: 'Business',
        items: [
          {
            label: 'Service',
            icon: 'design_services',
            route: 'services',
          },
          {
            label: 'Boarding',
            icon: 'nights_stay',
            route: 'services',
          },
          {
            label: 'Day Care',
            icon: 'light_mode',
            route: 'services',
          },
          {
            label: 'Walking',
            icon: 'directions_walk',
            route: 'services',
          }
        ],
      },{
        label: 'Customer',
        items: [
          {
            label: 'Entity',
            icon: 'pets',
            route: 'business-hours',
          }
        ],
      },
      {
        label: 'Staff',
        items: [
          {
            label: 'Employee',
            icon: 'badge',
            route: 'business-hours',
          },{
            label: 'Time Sheet',
            icon: 'timer',
            route: 'business-hours',
          },
        ],
      },
    ];
  }
}
