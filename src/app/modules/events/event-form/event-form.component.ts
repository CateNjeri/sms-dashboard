import {Component, OnInit} from '@angular/core';
import {Event} from '../../../shared/models/event';
import {EventsService} from '../../../shared/services/events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
    event: Event;
    isProcessing: boolean = false;

    constructor(private eventsService: EventsService, private activatedRoute: ActivatedRoute) {
        this.event = new Event();
        this.event.startDate = new Date();
        // this.event.startTime = new Date();
    }

    myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return d >= this.event.startDate || d.getDate() === this.event.startDate.getDate();
    };

    ngOnInit() {
        this.isEdit();
    }

    save(): void {
        this.isProcessing = true;
        if (this.event.id) {
            this.update();
        } else {
            this.create();
        }
    }

    isEdit() {
        this.activatedRoute.paramMap
            .subscribe((params) => {
                if (params.get('id')) {
                    this.getEvent(Number.parseInt(params.get('id')));
                }
            });
    }

    create(): void {
        this.eventsService.create(this.event)
            .subscribe(event => {
                this.isProcessing = false;
                this.event = event;
            }, error2 => {
                console.log(error2);
            });
    }

    update(): void {
        this.eventsService.update(this.event)
            .subscribe(event => {
                this.isProcessing = false;
                this.event = event;
            }, error2 => {
                console.log(error2);
            });
    }

    getEvent(number: number): void {
        this.eventsService.find(number)
            .subscribe(event => {
                this.event = event;
            }, error2 => {
                console.log(error2);
            });
    }
}
