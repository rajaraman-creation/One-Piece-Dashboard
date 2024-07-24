import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-enterprise-popup',
  standalone: true,
  imports: [InputTextModule,CheckboxModule,DropdownModule,MatGridListModule,CommonModule,MatButton,FormsModule],
  templateUrl: './enterprise-popup.component.html',
  styleUrl: './enterprise-popup.component.scss'
})
export class EnterprisePopupComponent {
  cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'Human', code: 'NY' },
            { name: 'Animal', code: 'RM' },
            { name: 'Machine', code: 'LDN' },
        ];
    }

    selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Grooming', key: 'A' },
        { name: 'DayCare', key: 'M' },
        { name: 'Boarding', key: 'P' },
    ];
}
