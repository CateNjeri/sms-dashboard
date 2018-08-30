import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent implements OnInit {
  view: string = 'month';
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;
  viewDate: Date = new Date();
  events: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  dayClicked({date: events}: { date: Date, events: CalendarEvent[] }) {
    // TODO
}
}
