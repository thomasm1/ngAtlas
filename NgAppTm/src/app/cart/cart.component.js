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
var shopping_cart_service_1 = require("../shared/shopping-cart.service");
var router_1 = require("@angular/router");
var CartComponent = (function () {
    function CartComponent(cartSVC, router) {
        this.cartSVC = cartSVC;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartSVC.getCart()
            .then(function (theCart) { return _this.myCart = theCart; })
            .then(function (cart) { return _this.sumCart(cart); })
            .then(function (sum) { return _this.cartTotal = sum; });
    };
    CartComponent.prototype.sumCart = function (cart) {
        return Promise.resolve(cart.reduce(function (total, item) { return total + item.price; }, 0));
    };
    CartComponent.prototype.removeCart = function (id) {
        var _this = this;
        this.cartSVC.removeCart(id);
        this.sumCart(this.myCart).then(function (sum) { return _this.cartTotal = sum; });
    };
    CartComponent.prototype.purchase = function () {
        alert("Your Order Totaled " + this.cartTotal);
        this.router.navigate(['/shop']);
    };
    CartComponent.prototype.cancel = function () {
        this.router.navigate(['/shop']);
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.css']
    }),
    __metadata("design:paramtypes", [shopping_cart_service_1.ShoppingCartService, router_1.Router])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map