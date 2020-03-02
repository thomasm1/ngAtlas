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
var product_admin_service_1 = require("../adminShared/product-admin.service");
var ProductAdminComponent = (function () {
    function ProductAdminComponent(userSVC, router, prodAdminSVC) {
        this.userSVC = userSVC;
        this.router = router;
        this.prodAdminSVC = prodAdminSVC;
        this.formDisplay = true;
    }
    ProductAdminComponent.prototype.logout = function () {
        this.userSVC.logout();
        this.router.navigate(['']);
    };
    ProductAdminComponent.prototype.chooseMode = function (mode) {
        this.menuChoice = mode;
    };
    ProductAdminComponent.prototype.ngOnInit = function () {
        this.theUser = this.userSVC.loggedInUser;
        this.getProducts();
    };
    ProductAdminComponent.prototype.getProducts = function () {
        var _this = this;
        var dbRef = firebase.database().ref('products/');
        dbRef.once('value')
            .then(function (snapshot) {
            var tmp = snapshot.val();
            _this.theProducts = Object.keys(tmp).map(function (key) { return tmp[key]; });
        });
    };
    ProductAdminComponent.prototype.editProduct = function (theProduct) {
        this.singleProduct = theProduct;
        this.formDisplay = false;
    };
    ProductAdminComponent.prototype.cancelEdit = function () {
        this.formDisplay = true;
    };
    ProductAdminComponent.prototype.updateProduct = function (singleProd) {
        this.prodAdminSVC.editProduct(singleProd);
        this.formDisplay = true;
    };
    ProductAdminComponent.prototype.deleteProduct = function (oneProduct) {
        var verify = confirm("Are you sure you want to delete this product?");
        if (verify == true) {
            this.prodAdminSVC.removeProduct(oneProduct);
            this.router.navigate(['/admin/']);
        }
        else {
            alert('Nothing deleted!');
        }
    };
    return ProductAdminComponent;
}());
ProductAdminComponent = __decorate([
    core_1.Component({
        templateUrl: './product-admin.component.html',
        styleUrls: ['./product-admin.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        product_admin_service_1.ProductAdminService])
], ProductAdminComponent);
exports.ProductAdminComponent = ProductAdminComponent;
//# sourceMappingURL=product-admin.component.js.map