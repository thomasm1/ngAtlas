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
var PublicationListComponent = /** @class */ (function () {
    function PublicationListComponent() {
        this.selectedPublicationCountRadioButton = 'All';
        this.publications = [
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1977' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' },
        ];
    }
    PublicationListComponent.prototype.getTotalPublicationsCount = function () {
        return this.publications.length;
    };
    PublicationListComponent.prototype.getTotalMalePublicationsCount = function () {
        return this.publications.filter(function (e) { return e.gender === "Male"; }).length;
    };
    PublicationListComponent.prototype.getTotalFemalePublicationsCount = function () {
        return this.publications.filter(function (e) { return e.gender === "Female"; }).length;
    };
    PublicationListComponent.prototype.onPublicationCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedPublicationCountRadioButton = selectedRadioButtonValue;
    };
    PublicationListComponent.prototype.getPublications = function () {
        this.publications = [
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000, dateOfBirth: '3/04/1977' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' },
            { code: 'emp104', name: 'Dd', gender: 'Female', annualSalary: 85000.55, dateOfBirth: '3/05/1999' },
            { code: 'emp105', name: 'Ee', gender: 'Male', annualSalary: 85000, dateOfBirth: '3/06/1997' },
        ];
    };
    PublicationListComponent.prototype.trackByEmpCode = function (index, publication) {
        return publication.code;
    };
    PublicationListComponent = __decorate([
        core_1.Component({
            selector: 'list-publication',
            templateUrl: 'app/publication/publicationList.component.html',
            styleUrls: ['app/publication/publicationList.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PublicationListComponent);
    return PublicationListComponent;
}());
exports.PublicationListComponent = PublicationListComponent;
//# sourceMappingURL=publicationList.component.js.map