import { Injectable } from '@angular/core';
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import EventData = DayPilot.EventData;

@Injectable({
  providedIn: 'root',
})
export class EventBackUpService {
  backUpData: EventData[] = [];
  constructor() {}

  createBackUpData(data:EventData[]){
    this.backUpData = data;
  }

  updateBackUpData(data:EventData){
    
  }

  getBackUpData(id:number){
    return this.backUpData.find(event => event.id == id);
  }

}
