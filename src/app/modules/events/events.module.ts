import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormComponent } from './event-form/event-form.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events.routing';
import { SharedModule } from '../../shared/shared.module';
import { ComponentModule } from '../../component/component.module';
import { EventsService } from '../../shared/services/events.service';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    ComponentModule,
    CalendarModule.forRoot()
  ],
  providers: [EventsService],
  declarations: [EventFormComponent, EventCalendarComponent, EventsComponent]
})
export class EventsModule { }
