import {SchoolUserAccount} from './school-user-account';
import {UserAccountProfile} from './user-account-profile';

export class UserAccount {
    id: number;
    username: String;
    email: String;
    password: String;
    confirmPassword: String;
    type: number;
    schoolUserAccount: SchoolUserAccount;
    userAccountProfiles: UserAccountProfile[];
}
