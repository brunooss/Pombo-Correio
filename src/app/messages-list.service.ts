import { Message } from './interface/message';
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MessagesListService {
  
  private messageSource = new BehaviorSubject<Message[]>([]);
  currentMessages = this.messageSource.asObservable();

  constructor() { }

  updateMessagesList(message: Message) {
    let messages: Message[] = this.messageSource.value;
    messages.push(message);
    this.messageSource.next(messages);
  }
}