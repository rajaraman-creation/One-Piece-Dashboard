import { Component, Input, SimpleChanges } from '@angular/core';
import EventData = DayPilot.EventData;
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import { CommonModule } from '@angular/common';
import { TimeZoneHandlerService } from '../../../service/time-zone-handler.service';
import { MenuItem } from 'primeng/api';
import {MatStepperModule} from '@angular/material/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { SearchBoxComponent } from "../../search-box/search-box.component";

@Component({
  selector: 'app-event-manager',
  standalone: true,
  imports: [CommonModule, MatStepperModule, InputTextModule, SearchBoxComponent],
  templateUrl: './event-manager.component.html',
  styleUrl: './event-manager.component.scss',
})
export class EventManagerComponent {
  @Input() event!: EventData;
  buffer: boolean = true;

  constructor(private timeZoneHandler: TimeZoneHandlerService) {
    console.log(this.event);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['event']);
    if (changes['event'] && changes['event'].currentValue) {
      this.buffer = false;
      this.event = changes['event'].currentValue;
      console.log(
        this.timeZoneHandler.isoToDateWithTime(this.event.start.toString())
      );
    }
  }

  convertDate(arg0: DayPilot.Date | string) {
    return this.timeZoneHandler.isoToDateWithTime(arg0.toString());
  }

  // Stepper Control
  items: MenuItem[] | undefined;
  active: number = 0;

  ngOnInit() {
    this.items = [
      {
        label: 'Personal Info',
      },
      {
        label: 'Reservation',
      },
      {
        label: 'Review',
      },
    ];
  }
}
