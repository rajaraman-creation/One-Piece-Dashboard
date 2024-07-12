import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss'
})
export class AppMenuComponent {
  theme: MenuItem[] = [];
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.theme = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.changeTheme('vela-blue')
        },
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          console.log('Theme');
        },
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          console.log('Theme');
        },
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io',
      },
    ];
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
}
}
