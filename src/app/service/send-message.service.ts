import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

 
 @Injectable()
 export class SendMessageService {

  private messageSource = new BehaviorSubject<string[]>(['default message']);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  updateMessage(message: string) {
    let messagesList = this.messageSource.value;
    messagesList.push(message)

    this.messageSource.next(messagesList);
  }
}
