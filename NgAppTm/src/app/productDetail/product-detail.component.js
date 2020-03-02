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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var firebase = require("firebase");
var product_1 = require("../admin/adminShared/product");
var shopping_cart_service_1 = require("../shared/shopping-cart.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router, cartSVC) {
        this.route = route;
        this.router = router;
        this.cartSVC = cartSVC;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var productId = this.route.snapshot.params['id'];
        this.getProduct(productId);
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        var dbRef = firebase.database().ref('products');
        dbRef.orderByChild('id')
            .equalTo(id)
            .once('value')
            .then(function (snapshot) {
            var tmp = snapshot.val();
            var transform = Object.keys(tmp).map(function (key) { return tmp[key]; });
            var name = transform[0].name;
            var desc = transform[0].desc;
            var imgTitle = transform[0].imgTitle;
            var img = transform[0].img;
            var price = transform[0].price;
            var id = transform[0].id;
            _this.singleProduct = new product_1.Product(name, desc, imgTitle, img, price, id);
        });
    };
    ;
    ProductDetailComponent.prototype.addProduct = function (id, name, price) {
        this.cartSVC.addProduct(id, name, price);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: './product-detail.component.html',
        styleUrls: ['./product-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        shopping_cart_service_1.ShoppingCartService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map