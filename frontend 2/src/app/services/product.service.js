"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const environment_1 = require("src/environments/environment");
let ProductService = class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = environment_1.environment.apiUrl;
    }
    add(data) {
        return this.httpClient.post(this.url +
            "/product/add/", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    update(data) {
        return this.httpClient.patch(this.url +
            "/product/update/", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    getProducts() {
        return this.httpClient.get(this.url +
            "/product/get/");
    }
    updateStatus(data) {
        return this.httpClient.patch(this.url +
            "/product/updateStatus/", data, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    delete(id) {
        return this.httpClient.delete(this.url +
            "/product/delete/" + id, {
            headers: new http_1.HttpHeaders().set('Content-Type', "application/json")
        });
    }
    getProductsByCategory(id) {
        return this.httpClient.get(this.url + "/product/getByCategory/" + id);
    }
    getById(id) {
        return this.httpClient.get(this.url + "/product/getById/" + id);
    }
};
ProductService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], ProductService);
exports.ProductService = ProductService;
