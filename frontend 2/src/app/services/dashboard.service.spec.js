"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const dashboard_service_1 = require("./dashboard.service");
describe('DashboardService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(dashboard_service_1.DashboardService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
