import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClassLevelsService} from '../../../shared/services/class-levels.service';
import {ClassLevel} from '../../../shared/models/class-level';

@Component({
    selector: 'app-class-level-form',
    templateUrl: './class-level-form.component.html',
    styleUrls: ['./class-level-form.component.scss']
})
export class ClassLevelFormComponent implements OnInit {
    classLevel: ClassLevel;
    isProcessing: boolean = false;

    constructor(public dialogRef: MatDialogRef<ClassLevelFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private classLevelsService: ClassLevelsService) {
        this.classLevel = data.classLevel;
    }

    ngOnInit() {
    }

    save(): void {
        this.isProcessing = true;
        if (!this.classLevel.id) {
            this.create();
        } else {
            this.update();
        }
    }

    create(): void {
        this.classLevelsService.create(this.classLevel)
            .subscribe(subject => {
                this.classLevel = subject;
                this.isProcessing = false;
            }, error => {
                this.isProcessing = false;
            }, () => {
                this.dialogRef.close();
            });
    }

    update(): void {
        this.classLevelsService.update(this.classLevel)
            .subscribe(subject => {
                this.classLevel = subject;
                this.isProcessing = false;
            }, error => {
                this.isProcessing = false;
            }, () => {
                this.dialogRef.close();
            });
    }

}
