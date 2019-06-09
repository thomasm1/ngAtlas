"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("firebase");
var BlogAdminService = /** @class */ (function () {
    function BlogAdminService() {
    }
    BlogAdminService.prototype.createPost = function (post) {
        var storageRef = firebase.storage().ref();
        storageRef.child("images/" + post.imgTitle).putString(post.img, 'base64')
            .then(function (snapshot) {
            var url = snapshot.metadata.downloadURLs[0];
            var dbRef = firebase.database().ref('blogPosts/');
            var newPost = dbRef.push();
            newPost.set({
                title: post.title,
                content: post.content,
                imgTitle: post.imgTitle,
                img: url,
                id: newPost.key
            });
        })
            .catch(function (error) {
            alert("failed upload: " + error);
        });
    };
    BlogAdminService.prototype.editPost = function (update) {
        var dbRef = firebase.database().ref('blogPosts/').child(update.id)
            .update({
            title: update.title,
            content: update.content
        });
        alert('post updated');
    };
    BlogAdminService.prototype.removePost = function (deletePost) {
        var dbRef = firebase.database().ref('blogPosts/').child(deletePost.id).remove();
        alert('post deleted');
        var imageRef = firebase.storage().ref().child("images/" + deletePost.imgTitle)
            .delete()
            .then(function () {
            alert(deletePost.imgTitle + " was deleted from Storage");
        }).catch(function (error) {
            alert("Error - Unable to delete " + deletePost.imgTitle);
        });
    };
    BlogAdminService = __decorate([
        core_1.Injectable()
    ], BlogAdminService);
    return BlogAdminService;
}());
exports.BlogAdminService = BlogAdminService;
//# sourceMappingURL=blog-admin.service.js.map