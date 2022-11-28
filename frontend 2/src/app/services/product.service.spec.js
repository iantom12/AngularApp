"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const product_service_1 = require("./product.service");
describe('ProductService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(product_service_1.ProductService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
