import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Service: Comb and Cut',
    start: TODAY_STR,
    backgroundColor: 'teal',
    borderColor: 'teal',
    textColor: 'white',
    extendedProps: {
      appointmentFor: 'Entity Name',
      accountName: 'Account Holder Name ',
    },
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00',
    backgroundColor: 'teal',
    borderColor: 'teal',
    textColor: 'white',
    extendedProps: {
      appointmentFor: 'Piggy ',
      accountName: 'Owner',
    },
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
    backgroundColor: 'teal',
    borderColor: 'teal',
    textColor: 'white',
    extendedProps: {
      appointmentFor: 'Piggy',
      accountName: 'Owner',
    },
  },
];

export function createEventId() {
  return String(eventGuid++);
}
