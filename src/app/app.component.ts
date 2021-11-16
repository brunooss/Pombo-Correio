import { ServerResponse } from './interface/server-response';
import { CommunicationServerService } from './service/communication-server.service';
import { MessagesListService } from './messages-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from './interface/message';
import { map, startWith, Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  currentMessage: string = "";

  constructor(private service: MessagesListService) { }
  
  onSubmit() {
    this.service.updateMessagesList({ id: 1, senderUser: 24, text: this.currentMessage, timestamp: new Date() })
  }
  onKeyUp(event: any) {
    
    this.currentMessage = event.target.value;

    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }
}
