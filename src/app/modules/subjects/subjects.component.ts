import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SubjectFormComponent} from './subject-form/subject-form.component';
import {Subject} from '../../shared/models/subject';
import {SubjectsService} from '../../shared/services/subjects.service';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
    subjectsTable = {
        query: '',
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'Subject Code',
                key: 'code',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Subject',
                key: 'name',
                width: 100
            },
            {
                title: 'Compulsory',
                key: 'compulsory',
                width: 100
            }, {
                type: 'actions',
                actions: [
                    {
                        'icon': 'edit',
                        'name': 'Edit',
                        'color': 'accent',
                        'raised': false
                    },
                    {
                        'icon': 'list',
                        'name': 'Grading',
                        'color': 'accent',
                        'raised': false
                    }
                ]
            }
        ],
        data: []
    };

    constructor(private dialog: MatDialog, private subjectsService: SubjectsService) {
    }

    ngOnInit() {
        this.getSubjects();
    }

    onSelectChange(event): void {
        console.log(event);
    }

    addSubject(): void {
        const dialogRef = this.dialog.open(SubjectFormComponent, {
            width: '500px',
            data: {subject: new Subject()}
        });
    }

    editSubject(row: any): void {
        this.dialog.open(SubjectFormComponent, {
            width: '500px',
            data: {subject: row}
        });
    }

    actionClick(event: any): void {
        const row = event.row;
        const action = event.action;
        // console.log(this.router);
        switch (action.name) {
            case 'Edit':
                this.editSubject(row);
                break;
            default:
                break;
        }
    }

    getSubjects(): void {
        this.subjectsService
            .all()
            .subscribe(subjects => {
                this.subjectsTable.data = subjects;
            }, error => {
                console.log(error);
            });
    }
}
