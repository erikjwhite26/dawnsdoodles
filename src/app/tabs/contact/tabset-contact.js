"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_1 = require("./contact");
var message_service_1 = require("../message.service");
var NgbdTabsetContact = (function () {
    function NgbdTabsetContact(_messageService) {
        this._messageService = _messageService;
        this.messages_error = false;
        this.model = new contact_1.Contact("", "", "");
        this.submitted = false;
    }
    NgbdTabsetContact.prototype.onSubmit = function () {
        this.submitted = true;
        this.model = new contact_1.Contact("", "", "");
    };
    NgbdTabsetContact.prototype.closeAlert = function () {
        this.submitted = false;
    };
    NgbdTabsetContact.prototype.ngOnInit = function () {
        this.getMessages();
    };
    NgbdTabsetContact.prototype.getMessages = function () {
        var _this = this;
        this._messageService.getMessages('./app/tabs/contact/contact-messages.json').subscribe(function (data) { _this.messages = data; }, function (err) { _this.messages_error = true; });
    };
    return NgbdTabsetContact;
}());
NgbdTabsetContact = __decorate([
    core_1.Component({
        selector: 'ngbd-tabset-contact',
        templateUrl: './tabset-contact.html'
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], NgbdTabsetContact);
exports.NgbdTabsetContact = NgbdTabsetContact;
//# sourceMappingURL=tabset-contact.js.map