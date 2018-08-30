import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ClassLevelsService} from '../../../shared/services/class-levels.service';
import {ClassLevel} from '../../../shared/models/class-level';
import {Teacher} from '../../../shared/models/teacher';
import {ExaminationsService} from '../../../shared/services/examinations.service';
import {Examination} from '../../../shared/models/examination';

@Component({
    selector: 'app-examination-form',
    templateUrl: './examination-form.component.html',
    styleUrls: ['./examination-form.component.scss']
})
export class ExaminationFormComponent implements OnInit {
    examination: Examination;
    isProcessing: boolean = false;
    classLevels: ClassLevel[];
    teachers: Teacher[];

    constructor(public dialogRef: MatDialogRef<ExaminationFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private examinationsService: ExaminationsService,
                private classLevelsService: ClassLevelsService) {
        this.examination = data.examination;
    }

    ngOnInit() {
        this.getClassLevels();
        // this.getTeachers();
    }

    getClassLevels(): void {
        this.classLevelsService.all()
            .subscribe(classLevels => {
                this.classLevels = classLevels;
            });
    }

    save(): void {
        this.isProcessing = true;
        if (this.examination.id) {
            this.update();
        } else {
            this.create();
        }
    }

    create(): void {
        this.examinationsService.create(this.examination)
            .subscribe(examination => {
                this.examination = examination;
                this.isProcessing = false;
                this.dialogRef.close();
            }, error2 => {
                this.isProcessing = false;
            }, () => {
                this.isProcessing = false;
            });
    }

    update(): void {
        this.examinationsService.update(this.examination)
            .subscribe(examination => {
                this.examination = examination;
                this.isProcessing = false;
                this.dialogRef.close();
            }, error2 => {
                this.isProcessing = false;
            }, () => {
                this.isProcessing = false;
            });
    }

}
