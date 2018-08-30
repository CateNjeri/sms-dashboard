import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CalendarEvent} from 'calendar-utils';
import {CalendarEventTimesChangedEvent} from 'angular-calendar';
import {EventsService} from '../../../shared/services/events.service';
import {Event, SchoolCalendarEvent} from '../../../shared/models/event';

@Component({
    selector: 'app-event-calendar',
    templateUrl: './event-calendar.component.html',
    styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

    view: string = 'week';
    refresh: Subject<any> = new Subject();
    activeDayIsOpen: boolean = true;
    viewDate: Date = new Date();
    events: CalendarEvent[] = [];
    selectedDay: any = {date: new Date()};

    constructor(private eventsService: EventsService) {
    }

    ngOnInit() {
        this.getEvents();
    }

    getEvents() {
        this.eventsService.all()
            .subscribe(events => {
                this.renderEvents(events);
            });
    }

    renderEvents(events: Event[]) {
        for (const event of events) {
            const calendarEvent: CalendarEvent = new SchoolCalendarEvent();
            calendarEvent.allDay = event.startDate === event.stopDate;
            calendarEvent.start = new Date(event.startDate);
            calendarEvent.end = new Date(event.stopDate);
            calendarEvent.title = event.title;
            calendarEvent.color = {
                primary: '#ad2121',
                secondary: '#FAE3E3'
            };
            this.events.push(calendarEvent);
        }
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void {
        // TODO
    }

    dayClicked({date: events}: { date: Date, events: CalendarEvent[] }) {
        // TODO
    }

    eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
        // TODO
    }

}
