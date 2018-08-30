import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../shared/services/students.service';
import { Student } from '../../../shared/models/student';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentsService: StudentsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute
      .paramMap
      .subscribe(params => {
          if(params.get('id')){
            this.getStudent(Number.parseInt(params.get('id')));
          }
      });
  }
  getStudent (id: number) {
    this.studentsService
      .getStudent(id)
      .subscribe(student => {
        this.student = student;
      })
  }

}
