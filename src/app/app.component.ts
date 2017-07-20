import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div id="main-div" class="container-fluid col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
    <div class="row">
      <img style="height:100%; width:100%" src="/dawnsdoodles.png" alt="Dawn's Doodles"/>
    </div>
    <div class="row">
      <ngbd-tabset-basic style="height:100%; width:100%"></ngbd-tabset-basic>
    </div>
    <div class="row"><br/><br/></div>
  </div>
  <div class="col-md-3 col-sm-2 col-xs-1"></div>
  `
})
export class AppComponent  { name = 'Angular'; }
