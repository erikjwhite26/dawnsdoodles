"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_2 = require("angular2-google-maps/core");
var dist_1 = require("ng2-pdf-viewer/dist");
var tabset_basic_1 = require("./tabs/tabset-basic");
var tabset_doodles_1 = require("./tabs/doodles/tabset-doodles");
var tabset_contact_1 = require("./tabs/contact/tabset-contact");
var tabset_contract_1 = require("./tabs/contract/tabset-contract");
var tabset_aboutme_1 = require("./tabs/aboutme/tabset-aboutme");
var home_map_1 = require("./tabs/home/home-map");
var doodle_service_1 = require("./tabs/doodles/doodle.service");
var message_service_1 = require("./tabs/message.service");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.JsonpModule, http_1.HttpModule, ng_bootstrap_1.NgbModule.forRoot(),
            core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyDDkegeMhFu2_o9NyrCWiUZbKmXhtrPqq0' })],
        declarations: [app_component_1.AppComponent, tabset_basic_1.NgbdTabsetBasic, tabset_doodles_1.NgbdTabsetDoodles, tabset_contact_1.NgbdTabsetContact, tabset_contract_1.NgbdTabsetContract, tabset_aboutme_1.NgbdTabsetAboutMe, home_map_1.HomeMap, dist_1.PdfViewerComponent],
        providers: [doodle_service_1.DoodleService, message_service_1.MessageService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map