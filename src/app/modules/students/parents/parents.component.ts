import {Component, OnInit} from '@angular/core';
import {ParentsService} from '../../../shared/services/parents.service';

@Component({
    selector: 'app-parents',
    templateUrl: './parents.component.html',
    styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
    parentsTable = {
        loading: false,
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'ID Number.',
                key: 'idNumber',
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
                title: 'Phone number',
                key: 'phoneNumber',
                width: 100
            },
            {
                title: 'Actions',
                type: 'actions',
                actions: [
                    {
                        'icon': 'mail',
                        'name': 'Send message',
                        'color': 'accent',
                    },
                    {
                        'icon': 'list',
                        'name': 'Students',
                        'color': 'primary',
                    }
                ],
                width: 200
            }
        ],
        data: []
    };

    constructor(private parentsService: ParentsService) {
    }

    ngOnInit() {
        this.getParents();
    }

    getParents(): void {
        this.parentsTable.loading = true;
        this.parentsService
            .all()
            .subscribe(parents => {
                this.parentsTable.data = parents;
                this.parentsTable.loading = false;
            }, error => {
                // TODO:
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }

}
