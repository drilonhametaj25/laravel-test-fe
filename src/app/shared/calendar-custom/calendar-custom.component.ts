import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventInput,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import itLocale from '@fullcalendar/core/locales/it';
import { CalendarEventInterface } from '@app/app/interfaces/calendar-event.interface';
import { CalendarResponseInterface } from '@app/app/interfaces/calendar-response.interface';
import { OperationType } from '@app/app/interfaces/operation.interface';
import { CalendarBgColor } from '@app/app/interfaces/calendar-bg-color.interface';
import { CalendarSettingInterface } from '@app/app/interfaces/calendar-setting.interface';
import {
  CalendarTimeEnum,
  CalendarTimeSlotEnum,
} from '@app/app/interfaces/calendar-time-enum.interface';

@Component({
  selector: 'app-calendar-custom',
  templateUrl: './calendar-custom.component.html',
  styleUrls: ['./calendar-custom.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarCustomComponent
  implements OnInit, OnChanges, AfterViewInit
{
  @Input() events!: CalendarEventInterface[];
  @Output() onChangeEvent: EventEmitter<CalendarResponseInterface> =
    new EventEmitter<CalendarResponseInterface>();

  displayedEvents!: EventInput[];
  calendarSetting: CalendarSettingInterface = {
    slotMinTime: CalendarTimeEnum.zero,
    slotMaxTime: CalendarTimeEnum.twenty_four,
    slotDuration: CalendarTimeSlotEnum.thirty_min,
  };
  openCalendarSetting: boolean = false;
  calendarSlotMinTimeOptions: any[] = [];
  calendarSlotMaxTimeOptions: any[] = [];
  calendarSlotDurationTimeOptions: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    lazyFetching: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek settingButton',
    },
    initialView: 'dayGridMonth',
    firstDay: 1,
    locale: itLocale,
    events: this.displayedEvents,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventBackgroundColor: CalendarBgColor.blue,
    eventBorderColor: CalendarBgColor.blue,
    customButtons: {
      settingButton: {
        icon: 'setting-icon',
        click: this.onOpenCalendarSetting.bind(this),
      },
    },
    slotMinTime: this.calendarSetting.slotMinTime,
    slotMaxTime: this.calendarSetting.slotMaxTime,
    slotDuration: this.calendarSetting.slotDuration,
    height: 'auto',
    select: this.onDateSelect.bind(this),
    eventClick: this.onEventClick.bind(this),
    eventsSet: this.onEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
    contentHeight: screen.width < 577 ? 600 : 1000, //for mobile
  };
  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.mapBEeventsToCalendarEvent();
    this.setCalendarSettingOptions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['events']) {
      this.events = changes['events'].currentValue;
      this.mapBEeventsToCalendarEvent();
    }
  }

  ngAfterViewInit() {
    //Force icon in header calendar
    (
      document.querySelector('.fc-settingButton-button') as HTMLElement
    ).innerHTML = '<i class="pi pi-cog"></i>';
  }

  setCalendarSettingOptions() {
    const keysTime = Object.keys(CalendarTimeEnum);
    const keysTimeSlot = Object.keys(CalendarTimeSlotEnum);
    keysTime.forEach((k) => {
      var currentHours = '';
      var currentMinutes = '';

      if (k === 'twenty_four') {
        currentHours = '24';
        currentMinutes = '00';
      } else {
        const date = new Date('1995-12-17T' + this.calculateTimeEnum(k, false));
        currentHours = ('0' + date.getHours()).substr(-2);
        currentMinutes = ('0' + date.getMinutes()).substr(-2);
      }

      this.calendarSlotMinTimeOptions.push({
        label: currentHours + ':' + currentMinutes,
        value: this.calculateTimeEnum(k, false),
      });

      this.calendarSlotMaxTimeOptions.push({
        label: currentHours + ':' + currentMinutes,
        value: this.calculateTimeEnum(k, false),
      });
    });

    keysTimeSlot.forEach((k) => {
      const date = new Date('1995-12-17T' + this.calculateTimeEnum(k, true));
      let label = '';
      if (k.includes('min')) {
        label = date.getMinutes().toString() + 'min';
      } else {
        label = date.getHours().toString() + 'h';
      }

      this.calendarSlotDurationTimeOptions.push({
        label: label,
        value: this.calculateTimeEnum(k, true),
      });
    });
  }

  onOpenCalendarSetting() {
    this.openCalendarSetting = true;
  }

  onUpdateCalendarSetting() {
    this.calendarOptions.slotMinTime = this.calendarSetting.slotMinTime;
    this.calendarOptions.slotMaxTime = this.calendarSetting.slotMaxTime;
    this.calendarOptions.slotDuration = this.calendarSetting.slotDuration;
    this.openCalendarSetting = false;
  }

  calculateTimeEnum(time: string, isTimeSlot: boolean) {
    if (isTimeSlot) {
      return CalendarTimeSlotEnum[time as keyof typeof CalendarTimeSlotEnum];
    } else {
      return CalendarTimeEnum[time as keyof typeof CalendarTimeEnum];
    }
  }

  mapBEeventsToCalendarEvent() {
    this.displayedEvents = this.events.map((event) => {
      return {
        id: event._id,
        title: event.title,
        start: event.start,
        end: event.end,
        allDay: event.allDay,
        backgroundColor: event.backgroundColor,
        borderColor: event.backgroundColor,
      };
    });
    this.calendarOptions.events = this.displayedEvents;
  }

  onDateSelect(selectInfo: DateSelectArg) {
    //const title = prompt('Please enter a new title for your event');

    //to deselect the user selected dates
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    this.onChangeEvent.emit({
      event: {
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      },
      operationType: OperationType.add,
    });
    //if (title) {
    /*calendarApi.addEvent({
        id: this.events[this.events.length - 1]._id + 1,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });*/
    /*this.events.push({
        _id: this.events[this.events.length - 1]._id + 1,
        title: title,
        description: '',
        start: new Date(selectInfo.startStr),
        end: new Date(selectInfo.endStr),
        allDay: selectInfo.allDay,
      });
      this.mapBEeventsToCalendarEvent();
    }*/
  }

  onEventClick(clickInfo: EventClickArg) {
    //clickInfo.event.remove();

    this.onChangeEvent.emit({
      event: { id: clickInfo.event.id } as EventInput,
      operationType: OperationType.update,
    });
  }

  onEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}
