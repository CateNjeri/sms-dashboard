import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {WidgetModule} from '../shared/components/widget/widget.module';
import {DashboardRoutingModule} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';
import {StatsChartComponent} from './stats-chart/stats-chart.component';
import {ChartsModule} from 'ng2-charts';
import {CalendarModule} from 'angular-calendar';
import {EventsCalendarComponent} from './events-calendar/events-calendar.component';
import {DashboardService} from '../shared/services/dashboard.service';

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        WidgetModule,
        ChartsModule,
        CalendarModule.forRoot()
    ],
    declarations: [
        DashboardComponent,
        StatsChartComponent,
        EventsCalendarComponent
    ],
    providers: [DashboardService]
})
export class DashboardModule {
}
