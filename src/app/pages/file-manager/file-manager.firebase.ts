import {Injectable} from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileManagerFirebase {

    private basePath: string = 'uploads';
    filesRef: any;
    file: Observable<any>;

    constructor() {
        this.filesRef = []; // this.db.list(this.basePath);
    }

    getFilesList() {
        return this.filesRef.snapshotChanges().map(arr => {
            return arr.map(snap => Object.assign(snap.payload.val(), {$key: snap.key}));
        });
    }

    getFile(key) {
        const path = `${this.basePath}/${key}`;
        // this.file = this.db.object(path).valueChanges();
        this.file = Observable.of({});
        return this.file;
    }

    deleteFileData(key) {
        this.filesRef.remove(key);
    }

    createFile(file) {
        this.filesRef.push(file);
    }

    private saveFileStorage(name) {
    }

    private deleteFileStorage(name) {
    }
}
