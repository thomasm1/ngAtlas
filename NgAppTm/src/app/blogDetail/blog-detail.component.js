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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var firebase = require("firebase");
var blog_1 = require("../admin/adminShared/blog");
var BlogDetailComponent = /** @class */ (function () {
    function BlogDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
        var postId = this.route.snapshot.params['id'];
        this.getSingle(postId);
    };
    BlogDetailComponent.prototype.getSingle = function (id) {
        var _this = this;
        var dbRef = firebase.database().ref('blogPosts');
        dbRef.orderByChild('id')
            .equalTo(id)
            .once('value')
            .then(function (snapshot) {
            var tmp = snapshot.val();
            var transform = Object.keys(tmp).map(function (key) { return tmp[key]; });
            var title = transform[0].title;
            var content = transform[0].content;
            var imgTitle = transform[0].imgTitle;
            var img = transform[0].img;
            _this.singlePost = new blog_1.Blog(title, content, imgTitle, img);
        });
    };
    ;
    BlogDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './blog-detail.component.html',
            styleUrls: ['./blog-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());
exports.BlogDetailComponent = BlogDetailComponent;
//# sourceMappingURL=blog-detail.component.js.map