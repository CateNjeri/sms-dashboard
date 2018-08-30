import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/auth.service';
import {EducationSystemLevel} from '../../../shared/models/education-system-level';
import {School} from '../../../shared/models/school';
import {EducationSystem} from '../../../shared/models/education-system';
import {EducationSystemService} from '../../../shared/services/education-system.service';
import {EducationSystemLevelsService} from '../../../shared/services/education-system-levels.service';
import {UserAccount} from '../../../shared/models/user-account';
import {SchoolsService} from '../../../shared/services/schools.service';
import {SchoolUserAccountsService} from '../../../shared/services/school-user-accounts.service';
import {SchoolUserAccount} from '../../../shared/models/school-user-account';
import {UserAccountProfile} from '../../../shared/models/user-account-profile';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    school: School;
    educationSystems: EducationSystem[] = [];
    educationSystemLevels: EducationSystemLevel[] = [];
    selectedEducationSystemLevels: EducationSystemLevel[] = [];

    schoolUserAccount: SchoolUserAccount;
    isProcessing: boolean = false;

    signupStep: number = 0;

    constructor(private router: Router,
                private authService: AuthService, private educationSystemsService: EducationSystemService,
                private educationSystemLevelsService: EducationSystemLevelsService,
                private schoolsService: SchoolsService,
                private schoolUserAccountsService: SchoolUserAccountsService) {
    }

    ngOnInit() {
        this.school = new School();
        this.schoolUserAccount = new SchoolUserAccount();
        this.schoolUserAccount.userAccountProfile = new UserAccountProfile();
        this.schoolUserAccount.userAccountProfile.userAccount = new UserAccount();
        this.educationSystemsService.getAll()
            .subscribe(educationSystems => {
                this.educationSystems = educationSystems;
            }, error => {
                console.log(error);
            });
        this.educationSystemLevelsService.getAll()
            .subscribe(educationSystemLevels => {
                this.educationSystemLevels = educationSystemLevels;
            }, error => {
                console.log(error);
            });
    }

    signUpWithEmail() {
        // this.auth.emailSignUp(this.email, this.password).then(() => this.afterSignIn());
    }

    sanitizeSchoolName() {
        this.school.name.toUpperCase().trim();
    }

    getEducationSystemLevels(event) {
        this.selectedEducationSystemLevels = [];
        // console.log(event);
        this.selectedEducationSystemLevels = this.educationSystemLevels
            .filter((educationSystemLevel: EducationSystemLevel) =>
                educationSystemLevel.educationSystem.id === event.value);
        // console.log(this.selectedEducationSystemLevels);
    }

    register() {
        this.isProcessing = true;
        this.schoolsService.register(this.school)
            .subscribe(school => {
                this.isProcessing = false;
                this.schoolUserAccount.userAccountProfile.userAccount.email = school.email;
                this.schoolUserAccount.school = school;
                this.schoolUserAccount.userAccountProfile.userAccount.username = this.school.name;
                this.signupStep = 1;
            }, error => {
                this.isProcessing = false;
                // console.log(error);
            });
    }

    private afterSignIn() {
        this.router.navigate(['/']);
    }

    registerUserAccount() {
        // TODO: Register user account
        this.isProcessing = true;
        this.schoolUserAccountsService.register(this.schoolUserAccount)
            .subscribe(userAccount => {
                // TODO: Save user and login
                this.isProcessing = false;
                this.authService.setActiveUser(userAccount);
                this.router.navigate(['/dashboard']);
            }, error2 => {
                console.log(error2);
                this.isProcessing = false;
            });
    }
}
