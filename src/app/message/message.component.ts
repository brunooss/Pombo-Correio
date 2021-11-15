import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

@Injectable()
export class MessageComponent {

  @Input() text!: string;
}
