"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionLinkDirective = void 0;
const core_1 = require("@angular/core");
const accordion_directive_1 = require("./accordion.directive");
let AccordionLinkDirective = class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
};
__decorate([
    (0, core_1.Input)()
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    (0, core_1.HostBinding)('class.selected'),
    (0, core_1.Input)()
], AccordionLinkDirective.prototype, "selected", null);
AccordionLinkDirective = __decorate([
    (0, core_1.Directive)({
        selector: '[appAccordionLink]'
    }),
    __param(0, (0, core_1.Inject)(accordion_directive_1.AccordionDirective))
], AccordionLinkDirective);
exports.AccordionLinkDirective = AccordionLinkDirective;
