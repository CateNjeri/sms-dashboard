import {Component, OnInit} from '@angular/core';
import {Student} from '../../../shared/models/student';
import {StudentsService} from '../../../shared/services/students.service';
import {ClassLevelSectionsService} from '../../../shared/services/class-level-sections.service';
import {ClassLevelSection} from '../../../shared/models/class-level-section';
import {Parent} from '../../../shared/models/parent';
import {FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {error} from 'util';

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
    name: String;
    student: Student;

    classLevelSections: ClassLevelSection[];
    isProcessing: boolean = false;

    constructor(private studentsService: StudentsService, private fb: FormBuilder,
                private classLevelSectionService: ClassLevelSectionsService, private router: Router, private activedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.student = new Student();
        this.student.parent = new Parent();
        this.getClassLevels();
        this.isEdit();
    }

    isEdit() {
        this.activedRoute.paramMap
            .subscribe((params) => {
                if (params.get('id')) {
                    this.getStudent(Number.parseInt(params.get('id')));
                }
            });
    }

    buildForm() {
        // TODO
    }

    getStudent(id: number): void {
        this.studentsService.getStudent(id)
            .subscribe(student => {
                this.student = student;
            }, error => {
                console.log(error);
            });
    }

    getClassLevels() {
        this.classLevelSectionService
            .all()
            .subscribe(classLevelSections => {
                this.classLevelSections = classLevelSections;
            }, error => {
                console.log(error);
            });
    }

    create() {
        this.isProcessing = true;
        this.studentsService
            .createStudent(this.student)
            .subscribe(student => {
                // TODO: Navigate to edit
                this.router.navigate(['/students/' + student.id + '/edit']);
            }, error2 => {
                console.log(error2);
            });
    }

    update() {
        this.isProcessing = true;
        this.studentsService
            .updateStudent(this.student)
            .subscribe(student => {
                this.isProcessing = false;
                // TODO: Navigate to edit
            }, error2 => {
                console.log(error2);
            });
    }

    save() {
        if (!this.student.id) {
            this.create();
        } else {
            this.update();
        }
    }
}
