import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from '../../shared/services/events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    eventsTable = {
        loading: false,
        query: '',
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'Title',
                key: 'title',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Description',
                key: 'description',
                width: 100
            },
            {
                title: 'Start Date',
                key: 'startDate',
                width: 100
            },
            {
                title: 'Stop Date',
                key: 'stopDate',
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
                    },
                    {
                        'icon': 'remove_red_eye',
                        'name': 'View',
                        'color': 'primary',
                        'raised': false,
                    },
                    {
                        'icon': 'delete',
                        'name': 'Delete',
                        'color': 'warn',
                        'raised': false,
                    }
                ],
                width: 200
            }
        ],
        data: []
    };


    constructor(private router: Router, private eventsService: EventsService) {
    }

    ngOnInit() {
        this.getEvents();
    }

    add() {
        this.router.navigate(['/events/add']);
    }

    calendar() {
        this.router.navigate(['/events/calendar']);
    }

    actionClick(event: any): void {
        const row = event.row;
        const action = event.action;
        // console.log(this.router);
        switch (action.name) {
            case 'Edit':
                this.router.navigate(['/events/' + row.id + '/edit']);
                break;
            case 'View':
                this.router.navigate(['/events/' + row.id + '/view']);
                break;
            default:
                break;
        }
    }

    getEvents(): void {
        this.eventsTable.loading = true;
        this.eventsService
            .all()
            .subscribe(events => {
                this.eventsTable.data = events;
                this.eventsTable.loading = false;
            }, error => {
                this.eventsTable.loading = false;
                console.log(error);
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }
}
