"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const environment_1 = require("src/environments/environment");
let BillService = class BillService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = environment_1.environment.apiUrl;
    }
    generateReport(data) {
        return this.httpClient.post(this.url +
            "/bill/generateReport/", data, {
            headers: new http_1.HttpHeaders().set('Content-type', "application/json")
        });
    }
    getPDF(data) {
        return this.httpClient.post(this.url + "/bill/getPdf", data, { responseType: 'blob' });
    }
    getBills() {
        return this.httpClient.get(this.url + "/bill/getBills/");
    }
    delete(id) {
        return this.httpClient.delete(this.url +
            "/bill/delete/" + id, {
            headers: new http_1.HttpHeaders().set('Content-type', "application/json")
        });
    }
};
BillService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], BillService);
exports.BillService = BillService;
