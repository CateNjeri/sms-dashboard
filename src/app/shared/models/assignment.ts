import {Subject} from './subject';
import {ClassLevelSection} from './class-level-section';

export class Assignment {
    id: number = 0;
    title: string;
    description: string;
    subject: Subject;
    classLevelSection: ClassLevelSection;
    dueDate: Date;
    type: Date;
}
