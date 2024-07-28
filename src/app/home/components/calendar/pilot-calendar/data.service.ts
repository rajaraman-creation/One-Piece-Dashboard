import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import { HttpClient } from '@angular/common/http';
import CalendarColumnData = DayPilot.CalendarColumnData;
import EventData = DayPilot.EventData;
import { Staff } from '../../dashboard-meter/dashboard-meter.component';

@Injectable()
export class DataService {
  serviceStaff: Staff[] = [
    {
      name: 'Alice Johnson',
      role: 'Manager',
      id: 'R1',
      checked: true,
      details: {
        image:
          'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
      },
    },
    {
      name: 'Bob Smith',
      role: 'Assistant Manager',
      id: 'R2',
      checked: false,
      details: {
        image:
          'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      },
    },
    {
      name: 'Charlie Brown',
      role: 'Supervisor',
      id: 'R3',
      checked: false,
      details: {
        image:
          'https://img.freepik.com/premium-photo/portrait-smiling-young-man-looking-camera_33839-1731.jpg',
      },
    },
    {
      name: 'Diana Prince',
      role: 'Coordinator',
      id: 'R4',
      checked: false,
      details: {
        image:
          'https://cdn.create.vista.com/api/media/small/308705620/stock-photo-smiling-brunette-woman-in-an-orange-t-shirt-and-beautiful-headband-holding-handsin-a-gesture',
      },
    },
    {
      name: 'Edward Stark',
      role: 'Team Lead',
      id: 'R5',
      checked: false,
      details: {
        image:
          'https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      },
    },
    {
      name: 'Fiona Green',
      role: 'Executive',
      id: 'R6',
      checked: false,
      details: {
        image:
          'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
      },
    },
    {
      name: 'George Miller',
      role: 'Senior Manager',
      id: 'R7',
      checked: false,
      details: {
        image:
          'https://st4.depositphotos.com/1591576/20942/i/450/depositphotos_209420114-stock-photo-close-horizontal-portrait-stubble-bearded.jpg',
      },
    },
    { name: 'Hannah Davis', role: 'Junior Manager', id: 'R8', checked: false },
  ];

  eventss: EventData[] = [
    {
      id: "1",
      start: DayPilot.Date.today().addHours(10.5),
      end: DayPilot.Date.today().addHours(12),
      text: 'Plutos',
      resource: 'R1',
      barColor: '#f1c232',
      tags: {
        type: 'important',
        account: 'Vishnu',
        service: 'Hair Care and Wash',
        status: 'Confirmed',
        duration: '9.00Am - 10.00Am',
      },
    },
    {
      id: "2",
      start: DayPilot.Date.today().firstDayOfWeek().addHours(10.5),
      end: DayPilot.Date.today().firstDayOfWeek().addHours(12),
      text: '2025-09-01',
      resource: 'R2',
      barColor: '#6fa8dc',
      tags: {
        type: 'important',
        account: 'Vishnu',
        service: 'Hair Care and Wash',
        status: 'Confirmed',
        duration: '9.00Am - 10.00Am',
      },
    },
    {
      id: "3",
      start: DayPilot.Date.today().firstDayOfWeek().addHours(10.5),
      end: DayPilot.Date.today().firstDayOfWeek().addHours(11.5),
      text: '2025-09-01',
      resource: 'R2',
      barColor: '#f1c232',
    },
    {
      id: "4",
      start: DayPilot.Date.today().firstDayOfWeek().addHours(10.5),
      end: DayPilot.Date.today().firstDayOfWeek().addHours(11.5),
      text: 'Event 4',
      resource: 'R3',
      barColor: '#6aa84f',
    },
    {
      id: "5",
      start: DayPilot.Date.today().firstDayOfWeek().addHours(10.5),
      end: DayPilot.Date.today().firstDayOfWeek().addHours(11.5),
      text: 'Event 5',
      resource: 'R4',
      barColor: '#6fa8dc',
    },
    {
      id: "6",
      start: DayPilot.Date.today().firstDayOfWeek().addHours(10.5),
      end: DayPilot.Date.today().firstDayOfWeek().addHours(11.5),
      text: 'Event 6',
      resource: 'R3',
      barColor: '#cc0000',
    },{
      id: "7",
      text: 'Pluto',
      start: DayPilot.Date.today().firstDayOfWeek().addHours(10.5),
      end: DayPilot.Date.today().firstDayOfWeek().addHours(11.5),
      cssClass: 'my-event',
      tags: {
        type: 'important',
        account: 'Vishnu',
        service:'Hair Care and Wash',
        status:'Confirmed',
        duration:'9.00Am - 10.00Am'
      },resource: 'R3',
    },
  ];

  html = `
  <div class="custom-event-header">
      <p class="mb-0 font-semibold mr-1">Steve Jobs</p>
      <div class="event-details">
        <div class="flex justify-content-end">
            <p class="m-0 mr-1 font-semibold">Manager</p>
        </div>
        <div class="flex justify-content-end">
          <p class="m-0 mr-1 font-semibold">3/5 (8.00Hrs)</p>
        </div>
        <div class="flex justify-content-end">
          <p class="m-0 mr-1">10.00AM - 5.00PM</p>
        </div>
      </div>
  </div>`;

  resources: CalendarColumnData[] = [];

  constructor(private http: HttpClient) {}

  getEventss(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        // for (let i = 1; i <= 100; i++) {
        //   const start = DayPilot.Date.today().addHours(10.5 + i * 0.1);
        //   const end = start.addHours(1.5);
        //   const event = {
        //     id: i,
        //     start: start,
        //     end: end,
        //     text: `Event ${i}`,
        //     resource: `R${(i % 10) + 1}`,
        //     barColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
        //     tags: {
        //       type: 'important',
        //       account: `Account ${i}`,
        //       service: 'Hair Care and Wash',
        //       status: 'Confirmed',
        //       duration: `${start.toString('hh:mm tt')} - ${end.toString(
        //         'hh:mm tt'
        //       )}`,
        //     },
        //   };
        //   this.eventss.push(event);
        // }
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
        service: 'Hair Care and Wash',
        status: 'Confirmed',
        duration: '9.00Am - 10.00Am',
      },
      resource: 'R3',
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
        service: 'Hair Cut',
        status: 'Confirmed',
        duration: '9.00Am - 10.00Am',
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
        service: 'Hair Cut',
        status: 'Confirmed',
        duration: '9.00Am - 10.00Am',
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
        service: 'Hair Cut',
        status: 'Confirmed',
        duration: '9.00Am - 10.00Am',
      },
    },
  ];

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    console.log("Get Events",from,to);
    
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        // const dataServiceColors = ['#f1c232', '#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'];
        // const services = ['Hair Care and Wash', 'Hair Cut', 'Nail Service', 'Facial Treatment'];
        // const accounts = ['Vishnu', 'Rajaraman', 'Shiva', 'Datura', 'Mike', 'Gara', 'Danso'];
      
        // for (let i = 1; i <= 1000; i++) {
        //   const dayOffset = Math.floor(i / 24);
        //   const hourOffset = (i % 24) + 9; // to avoid night hours, add 9 to start from 9 AM
        //   const start = DayPilot.Date.today().firstDayOfMonth().addDays(dayOffset).addHours(hourOffset);
        //   const end = start.addHours(1);

        //   const event = {
        //     id: i,
        //     text: `Event ${i}`,
        //     start: start,
        //     end: end,
        //     cssClass: 'my-event',
        //     resizeDisabled: true,
        //     resource: `R${(i % 10) + 1}`,
        //     tags: {
        //       type: ['important', 'warning', 'note', 'complete'][i % 4],
        //       account: accounts[i % accounts.length],
        //       service: services[i % services.length],
        //       status: 'Confirmed',
        //       duration: `${start.toString('hh:mm tt')} - ${end.toString('hh:mm tt')}`,
        //     }
        //   };
        //   this.events.push(event);
        // }

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
