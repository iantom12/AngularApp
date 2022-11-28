"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const route_guard_service_1 = require("./route-guard.service");
describe('RouteGuardService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(route_guard_service_1.RouteGuardService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
