import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from '../../environments/environment';

@Injectable()
export class EncryptionService {

    constructor() {

    }

    encrypt(value: string): string {
        // return CryptoJS.AES.encrypt(value, environment.encryptionKey).toString();
        return value;
    }

    decrypt(value: string): string {
        // return CryptoJS.AES.decrypt(value, environment.encryptionKey).toString();
        return value;
    }
}
