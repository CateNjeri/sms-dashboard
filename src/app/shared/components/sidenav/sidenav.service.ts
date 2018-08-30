import {Injectable} from '@angular/core';
import {SidenavItem} from './item/item.model';
import {BehaviorSubject, Observable, Observer, Subscription} from 'rxjs';
import {AuthService} from '../../../core/auth.service';

@Injectable()
export class SidenavService {

    private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
    private _items: SidenavItem[] = [];
    items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();

    private _currentlyOpenSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
    private _currentlyOpen: SidenavItem[] = [];
    currentlyOpen$: Observable<SidenavItem[]> = this._currentlyOpenSubject.asObservable();

    currentUserProfileSubscription: Subscription;
    private _sidenavItemsObservers: Array<Observer<SidenavItem[]>> = [];

    // TODO authService: Menu
    constructor(private authService: AuthService) {
        this.currentUserProfileSubscription = this.authService
            .getCurrentUserProfileObservable()
            .subscribe(userAccountPofile => {
                this.setupMenu();
            });
    }

    publishChanges(): void {
        this._sidenavItemsObservers.forEach((sub) => {
            try {
                sub.next(this._items);
            } catch (e) {
                // TODO
            }
        });
    }

    setupMenu(): void {
        const userType = this.authService.getCurrentUserType();
        this._items = [];
        if (userType === 1) {
            // TODO: school . Can be a teacher or other custom user
            const schoolUserAccount = this.authService.getCurrentUserProfile()
                .schoolUserAccount;
            if (schoolUserAccount.role == 1) {
                const dashboard = this.addItem('Dashboard', 'home', '/dashboard', 1);
// '1', '#4CAF50'
                const students = this.addItem('Students', 'supervisor_account', null, 2);
                this.addSubItem(students, 'Add Student', '/students/add', 1);
                this.addSubItem(students, 'View Students', '/students', 1);
                this.addSubItem(students, 'Parents', '/students/parents', 1);


                const teachers = this.addItem('Teachers', 'person', null, 3);
                this.addSubItem(teachers, 'Add Teacher', '/teachers/add', 1);
                this.addSubItem(teachers, 'View Teachers', '/teachers', 1);


                const subjects = this.addItem('Subjects', 'list', null, 4);
                this.addSubItem(subjects, 'View Subjects', '/subjects', 1);

                const classesSections = this.addItem('Classes/Sections', 'group', null, 5);
                this.addSubItem(classesSections, 'Classes', '/classes', 1);
                this.addSubItem(classesSections, 'Sections', '/classes/sections', 1);

                const accounts = this.addItem('Accounts', 'account_balance_wallet', null, 2);
                this.addSubItem(accounts, 'Fee Transactions', '/accounts', 1);
                this.addSubItem(accounts, 'Receive Payment', '/accounts/payments', 1);
                this.addSubItem(accounts, 'Report', '/accounts/report', 1);

                const examinations = this.addItem('Examinations', 'list', null, 6);
                this.addSubItem(examinations, 'Examinations', '/examinations', 1);
                this.addSubItem(examinations, 'Marks Entry', '/examinations/marks', 1);
                this.addSubItem(examinations, 'Results', '/examinations/results', 1);


                const assignments = this.addItem('Assignments', 'assignment', null, 7);
                this.addSubItem(assignments, 'Add Assignment', '/assignments/add', 1);
                this.addSubItem(assignments, 'View Assignments', '/assignments', 1);


                const events = this.addItem('Events', 'event', null, 8);
                this.addSubItem(events, 'Add Event', '/events/add', 1);
                this.addSubItem(events, 'Events', '/events', 1);
                this.addSubItem(events, 'Calendar', '/events/calendar', 1);


                const timetable = this.addItem('Timetable', 'event_available', null, 8);
                this.addSubItem(timetable, 'Timetable Periods', '/timetable/periods', 1);
                this.addSubItem(timetable, 'Timetables', '/timetable', 1);

                const studentAttendance = this.addItem('Student Attendance', 'pan_tool', null, 7);
                // this.addSubItem(studentAttendance, 'Attendance Periods', '/attendance/periods', 1);
                this.addSubItem(studentAttendance, 'Mark Attendance', '/attendance/register', 1);
                this.addSubItem(studentAttendance, 'Attendance Report', '/attendance/report', 1);

                const schoolSetup = this.addItem('School Setup', 'settings', null, 8);
                this.addSubItem(schoolSetup, 'School Info', '/setups/school', 1);
                // this.addSubItem(schoolSetup, 'M', '/setups/profile', 1);
                // this.addSubItem(schoolSetup, 'Subjects', '/subjects', 1);
                // this.addSubItem(schoolSetup, 'Classes/Sections', '/classes', 1);
                this.addSubItem(schoolSetup, 'Accounts', '/accounts', 1);
                this.addSubItem(schoolSetup, 'User Accounts', '/setups/user-accounts', 1);
                this.addSubItem(schoolSetup, 'Sessions', '/setups/sessions', 1);
            } else if (schoolUserAccount.role === 2) {
                // Teacher
                const dashboard = this.addItem('Dashboard', 'dashboard', '/dashboard', 1);

                const students = this.addItem('Students', 'group', null, 2);
                this.addSubItem(students, 'Students', '/students', 1);

                const examinations = this.addItem('Examinations', 'trending_up', null, 2);
                this.addSubItem(examinations, 'Marks', '/examinations/marks', 1);
                this.addSubItem(examinations, 'Results', '/examinations/results', 1);

                const events = this.addItem('Events', 'event', null, 2);
                this.addSubItem(events, 'Upcoming', '/events/upcoming', 1);
                this.addSubItem(events, 'Calendar', '/events/calendar', 1);

                const studentAttendance = this.addItem('Student Attendance', 'pan_tool', '/attendance/report', 3);
                this.addSubItem(studentAttendance, 'Attendance register', '/attendance/register', 1);
                this.addSubItem(studentAttendance, 'Attendance Report', '/attendance/report', 1);
            } else {
                // Custom user
            }
        } else if (userType === 2) {
            // TODO: Parent
            const dashboard = this.addItem('Dashboard', 'dashboard', '/dashboard', 1);

            const studentAccounts = this.addItem('Student Accounts', 'account_balance_wallet', null, 2);
            this.addSubItem(studentAccounts, 'Payments', '/accounts', 1);
            this.addSubItem(studentAccounts, 'Pay', '/accounts/pay', 1);
            this.addSubItem(studentAccounts, 'Statement', '/accounts/statement', 1);

            const studentExaminations = this.addItem('Examinations', 'trending_up', null, 2);
            this.addSubItem(studentExaminations, 'Results', '/examinations/results', 1);
            this.addSubItem(studentExaminations, 'Report', '/examinations/results', 1);

            const studentEvents = this.addItem('Events', 'event', null, 2);
            this.addSubItem(studentEvents, 'Upcoming', '/events/upcoming', 1);
            this.addSubItem(studentEvents, 'Calendar', '/events/calendar', 1);

            const studentAttendance = this.addItem('Student Attendance', 'pan_tool', '/attendance/report', 3);
            // this.addSubItem(studentAttendance, 'Add Student', '/attendance/report', 1);
        } else {
            // TODO: general admin
            const dashboard = this.addItem('Dashboard', 'home', '/dashboard', 1);
            const schools = this.addItem('Schools', 'home', '/dashboard', 1);
        }
        this.publishChanges();
    }

