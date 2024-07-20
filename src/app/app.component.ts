import { Component, computed, signal } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // value=""
  constructor(private themeService: ThemeService) {}
  value = [
    { label: 'Space used', value: 15, color: '#34d399' }
];
    selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    cities1: any[] = [];
    
    cities2: any[] = [];
    
    city1:any = null;

    city2:any = null;

    changeTheme(theme: string) {
        this.themeService.switchTheme(theme);
    }

}
