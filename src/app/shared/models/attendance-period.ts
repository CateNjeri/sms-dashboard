import {School} from "./school";

export class AttendancePeriod {
    id: number;
    name: string;
    school: School;
    fromTime: Date;
    toTime: Date;
    status: Number;
}
