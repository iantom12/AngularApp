"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const animations_1 = require("@angular/platform-browser/animations");
const material_module_1 = require("./shared/material-module");
const home_component_1 = require("./home/home.component");
const best_seller_component_1 = require("./best-seller/best-seller.component");
const forms_1 = require("@angular/forms");
const flex_layout_1 = require("@angular/flex-layout");
const shared_module_1 = require("./shared/shared.module");
const full_component_1 = require("./layouts/full/full.component");
const header_component_1 = require("./layouts/full/header/header.component");
const sidebar_component_1 = require("./layouts/full/sidebar/sidebar.component");
const http_1 = require("@angular/common/http");
const signup_component_1 = require("./signup/signup.component");
const ngx_ui_loader_1 = require("ngx-ui-loader");
const forgot_password_component_1 = require("./forgot-password/forgot-password.component");
const login_component_1 = require("./login/login.component");
const token_interceptor_interceptor_1 = require("./services/token-interceptor.interceptor");
const ngxUiLoaderConfig = {
    text: "Loading...",
    textColor: "#FFFFFF",
    textPosition: "center-center",
    pbColor: "red",
    bgsColor: "red",
    fgsColor: "red",
    fgsType: ngx_ui_loader_1.SPINNER.ballSpinClockwise,
    fgsSize: 100,
    pbDirection: ngx_ui_loader_1.PB_DIRECTION.leftToRight,
    pbThickness: 5
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            best_seller_component_1.BestSellerComponent,
            full_component_1.FullComponent,
            header_component_1.AppHeaderComponent,
            sidebar_component_1.AppSidebarComponent,
            signup_component_1.SignupComponent,
            forgot_password_component_1.ForgotPasswordComponent,
            login_component_1.LoginComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_module_1.MaterialModule,
            flex_layout_1.FlexLayoutModule,
            shared_module_1.SharedModule,
            http_1.HttpClientModule,
            ngx_ui_loader_1.NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
        ],
        providers: [http_1.HttpClientModule, { provide: http_1.HTTP_INTERCEPTORS, useClass: token_interceptor_interceptor_1.TokenInterceptorInterceptor, multi: true }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
