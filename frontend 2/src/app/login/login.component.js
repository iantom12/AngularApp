"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const global_constraints_1 = require("../shared/global-constraints");
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, userService, dialogRef, ngxService, snackbarService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.snackbarService = snackbarService;
        this.loginForm = forms_1.FormGroup;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [null, [forms_1.Validators.required, forms_1.Validators.pattern(global_constraints_1.GlobalConstants.emailRegex)]],
            password: [null, [forms_1.Validators.required]],
        });
    }
    handleSubmit() {
        this.ngxService.start();
        var formData = this.loginForm.value;
        var data = {
            email: formData.email,
            password: formData.password
        };
        this.userService.login(data).subscribe((response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            localStorage.setItem('token', response.token);
            this.router.navigate(['/cafe/dashboard']);
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
LoginComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
