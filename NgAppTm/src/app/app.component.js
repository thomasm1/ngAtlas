"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'placeholder';
        this.title = 'TMM Angular2 - ASP.NET';
        this.pageHeader = "Publication Details";
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<div id=\"container\">\n<navi-bar></navi-bar>\n    <div style=\"padding: 5px; font-size:100%;\">\n        <ul  style=\"padding: 5px\" class=\"nav nav-tabs\">\n            <li><a routerLink=\"home\">Home</a>&nbsp;&nbsp;</li>\n            <li><a routerLink=\"publications\">Publications</a> </li>\n        </ul>\n        <router-outlet></router-outlet>\n    </div> \n    <div id=\"header\">\n        <h2>{{ title }}</h2> \n        <hr /> \n        <h3> {{ pageHeader }} </h3>\n        Input: <input type='text' [(ngModel)]='name'/>\n        <br /> \n        <simple [simpleInput]='name'></simple> \n        </div>   \n        <div class=\"left\">\n            <my-publication></my-publication><br /> \n        <list-publication></list-publication>\n        </div>\n        <div class=\"right\">\n        <my-blog></my-blog><br />\n        <list-blog></list-blog>\n    </div>\n</div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map