import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MessagesListService {
  
  private messageSource = new BehaviorSubject<string[]>([]);
  currentMessages = this.messageSource.asObservable();

  constructor() { }

  updateMessagesList(message: string) {
    let messages: string[] = this.messageSource.value;
    messages.push(message);
    this.messageSource.next(messages);
  }
}