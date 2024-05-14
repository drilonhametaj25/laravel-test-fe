import { EventInput } from '@fullcalendar/core';
import { OperationType } from './operation.interface';

export interface CalendarResponseInterface {
  event: EventInput;
  operationType: OperationType;
}
