"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("../home/home.component");
var pageNotFound_component_1 = require("../home/pageNotFound.component");
var publication_component_1 = require("../publication/publication.component");
var publicationList_component_1 = require("../publication/publicationList.component");
// import { BlogDetailComponent } from '../blogDetail/blog-detail.component';
// import { ShopComponent }  from '../shop/shop.component';
// import { ProductDetailComponent } from '../productDetail/product-detail.component';
// import { CartComponent } from '../cart/cart.component';
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                //   { path: 'home', component: HomeComponent },
                { path: 'publications', component: publication_component_1.PublicationComponent },
                { path: 'publications', component: publicationList_component_1.PublicationListComponent },
                //  { path: '',  pathMatch: 'full' , component: HomeComponent },
                // { path: 'cart', component: CartComponent },
                //  { path: 'product/:id', component: ProductDetailComponent },
                // { path: 'shop', component: ShopComponent },
                // { path: 'post/:id', component: BlogDetailComponent },
                { path: '', component: home_component_1.HomeComponent },
                { path: '**', component: pageNotFound_component_1.PageNotFoundComponent },
            ])
        ],
        exports: [
            router_1.RouterModule
        ],
        declarations: []
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map