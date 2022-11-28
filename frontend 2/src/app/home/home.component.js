"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const forgot_password_component_1 = require("../forgot-password/forgot-password.component");
const login_component_1 = require("../login/login.component");
const signup_component_1 = require("../signup/signup.component");
let HomeComponent = class HomeComponent {
    constructor(diaglog, router, userService) {
        this.diaglog = diaglog;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null) {
            this.userService.checkToken().subscribe((response) => {
                this.router.navigate(['/cafe/dashboard']);
            }, (error) => {
                console.log(error);
            });
        }
    }
    signupAction() {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.width = "550px";
        this.diaglog.open(signup_component_1.SignupComponent, dialogConfig);
    }
    forgotPasswordAction() {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.width = "550px";
        this.diaglog.open(forgot_password_component_1.ForgotPasswordComponent, dialogConfig);
    }
    loginAction() {
        const diaglogConfig = new dialog_1.MatDialogConfig();
        diaglogConfig.width = "550px";
        this.diaglog.open(login_component_1.LoginComponent, diaglogConfig);
    }
};
HomeComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
