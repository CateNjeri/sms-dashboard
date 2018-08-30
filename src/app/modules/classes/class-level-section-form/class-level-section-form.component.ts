import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subject } from '../../../shared/models/subject';
import { SubjectsService } from '../../../shared/services/subjects.service';
import { error } from 'util';
import { ClassLevelsService } from '../../../shared/services/class-levels.service';
import { ClassLevelSection } from '../../../shared/models/class-level-section';
import { ClassLevelSectionsService } from '../../../shared/services/class-level-sections.service';
import { ClassLevel } from '../../../shared/models/class-level';
import { TeachersService } from '../../../shared/services/teachers.service';
import { Teacher } from '../../../shared/models/teacher';

@Component({
  selector: 'app-class-level-section-form',
  templateUrl: './class-level-section-form.component.html',
  styleUrls: ['./class-level-section-form.component.scss']
})
export class ClassLevelSectionFormComponent implements OnInit {
  classLevelSection: ClassLevelSection;
  isProcessing: boolean = false;
  classLevels: ClassLevel[];
  teachers: Teacher[];

  constructor(public dialogRef: MatDialogRef<ClassLevelSectionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private classLevelSectionsService: ClassLevelSectionsService,
    private classLevelsService: ClassLevelsService,
    private teachersService: TeachersService) {
      this.classLevelSection = data.classLevelSection;
     }

  ngOnInit() {
    this.getClassLevels();
    this.getTeachers();
  }

  getTeachers () {
    this.teachersService.all()
    .subscribe(teachers => {
      this.teachers = teachers;
    })
  }

  getClassLevels() : void {
    this.classLevelsService.all()
    .subscribe(classLevels => {
      this.classLevels = classLevels;
    })
  }

  save() : void {
    this.isProcessing = true;
    this.classLevelSectionsService.create(this.classLevelSection)
    .subscribe(subject => {
        this.classLevelSection = subject;
        this.isProcessing = false;
        this.dialogRef.close();
    }, error => {
       this.isProcessing = false;
    });
  }

}
