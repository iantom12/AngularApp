"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const global_constraints_1 = require("src/app/shared/global-constraints");
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(formBuilder, userService, dialogRef, ngxService, snackbarService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.snackbarService = snackbarService;
        this.changePasswordForm = forms_1.FormGroup;
    }
    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: [null, [forms_1.Validators.required]],
            newPassword: [null, [forms_1.Validators.required]],
            confirmPassword: [null, [forms_1.Validators.required]]
        });
    }
    validateSubmit() {
        if (this.changePasswordForm.controls['newPassword'].value != this.changePasswordForm.controls['confirmPassword'].value) {
            return true;
        }
        else {
            return false;
        }
    }
    handleChangePasswordSubmit() {
        this.ngxService.start();
        var formData = this.changePasswordForm.value;
        var data = {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword
        };
        this.userService.changePassword(data).subscribe((response) => {
            this.ngxService.stop();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.dialogRef.close();
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
        }, (error) => {
            var _a, _b;
            console.log(error);
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
};
ChangePasswordComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.scss']
    })
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
