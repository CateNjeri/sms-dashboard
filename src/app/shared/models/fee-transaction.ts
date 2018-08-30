import { Student } from "./student";
import { UserAccount } from "./user-account";
import { SchoolSession } from "./school-session";

export class FeeTransaction {
    id: number;
    amount: Number;
    balance: Number;
    paymentMethod: Number;
    referenceNumber: String;
    student: Student;
    userAccount: UserAccount;
    schoolSession: SchoolSession;
    transactionDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
