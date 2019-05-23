"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TMM Angular2 - ASP.NET';
        this.pageHeader = "Employee Details";
        //   isDisabled: boolean = true;
        //    imagePath: string = 'nasa/Broom_Pickering_milne_APODw600.jpg';
        this.firstName = "Tom";
        this.lastName = "Maestas";
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    ;
    /*
        isBold: boolean = true;
        fontSize: number = 30;
        isItalic: boolean = true;
    
        addStyles() {           // 0
            let styles = {
                'font-weight': this.isBold ? 'bold' : 'normal',
                'font-size.px': this.fontSize
            }
            return styles;
        }
        addClasses() {              // 1
            let classes = {
                boldClass: this.applyBoldClass,
                italicsClass: this.applyItalicsClass
            };
            return classes;
        };
    
        applyBoldClass: boolean = true;        // 2
        applyItalicsClass: boolean = true;        // 2
        classesToApply: string = 'italicsClass boldClass';      // 3
        */
    AppComponent.prototype.onClick = function () {
        console.log('Button clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                    <h2>Welcome to {{ title }}</h2>\n<br />\n<hr /> \n                    <h3> {{ pageHeader }} </h3>\n                   Name: <input [(ngModel)]='name'/>\n<br />\nYou entered : {{name}}<br /><br />\n                    <my-employee></my-employee><br />\n                    <list-employee></list-employee>\n\n                   \n                </div>"
        })
        /*
                         <img [src]='https://s3.amazonaws.com/tmm-nov/img/{{imagePath}}'/>
                        <button [disabled]='isDisabled'  style='color:red' [ngStyle]='addStyles()' on-click='onClick()'>Details 0</button>
                        <button [disabled]='isDisabled'  class="colorClass" [ngClass]='addClasses()' on-click='onClick()'>Details 1</button>
                        <button disabled='{{isDisabled}}  class="colorClass italicsClass boldClass" [class.boldClass]='applyBoldClass' on-click='onClick()'>Details 2</button>
                        <button bind-disabled='isDisabled'  class="colorClass" [class]='classesToApply' on-click='onClick()'>Details 3</button>
                        */
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map