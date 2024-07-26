import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import { HttpClient } from '@angular/common/http';
import CalendarColumnData = DayPilot.CalendarColumnData;
import EventData = DayPilot.EventData;

@Injectable()
export class DataService {
  eventss: EventData[] = [
    {
      id: 1,
      start: '2024-07-26T13:00:00',
      end: '2024-07-26T15:00:00',
      text: '2025-09-01',
      resource: 'R1',
      barColor: '#f1c232',
    },
    {
      id: 2,
      start: '2025-09-01T10:00:00',
      end: '2025-09-01T12:00:00',
      text: '2025-09-01',
      resource: 'R1',
      barColor: '#6fa8dc',
    },
    {
      id: 3,
      start: '2025-09-01T11:00:00',
      end: '2025-09-01T14:00:00',
      text: '2025-09-01',
      resource: 'R2',
      barColor: '#f1c232',
    },
    {
      id: 4,
      start: '2025-09-01T10:00:00',
      end: '2025-09-01T12:00:00',
      text: 'Event 4',
      resource: 'R3',
      barColor: '#6aa84f',
    },
    {
      id: 5,
      start: '2025-09-01T11:00:00',
      end: '2025-09-01T14:00:00',
      text: 'Event 5',
      resource: 'R4',
      barColor: '#6fa8dc',
    },
    {
      id: 5,
      start: '2025-09-01T13:00:00',
      end: '2025-09-01T14:30:00',
      text: 'Event 6',
      resource: 'R3',
      barColor: '#cc0000',
    },
  ];

  resources: CalendarColumnData[] = [
    { name: 'Resource 1', id: 'R1', tags: { image: '/avatars/pat-blue.jpg' } },
    {
      name: 'Resource 2',
      id: 'R2',
      tags: { image: '/avatars/pat-orange.jpg' },
    },
    { name: 'Resource 3', id: 'R3', tags: { image: '/avatars/pat-red.jpg' } },
    {
      name: 'Resource 4',
      id: 'R4',
      tags: { image: '/avatars/pat-yellow.jpg' },
    },
    { name: 'Resource 5', id: 'R5', tags: { image: '/avatars/pat-blue.jpg' } },
    {
      name: 'Resource 6',
      id: 'R6',
      tags: { image: '/avatars/pat-orange.jpg' },
    },
    { name: 'Resource 7', id: 'R7', tags: { image: '/avatars/pat-red.jpg' } },
    {
      name: 'Resource 8',
      id: 'R8',
      tags: { image: '/avatars/pat-yellow.jpg' },
    },
  ];

  constructor(private http: HttpClient) {}

  getEventss(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.eventss);
        observer.complete();
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getResources(): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.resources);
        observer.complete();
      }, 200);
    });

    // return this.http.get("/api/resources");
  }

  static colors = {
    green: '#6aa84f',
    yellow: '#f1c232',
    red: '#cc4125',
    gray: '#808080',
    blue: '#2e78d6',
  };

  events = [
    {
      id: 1,
      text: 'Pluto',
      start: DayPilot.Date.today().firstDayOfWeek().addHours(10.5),
      end: DayPilot.Date.today().firstDayOfWeek().addHours(11.5),
      cssClass: 'my-event',
      resizeDisabled: true,
      tags: {
        type: 'important',
        account: 'Vishnu',
        service:'Hair Care and Wash',
        status:'Confirmed',
        duration:'9.00Am - 10.00Am'
      },
    },
    {
      id: 2,
      text: 'Gara',
      start: DayPilot.Date.today().firstDayOfWeek().addDays(1).addHours(12),
      end: DayPilot.Date.today().firstDayOfWeek().addDays(1).addHours(13),
      backColor: DataService.colors.green,
      participants: 1,
      tags: {
        type: 'warning',
        account: 'Rajaraman',
        service:'Hair Cut',
        status:'Confirmed',
        duration:'9.00Am - 10.00Am'
      },
    },
    {
      id: 3,
      text: 'Mike',
      start: DayPilot.Date.today().firstDayOfWeek().addDays(2).addHours(13),
      end: DayPilot.Date.today().firstDayOfWeek().addDays(2).addHours(14),
      backColor: DataService.colors.yellow,
      participants: 3,
      tags: {
        type: 'note',
        account: 'Shiva',
        service:'Hair Cut',
        status:'Confirmed',
        duration:'9.00Am - 10.00Am'
      },
    },
    {
      id: 4,
      text: 'danso',
      start: DayPilot.Date.today().firstDayOfWeek().addDays(3).addHours(11),
      end: DayPilot.Date.today().firstDayOfWeek().addDays(3).addHours(12),
      backColor: DataService.colors.red,
      participants: 4,
      tags: {
        type: 'complete',
        account: 'Datura',
        service:'Hair Cut',
        status:'Confirmed',
        duration:'9.00Am - 10.00Am'
      },
    },
  ];

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getColors(): any[] {
    const colors = [
      { name: 'Green', id: DataService.colors.green },
      { name: 'Yellow', id: DataService.colors.yellow },
      { name: 'Red', id: DataService.colors.red },
      { name: 'Gray', id: DataService.colors.gray },
      { name: 'Blue', id: DataService.colors.blue },
    ];
    return colors;
  }
}
