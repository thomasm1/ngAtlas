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
            { id: 'emp101', title: 'Aa' },
            { id: 'emp102', title: 'Bb' },
            { id: 'emp103', title: 'Cc' },
        ];
    }
    BlogListComponent.prototype.getBlogs = function () {
        this.blogs = [
            { id: 'emp101', title: 'Aa' },
            { id: 'emp102', title: 'Bb' },
            { id: 'emp103', title: 'Cc' },
            { id: 'emp104', title: 'Dd' },
            { id: 'emp105', title: 'Ee' },
        ];
    };
    BlogListComponent.prototype.trackByEmpCode = function (index, blog) {
        return blog.id;
    };
    BlogListComponent = __decorate([
        core_1.Component({
            selector: 'list-blog',
            templateUrl: 'app/blog/blogList.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], BlogListComponent);
    return BlogListComponent;
}());
exports.BlogListComponent = BlogListComponent;
//# sourceMappingURL=blogList.component.js.map