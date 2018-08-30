import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../core/auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NotificationService} from '../../../component/notification/notification.service';
import {MatSnackBar} from '@angular/material';

// import {AuthService} from "../../core/auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    isProcessing: boolean = false;
    userForm: FormGroup;
    formErrors = {
        'email': '',
        'password': ''
    };
    validationMessages = {
        'email': {
            'required': 'Email is required',
            'email': 'Invalid email'
        },
        'password': {
            'required': 'Password is required',
            'pattern': 'Must include',
            'minlength': 'At least 6 characters',
            'maxlength': 'Maximum of 25 characters',
        }
    };
    loginDetails = {
        username: '',
        password: ''
    };
    redirectUri: String = null;

    constructor(private router: Router,
                private fb: FormBuilder,
                private auth: AuthService,
                private snackbar: MatSnackBar,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.buildForm();
        this.activatedRoute.queryParamMap
            .subscribe(params => {
                if (params.get('returnUrl')) {
                    this.redirectUri = params.get('returnUrl');
                    // alert(this.redirectUri);
                }
            });
    }

    buildForm() {
        this.userForm = this.fb.group({
            'email': ['', [
                Validators.required,
                Validators.email
            ]
            ],
            'password': ['', [
                Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                Validators.minLength(6),
                Validators.maxLength(25)
            ]
            ],
        });

        this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        if (!this.userForm) {
            return;
        }
        const form = this.userForm;
        for (const field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    login() {
        this.isProcessing = true;
        this.auth.login(this.loginDetails.username, this.loginDetails.password)
            .subscribe(userAccount => {
                this.isProcessing = false;
                this.auth.setActiveUser(userAccount);
                this.snackbar.open('Login successful', 'Okay', {
                    duration: 2000,
                });
                if (userAccount.userAccountProfiles.length === 1) {
                    this.auth.setCurrentUserProfile(userAccount.userAccountProfiles[0])
                        .subscribe(u => {
                            this.isProcessing = false;
                            if (!this.redirectUri) {
                                // this.redirectUri = '/dashboard';
                            }
                            this.router.navigate(['/dashboard']);
                        });
                } else if (userAccount.userAccountProfiles.length > 1) {
                    // TODO: navigate to choose account
                    if (this.redirectUri) {
                        // this.router.navigate(['/auth/accounts/choose'], {queryParams: {redirectUrl: this.redirectUri}});
                        this.router.navigate(['/auth/accounts/choose']);
                    } else {
                        this.router.navigate(['/auth/accounts/choose']);
                    }
                } else {
                    this.router.navigate(['/auth/accounts/choose']);
                }
            }, error => {
                this.isProcessing = false;
                this.snackbar.open('Login failed', '', {
                    duration: 2000,
                });
                /* this.notificationService.error('Please check your username and password.',
                     'Authentication Failed');*/
                // console.log(error);
            }, () => {
                this.isProcessing = false;
            });
    }

    private afterSignIn() {
        this.router.navigate(['/']);
    }
}
