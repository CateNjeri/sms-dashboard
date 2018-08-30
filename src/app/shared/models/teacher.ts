import {School} from './school';
import {SchoolUserAccount} from './school-user-account';

export class Teacher {
    id: number = 0;
    surname: String;
    otherNames: String;
    code: String;
    email: String;
    school: School;
    schoolUserAccount: SchoolUserAccount;
    gender: String;
    phoneNumber: String;
}
