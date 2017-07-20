import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist';
import { NgbdTabsetBasic } from './tabs/tabset-basic';
import { NgbdTabsetDoodles } from './tabs/doodles/tabset-doodles';
import { NgbdTabsetContact } from './tabs/contact/tabset-contact';
import { NgbdTabsetContract } from './tabs/contract/tabset-contract';
import { NgbdTabsetAboutMe } from './tabs/aboutme/tabset-aboutme';
import { HomeMap } from './tabs/home/home-map';
import { DoodleService } from './tabs/doodles/doodle.service';
import { MessageService } from './tabs/message.service';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, HttpModule, NgbModule.forRoot(), 
  AgmCoreModule.forRoot({apiKey:'AIzaSyDDkegeMhFu2_o9NyrCWiUZbKmXhtrPqq0'}) ],
  declarations: [ AppComponent, NgbdTabsetBasic, NgbdTabsetDoodles, NgbdTabsetContact, NgbdTabsetContract, NgbdTabsetAboutMe, HomeMap, PdfViewerComponent ],
  providers:    [ DoodleService, MessageService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
