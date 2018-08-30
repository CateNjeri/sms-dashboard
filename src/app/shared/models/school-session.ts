import {School} from './school';

export class SchoolSession {
    id: number;
    start: Date;
    end: Date;
    status: number;
    school: School;
    name: string;
    createdAt: Date;
}

export enum SchoolSessionStatus {
    ACTIVE = 1,
    INACTIVE = 2,
    CLOSED = 3
}