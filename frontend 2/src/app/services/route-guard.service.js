"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteGuardService = void 0;
const core_1 = require("@angular/core");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const global_constraints_1 = require("../shared/global-constraints");
let RouteGuardService = class RouteGuardService {
    constructor(auth, router, snackbarService) {
        this.auth = auth;
        this.router = router;
        this.snackbarService = snackbarService;
    }
    canActivate(route) {
        let expectedRoleArray = route.data;
        expectedRoleArray = expectedRoleArray.expectedRole;
        const token = localStorage.getItem('token');
        var tokenPayload;
        try {
            tokenPayload = (0, jwt_decode_1.default)(token);
        }
        catch (err) {
            localStorage.clear();
            this.router.navigate(['/']);
        }
        let checkRole = false;
        for (let i = 0; i < expectedRoleArray.length; i++) {
            if (expectedRoleArray[i] == tokenPayload.role) {
                checkRole = true;
            }
        }
        if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
            if (this.auth.isAuthenticated() && checkRole) {
                return true;
            }
            this.snackbarService.openSnackBar(global_constraints_1.GlobalConstants.unauthorized, global_constraints_1.GlobalConstants.error);
            this.router.navigate(['/cafe/dashboard']);
            return false;
        }
        else {
            this.router.navigate(['/']);
            localStorage.clear();
            return false;
        }
    }
};
RouteGuardService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], RouteGuardService);
exports.RouteGuardService = RouteGuardService;
