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
var core_1 = require("@angular/core");
var NgbdTabsetPictures = (function () {
    function NgbdTabsetPictures() {
        this.openModalWindow = false;
        this.images = [
            { id: 1, thumb: './app/imgs/willy1.jpg', img: './app/imgs/willy1.jpg', description: 'Willy 1' },
            { id: 2, thumb: './app/imgs/elle1.jpg', img: './app/imgs/elle1.jpg', description: 'Elle 2' },
            { id: 3, thumb: './app/imgs/gemma1.jpg', img: './app/imgs/gemma1.jpg', description: 'Gemma 3' },
            { id: 4, thumb: './app/imgs/pixie1.jpg', img: './app/imgs/pixie1.jpg', description: 'Pixie 4' }
        ];
    }
    NgbdTabsetPictures.prototype.OpenImageModel = function (imageSrc, images) {
        //alert('OpenImages');
        var imageModalPointer;
        for (var i = 0; i < images.length; i++) {
            if (imageSrc === images[i].img) {
                imageModalPointer = i;
                console.log('jhhl', i);
                break;
            }
        }
        this.openModalWindow = true;
        this.images = images;
        this.imagePointer = imageModalPointer;
    };
    NgbdTabsetPictures.prototype.cancelImageModel = function () {
        this.openModalWindow = false;
    };
    return NgbdTabsetPictures;
}());
NgbdTabsetPictures = __decorate([
    core_1.Component({
        selector: 'ngbd-tabset-pictures',
        templateUrl: './tabset-pictures.html'
    }),
    __metadata("design:paramtypes", [])
], NgbdTabsetPictures);
exports.NgbdTabsetPictures = NgbdTabsetPictures;
//# sourceMappingURL=tabset-pictures.js.map