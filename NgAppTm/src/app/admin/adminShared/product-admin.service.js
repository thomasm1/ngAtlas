"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var firebase = require("firebase");
var ProductAdminService = (function () {
    function ProductAdminService() {
    }
    ProductAdminService.prototype.createProduct = function (prod) {
        var storageRef = firebase.storage().ref();
        storageRef.child("product_images/" + prod.imgTitle).putString(prod.img, 'base64')
            .then(function (snapshot) {
            var url = snapshot.metadata.downloadURLs[0];
            var dbRef = firebase.database().ref('products/');
            var newProd = dbRef.push();
            newProd.set({
                name: prod.name,
                desc: prod.description,
                imgTitle: prod.imgTitle,
                img: url,
                price: prod.price,
                id: newProd.key
            });
        })
            .catch(function (error) {
            alert("failed upload: " + error);
        });
    };
    ProductAdminService.prototype.editProduct = function (update) {
        var dbRef = firebase.database().ref('products/').child(update.id)
            .update({
            name: update.name,
            desc: update.description,
            price: update.price
        });
        alert('product updated');
    };
    ProductAdminService.prototype.removeProduct = function (deleteProduct) {
        var dbRef = firebase.database().ref('products/').child(deleteProduct.id).remove();
        alert('product deleted');
        var imageRef = firebase.storage().ref().child("product_images/" + deleteProduct.imgTitle)
            .delete()
            .then(function () {
            alert(deleteProduct.imgTitle + " was deleted from Storage");
        }).catch(function (error) {
            alert("Error - Unable to delete " + deleteProduct.imgTitle);
        });
    };
    return ProductAdminService;
}());
ProductAdminService = __decorate([
    core_1.Injectable()
], ProductAdminService);
exports.ProductAdminService = ProductAdminService;
//# sourceMappingURL=product-admin.service.js.map