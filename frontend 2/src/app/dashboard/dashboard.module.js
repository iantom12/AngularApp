"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const flex_layout_1 = require("@angular/flex-layout");
const dashboard_component_1 = require("./dashboard.component");
const dashboard_routing_1 = require("./dashboard.routing");
const material_module_1 = require("../shared/material-module");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    (0, core_1.NgModule)({
        imports: [
            common_1.CommonModule,
            material_module_1.MaterialModule,
            flex_layout_1.FlexLayoutModule,
            router_1.RouterModule.forChild(dashboard_routing_1.DashboardRoutes)
        ],
        declarations: [dashboard_component_1.DashboardComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
