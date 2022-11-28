"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const environment_1 = require("../../environments/environment");
let UserService = class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = environment_1.environment.apiUrl;
    }
    signup(data) {
        return this.httpClient.post(this.url + "/user/signup", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    forgotPassword(data) {
        return this.httpClient.post(this.url +
            "/user/forgotPassword/", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    login(data) {
        return this.httpClient.post(this.url +
            "/user/login/", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    checkToken() {
        return this.httpClient.get(this.url +
            "/user/checkToken");
    }
    changePassword(data) {
        return this.httpClient.post(this.url +
            "/user/changePassword", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    getUsers() {
        return this.httpClient.get(this.url + "/user/get/");
    }
    update(data) {
        return this.httpClient.patch(this.url +
            "/user/update", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
};
UserService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], UserService);
exports.UserService = UserService;
