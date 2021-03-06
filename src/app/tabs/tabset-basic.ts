import {Component} from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message';

@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './tabset-basic.html'
})
export class NgbdTabsetBasic { 
  public identifier: String = 'dawnsdoodles.com';
  public url: String = 'dawnsdoodles.com';
  public messages: Message[];
  public messages_error: Boolean = false;
  constructor(private _messageService: MessageService){ }
  
  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this._messageService.getMessages('http://dawnsdoodles.com/assets/home-messages.json').subscribe(
      data => { this.messages = data},
      err => { this.messages_error = true }
    );
  }
}
