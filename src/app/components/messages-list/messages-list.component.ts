import { ServerResponse } from '../../interfaces/server-response';
import { Message } from '../../interfaces/message';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, map, Observable, of, Subscription, tap, throwError, startWith } from 'rxjs';
import { MessagesListService } from '../../services/messages-list.service';
import { CommunicationServerService } from '../../services/communication-server.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit, OnDestroy {

  serverSubscription!: Subscription;
  serviceSubscription!: Subscription;
  messages$: Observable<Message[]> = new Observable()
  messages: Message[] = []

  constructor(private service: MessagesListService, private serverService: CommunicationServerService) { }
  
  ngOnInit(): void {
    
    this.serverSubscription = this.serverService.messages$.subscribe(
      (response: ServerResponse) => this.messages$ = of(response.data as Message[])
    )

    this.serviceSubscription = this.service.currentMessage.subscribe(
      (response: Message) => {
        this.messages.push(response)

        if (response.text) {
          this.serverService.save$(response).subscribe((r: ServerResponse) => console.log(response.text))
        }
      })

    this.messages$ = this.serverService.messages$
    .pipe(
      map(response => { return response.data.messages! })
    )

    this.getMessages();
  }
  ngOnDestroy(): void {
    this.serverSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }

  getMessages() {
    return this.messages$.subscribe( messages => this.messages = messages );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Error: ${error.status} - ${error.message}`);
  }
}