import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  messages: Message[];

  constructor (private messageService: MessagesService) { }

  ngOnInit () {
    this.messages = this.messageService.getMessages();
  }

}