    addItem(name: string, icon: string, route: any, position: number, badge?: string, badgeColor?: string, customClass?: string) {
        const item = new SidenavItem({
            name: name,
            icon: icon,
            route: route,
            subItems: [],
            position: position || 99,
            badge: badge || null,
            badgeColor: badgeColor || null,
            customClass: customClass || null
        });

        this._items.push(item);
        this._itemsSubject.next(this._items);

        return item;
    }

    addSubItem(parent: SidenavItem, name: string, route: any, position: number) {
        const item = new SidenavItem({
            name: name,
            route: route,
            parent: parent,
            subItems: [],
            position: position || 99
        });

        parent.subItems.push(item);
        this._itemsSubject.next(this._items);

        return item;
    }

    removeItem(item: SidenavItem) {
        const index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
        }

        this._itemsSubject.next(this._items);
    }

    isOpen(item: SidenavItem) {
        return (this._currentlyOpen.indexOf(item) !== -1);
    }

    toggleCurrentlyOpen(item: SidenavItem) {
        let currentlyOpen = this._currentlyOpen;
        if (this.isOpen(item)) {
            if (currentlyOpen.length > 1) {
                currentlyOpen.length = this._currentlyOpen.indexOf(item);
            } else {
                currentlyOpen = [];
            }
        } else {
            currentlyOpen = this.getAllParents(item);
        }

        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    }

    getAllParents(item: SidenavItem, currentlyOpen: SidenavItem[] = []) {
        currentlyOpen.unshift(item);

        if (item.hasParent()) {
            return this.getAllParents(item.parent, currentlyOpen);
        } else {
            return currentlyOpen;
        }
    }

    nextCurrentlyOpen(currentlyOpen: SidenavItem[]) {
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    }

    nextCurrentlyOpenByRoute(route: string) {
        const currentlyOpen = [];

        const item = this.findByRouteRecursive(route, this._items);

        // if (item && item.hasParent()) {
        //   currentlyOpen = this.getAllParents(item);
        // } else if (item) {
        //   currentlyOpen = [item];
        // }
        //
        // this.nextCurrentlyOpen(currentlyOpen);
    }

    findByRouteRecursive(route: string, collection: SidenavItem[]) {
        let result = collection.filter((item) => {
            if (item.route === route) {
                return item;
            }
        });


        if (!result) {
            collection.forEach((item) => {
                if (item.hasSubItems()) {
                    const found = this.findByRouteRecursive(route, item.subItems);

                    if (found) {
                        result = found;
                        return false;
                    }
                }
            });
        }

        return result;
    }

    get currentlyOpen() {
        return this._currentlyOpen;
    }

    getSidenavItemByRoute(route) {
        return this.findByRouteRecursive(route, this._items);
    }

    getSidenavItems(): SidenavItem[] {
        return this._items;
    }

    getSidenavItemsObservable(): Observable<SidenavItem[]> {
        this.setupMenu();
        return new Observable<SidenavItem[]>((observer: Observer<SidenavItem[]>) => {
            this._sidenavItemsObservers.push(observer);
            observer.next(this._items);
            return () => {
                this._sidenavItemsObservers = this._sidenavItemsObservers.filter((obs) => obs !== observer);
            };
        });
    }

}
