import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {School} from '../../../shared/models/school';
import {AuthService} from '../../../core/auth.service';
import {SchoolsService} from '../../../shared/services/schools.service';
import {environment} from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-school-profile',
    templateUrl: './school-profile.component.html',
    styleUrls: ['./school-profile.component.scss']
})
export class SchoolProfileComponent implements OnInit {
    school: School;
    isProcessing: boolean = false;
    isProcessingUpload: boolean = false;

    selectedLogo: File = null;
    previewLogo: String = null;

    @ViewChild('uploadLogoInput')
    uploadLogoInput: ElementRef;

    constructor(private authService: AuthService,
                private schoolsService: SchoolsService,
                private matSnackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.school = this.authService.getSchool();
    }

    save(): void {
        this.isProcessing = true;
        this.schoolsService.update(this.school)
            .subscribe(school => {
                this.authService.setCurrentSchool(school);
                this.isProcessing = false;
                this.matSnackBar.open('School details updated', '', {
                    duration: 2000
                });
            }, error2 => {
                this.isProcessing = false;
            });
    }

    selectLogo(): void {
        this.uploadLogoInput.nativeElement.click();
    }

    uploadLogo(): void {
        this.isProcessingUpload = true;
        this.schoolsService.uploadLogo(this.selectedLogo)
            .subscribe(logo => {
                this.matSnackBar.open('School logo uploaded', '', {
                    duration: 2000
                });
                this.isProcessingUpload = false;
                this.previewLogo = null;
                this.school.logo = logo.path;
                this.authService.setCurrentSchool(this.school);
            }, error2 => {
                console.log(error2);
                this.isProcessingUpload = false;
            }, () => {
                this.isProcessingUpload = false;
            });
    }

    logoSelected(event): void {
        this.selectedLogo = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            this.previewLogo = reader.result;
        };
        reader.readAsDataURL(this.selectedLogo);
    }

    getLogoUrl(): String | null {
        if (this.school.logo) {
            return environment.baseFilesApiUrl + this.school.logo;
        }
        return null;
    }

}
