import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar'

@Component({
    selector: 'app-events-calendar',
    templateUrl: './events-calendar.component.html',
    styleUrls: ['./events-calendar.component.scss']
})
export class EventsCalendarComponent implements OnInit {
    view: string = 'month';
    refresh: Subject<any> = new Subject();
    activeDayIsOpen: boolean = true;
    viewDate: Date = new Date();
    events: any[] = [];

    constructor() {
    }

    ngOnInit() {
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
