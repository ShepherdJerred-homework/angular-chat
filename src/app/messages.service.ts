import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesService {

  private messages: Message[] = [];

  postMessage (message: Message) {
    this.messages.unshift(message);
  }

  getMessages () {
    return this.messages;
  }

}
