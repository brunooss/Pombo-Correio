import { Component, OnInit } from '@angular/core';
import { MessagesListService } from 'src/app/services/messages-list.service';

@Component({
  selector: 'app-global-chat-page',
  templateUrl: './global-chat-page.component.html',
  styleUrls: ['./global-chat-page.component.css']
})
export class GlobalChatPageComponent {
  
  title = 'angular-project';

  currentMessage: string = "";

  constructor(private service: MessagesListService) { }
  
  onSubmit() {
    this.service.updateCurrentMessage
    ({ id: null, senderUser: 24, text: this.currentMessage, timestamp: new Date() })
  }
  onKeyUp(event: any) {
    
    this.currentMessage = event.target.value;

    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }
}
