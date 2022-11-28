"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const snackbar_service_1 = require("./snackbar.service");
describe('SnackbarService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(snackbar_service_1.SnackbarService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
