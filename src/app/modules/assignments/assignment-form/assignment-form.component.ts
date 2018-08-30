import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../../shared/models/assignment';
import {AssignmentsService} from '../../../shared/services/assignments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from '../../../shared/models/subject';
import {ClassLevelSection} from '../../../shared/models/class-level-section';
import {ClassLevelSectionsService} from '../../../shared/services/class-level-sections.service';
import {SubjectsService} from '../../../shared/services/subjects.service';

@Component({
    selector: 'app-assignment-form',
    templateUrl: './assignment-form.component.html',
    styleUrls: ['./assignment-form.component.scss']
})
export class AssignmentFormComponent implements OnInit {
    assignment: Assignment;
    isProcessing: boolean = false;
    assignmentTypes: any = [];
    subjects: Subject[] = [];
    classLevelSections: ClassLevelSection[] = [];

    constructor(private router: Router,
                private assignmentsService: AssignmentsService,
                private activatedRoute: ActivatedRoute,
                private classLevelSectionsService: ClassLevelSectionsService,
                private subjectsService: SubjectsService) {
        this.assignment = new Assignment();
        this.assignmentTypes.push({id: 1, name: 'Individual'});
        this.assignmentTypes.push({id: 2, name: 'Group'});
    }

    ngOnInit() {
        this.isEdit();
        this.getSubjects();
        this.getClassLevelSections();
    }

    myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return d >= new Date() || d.getDate() === new Date().getDate();
    };

    isEdit() {
        this.activatedRoute
            .paramMap
            .subscribe(params => {
                if (params.get('id')) {
                    this.getAssignment(Number.parseInt(params.get('id')));
                }
            });
    }

    private getAssignment(id: number) {
        this.assignmentsService.find(id)
            .subscribe(assignment => {
                this.assignment = assignment;
            });

    }

    save(): void {
        this.isProcessing = true;
        if (this.assignment.id) {
            this.update();
        } else {
            this.create();
        }
    }

    create(): void {
        this.assignmentsService
            .create(this.assignment)
            .subscribe(assignment => {
                this.isProcessing = false;
                this.assignment = assignment;
                this.router.navigate(['/assignments', this.assignment.id]);
            });
    }

    update(): void {
        this.assignmentsService
            .create(this.assignment)
            .subscribe(assignment => {
                this.isProcessing = false;
                this.assignment = assignment;
            });
    }

    private getSubjects() {
        this.subjectsService
            .all()
            .subscribe(subjects => {
                this.subjects = subjects;
            });
    }

    private getClassLevelSections() {
        this.classLevelSectionsService
            .all()
            .subscribe(classLevelSections => {
                this.classLevelSections = classLevelSections;
            });
    }
}
