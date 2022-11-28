"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHeaderComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const change_password_component_1 = require("src/app/material-component/dialog/change-password/change-password.component");
const confirmation_component_1 = require("src/app/material-component/dialog/confirmation/confirmation.component");
let AppHeaderComponent = class AppHeaderComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    logout() {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.data = {
            message: 'Logout'
        };
        const dialogRef = this.dialog.open(confirmation_component_1.ConfirmationComponent, dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((user) => {
            dialogRef.close();
            localStorage.clear();
            this.router.navigate(['/']);
        });
    }
    changePassword() {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.width = "550px";
        this.dialog.open(change_password_component_1.ChangePasswordComponent, dialogConfig);
    }
};
AppHeaderComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: []
    })
], AppHeaderComponent);
exports.AppHeaderComponent = AppHeaderComponent;
