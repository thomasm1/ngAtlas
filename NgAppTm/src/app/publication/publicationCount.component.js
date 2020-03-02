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
var PublicationCountComponent = (function () {
    function PublicationCountComponent() {
        this.selectedRadioButtonValue = 'All';
        this.countRadioButtonSelectionChanged = new core_1.EventEmitter();
    }
    PublicationCountComponent.prototype.onRadioButtonSelectionChange = function () {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    };
    return PublicationCountComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PublicationCountComponent.prototype, "countRadioButtonSelectionChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PublicationCountComponent.prototype, "all", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PublicationCountComponent.prototype, "male", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PublicationCountComponent.prototype, "female", void 0);
PublicationCountComponent = __decorate([
    core_1.Component({
        selector: 'publication-count',
        templateUrl: 'app//publication/publicationCount.component.html',
        styleUrls: ['app/publication/publicationCount.component.css']
    })
], PublicationCountComponent);
exports.PublicationCountComponent = PublicationCountComponent;
//# sourceMappingURL=PublicationCount.component.js.map