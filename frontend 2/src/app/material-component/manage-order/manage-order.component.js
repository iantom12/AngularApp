"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageOrderComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const global_constraints_1 = require("src/app/shared/global-constraints");
const file_saver_1 = require("file-saver");
let ManageOrderComponent = class ManageOrderComponent {
    constructor(formBuilder, categoryService, productService, snackbarService, billService, ngxService) {
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.productService = productService;
        this.snackbarService = snackbarService;
        this.billService = billService;
        this.ngxService = ngxService;
        this.displayColumns = ['name', 'category', 'price', 'quantity', 'total', 'edit'];
        this.dataSource = [];
        this.manageOrderForm = forms_1.FormGroup;
        this.categorys = [];
        this.products = [];
        this.price = [];
        this.totalAmount = 0;
    }
    ngOnInit() {
        this.ngxService.start();
        this.getCategorys();
        this.manageOrderForm = this.formBuilder.group({
            name: [null, [forms_1.Validators.required, forms_1.Validators.pattern(global_constraints_1.GlobalConstants.nameRegex)]],
            email: [null, [forms_1.Validators.required, forms_1.Validators.pattern(global_constraints_1.GlobalConstants.emailRegex)]],
            phoneNumber: [null, [forms_1.Validators.required, forms_1.Validators.pattern(global_constraints_1.GlobalConstants.phoneNumberRegex)]],
            paymentMethod: [null, [forms_1.Validators.required]],
            product: [null, [forms_1.Validators.required]],
            category: [null, [forms_1.Validators.required]],
            quantity: [null, [forms_1.Validators.required]],
            price: [null, [forms_1.Validators.required]],
            total: [0, [forms_1.Validators.required]],
        });
    }
    getCategorys() {
        this.categoryService.getCategorys().subscribe((response) => {
            this.ngxService.stop();
            this.categorys = response;
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    getProductsByCategory(value) {
        this.productService.getProductsByCategory(value.id).subscribe((response) => {
            this.products = response;
            this.manageOrderForm.controls['price'].setValue('');
            this.manageOrderForm.controls['quantity'].setValue('');
            this.manageOrderForm.controls['total'].setValue(0);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    getProductDetails(value) {
        this.productService.getById(value.id).subscribe((response) => {
            this.price = response.price;
            this.manageOrderForm.controls['price'].setValue(response.price);
            this.manageOrderForm.controls['quantity'].setValue('1');
            this.manageOrderForm.controls['total'].setValue(this.price * 1);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    setQuantity(value) {
        var temp = this.manageOrderForm.controls['quantity'].value;
        if (temp > 0) {
            this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
        }
        else if (temp != '') {
            this.manageOrderForm.controls['quantity'].setValue('1');
            this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
        }
    }
    validateProductAdd() {
        if (this.manageOrderForm.controls['total'].value === 0 || this.manageOrderForm.controls['total'].value === null || this.manageOrderForm.controls['quantity'].value <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    validateSubmit() {
        if (this.totalAmount === 0 || this.manageOrderForm.controls['name'].value === null ||
            this.manageOrderForm.controls['email'].value === null ||
            this.manageOrderForm.controls['phoneNumber'].value === null ||
            this.manageOrderForm.controls['paymentMethod'].value === null ||
            !(this.manageOrderForm.controls['phoneNumber'].valid ||
                !(this.manageOrderForm.controls['email'].valid))) {
            return true;
        }
        else {
            return false;
        }
    }
    add() {
        var formData = this.manageOrderForm.value;
        var productName = this.dataSource.find((e) => e.id == formData.product.id);
        if (productName === undefined) {
            this.totalAmount = this.totalAmount + formData.total;
            this.dataSource.push({
                id: formData.product.id, name: formData.product.name, category: formData.category.name,
                quantity: formData.quantity, price: formData.price, total: formData.total
            });
            this.dataSource = [...this.dataSource];
            this.snackbarService.openSnackBar(global_constraints_1.GlobalConstants.productAdded, "Success");
        }
        else {
            this.snackbarService.openSnackBar(global_constraints_1.GlobalConstants.productExistError, global_constraints_1.GlobalConstants.error);
        }
    }
    handleDeleteAction(value, element) {
        this.totalAmount = this.totalAmount - element.total;
        this.dataSource.splice(value, 1);
        this.dataSource = [...this.dataSource];
    }
    submitAction() {
        this.ngxService.start();
        var formData = this.manageOrderForm.value;
        var data = {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            paymentMethod: formData.paymentMethod,
            totalAmount: this.totalAmount,
            productDetails: JSON.stringify(this.dataSource)
        };
        this.billService.generateReport(data).subscribe((response) => {
            this.downloadFile(response === null || response === void 0 ? void 0 : response.uuid);
            this.manageOrderForm.reset();
            this.dataSource = [];
            this.totalAmount = 0;
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    downloadFile(fileName) {
        var data = {
            uuid: fileName
        };
        this.billService.getPDF(data).subscribe((response) => {
            (0, file_saver_1.saveAs)(response, fileName + '.pdf');
            this.ngxService.stop();
        });
    }
};
ManageOrderComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-manage-order',
        templateUrl: './manage-order.component.html',
        styleUrls: ['./manage-order.component.scss']
    })
], ManageOrderComponent);
exports.ManageOrderComponent = ManageOrderComponent;
