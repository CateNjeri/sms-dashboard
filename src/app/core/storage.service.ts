import {Injectable} from '@angular/core';
import {EncryptionService} from './encryption.service';

@Injectable()
export class StorageService {

    constructor(private encryptionService: EncryptionService) {
    }

    read(key: string): string {
        // console.log(localStorage.getItem(key));
        // console.log(this.encryptionService.decrypt(localStorage.getItem(key)));
        return this.encryptionService.decrypt(localStorage.getItem(key));
    }

    store(key: string, value: any): void {
        if (value === null || value === 'null') {
            localStorage.setItem(key, this.encryptionService.encrypt(value));
        } else {
            localStorage.setItem(key, this.encryptionService.encrypt(value));
        }
    }

}
