import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-setting',
  standalone: false,
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
})
export class SettingComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        key: '0',
        label: 'Business Setup',
        icon: 'pi pi-briefcase',
        items: [
          {
            key: '0_1',
            label: 'Service',
            items: [
              {
                key: '0_1_0',
                label: 'Service Configuration',
              },
              {
                key: '0_1_1',
                label: 'Business Hours',
              },
            ],
          },
          {
            key: '0_2',
            label: 'Employee Management',
            items: [
              {
                key: '0_2_0',
                label: 'Staff',
              },
              {
                key: '0_2_1',
                label: 'Staff Calendar',
              },
            ],
          },
        ],
      },
      {
        key: '1',
        label: 'Tasks',
        icon: 'pi pi-server',
        items: [
          {
            key: '1_0',
            label: 'Add New',
          },
          {
            key: '1_1',
            label: 'Pending',
          },
          {
            key: '1_2',
            label: 'Overdue',
          },
        ],
      },
      {
        key: '2',
        label: 'Calendar',
        icon: 'pi pi-calendar',
        items: [
          {
            key: '2_0',
            label: 'New Event',
          },
          {
            key: '2_1',
            label: 'Today',
          },
          {
            key: '2_2',
            label: 'This Week',
          },
        ],
      },
    ];
  }

  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items = this.toggleAllRecursive(this.items, expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
      menuItem.expanded = expanded;
      if (menuItem.items) {
        menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
      }
      return menuItem;
    });
  }

  private areAllItemsExpanded(): boolean {
    return this.items.every((menuItem) => menuItem.expanded);
  }
}
