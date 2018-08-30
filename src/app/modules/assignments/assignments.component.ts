import {Component, OnInit} from '@angular/core';
import {AssignmentsService} from '../../shared/services/assignments.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
    assignmentsTable = {
        query: '',
        loading: false,
        columns: [
            {
                title: 'Title',
                key: 'title',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Class Level Section',
                key: 'classLevelSection.name',
                width: 100
            },
            {
                title: 'Subject',
                key: 'subject.name',
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
                        name: 'View',
                        icon: 'list'
                    }
                ]
            }
        ],
        data: []
    };

    constructor(private assignmentsService: AssignmentsService,
                private router: Router) {
    }

    ngOnInit() {
        this.getAssignments();
    }

    private getAssignments() {
        this.assignmentsTable.loading = true;
        this.assignmentsService
            .all()
            .subscribe(assignments => {
                this.assignmentsTable.data = assignments;
            });
    }

    actionClick(event) {
        if (event.action.name === 'Edit') {
            this.router.navigate(['/assignments/', event.row.id, 'edit']);
        } else if (event.action.name === 'View') {
            this.router.navigate(['/assignments/', event.row.id, 'view']);
        }
    }

    addAssignment() {
        this.router.navigate(['/assignments/add']);
    }

    onSelectChange(event): void {
        console.log(event);
    }
}
