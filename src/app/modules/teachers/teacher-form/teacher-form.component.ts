import {Component, OnInit} from '@angular/core';
import {SubjectsService} from '../../../shared/services/subjects.service';
import {TeachersService} from '../../../shared/services/teachers.service';
import {Subject} from '../../../shared/models/subject';
import {Teacher} from '../../../shared/models/teacher';
import {SchoolUserAccount} from '../../../shared/models/school-user-account';
import {UserAccount} from '../../../shared/models/user-account';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {UserAccountProfile} from '../../../shared/models/user-account-profile';

@Component({
    selector: 'app-teacher-form',
    templateUrl: './teacher-form.component.html',
    styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
    subjects: Subject[];
    teacher: Teacher;

    isProcessing: boolean = false;

    constructor(private subjectsService: SubjectsService, private teachersService: TeachersService,
                private router: Router, private activatedRoute: ActivatedRoute) {
        this.teacher = new Teacher();
        this.teacher.id = 0;
        this.init();
    }

    ngOnInit() {
        this.getSubjects();
        this.activatedRoute.paramMap
            .subscribe((params => {
                const id = Number.parseInt(params.get('id'));
                if (id) {
                    this.getTeacher(id);
                }
            }));
    }

    init(): void {
        if (this.teacher.schoolUserAccount == null) {
            this.teacher.schoolUserAccount = new SchoolUserAccount();
            this.teacher.schoolUserAccount.role = 2;
        }
        if (this.teacher.schoolUserAccount.userAccountProfile == null) {
            this.teacher.schoolUserAccount.userAccountProfile = new UserAccountProfile();
            this.teacher.schoolUserAccount.userAccountProfile.type = 1;
        }
        if (this.teacher.schoolUserAccount.userAccountProfile.userAccount == null) {
            this.teacher.schoolUserAccount.userAccountProfile.userAccount = new UserAccount();
        }
    }

    getTeacher(id: Number) {
        this.teachersService
            .getOne(id)
            .subscribe(teacher => {
                this.teacher = teacher;
                this.init();
            });
    }

    getSubjects() {
        this.isProcessing = true;
        this.subjectsService.all()
            .subscribe(subjects => {
                this.subjects = subjects;
                // console.log(this.subjects);
            }, error => {
                console.log(error);
            }, () => {
                this.isProcessing = false;
            });
    }

    save(): void {
        if (this.teacher.id === 0) {
            this.create();
        } else {
            this.update();
        }
    }

    create(): void {
        this.teachersService
            .create(this.teacher)
            .subscribe(teacher => {
                this.teacher = teacher;
                this.router.navigate(['/teachers', teacher.id, 'edit']);
            }, error => {
                console.log(error);
            });
    }

    update(): void {
        this.teachersService
            .update(this.teacher)
            .subscribe(teacher => {
                this.teacher = teacher;
            }, error => {
                console.log(error);
            });
    }
}
