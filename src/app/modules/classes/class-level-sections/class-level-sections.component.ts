import {Component, OnInit} from '@angular/core';
import {ClassLevelSectionsService} from '../../../shared/services/class-level-sections.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ClassLevelSectionFormComponent} from '../class-level-section-form/class-level-section-form.component';
import {ClassLevelSection} from '../../../shared/models/class-level-section';

@Component({
    selector: 'app-class-level-sections',
    templateUrl: './class-level-sections.component.html',
    styleUrls: ['./class-level-sections.component.scss']
})
export class ClassLevelSectionsComponent implements OnInit {

    classSectionsTable = {
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'Class Level',
                key: 'classLevel.name',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Section',
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
                        'name': 'Subject Teachers',
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
    classLevelSectionFormDialog: MatDialogRef<ClassLevelSectionFormComponent>;

    constructor(private dialog: MatDialog, private classLevelSectionsService: ClassLevelSectionsService) {
    }

    ngOnInit() {
        this.getClassLevelSections();
    }

    getClassLevelSections(): void {
        this.classSectionsTable.loading = true;
        this.classLevelSectionsService
            .all()
            .subscribe(classLevels => {
                this.classSectionsTable.data = classLevels;
                this.classSectionsTable.loading = false;
            }, error2 => {
                console.log(error2);
                this.classSectionsTable.loading = false;
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }

    actionClick(event: any): void {
        const row = event.row;
        const action = event.action;
        // console.log(this.router);
        switch (action.name) {
            case 'Edit':
                this.editClassLevelSection(row);
                break;
            default:
                break;
        }
    }

    addClassLevelSection(): void {
        this.classLevelSectionFormDialog = this.dialog.open(ClassLevelSectionFormComponent,
            {
                width: '500px',
                data: {classLevelSection: new ClassLevelSection()}
            });
        this.classLevelSectionFormDialog
            .afterClosed()
            .subscribe(() => {
                this.getClassLevelSections();
            });
    }

    editClassLevelSection(row: any): void {
        this.classLevelSectionFormDialog = this.dialog.open(ClassLevelSectionFormComponent,
            {
                width: '500px',
                data: {classLevelSection: row}
            });
    }
}
