"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const bill_service_1 = require("./bill.service");
describe('BillService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(bill_service_1.BillService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
