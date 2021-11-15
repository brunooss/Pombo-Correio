import { MessagesListService } from './messages-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

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
    this.service.updateMessagesList(this.currentMessage)
  }
  onKeyUp(event: any) {
    
    this.currentMessage = event.target.value;

    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }
}
