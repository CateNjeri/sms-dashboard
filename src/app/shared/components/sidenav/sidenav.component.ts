import {Component, OnInit, Inject, Input, OnDestroy} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {SidenavItem} from './item/item.model';
import {Subscription} from 'rxjs';
import {UserAccount} from '../../models/user-account';
import {AuthService} from '../../../core/auth.service';
import {Student} from '../../models/student';
import {StudentsService} from '../../services/students.service';
import {UserAccountProfile} from '../../models/user-account-profile';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

    @Input() theme = {
        header: 'stbui-white',
        aside: 'stbui-default',
        logo: 'stbui-primary'
    };
    isStudentMenuOpen: false;

    items: SidenavItem[] = [];
    private _itemsSubscription: Subscription;
    private _routerEventsSubscription: Subscription;

    public currentUser: UserAccount;
    public currentUserProfile: UserAccountProfile;
    public currentUserProfileSubscription: Subscription = new Subscription();
    protected students: Student[];
    public activeStudent: Student;

    constructor(@Inject('sidenavService') private sidenavService,
                private router: Router, private authService: AuthService, private studentsService: StudentsService) {
        this.activeStudent = new Student();
    }

    ngOnInit() {
        this.currentUser = this.authService.getCurrentUser();
        this.currentUserProfileSubscription = this
            .authService
            .getCurrentUserProfileObservable()
            .subscribe(currentUserProfile => {
                this.currentUserProfile = currentUserProfile;
                this.items = this.sidenavService.getSidenavItems();
            }, error2 => {
                console.log(error2);
            }, () => {
                // TODO:
            });
        // this.currentUserProfile = this.authService.getCurrentUserProfile();

        this._itemsSubscription = this.sidenavService.getSidenavItemsObservable()
            .subscribe((items: SidenavItem[]) => {
                this.items = this.sortRecursive(items, 'position');
            });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.sidenavService.nextCurrentlyOpenByRoute(event.url);
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 100);
            }
        });
        // Parent
        if (this.authService.getCurrentUserType() === 2) {
            this.getUserAccountStudents();
        }
    }

    getUserAccountStudents(): void {
        this.studentsService
            .all()
            .subscribe(students => {
                this.students = students;
                if (this.students.length > 0) {
                    if (this.authService.getCurrentStudent() == null) {
                        this.setActiveStudent(students[0]);
                    } else {
                        this.setActiveStudent(this.authService.getCurrentStudent());
                    }
                }
            }, error2 => {
                console.log(error2);
            });
    }

    toggleIconSidenav() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
        this.sidenavService.isIconSidenav = !this.sidenavService.isIconSidenav;
    }

    closeIconSidenav() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
        this.sidenavService.isIconSidenav = !this.sidenavService.isIconSidenav;
    }

    isIconSidenav(): boolean {
        // return this.sidenavService.isIconSidenav;
        return true;
    }

    sortRecursive(array: SidenavItem[], propertyName: string) {
        return array;
    }

    ngOnDestroy() {
        // this._itemsSubscription.unsubscribe();
        this._routerEventsSubscription.unsubscribe();
        this.currentUserProfileSubscription.unsubscribe();
    }

    setActiveStudent(student: Student) {
        this.authService.setActiveStudent(student);
        this.activeStudent = student;
    }
}
