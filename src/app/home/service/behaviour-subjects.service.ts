import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Staff } from '../components/dashboard-meter/dashboard-meter.component';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectsService {

  constructor() { }

  private staffSelection = new BehaviorSubject<Staff | null>({ name: 'Alice Johnson', role: 'Manager', id: 'R1' ,checked:true});
  isStaffSelected$ = this.staffSelection.asObservable();
  setStaffAsChecked(staff:Staff) {
    this.staffSelection.next(staff);
  }


}
