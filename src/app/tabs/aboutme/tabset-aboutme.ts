import {Component} from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../message';

@Component({
  selector: 'ngbd-tabset-aboutme',
  templateUrl: './tabset-aboutme.html'
})
export class NgbdTabsetAboutMe {
    public messages: Message[];
    public messages_error:Boolean = false;
  
    constructor(private _messageService: MessageService){ }
  
    ngOnInit() {
        this.getMessages();
    }
    getMessages() {
        this._messageService.getMessages('assets/aboutme-messages.json').subscribe(
        data => { this.messages = data},
        err => { this.messages_error = true }
        );
    }
}