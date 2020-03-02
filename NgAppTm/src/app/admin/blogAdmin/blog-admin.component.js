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
var user_service_1 = require("../adminShared/user.service");
var router_1 = require("@angular/router");
var firebase = require("firebase");
var blog_admin_service_1 = require("../adminShared/blog-admin.service");
var BlogAdminComponent = (function () {
    function BlogAdminComponent(userSVC, router, blogAdminSVC) {
        this.userSVC = userSVC;
        this.router = router;
        this.blogAdminSVC = blogAdminSVC;
        this.formDisplay = true;
    }
    BlogAdminComponent.prototype.logout = function () {
        this.userSVC.logout();
        this.router.navigate(['']);
    };
    BlogAdminComponent.prototype.chooseMode = function (mode) {
        this.menuChoice = mode;
    };
    BlogAdminComponent.prototype.ngOnInit = function () {
        this.theUser = this.userSVC.loggedInUser;
        this.getPosts();
    };
    BlogAdminComponent.prototype.getPosts = function () {
        var _this = this;
        var dbRef = firebase.database().ref('blogPosts/');
        dbRef.once('value')
            .then(function (snapshot) {
            var tmp = snapshot.val();
            _this.blogPosts = Object.keys(tmp).map(function (key) { return tmp[key]; });
        });
    };
    BlogAdminComponent.prototype.editPost = function (thePost) {
        this.singlePost = thePost;
        this.formDisplay = false;
    };
    BlogAdminComponent.prototype.cancelEdit = function () {
        this.formDisplay = true;
    };
    BlogAdminComponent.prototype.updatePost = function (single) {
        this.blogAdminSVC.editPost(single);
        this.formDisplay = true;
    };
    BlogAdminComponent.prototype.deletePost = function (single) {
        var verify = confirm("Are you sure you want to delete this post?");
        if (verify == true) {
            this.blogAdminSVC.removePost(single);
            this.router.navigate(['/admin/']);
        }
        else {
            alert('Nothing deleted!');
        }
    };
    return BlogAdminComponent;
}());
BlogAdminComponent = __decorate([
    core_1.Component({
        templateUrl: './blog-admin.component.html',
        styleUrls: ['./blog-admin.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        blog_admin_service_1.BlogAdminService])
], BlogAdminComponent);
exports.BlogAdminComponent = BlogAdminComponent;
//# sourceMappingURL=blog-admin.component.js.map