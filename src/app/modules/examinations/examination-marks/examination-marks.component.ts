import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { StudentAttendance } from '../../../shared/models/student-attendance';
import { AttendancePeriod } from '../../../shared/models/attendance-period';
import { ClassLevelSection } from '../../../shared/models/class-level-section';
import { ClassLevelSectionsService } from '../../../shared/services/class-level-sections.service';
import { AttendancePeriodsService } from '../../../shared/services/attendance-periods.service';
import { StudentAttendanceService } from '../../../shared/services/student-attendance.service';
import { StudentAttendanceRegisterRequest } from '../../../shared/models/student-attendance-register-request';
import { MatSelectionList } from '@angular/material';

@Component({
  selector: 'app-examination-marks',
  templateUrl: './examination-marks.component.html',
  styleUrls: ['./examination-marks.component.scss']
})
export class ExaminationMarksComponent implements OnInit, OnChanges {
  studentAttendances: StudentAttendance[] = [];
  attendancePeriods: AttendancePeriod[] = [];
  classLevelSections: ClassLevelSection[] = []; 
  isRefreshing: boolean = false;
  isSaving: boolean = false;

  classLevelSection: ClassLevelSection = new ClassLevelSection();
  studentAttendanceRegisterRequest: StudentAttendanceRegisterRequest;


  @ViewChild("studentsList")
  studentsList: MatSelectionList;

  constructor(private classLevelSectionsService: ClassLevelSectionsService,
  private attendancePeriodsService : AttendancePeriodsService, 
  private studentAttendanceService: StudentAttendanceService) { 
    this.studentAttendanceRegisterRequest = new StudentAttendanceRegisterRequest();
  }

  ngOnInit() {
    this.getClassLevelSections();
  }

  ngOnChanges () {
    // alert('Test')
  }

  allPresent() {
    this.studentsList.selectAll();
  }

  save() {
    
  }
  getAttendanceRegister(): void {
    this.isRefreshing = true;
    this.studentAttendances = [];
    this.studentAttendanceService
        .createAttendanceRegister(this.studentAttendanceRegisterRequest)
        .subscribe(studentAttendances => {
          this.isRefreshing = false;
          this.studentAttendances = studentAttendances;
        }, error => {
          this.isRefreshing = false;
        })
  }


  getClassLevelSections() {
    this.classLevelSectionsService
        .all()
        .subscribe(classLevelSections => {
          this.classLevelSections = classLevelSections;
        })
  }
}
