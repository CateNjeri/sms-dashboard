import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'frontend', loadChildren: './home/home.module#HomeModule'},
    {path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
    {
        path: '', canActivate: [AuthGuard], component: AdminComponent,
        children: [
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'students', loadChildren: './modules/students/students.module#StudentsModule'},
            {path: 'teachers', loadChildren: './modules/teachers/teachers.module#TeachersModule'},
            {path: 'accounts', loadChildren: './modules/accounts/accounts.module#AccountsModule'},
            {path: 'subjects', loadChildren: './modules/subjects/subjects.module#SubjectsModule'},
            {path: 'assignments', loadChildren: './modules/assignments/assignments.module#AssignmentsModule'},
            {path: 'classes', loadChildren: './modules/classes/classes.module#ClassesModule'},
            {path: 'examinations', loadChildren: './modules/examinations/examinations.module#ExaminationsModule'},
            {path: 'events', loadChildren: './modules/events/events.module#EventsModule'},
            {path: 'timetable', loadChildren: './modules/timetable/timetable.module#TimetableModule'},
            {path: 'attendance', loadChildren: './modules/attendance/attendance.module#AttendanceModule'},
            {path: 'setups', loadChildren: './modules/setups/setups.module#SetupsModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
