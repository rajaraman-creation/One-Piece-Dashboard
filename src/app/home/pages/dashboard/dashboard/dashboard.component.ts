import { Component, inject, model } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
  DashboardMeter,
  InterfaceService,
} from 'src/app/home/service/interface.service';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  values: any = { icon: 'pi pi-align-left', value: 'left' };

  selected = model<Date | null>(null);
  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' },
  ];

  meter: DashboardMeter[] = [
    {
      name: 'Today Bookings',
      // status: '+5%',
      currentValue: 20,
      progressLink: 'assets/rate.svg',
    },
    // {
    //   name: 'Weekly Bookings',
    //   // status: '+0%',
    //   currentValue: 60,
    //   progressLink: 'assets/quantity.svg',
    // },
    // {
    //   name: 'Weekly Goal',
    //   // status: '10%',
    //   currentValue: 120,
    //   progressLink: 'assets/value.svg',
    // },
    {
      name: 'Leaving Today',
      currentValue: 30,
      // progressLink: 'assets/rate.svg',
    },
    {
      name: 'Check Out',
      currentValue: 30,
      // progressLink: 'assets/value.svg',
    },
  ];

  value: number = 80;

  items: MenuItem[] | undefined;

  date: Date[] | undefined;
  barData: any;
  barOptions: any;

  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: 'Delivered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-check',
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Delivered',
        date: '15/10/2020 14:00',
        icon: 'pi pi-check',
        color: '#673AB7',
      },
      {
        status: 'Delivered',
        date: '15/10/2020 16:15',
        icon: 'pi pi-check',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#9C27B0',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-spinner-dotted',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
      {
        status: 'Delivered',
        date: '15/10/2020 14:00',
        icon: 'pi pi-check',
        color: '#FF9800',
      },
    ];
  }

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

    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };

    this.barOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    this.items = [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
      {
        separator: true,
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
  // items: { label?: string; icon?: string; separator?: boolean }[] = [];
}
