import { CommunicationServerService } from '../../services/communication-server.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

@Injectable()
export class MessageComponent {

  @Input() text!: string;
  @Input() sender!: string;

  constructor (private serverService: CommunicationServerService) { }

  //ipAddress!: string;

  ngOnInit() {
    //this.getIpAddress()
  }

  //getIpAddress() {
  //  this.serverService.ip$.subscribe((response: any) => {  this.ipAddress = response.ip; })
  //}
}
