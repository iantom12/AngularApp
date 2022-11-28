"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialRoutes = void 0;
const route_guard_service_1 = require("../services/route-guard.service");
const manage_category_component_1 = require("./manage-category/manage-category.component");
const manage_order_component_1 = require("./manage-order/manage-order.component");
const manage_product_component_1 = require("./manage-product/manage-product.component");
const manage_user_component_1 = require("./manage-user/manage-user.component");
const view_bill_component_1 = require("./view-bill/view-bill.component");
exports.MaterialRoutes = [
    {
        path: 'category',
        component: manage_category_component_1.ManageCategoryComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            expectedRole: ['admin']
        }
    },
    {
        path: 'product',
        component: manage_product_component_1.ManageProductComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            expectedRole: ['admin']
        }
    },
    {
        path: 'order',
        component: manage_order_component_1.ManageOrderComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            expectedRole: ['admin', 'user']
        }
    },
    {
        path: 'bill',
        component: view_bill_component_1.ViewBillComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            expectedRole: ['admin', 'user']
        }
    },
    {
        path: 'user',
        component: manage_user_component_1.ManageUserComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            expectedRole: ['admin']
        }
    }
];
