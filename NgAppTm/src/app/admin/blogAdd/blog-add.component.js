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
var router_1 = require("@angular/router");
var blog_admin_service_1 = require("../adminShared/blog-admin.service");
var blog_1 = require("../adminShared/blog");
var BlogAddComponent = (function () {
    function BlogAddComponent(blogAdminSVC, router) {
        this.blogAdminSVC = blogAdminSVC;
        this.router = router;
    }
    BlogAddComponent.prototype.fileLoad = function ($event) {
        var _this = this;
        var myReader = new FileReader();
        var file = $event.target.files[0];
        this.imgTitle = file.name;
        myReader.readAsDataURL(file);
        myReader.onload = function (e) {
            _this.imageSRC = e.target.result;
        };
    };
    BlogAddComponent.prototype.createPost = function () {
        this.post = new blog_1.Blog(this.postTitle, this.content, this.imgTitle, this.imageSRC.substring(23));
        this.blogAdminSVC.createPost(this.post);
        alert(this.postTitle + " added to posts");
        this.router.navigate(['/admin']);
    };
    BlogAddComponent.prototype.cancel = function () {
        this.router.navigate(['/admin']);
    };
    return BlogAddComponent;
}());
BlogAddComponent = __decorate([
    core_1.Component({
        selector: 'add-menu',
        templateUrl: './blog-add.component.html',
    }),
    __metadata("design:paramtypes", [blog_admin_service_1.BlogAdminService, router_1.Router])
], BlogAddComponent);
exports.BlogAddComponent = BlogAddComponent;
//# sourceMappingURL=blog-add.component.js.map