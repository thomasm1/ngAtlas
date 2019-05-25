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
var BlogListComponent = /** @class */ (function () {
    function BlogListComponent() {
        this.blogs = [
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1977' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' },
        ];
    }
    BlogListComponent.prototype.getBlogs = function () {
        this.blogs = [
            { code: 'emp101', name: 'Aa' },
            { code: 'emp102', name: 'Bb' },
            { code: 'emp103', name: 'Cc' },
            { code: 'emp104', name: 'Dd' },
            { code: 'emp105', name: 'Ee' },
        ];
    };
    BlogListComponent.prototype.trackByEmpCode = function (index, blog) {
        return blog.code;
    };
    BlogListComponent = __decorate([
        core_1.Component({
            selector: 'list-blog',
            template: 'app/blog/blogList.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], BlogListComponent);
    return BlogListComponent;
}());
exports.BlogListComponent = BlogListComponent;
//# sourceMappingURL=blogList.componentt.js.map