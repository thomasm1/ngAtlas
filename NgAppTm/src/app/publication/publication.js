"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Publication = /** @class */ (function () {
    /*  public code: string;
      public name: string;
      public gender: string;
      public annualSalary: number;
      public dateOfBirth: string;
      */
    function Publication(code, name, gender, annualSalary, dateOfBirth) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBirth = dateOfBirth;
        /*  this.code = code;
          this.name = name;
          this.gender = gender;
          this.annualSalary = annualSalary;
          this.dateOfBirth = dateOfBirth;
          */
    }
    Publication.prototype.computeMonthlySalary = function (annualSalary) {
        return annualSalary / 12;
    };
    return Publication;
}());
exports.Publication = Publication;
//# sourceMappingURL=publication.js.map