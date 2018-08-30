import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../../shared/services/students.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
    studentsTable = {
        loading: false,
        query: '',
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'Reg No.',
                key: 'regNo',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Surname',
                key: 'surname',
                width: 100
            },
            {
                title: 'Other name',
                key: 'otherNames',
                width: 100
            },
            {
                title: 'Current Class',
                key: 'classLevelSection.classLevel.name,||,classLevelSection.name',
                width: 20
            },
            {
                title: 'Actions',
                type: 'actions',
                actions: [
                    {
                        'icon': 'edit',
                        'name': 'Edit',
                        'color': 'accent',
                        'raised': false,
                        'clicked': this.editStudent
                    },
                    {
                        'icon': 'remove_red_eye',
                        'name': 'View',
                        'color': 'primary',
                        'raised': false,
                        'clicked': this.test
                    },
                    {
                        'icon': 'delete',
                        'name': 'Delete',
                        'color': 'warn',
                        'raised': false,
                        'clicked': this.test
                    }
                ],
                width: 200
            }
        ],
        data: []
    };

    constructor(private studentsService: StudentsService, private router: Router) {
    }

    ngOnInit() {
        this.getStudents();
    }

    editStudent(row: any): void {
        // console.log(row);
        // this.router.navigate(['/teachers'])
    }

    test(row: any): void {
        alert(JSON.stringify(row));
    }

    actionClick(event: any): void {
        const row = event.row;
        const action = event.action;
        // console.log(this.router);
        switch (action.name) {
            case 'Edit':
                this.router.navigate(['/students/' + row.id + '/edit']);
                break;
            case 'View':
                this.router.navigate(['/students/' + row.id + '/view']);
                break;
            default:
                break;
        }
    }

    getStudents(): void {
        this.studentsTable.loading = true;
        this.studentsService
            .all()
            .subscribe(students => {
                this.studentsTable.data = students;
                this.studentsTable.loading = false;
            }, error => {
                this.studentsTable.loading = false;
                console.log(error);
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }

}
