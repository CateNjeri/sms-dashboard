import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttendanceComponent} from './attendance.component';
import {ReportComponent} from './report/report.component';
import {RegisterComponent} from './register/register.component';
import {AttendanceRegisterComponent} from './attendance-register/attendance-register.component';
import {AttendanceReportComponent} from './attendance-report/attendance-report.component';
import {ComponentModule} from "../../component/component.module";
import {SharedModule} from "../../shared/shared.module";
import {AttendanceRoutingModule} from "./attendance.routing";
import { StudentAttendanceService } from '../../shared/services/student-attendance.service';
import { AttendancePeriodsService } from '../../shared/services/attendance-periods.service';
import { ClassLevelSectionsService } from '../../shared/services/class-level-sections.service';
import { CalendarModule } from 'angular-calendar';

@NgModule({
    imports: [
        CommonModule,
        ComponentModule,
        SharedModule,
        AttendanceRoutingModule,
        CalendarModule.forRoot()
    ],
    providers: [StudentAttendanceService, AttendancePeriodsService, ClassLevelSectionsService],
    declarations: [AttendanceComponent, ReportComponent, RegisterComponent, AttendanceRegisterComponent, AttendanceReportComponent]
})
export class AttendanceModule {
}
