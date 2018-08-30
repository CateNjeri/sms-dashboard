import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AttendanceComponent} from "./attendance.component";
import {AttendanceRegisterComponent} from "./attendance-register/attendance-register.component";
import {AttendanceReportComponent} from "./attendance-report/attendance-report.component";

const routes: Routes = [
    {path: '', component: AttendanceComponent},
    {path: 'report', component: AttendanceReportComponent},
    {path: 'periods', component: AttendanceReportComponent},
    {path: 'register', component: AttendanceRegisterComponent},
    {path: 'register/:id', component: AttendanceRegisterComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AttendanceRoutingModule {
}
