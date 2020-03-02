"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        this.myCart = [];
    }
    ShoppingCartService.prototype.getCart = function () {
        return Promise.resolve(this.myCart);
    };
    ShoppingCartService.prototype.addProduct = function (id, name, price) {
        this.myCart.push({ 'id': id, 'name': name, 'price': Number(price) });
        alert(name + " added to cart");
    };
    ShoppingCartService.prototype.removeCart = function (searchId) {
        var tmp = this.myCart.map(function (x) { return x.id; }).indexOf(searchId);
        if (tmp > -1) {
            this.myCart.splice(tmp, 1);
        }
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    core_1.Injectable()
], ShoppingCartService);
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart.service.js.map