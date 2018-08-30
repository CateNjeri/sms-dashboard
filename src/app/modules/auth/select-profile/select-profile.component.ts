import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {UserAccountProfile} from '../../../shared/models/user-account-profile';
import {UserAccount} from '../../../shared/models/user-account';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {School} from '../../../shared/models/school';

@Component({
    selector: 'app-select-profile',
    templateUrl: './select-profile.component.html',
    styleUrls: ['./select-profile.component.scss']
})
export class SelectProfileComponent implements OnInit {
    userAccountProfiles: UserAccountProfile[];
    userAccount: UserAccount;

    isProcessing: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.userAccount = this.authService.getCurrentUser();
        this.userAccountProfiles = this.userAccount.userAccountProfiles;
    }

    chooseAccountProfile(userAccountProfile: UserAccountProfile): void {
        this.isProcessing = true;
        this.authService.setCurrentUserProfile(userAccountProfile)
            .subscribe(u => {
                this.isProcessing = false;
                this.router.navigate(['/dashboard']);
            });
    }

    logout(): void {
        this.authService
            .signOut()
            .then(e => {
                this.router.navigate(['/auth/login']);
            });
    }

    getSchoolLogoUrl(school: School): String | null {
        if (school.logo) {
            return environment.baseFilesApiUrl + school.logo;
        }
        return null;
    }
}
