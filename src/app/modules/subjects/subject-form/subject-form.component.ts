import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Subject} from '../../../shared/models/subject';
import {SubjectsService} from '../../../shared/services/subjects.service';
import {error} from 'util';

@Component({
    selector: 'app-subject-form',
    templateUrl: './subject-form.component.html',
    styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
    subject: Subject;
    isProcessing: boolean = false;

    constructor(public dialogRef: MatDialogRef<SubjectFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private subjectsService: SubjectsService) {
        this.subject = data.subject;
    }

    ngOnInit() {
    }

    save(): void {
        this.isProcessing = true;
        if (this.subject.id) {
            this.update();
        } else {
            this.create();
        }
    }

    create(): void {
        this.subjectsService.create(this.subject)
            .subscribe(subject => {
                this.subject = subject;
                this.isProcessing = false;
                this.dialogRef.close();
            }, error2 => {
                this.isProcessing = false;
            });
    }

    update(): void {
        this.subjectsService.update(this.subject)
            .subscribe(subject => {
                this.subject = subject;
                this.isProcessing = false;
                this.dialogRef.close();
            }, error2 => {
                this.isProcessing = false;
            });
    }

}
