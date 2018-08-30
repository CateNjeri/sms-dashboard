import {Injectable} from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {Upload} from './file-upload.model';

@Injectable()
export class FileUploadService {

    private basePath: string = '/uploads';
    uploadsRef: any;
    uploads: Observable<Upload[]>;

    constructor() {
    }

    getUploads(query = {}) {
        return [];
    }

    pushUpload(upload: Upload) {
        return undefined;
    }

    deleteUpload(upload: Upload) {
        this.deleteFileStorage(upload.name);
    }

    private saveFileData(upload: Upload) {

    }

    private deleteFileData() {

    }

    private deleteFileStorage(name) {
    }

}
