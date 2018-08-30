import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserAccount} from '../shared/models/user-account';
import {BaseService} from './base.service';
// import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {School} from '../shared/models/school';
import {Student} from '../shared/models/student';
import {UserAccountProfile} from '../shared/models/user-account-profile';
import {Observer} from 'rxjs/Observer';
import {StorageService} from './storage.service';

@Injectable()
export class AuthService extends BaseService {

    authState: any = null;
    userRef: any;

    private activeStudentSubscribers: Array<Observer<Student>> = [];
    private activeUserProfileSubscribers: Array<Observer<UserAccountProfile>> = [];
    private activeUserTypeSubscribers: Array<Observer<number>> = [];

    constructor(protected http: Http, private router: Router, private storageService: StorageService) {
        super(http);
    }

    get authenticated() {
        return this.authState !== null;
    }

    get currentUser() {
        return this.authenticated ? this.authState : null;
    }

    get currentUserObservable() {
        return new Promise((resolve) => {
            resolve(4);
        });
    }

    get currentUserId(): string {
        return this.authenticated ? 'hshsh' : '';
    }

    get currentUserName(): string {
        if (true) {
            return 'Admin';
        }
    }

    signOut() {
        return new Promise((resolve) => {
            localStorage.setItem(environment.userKey, null);
            localStorage.setItem(environment.currentUserProfileKey, null);
            localStorage.setItem(environment.currentStudentKey, null);
            this.router.navigate(['/auth/login']);
            resolve();
        });
    }

    setActiveUser(userAccount: UserAccount): void {
        this.storageService.store(environment.userKey, JSON.stringify(userAccount));
    }

    login(username: string, password: string): Observable<UserAccount> {
        return this.post('auth/login', {username: username, password: password});
    }

    getCurrentUser(): UserAccount {
        // return new UserAccount();
        return JSON.parse(this.storageService.read(environment.userKey));
    }

    getCurrentUserProfile(): UserAccountProfile {
        // return new UserAccount();
        return JSON.parse(this.storageService.read(environment.currentUserProfileKey));
    }

    getCurrentUserProfileObservable(): Observable<UserAccountProfile> {
        // return new UserAccount();
        // return JSON.parse(localStorage.getItem(environment.currentUserProfileKey));
        return new Observable<UserAccountProfile>((observer: Observer<UserAccountProfile>) => {
            this.activeUserProfileSubscribers.push(observer);
            observer.next(this.getCurrentUserProfile());
            return () => {
                this.activeUserProfileSubscribers = this.activeUserProfileSubscribers.filter((obs) => obs !== observer);
            };
        });
    }

    setCurrentUserProfile(userAccountProfile: UserAccountProfile): Observable<UserAccountProfile> {
        // return new UserAccount();
        return Observable.create(observer => {
            this.storageService.store(environment.currentUserProfileKey, JSON.stringify(userAccountProfile));
            observer.next(userAccountProfile);
            this.activeUserProfileSubscribers.forEach((sub) => {
                try {
                    sub.next(userAccountProfile);
                } catch (e) {
                    // TODO
                }
            });
        });
        /* return new Observable((resolve) => {
             localStorage.setItem(environment.currentUserProfileKey, JSON.stringify(userAccountProfile));
             resolve()
         }); */
    }

    getCurrentUserType(): number {
        // return new UserAccount();
        return this.getCurrentUserProfile().type;
    }

    getCurrentUserTypeObservable(): Observable<number> {
        // return new UserAccount();
        return new Observable<number>((observer: Observer<number>) => {
            this.activeUserTypeSubscribers.push(observer);
            observer.next(this.getCurrentUserType());
            return () => {
                this.activeUserTypeSubscribers = this.activeUserTypeSubscribers.filter((obs) => obs !== observer);
            };
        });
    }

    getCurrentSchoolUserPermissions(): any {
        // return new UserAccount();
        return this.getCurrentUserProfile().type;
    }

    getSchoolId(): number {
        return this.getSchool().id;
    }

    getSchool(): School {
        return this.getCurrentUserProfile().schoolUserAccount.school;
    }

    setActiveStudent(student: Student): void {
        this.storageService.store(environment.currentStudentKey, JSON.stringify(student));
        this.activeStudentSubscribers.forEach((sub) => {
            try {
                sub.next(student);
            } catch (e) {
                // TODO
            }
        });
    }

    getCurrentStudent(): Student {
        return JSON.parse(this.storageService.read(environment.currentStudentKey));
    }

    getCurrentStudentObservable(): Observable<Student> {
        return new Observable<Student>((observer: Observer<Student>) => {
            this.activeStudentSubscribers.push(observer);
            observer.next(this.getCurrentStudent());
            return () => {
                this.activeStudentSubscribers = this.activeStudentSubscribers.filter((obs) => obs !== observer);
            };
        });
    }

    setCurrentSchool(school: School): void {
        const currentUserProfile = this.getCurrentUserProfile();
        if (currentUserProfile.type === 1) {
            currentUserProfile.schoolUserAccount.school = school;
        }
        this.setCurrentUserProfile(currentUserProfile);
        const currentUser = this.getCurrentUser();
        for (const userProfile of currentUser.userAccountProfiles) {
            if (userProfile.type === 1) {
                userProfile.schoolUserAccount.school = school;
            }
        }
        this.setActiveUser(currentUser);
    }
}
