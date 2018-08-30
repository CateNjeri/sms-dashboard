import {Component, OnInit} from '@angular/core';
import {SchoolUserAccountsService} from '../../../shared/services/school-user-accounts.service';

@Component({
    selector: 'app-user-accounts',
    templateUrl: './user-accounts.component.html',
    styleUrls: ['./user-accounts.component.scss']
})
export class UserAccountsComponent implements OnInit {
    userAccountsTable = {
        query: '',
        loading: false,
        columns: [
            {
                title: 'Name',
                width: 117,
                formatter: this.userAccountNameFormatter,
                fixed: 'left'
            },
            {
                title: 'Role',
                formatter: this.userAccountRoleFormatter,
                width: 100
            },
            {
                title: 'Status',
                width: 100,
                formatter: this.userStatusFormatter
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

    constructor(private schoolUserAccountsService: SchoolUserAccountsService) {
    }

    ngOnInit() {
        this.getUsers();
    }

    userStatusFormatter() {
        return '<mat-chip color="primary">Active</mat-chip>';
    }

    userAccountNameFormatter(data: any): string {
        if (data.role === 1) {
            return 'School Administrator';
        } else if (data.role === 2) {
            // Teacher
            if (!data.teacher) {
                return 'Teacher';
            }
            return data.teacher.surname + ' ' + data.teacher.otherNames;
        } else {
            return 'Custom user';
        }
    }

    userAccountRoleFormatter(data: any): string {
        if (data.role === 1) {
            return 'School Administrator';
        } else if (data.role === 2) {
            // Teacher
            return 'Teacher';
        } else {
            return 'Custom user';
        }
    }

    private getUsers() {
        this.userAccountsTable.loading = true;
        this.schoolUserAccountsService.all()
            .subscribe(schoolUserAccounts => {
                this.userAccountsTable.data = schoolUserAccounts;
                this.userAccountsTable.loading = false;
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }
}
