"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var admin_component_1 = require("./adminComponent/admin.component");
var admin_menu_component_1 = require("./adminMenu/admin-menu.component");
var login_component_1 = require("./login/login.component");
var sign_up_component_1 = require("./signUp/sign-up.component");
var user_service_1 = require("./adminShared/user.service");
var blog_admin_service_1 = require("./adminShared/blog-admin.service");
var blog_admin_component_1 = require("./blogAdmin/blog-admin.component");
var blog_add_component_1 = require("./blogAdd/blog-add.component");
var trunc_pipe_1 = require("./adminShared/trunc.pipe");
var product_admin_service_1 = require("./adminShared/product-admin.service");
var product_admin_component_1 = require("./productAdmin/product-admin.component");
var product_add_component_1 = require("./productAdd/product-add.component");
var AdminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            { path: 'product-admin', component: product_admin_component_1.ProductAdminComponent, canActivate: [user_service_1.UserService] },
            { path: 'blog-admin', component: blog_admin_component_1.BlogAdminComponent, canActivate: [user_service_1.UserService] },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'signup', component: sign_up_component_1.SignUpComponent },
            { path: '', component: admin_menu_component_1.AdminMenuComponent, canActivate: [user_service_1.UserService] }
        ]
    },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(AdminRoutes)
            ],
            exports: [
                router_1.RouterModule,
                trunc_pipe_1.TruncatePipe
            ],
            declarations: [
                admin_component_1.AdminComponent,
                admin_menu_component_1.AdminMenuComponent,
                login_component_1.LoginComponent,
                sign_up_component_1.SignUpComponent,
                blog_admin_component_1.BlogAdminComponent,
                blog_add_component_1.BlogAddComponent,
                trunc_pipe_1.TruncatePipe,
                product_admin_component_1.ProductAdminComponent,
                product_add_component_1.ProductAddComponent
            ],
            providers: [
                user_service_1.UserService,
                blog_admin_service_1.BlogAdminService,
                product_admin_service_1.ProductAdminService
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map