import {Component, OnInit} from '@angular/core';
import {TeachersService} from '../../shared/services/teachers.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
    teachersTable = {
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'Code',
                key: 'code',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Surname',
                key: 'surname',
                width: 100
            },
            {
                title: 'Other names',
                key: 'otherNames',
                width: 100
            },
            {
                title: 'Email',
                key: 'email',
                width: 100
            },
            {
                title: 'Actions',
                type: 'actions',
                actions: [
                    {
                        name: 'Edit',
                        icon: 'edit'
                    },
                    {
                        name: 'Subjects',
                        icon: 'list'
                    },
                    {
                        name: 'Login Details',
                        icon: 'lock'
                    },
                    {
                        name: 'Activate',
                        icon: ''
                    }
                ]
            }
        ],
        data: []
    };

    constructor(private teachersService: TeachersService, private router: Router) {
    }

    actionClick(event: any): void {
        const row = event.row;
        const action = event.action;
        // console.log(this.router);
        switch (action.name) {
            case 'Edit':
                this.router.navigate(['/teachers/' + row.id + '/edit']);
                break;
            case 'View':
                this.router.navigate(['/teachers/' + row.id + '/view']);
                break;
            default:
                break;
        }
    }

    ngOnInit() {
        this.teachersService.all()
            .subscribe(teachers => {
                this.teachersTable.data = teachers;
            }, error => {
                console.log(error);
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }

    save(): void {
    }

}
