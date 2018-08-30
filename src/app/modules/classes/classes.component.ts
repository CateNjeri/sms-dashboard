import {Component, OnInit} from '@angular/core';
import {ClassLevelsService} from '../../shared/services/class-levels.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ClassLevelFormComponent} from './class-level-form/class-level-form.component';
import {ClassLevel} from '../../shared/models/class-level';

@Component({
    selector: 'app-subjects',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
    classesTable = {
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'Class Level',
                key: 'name',
                width: 117,
                fixed: 'left'
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
                        'name': 'Students',
                        'color': 'accent',
                        'raised': false
                    }
                ]
            }
        ],
        data: [],
        loading: false
    };
    private classLevelFormDialog: MatDialogRef<ClassLevelFormComponent>;

    constructor(private classLevelsService: ClassLevelsService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.getClassLevels();
    }

    getClassLevels(): void {
        this.classesTable.loading = true;
        this.classLevelsService
            .all()
            .subscribe(classLevels => {
                this.classesTable.loading = false;
                this.classesTable.data = classLevels;
            }, error2 => {
                this.classesTable.loading = false;
                console.log(error2);
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }

    addSubject() {
        this.classLevelFormDialog = this.dialog.open(ClassLevelFormComponent, {
            width: '500px',
            data: {classLevel: new ClassLevel()}
        });
        this.classLevelFormDialog.afterClosed()
            .subscribe(() => {
                this.getClassLevels();
            });
    }

    editClassLevel(row): void {
        this.classLevelFormDialog = this.dialog.open(ClassLevelFormComponent, {
            width: '500px',
            data: {classLevel: row}
        });
        this.classLevelFormDialog.afterClosed()
            .subscribe(() => {
                this.getClassLevels();
            });
    }

    actionClick(event: any): void {
        const row = event.row;
        const action = event.action;
        // console.log(this.router);
        switch (action.name) {
            case 'Edit':
                this.editClassLevel(row);
                break;
            default:
                break;
        }
    }
}
