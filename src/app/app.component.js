"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div id=\"main-div\" class=\"container-fluid col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\">\n    <div class=\"row\">\n      <img style=\"height:100%; width:100%\" src=\"./app/imgs/dawnsdoodles.png\" alt=\"Dawn's Doodles\"/>\n    </div>\n    <div class=\"row\">\n      <ngbd-tabset-basic style=\"height:100%; width:100%\"></ngbd-tabset-basic>\n    </div>\n    <div class=\"row\"><br/><br/></div>\n  </div>\n  <div class=\"col-md-3 col-sm-2 col-xs-1\"></div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map