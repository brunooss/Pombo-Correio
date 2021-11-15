import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesListService } from '../messages-list.service';

@Component({
  selector: 'messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  messagesList!: string[];      //Will be changed in the future by something!

  constructor(private service: MessagesListService) { /* this.messages = service.getMessages(); */ }
  
  ngOnInit(): void {
    this.subscription = this.service.currentMessages.subscribe((messages: string[]) => this.messagesList = messages)

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMessages() {
    return this.messagesList;
  }
}