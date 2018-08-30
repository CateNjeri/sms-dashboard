import {SchoolUserAccount} from "./school-user-account";
import { Parent } from "./parent";
import { UserAccount } from "./user-account";

export class UserAccountProfile {
    id: number;
    type: number;
    parents: Parent[];
    schoolUserAccount: SchoolUserAccount;
    userAccount: UserAccount;
}
