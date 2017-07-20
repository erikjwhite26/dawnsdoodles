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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var doodle_service_1 = require("./doodle.service");
var message_service_1 = require("../message.service");
var NgbdTabsetDoodles = (function () {
    function NgbdTabsetDoodles(_doodleService, _messageService, config) {
        this._doodleService = _doodleService;
        this._messageService = _messageService;
        this.doodles_error = false;
        this.messages_error = false;
        this.title = 'Doodles';
        // customize default values of carousels used by this component tree
        config.interval = 5000;
    }
    NgbdTabsetDoodles.prototype.ngOnInit = function () {
        this.getDoodles();
        this.getMessages();
    };
    NgbdTabsetDoodles.prototype.getDoodles = function () {
        var _this = this;
        this._doodleService.getDoodles().subscribe(function (data) { _this.doodles = data; }, function (err) { _this.doodles_error = true; });
    };
    NgbdTabsetDoodles.prototype.getMessages = function () {
        var _this = this;
        this._messageService.getMessages('./app/tabs/doodles/doodle-messages.json').subscribe(function (data) { _this.messages = data; }, function (err) { _this.messages_error = true; });
    };
    return NgbdTabsetDoodles;
}());
NgbdTabsetDoodles = __decorate([
    core_1.Component({
        selector: 'ngbd-tabset-doodles',
        templateUrl: './tabset-doodles.html',
        providers: [ng_bootstrap_1.NgbCarouselConfig]
    }),
    __metadata("design:paramtypes", [doodle_service_1.DoodleService, message_service_1.MessageService, ng_bootstrap_1.NgbCarouselConfig])
], NgbdTabsetDoodles);
exports.NgbdTabsetDoodles = NgbdTabsetDoodles;
//# sourceMappingURL=tabset-doodles.js.map