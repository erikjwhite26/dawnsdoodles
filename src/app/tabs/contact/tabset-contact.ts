import {Component} from '@angular/core';
import {Contact} from './contact';
import {MessageService} from '../message.service';
import {Message} from '../message';

@Component({
  selector: 'ngbd-tabset-contact',
  templateUrl: './tabset-contact.html'
})
export class NgbdTabsetContact { 
    public messages: Message[];
    public messages_error:Boolean = false;
    model = new Contact("","","");
    submitted = false;
    onSubmit(){ 
        this.submitted = true;
        this.model = new Contact("","","");
    }
    public closeAlert() {
        this.submitted = false;
    }

    constructor(private _messageService: MessageService){ }
  
    ngOnInit() {
        this.getMessages();
    }
    getMessages() {
        this._messageService.getMessages('http://dawnsdoodles.com/assets/contact-messages.json').subscribe(
        data => { this.messages = data},
        err => { this.messages_error = true }
        );
    }
}