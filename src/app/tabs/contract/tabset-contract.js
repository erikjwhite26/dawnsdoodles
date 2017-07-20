"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NgbdTabsetContract = (function () {
    function NgbdTabsetContract() {
        this.pdfSrc = "./app/imgs/PuppyContract.pdf";
        this.page = 1;
        this.firstPage = true;
    }
    NgbdTabsetContract.prototype.downloadPdf = function () { };
    NgbdTabsetContract.prototype.previousPage = function () {
        this.page = 1;
        this.firstPage = true;
    };
    NgbdTabsetContract.prototype.nextPage = function () {
        this.page = 2;
        this.firstPage = false;
    };
    return NgbdTabsetContract;
}());
NgbdTabsetContract = __decorate([
    core_1.Component({
        selector: 'ngbd-tabset-contract',
        templateUrl: './tabset-contract.html'
    })
], NgbdTabsetContract);
exports.NgbdTabsetContract = NgbdTabsetContract;
//# sourceMappingURL=tabset-contract.js.map