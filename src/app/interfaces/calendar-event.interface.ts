export interface CalendarEventInterface {
  _id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  allDay: boolean;
  backgroundColor: string;
  borderColor: string;
}
