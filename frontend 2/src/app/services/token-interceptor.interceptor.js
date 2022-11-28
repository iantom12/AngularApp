"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInterceptorInterceptor = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let TokenInterceptorInterceptor = class TokenInterceptorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: { Authorization: 'Bearer ' + localStorage.getItem('token') }
            });
        }
        return next.handle(request).pipe((0, operators_1.catchError)((err) => {
            if (err instanceof http_1.HttpErrorResponse) {
                console.log(err.url);
                if (err.status === 401 || err.status === 403) {
                    if (this.router.url === '/') { }
                    else {
                        localStorage.clear();
                        this.router.navigate(['/']);
                    }
                }
            }
            return (0, rxjs_1.throwError)(err);
        }));
    }
};
TokenInterceptorInterceptor = __decorate([
    (0, core_1.Injectable)()
], TokenInterceptorInterceptor);
exports.TokenInterceptorInterceptor = TokenInterceptorInterceptor;
