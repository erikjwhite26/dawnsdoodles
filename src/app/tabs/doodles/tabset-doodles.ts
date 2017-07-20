import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Rx';
import {DoodleService} from './doodle.service';
import {MessageService} from '../message.service';
import {Doodle} from './doodle';
import {Message} from '../message';

@Component({
  selector: 'ngbd-tabset-doodles',
  templateUrl: './tabset-doodles.html',
  providers: [NgbCarouselConfig]
})
export class NgbdTabsetDoodles { 
  public doodles: Doodle[];
  public doodles_error:Boolean = false;
  public messages: Message[];
  public messages_error:Boolean = false;
  constructor(private _doodleService: DoodleService, private _messageService: MessageService, config: NgbCarouselConfig){
    // customize default values of carousels used by this component tree
    config.interval = 5000;
  }
  title='Doodles';
  
  ngOnInit() {
    this.getDoodles();
    this.getMessages();
  }

  getDoodles() {
    this._doodleService.getDoodles().subscribe(
      data => { this.doodles = data},
      err => { this.doodles_error = true }
    );
  }

  getMessages() {
    this._messageService.getMessages('./app/tabs/doodles/doodle-messages.json').subscribe(
      data => { this.messages = data},
      err => { this.messages_error = true }
    );
  }
}
