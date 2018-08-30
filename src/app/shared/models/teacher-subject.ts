import {School} from "./school";
import {Parent} from "./parent";
import {ClassLevelSection} from "./class-level-section";

export class TeacherSubject {
    id: number;
    surname: String;
    otherNames: String;
    regNo: String;
    classLevelSection: ClassLevelSection;
    school: School;
    gender: string;
    parent: Parent;
    dateOfBirth: Date;
    admissionDate: Date;
}
