"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const core_1 = require("@angular/core");
const accordion_1 = require("./accordion");
const menu_items_1 = require("./menu-items");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            accordion_1.AccordionAnchorDirective,
            accordion_1.AccordionLinkDirective,
            accordion_1.AccordionDirective
        ],
        exports: [
            accordion_1.AccordionAnchorDirective,
            accordion_1.AccordionLinkDirective,
            accordion_1.AccordionDirective
        ],
        providers: [menu_items_1.MenuItems]
    })
], SharedModule);
exports.SharedModule = SharedModule;
