import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChatsService {

    private basePath = 'chats';
    chatsRef: any;
    chatRef: any;

    chats: Observable<any>;
    chat: Observable<any>;

    constructor() {

    }

    getChatsList() {
        return this.chatsRef.snapshotChanges().map(arr => {
            return arr.map(snap => Object.assign(snap.payload.val(), {$key: snap.key}));
        });
    }

    getChat(key: string): Observable<any> {
        const path = `${this.basePath}/${key}`;
        // this.chat = this.db.object(path).valueChanges();
        return Observable.of(path);
    }

    createChat(chat) {
        this.chatsRef.push(chat);
    }

    updateChatMessage(key: string, value: any) {
        this.chatsRef.update(key, {messages: value.messages});
    }

    deleteChat(key: string) {
        this.chatsRef.remove(key);
    }

    deleteAll() {
        this.chatsRef.remove();
    }
}
