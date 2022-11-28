"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialComponentsModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const http_1 = require("@angular/common/http");
const common_1 = require("@angular/common");
const table_1 = require("@angular/cdk/table");
const forms_1 = require("@angular/forms");
const flex_layout_1 = require("@angular/flex-layout");
const material_routing_1 = require("./material.routing");
const material_module_1 = require("../shared/material-module");
const view_bill_products_component_1 = require("./dialog/view-bill-products/view-bill-products.component");
const confirmation_component_1 = require("./dialog/confirmation/confirmation.component");
const change_password_component_1 = require("./dialog/change-password/change-password.component");
const manage_category_component_1 = require("./manage-category/manage-category.component");
const category_component_1 = require("./dialog/category/category.component");
const manage_product_component_1 = require("./manage-product/manage-product.component");
const product_component_1 = require("./dialog/product/product.component");
const manage_order_component_1 = require("./manage-order/manage-order.component");
const view_bill_component_1 = require("./view-bill/view-bill.component");
const manage_user_component_1 = require("./manage-user/manage-user.component");
let MaterialComponentsModule = class MaterialComponentsModule {
};
MaterialComponentsModule = __decorate([
    (0, core_1.NgModule)({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(material_routing_1.MaterialRoutes),
            material_module_1.MaterialModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            flex_layout_1.FlexLayoutModule,
            table_1.CdkTableModule
        ],
        providers: [],
        declarations: [
            view_bill_products_component_1.ViewBillProductsComponent,
            confirmation_component_1.ConfirmationComponent,
            change_password_component_1.ChangePasswordComponent,
            manage_category_component_1.ManageCategoryComponent,
            category_component_1.CategoryComponent,
            manage_product_component_1.ManageProductComponent,
            product_component_1.ProductComponent,
            manage_order_component_1.ManageOrderComponent,
            view_bill_component_1.ViewBillComponent,
            manage_user_component_1.ManageUserComponent,
        ]
    })
], MaterialComponentsModule);
exports.MaterialComponentsModule = MaterialComponentsModule;
