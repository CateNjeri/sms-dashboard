import {Component, OnInit} from '@angular/core';
import {ExaminationFormComponent} from './examination-form/examination-form.component';
import {Examination} from '../../shared/models/examination';
import {MatDialog} from '@angular/material';
import {ExaminationsService} from '../../shared/services/examinations.service';

@Component({
    selector: 'app-examinations',
    templateUrl: './examinations.component.html',
    styleUrls: ['./examinations.component.scss']
})
export class ExaminationsComponent implements OnInit {
    examinationsTable = {
        query: '',
        columns: [
            {
                title: 'Name',
                key: 'name',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Class',
                key: 'classLevel.name',
                width: 100
            },
            {
                title: 'Session/Term',
                key: '',
                width: 100
            },
            {
                type: 'actions',
                actions: [
                    {
                        name: 'Edit',
                        icon: 'edit'
                    },
                    {
                        name: 'Results',
                        icon: 'list'
                    }
                ]
            }
        ],
        data: []
    };

    constructor(private dialog: MatDialog, private examinationsService: ExaminationsService) {
    }

    ngOnInit() {
        this.getExaminations();
    }

    onSelectChange(event): void {
        console.log(event);
    }

    addExamination(): void {
        const dialogRef = this.dialog.open(ExaminationFormComponent, {
            width: '500px',
            data: {examination: new Examination()}
        });
    }

    editExamination(row: any): void {
        this.dialog.open(ExaminationFormComponent, {
            width: '500px',
            data: {examination: row}
        });
    }

    getExaminations(): void {
        this.examinationsService
            .all()
            .subscribe(examinations => {
                this.examinationsTable.data = examinations;
            }, error => {
                console.log(error);
            });
    }

    actionClick(event): void {
        console.log(event);
        if (event.action.name === 'Edit') {
            this.editExamination(event.row);
        } else if (event.action.name === 'Results') {
            // TODO
        }
    }

}
