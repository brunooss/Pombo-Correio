import { MessagesListService } from './service/messages-list.service';
import { Component} from '@angular/core';

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
