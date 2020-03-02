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
var product_admin_service_1 = require("../adminShared/product-admin.service");
var product_1 = require("../adminShared/product");
var ProductAddComponent = (function () {
    function ProductAddComponent(prodAdminSVC, router) {
        this.prodAdminSVC = prodAdminSVC;
        this.router = router;
    }
    ProductAddComponent.prototype.fileLoad = function ($event) {
        var _this = this;
        var myReader = new FileReader();
        var file = $event.target.files[0];
        this.imgTitle = file.name;
        myReader.readAsDataURL(file);
        myReader.onload = function (e) {
            _this.imageSRC = e.target.result;
        };
    };
    ProductAddComponent.prototype.createProduct = function () {
        this.product = new product_1.Product(this.name, this.description, this.imgTitle, this.imageSRC.substring(23), this.price);
        this.prodAdminSVC.createProduct(this.product);
        alert(this.name + " added to posts");
        this.router.navigate(['/admin']);
    };
    ProductAddComponent.prototype.cancel = function () {
        this.router.navigate(['/admin']);
    };
    return ProductAddComponent;
}());
ProductAddComponent = __decorate([
    core_1.Component({
        selector: 'product-menu',
        templateUrl: './product-add.component.html',
    }),
    __metadata("design:paramtypes", [product_admin_service_1.ProductAdminService, router_1.Router])
], ProductAddComponent);
exports.ProductAddComponent = ProductAddComponent;
//# sourceMappingURL=product-add.component.js.map