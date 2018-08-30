import { Student } from "./student";
import { AttendancePeriod } from "./attendance-period";

export class StudentAttendance {
    id: number;
    name: string;
    student: Student;
    attendancePeriod: AttendancePeriod;
    date: Date;
    status: Number;
}
