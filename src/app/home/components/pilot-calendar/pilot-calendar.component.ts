import { Component, ViewChild } from '@angular/core';
import {DataService} from "./data.service";
import { DayPilotCalendarComponent, DayPilotMonthComponent, DayPilotNavigatorComponent, DayPilot, DayPilotModule } from '@daypilot/daypilot-lite-angular';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-pilot-calendar',
  standalone: true,
  imports: [DayPilotModule],
  templateUrl: './pilot-calendar.component.html',
  styleUrl: './pilot-calendar.component.scss',
  providers:[
    DataService
  ]
})
export class PilotCalendarComponent {

  @ViewChild("calendar")
  calendar!: DayPilotCalendarComponent;

  config: DayPilot.CalendarConfig = {
    viewType: "Resources",
    headerHeight: 100,
    startDate: "2025-09-01",
    contextMenu: new DayPilot.Menu({
      items: [
        {
          text: "Edit...",
          onClick: async args => {
            const data = args.source.data;
            const modal = await DayPilot.Modal.prompt("Edit event text:", data.text);

            const calendar = this.calendar.control;
            if (modal.canceled) {
              return;
            }

            data.text = modal.result;
            calendar.events.update(data);
          }
        },
        {
          text: "Delete",
          onClick: args => {
            this.calendar.control.events.remove(args.source);
          }
        }
      ]
    }),
    onTimeRangeSelected: async args => {
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");

      const calendar = this.calendar.control;
      calendar.clearSelection();
      if (modal.canceled) {
        return;
      }

      calendar.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result,
        resource: args.resource
      });

    },
    onBeforeHeaderRender: args => {
      const data = args.column.data;
      const header = args.header;
      header.verticalAlignment = "top";
      if (data.tags.image) {
        args.header.areas = [
          {
            left: "calc(50% - 30px)",
            bottom: 10,
            height: 60,
            width: 60,
            image: data.tags.image,
            style: "border-radius: 40px; overflow: hidden; border: 3px solid #fff;"
          }
        ];
      }
    },
    onBeforeEventRender: args => {
      args.data.areas = [
        {
          top: 3,
          right: 3,
          width: 24,
          height: 24,
          action: "ContextMenu",
          padding: 2,
          symbol: "/icons/daypilot.svg#threedots-h",
          cssClass: "event-menu",
          toolTip: "Menu"
        }
      ];
    }
  };

  

 











  @ViewChild("day") day!: DayPilotCalendarComponent;
  @ViewChild("week") week!: DayPilotCalendarComponent;
  @ViewChild("month") month!: DayPilotMonthComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;

  events: DayPilot.EventData[] = [];

  date = DayPilot.Date.today();

  contextMenu = new DayPilot.Menu({
    items: [
      {
        text: "Delete",
        onClick: args => {
          const event = args.source;
          const dp = event.calendar;
          dp.events.remove(event);
        }
      },
      {
        text: "Edit...",
        onClick: async args => {
          const event = args.source;
          const dp = event.calendar;

          const modal = await DayPilot.Modal.prompt("Edit event text:", event.data.text);
          dp.clearSelection();
          if (!modal.result) { return; }
          event.data.text = modal.result;
          dp.events.update(event);
        }
      },
      {
        text: "-"
      },
      {
        text: "Red",
        onClick: args => {
          const event = args.source;
          const dp = event.calendar;
          event.data.backColor = DataService.colors.red;
          dp.events.update(event);
        }
      },
      {
        text: "Green",
        onClick: args => {
          const event = args.source;
          const dp = event.calendar;
          event.data.backColor = DataService.colors.green;

          dp.events.update(event);
        }
      },
      {
        text: "Blue",
        onClick: args => {
          const event = args.source;
          const dp = event.calendar;
          event.data.backColor = DataService.colors.blue;

          dp.events.update(event);
        }
      },
      {
        text: "Yellow",
        onClick: args => {
          const event = args.source;
          const dp = event.calendar;
          event.data.backColor = DataService.colors.yellow;
          dp.events.update(event);
        }
      },
      {
        text: "Gray",
        onClick: args => {
          const event = args.source;
          const dp = event.calendar;
          event.data.backColor = DataService.colors.gray;

          dp.events.update(event);
        }
      }
    ]
  });

  // changeHeight(height: string): void {
  //   this.dp.update({ heightSpec: height });
  // }

  configNavigator: DayPilot.NavigatorConfig = {
    showMonths: 1,
    cellWidth: 35,
    cellHeight: 35,
    onVisibleRangeChanged: args => {
      this.loadEvents();
    }
  };

  selectTomorrow() {
    this.date = DayPilot.Date.today().addDays(1);
  }

  changeDate(date: DayPilot.Date): void {
    this.configDay.startDate = date;
    this.configWeek.startDate = date;
    this.configMonth.startDate = date;
  }

  configDay: DayPilot.CalendarConfig = {
    durationBarVisible: false,
    contextMenu: this.contextMenu,
    onTimeRangeSelected: this.onTimeRangeSelected.bind(this),
    onBeforeEventRender: this.onBeforeEventRender.bind(this),
    onEventClick: this.onEventClick.bind(this),
  };

  configWeek: DayPilot.CalendarConfig = {
    viewType: "Week",
    heightSpec:"BusinessHours",
    businessBeginsHour:10,
    businessEndsHour:21,
    cellHeight:50,
    durationBarVisible: false,
    contextMenu: this.contextMenu,
    onTimeRangeSelected: this.onTimeRangeSelected.bind(this),
    onBeforeEventRender: this.onBeforeEventRender.bind(this),
    onEventClick: this.onEventClick.bind(this),
  };

  configMonth: DayPilot.MonthConfig = {
    contextMenu: this.contextMenu,
    eventBarVisible: false,
    onTimeRangeSelected: this.onTimeRangeSelected.bind(this),
    onEventClick: this.onEventClick.bind(this),
  };

  constructor(private ds: DataService) {
    this.viewWeek();
  }

  ngAfterViewInit(): void {
    this.loadEvents();

    const from = new DayPilot.Date(this.config.startDate);
    const to = from.addDays(1);

    forkJoin([
      this.ds.getResources(),
      this.ds.getEventss(from, to)
    ]).subscribe(data => {
        const options = {
          columns: data[0],
          events: data[1]
        };
        this.calendar.control.update(options);
    });
  }

  loadEvents(): void {
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

  viewDay():void {
    this.configNavigator.selectMode = "Day";
    this.configDay.visible = true;
    this.configWeek.visible = false;
    this.configMonth.visible = false;
  }

  viewWeek():void {
    this.configNavigator.selectMode = "Week";
    this.configDay.visible = false;
    this.configWeek.visible = true;
    this.configMonth.visible = false;
    this.config.visible = true;
  }

  viewMonth():void {
    this.configNavigator.selectMode = "Month";
    this.configDay.visible = false;
    this.configWeek.visible = false;
    this.configMonth.visible = true;
  }

  

  onBeforeEventRender(args: any) {
      const dp = args.control;
      args.data.areas = [
        {
          top: 3,
          right: 3,
          width: 20,
          height: 20,
          symbol: "/icons/daypilot.svg#minichevron-down-2",
          fontColor: "#fff",
          toolTip: "Show context menu",
          action: "ContextMenu",
        },
        {
          top: 3,
          right: 25,
          width: 20,
          height: 20,
          symbol: "/icons/daypilot.svg#x-circle",
          fontColor: "#fff",
          action: "None",
          toolTip: "Delete event",
          onClick: async (args: any)   => {
            dp.events.remove(args.source);
          }
        }
      ];

      args.data.areas.push({
        bottom: 5,
        left: 5,
        width: 36,
        height: 36,
        action: "None",
        image: `https://picsum.photos/36/36?random=${args.data.id}`,
        style: "border-radius: 50%; border: 2px solid #fff; overflow: hidden;",
      });
  }

  async onTimeRangeSelected(args: any) {
    const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
    const dp = args.control;
    dp.clearSelection();
    if (!modal.result) { return; }
    dp.events.add(new DayPilot.Event({
      start: args.start,
      end: args.end,
      id: DayPilot.guid(),
      text: modal.result
    }));
  }

  async onEventClick(args: any) {
    const form = [
      {name: "Text", id: "text"},
      {name: "Start", id: "start", dateFormat: "MM/dd/yyyy", type: "datetime"},
      {name: "End", id: "end", dateFormat: "MM/dd/yyyy", type: "datetime"},
      {name: "Color", id: "backColor", type: "select", options: this.ds.getColors()},
    ];

    const data = args.e.data;

    const modal = await DayPilot.Modal.form(form, data);

    if (modal.canceled) {
      return;
    }

    const dp = args.control;

    dp.events.update(modal.result);
  }

}
