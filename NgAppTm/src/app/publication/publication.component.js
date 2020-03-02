"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PublicationComponent = (function () {
    function PublicationComponent() {
        this.columnSpan = 2;
        this.title = 'Title1';
        this.id = 40;
        this.showDetails = false;
    }
    PublicationComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    return PublicationComponent;
}());
PublicationComponent = __decorate([
    core_1.Component({
        selector: 'my-publication',
        templateUrl: 'app/publication/publication.component.html',
        styleUrls: ['app/publication/publication.component.css']
    })
], PublicationComponent);
exports.PublicationComponent = PublicationComponent;
//# sourceMappingURL=publication.component.js.map