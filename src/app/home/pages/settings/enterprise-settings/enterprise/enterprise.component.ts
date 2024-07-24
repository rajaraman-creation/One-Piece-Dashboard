import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, SelectItemGroup, TreeNode } from 'primeng/api';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-enterprise',
  standalone: false,
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.scss',
})
export class EnterpriseComponent {
  nodeSelect(event: any) {
    console.log(event);
  }
  showContent = true;
  groupedCities!: SelectItemGroup[];
  selectedCountry: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.groupedCities = [
      {
        label: 'Enterprise',
        value: 'de',
        items: [
          { label: 'General', value: 'general' },
          { label: 'Enable Business', value: 'business' },
        ],
      },
      {
        label: 'Grooming Business',
        value: 'us',
        items: [
          { label: 'Shops', value: 'business-hours' },
          { label: 'Business Hours', value: 'business-hours' },
          { label: 'Services', value: 'services' },
          { label: 'Pricing', value: 'Pricing' },
        ],
      },
      {
        label: 'Car Business',
        value: 'jp',
        items: [
          { label: 'Business Hours', value: 'business-hours' },
          { label: 'Services', value: 'services' },
          { label: 'Pricing', value: 'Pricing' },
        ],
      },
    ];

    this.selectedCountry = 'general';
  }

  onCityChange(event: any) {
    const selectedItem = event.value;
    if (selectedItem) {
      this.router.navigate([`/settings/enterprise/${selectedItem}`]);
    }
  }

  files!: TreeNode[];
  items: MenuItem[] | undefined;
  mainMenus:MenuItem[] | undefined;

  ngOnInit() {
    this.mainMenus = [
      {
        label: 'General',
        icon: 'stars',
        route: 'general',
      },
      {
        label: 'Projects',
        icon: 'lightbulb_circle',
        route: 'project'
      }
    ];

    this.items = [
      {
        label: 'Health Care',
        icon: 'health_and_safety',
        items: [
          {
            label: 'General',
            icon: 'palette',
            route: 'general'
          },
          {
            label: 'Business Hours',
            icon: 'schedule',
            route: 'business-hours',
          },
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
          },{
            label: 'Walking',
            icon: 'directions_walk',
            route: 'services',
          },
        ],
      },
      {
        label: 'Car Service',
        icon: 'airport_shuttle',
        items: [
          {
            label: 'General',
            icon: 'pi pi-palette',
            route: 'general',

          },
          {
            label: 'Business Hours',
            icon: 'pi pi-link',
            route: 'business-hours',
          },
          {
            label: 'Service',
            icon: 'pi pi-home',
            route: 'services',
          },
        ],
      },
    ];

    this.files = [
      {
        key: '0',
        label: 'Pet Care',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '0-0',
            label: 'Shops',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
          },
          {
            key: '0-0',
            label: 'Services',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
          },
          {
            key: '0-0',
            label: 'Pricing',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
          },
          {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [
              {
                key: '0-1-0',
                label: 'Invoices.txt',
                icon: 'pi pi-fw pi-file',
                data: 'Invoices for this month',
              },
            ],
          },
        ],
      },
    ];
  }
}
