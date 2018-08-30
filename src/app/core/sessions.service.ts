import {Injectable} from '@angular/core';
import {SchoolSession} from '../shared/models/school-session';
import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';

@Injectable()
export class SessionsService {

    constructor(private storageService: StorageService) {
    }

    setActiveSession(schoolSession: SchoolSession): void {
        this.storageService.store(environment.activeSessionKey, JSON.stringify(schoolSession));
    }
}
