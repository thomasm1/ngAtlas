"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PublicationService = /** @class */ (function () {
    function PublicationService() {
    }
    PublicationService.prototype.getPublications = function () {
        return [
            { code: 'emp101',
                name: 'Tom',
                gender: 'Male',
                annualSalary: 55000,
                dateOfBirth: '5/22/77'
            },
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1979' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' },
            { code: 'emp104', name: 'Dd', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1936' },
            { code: 'emp105', name: 'Ee', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1977' }
        ];
    };
    PublicationService = __decorate([
        core_1.Injectable()
    ], PublicationService);
    return PublicationService;
}());
exports.PublicationService = PublicationService;
//# sourceMappingURL=publication.service.js.map