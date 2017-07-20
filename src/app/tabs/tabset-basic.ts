import {Component} from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message';

@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './tabset-basic.html'
})
export class NgbdTabsetBasic { 
  public messages: Message[];
  public messages_error: Boolean = false;
  constructor(private _messageService: MessageService){ }
  
  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this._messageService.getMessages('./app/tabs/home/home-messages.json').subscribe(
      data => { this.messages = data},
      err => { this.messages_error = true }
    );
  }
}
