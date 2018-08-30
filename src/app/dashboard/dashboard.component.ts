import {Component, OnInit, OnDestroy} from '@angular/core';
import {Dashboard} from '../shared/models/dashboard';
import {DashboardService} from '../shared/services/dashboard.service';
import {Router} from '@angular/router';
import {Student} from '../shared/models/student';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../core/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {UserAccountProfile} from '../shared/models/user-account-profile';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    dashboard: Dashboard;
    systemStats = [];
    activeStudentSubscription: Subscription = new Subscription;
    activeStudent: Student;

    isProcessing: boolean = false;
    activeUserProfileSubscription: Subscription = new Subscription;
    activeUserAccountProfile: UserAccountProfile;
    ngOnInit() {
        this.getDashboardData();
    }

    ngOnDestroy() {
        this.activeStudentSubscription.unsubscribe();
        this.activeUserProfileSubscription.unsubscribe();
    }

    constructor(private dashboardService: DashboardService,
                private router: Router,
                private authService: AuthService) {
        this.dashboard = new Dashboard();
        if (this.authService.getCurrentUserType() === 2) {
            this.activeStudentSubscription = this.authService
                .getCurrentStudentObservable()
                .subscribe(student => {
                    // TODO;
                    this.getDashboardData();
                });
        }
        this.activeUserProfileSubscription = this.authService
            .getCurrentUserProfileObservable()
            .subscribe(userAccountProfile => {
                this.activeUserAccountProfile = userAccountProfile;
            });
    }

    getDashboardData() {
        this.isProcessing = true;
        this.dashboardService.getData()
            .subscribe(dashboard => {
                this.systemStats.push(dashboard.studentsCount);
                this.systemStats.push(dashboard.teachersCount);
                this.systemStats.push(dashboard.parentsCount);
                this.dashboard = dashboard;
            }, error => {

            }, () => {
                this.isProcessing = false;
            });
    }

    markAttendance() {
        this.router.navigate(['attendance/register']);
    }

}
