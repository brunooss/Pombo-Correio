import { Message } from './../interface/message';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, of, Subscription } from 'rxjs';
import { MessagesListService } from '../messages-list.service';
import { CommunicationServerService } from '../service/communication-server.service';

@Component({
  selector: 'messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  messages$: Observable<Message[]> = new Observable()
  messages: Message[] = []

  constructor(private service: MessagesListService, private serverService: CommunicationServerService) { }
  
  ngOnInit(): void {
    this.subscription = this.service.currentMessages.subscribe((messages: Message[]) => this.messages$ = of(messages))

    this.messages$ = this.serverService.messages$
    .pipe(
      map(response => { return response.data.messages! })
    )

    this.getMessages()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMessages() {
    return this.messages$.subscribe( message => this.messages = message );
  }
}