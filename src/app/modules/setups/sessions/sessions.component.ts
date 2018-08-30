import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SessionFormComponent} from './session-form/session-form.component';
import {SchoolSession} from '../../../shared/models/school-session';
import {SchoolSessionsService} from '../../../shared/services/school-sessions.service';

@Component({
    selector: 'app-sessions',
    templateUrl: './sessions.component.html',
    styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
    schoolSessionsTable = {
        query: '',
        loading: false,
        columns: [
            {
                title: 'Name',
                key: 'name',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Start Date',
                key: 'start',
                width: 100
            },
            {
                title: 'End Date',
                key: 'end',
                width: 100
            },
            {
                title: 'Status',
                key: 'end',
                width: 100,
                formatter: this.sessionStatusFormatter
            },
            {
                type: 'actions',
                actions: [
                    {
                        name: 'Edit',
                        icon: 'edit'
                    },
                    {
                        name: 'Activate',
                        icon: 'list'
                    }
                ]
            }
        ],
        data: []
    };

    constructor(private dialog: MatDialog, private schoolSessionsService: SchoolSessionsService) {
    }

    ngOnInit() {
        this.schoolSessionsTable.data.push({start: new Date(), end: new Date(), name: 'Test'});
        this.getSessions();
    }

    sessionStatusFormatter(data: any) {
        return '<mat-chip color="primary">Status</mat-chip>';
    }

    editSchoolSession(row: any): void {
        this.dialog.open(SessionFormComponent, {
            width: '500px',
            data: {schoolSession: row}
        });
    }

    addSchoolSession(): void {
        this.dialog.open(SessionFormComponent, {
            width: '500px',
            data: {schoolSession: new SchoolSession()}
        });
    }

    private getSessions() {
        this.schoolSessionsTable.loading = true;
        this.schoolSessionsService
            .all()
            .subscribe(schoolSessions => {
                this.schoolSessionsTable.loading = false;
                this.schoolSessionsTable.data = schoolSessions;
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }
}
