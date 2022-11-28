"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const token_interceptor_interceptor_1 = require("./token-interceptor.interceptor");
describe('TokenInterceptorInterceptor', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({
        providers: [
            token_interceptor_interceptor_1.TokenInterceptorInterceptor
        ]
    }));
    it('should be created', () => {
        const interceptor = testing_1.TestBed.inject(token_interceptor_interceptor_1.TokenInterceptorInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
