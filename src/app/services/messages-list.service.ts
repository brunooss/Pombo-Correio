import { Message } from '../interfaces/message';
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MessagesListService {
  
  private messageSource = new BehaviorSubject<Message>({ id: 1, senderUser: 24, text: '', timestamp: new Date() });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  updateCurrentMessage(message: Message) {
    this.messageSource.next(message);
  }
}