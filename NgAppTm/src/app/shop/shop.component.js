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
var firebase = require("firebase");
var user_service_1 = require("../admin/adminShared/user.service");
var ShopComponent = (function () {
    function ShopComponent(userSVC, router) {
        this.userSVC = userSVC;
        this.router = router;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ShopComponent.prototype.getProducts = function () {
        var _this = this;
        var dbRef = firebase.database().ref('products/');
        dbRef.once('value')
            .then(function (snapshot) {
            var tmp = snapshot.val();
            _this.products = Object.keys(tmp).map(function (key) { return tmp[key]; });
        });
    };
    ShopComponent.prototype.chooseProduct = function (prod) {
        this.router.navigate(['/product', prod.id]);
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    core_1.Component({
        templateUrl: './shop.component.html',
        styleUrls: ['./shop.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], ShopComponent);
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shop.component.js.map