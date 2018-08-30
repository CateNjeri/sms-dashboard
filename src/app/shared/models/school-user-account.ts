import {UserAccount} from './user-account';
import {School} from './school';
import {UserAccountProfile} from './user-account-profile';

export class SchoolUserAccount {
    id: number;
    userAccountProfile: UserAccountProfile;
    role: number;
    status: number;
    school: School;
    password: string;
    confirmPassword: string;
}
