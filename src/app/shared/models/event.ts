import {School} from './school';
import {CalendarEvent, EventColor} from 'calendar-utils';

export class Event {
    id: number = 0;
    title: string;
    description: string;
    others: string;
    startDate: Date;
    startTime: Date;
    stopDate: Date;
    stopTime: Date;
    school: School;
    isBookable: boolean;
    inNoticeBoard: boolean;
    createdAt: Number;
    updatedAt: Number;
}

export class SchoolCalendarEvent implements CalendarEvent {
    start: Date;
    title: string;
    color: EventColor;

}
