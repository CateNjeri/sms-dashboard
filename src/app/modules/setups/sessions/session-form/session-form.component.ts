import {Component, Inject, OnInit} from '@angular/core';
import {SchoolSession} from '../../../../shared/models/school-session';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SchoolSessionsService} from '../../../../shared/services/school-sessions.service';

@Component({
    selector: 'app-session-form',
    templateUrl: './session-form.component.html',
    styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
    schoolSession: SchoolSession;
    isProcessing: boolean = false;

    constructor(public dialogRef: MatDialogRef<SessionFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private schoolSessionsService: SchoolSessionsService) {
        this.schoolSession = data.schoolSession;
        if (!this.schoolSession.id) {
            this.schoolSession.start = new Date();
        }
    }

    ngOnInit() {
    }

    save() {
        if (this.schoolSession.id) {
            this.update();
        } else {
            this.create();
        }
    }

    endDateFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return d >= this.schoolSession.start;
    };

    private create() {
        this.isProcessing = true;
        this.schoolSessionsService.create(this.schoolSession)
            .subscribe(schoolSession => {
                this.isProcessing = false;
                this.dialogRef.close();
                this.schoolSession = schoolSession;
            });
    }

    private update() {
        this.isProcessing = true;
        this.schoolSessionsService.update(this.schoolSession)
            .subscribe(schoolSession => {
                this.isProcessing = false;
                this.dialogRef.close();
                this.schoolSession = schoolSession;
            });
    }
}
