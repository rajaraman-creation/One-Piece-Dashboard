import { Injectable } from '@angular/core';

export interface DashboardMeter{
  name:string;
  status:string;
  currentValue:string;
  progressLink:string
}

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  constructor() { }
}
