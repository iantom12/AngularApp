"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const global_constraints_1 = require("../shared/global-constraints");
let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(formBuilder, userService, dialogRef, ngxService, snackbarService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.snackbarService = snackbarService;
        this.forgotPasswordForm = forms_1.FormGroup;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: [null, [forms_1.Validators.required, forms_1.Validators.pattern(global_constraints_1.GlobalConstants.emailRegex)]]
        });
    }
    handleSubmit() {
        this.ngxService.start();
        var formData = this.forgotPasswordForm.value;
        var data = {
            email: formData.email
        };
        // this.userService.forgotPassword(data).subscribe({
        //   next:(response)=>{
        //     this.ngxService.stop();
        //     this.responseMessage = response?.message;
        //     this.dialogRef.close();
        //     this.snackbarService.openSnackBar(this.responseMessage,"");
        //   },
        //   error:(error)=>{
        //     this.ngxService.stop();
        //     if(error.error?.message){
        //       this.responseMessage = error.error?.message;
        //     }
        //     else{
        //       this.responseMessage = GlobalConstants.genericError;
        //     }
        //     this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
        //   }
        // })
        this.userService.forgotPassword(data).subscribe((response) => {
            this.ngxService.stop();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.dialogRef.close();
            this.snackbarService.openSnackBar(this.responseMessage, "");
        }, (error) => {
            var _a, _b;
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
ForgotPasswordComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-forgot-password',
        templateUrl: './forgot-password.component.html',
        styleUrls: ['./forgot-password.component.scss']
    })
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
