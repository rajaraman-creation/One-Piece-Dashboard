import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {MatIconModule} from '@angular/material/icon';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [ButtonModule, InputTextModule,MatIconModule,DropdownModule,FormsModule,CheckboxModule,CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  constructor(public dialogRef: MatDialogRef<PopUpComponent>) {}
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'Pet Care', code: 'NY' },
            { name: 'Beauty Parlor', code: 'RM' },
            { name: 'Health Care', code: 'LDN' },
            { name: 'Automobile Service', code: 'IST' },
            { name: 'Rental', code: 'PRS' }
        ];
    }

    selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Grooming', key: 'A' },
        { name: 'Day Care', key: 'M' },
        { name: 'Boarding', key: 'P' },
        { name: 'Sitting', key: 'R' }
    ];
}
