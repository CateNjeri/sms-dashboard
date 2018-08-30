import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EventsComponent} from './events.component';
import {EventFormComponent} from './event-form/event-form.component';
import {EventCalendarComponent} from './event-calendar/event-calendar.component';

const routes: Routes = [
    {path: '', component: EventsComponent},
    {path: ':id/view', component: EventsComponent},
    {path: 'add', component: EventFormComponent},
    {path: ':id/edit', component: EventFormComponent},
    {path: 'calendar', component: EventCalendarComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EventsRoutingModule {
}

