import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  @Input() user: string;
  message: string;

  constructor (private messageService: MessagesService) {
  }

  ngOnInit () {
  }

  onSend () {
    if (this.message === '') {
      return;
    }
    console.log(this.user);
    this.messageService.postMessage(new Message(this.user, this.message));
    this.message = '';
  }

}
