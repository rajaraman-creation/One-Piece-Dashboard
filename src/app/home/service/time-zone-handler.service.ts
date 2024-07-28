import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneHandlerService {

  isoString: string = '2024-07-28T10:30:00';
  formattedDateTime: string;
  constructor() {
    this.formattedDateTime = moment(this.isoString).format('MM/DD/YYYY hh:mm A');
    console.log(this.formattedDateTime, "Time Zone Handler");
  }

  isoToDateWithTime(isoString:Date | string){
    return moment(this.isoString).format('MM/DD/YYYY hh:mm A');
  }

}
