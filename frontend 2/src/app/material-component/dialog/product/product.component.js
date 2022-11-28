"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const dialog_1 = require("@angular/material/dialog");
const global_constraints_1 = require("src/app/shared/global-constraints");
let ProductComponent = class ProductComponent {
    constructor(dialogData, formBuilder, productService, dialogRef, categoryService, snackbarService) {
        this.dialogData = dialogData;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.categoryService = categoryService;
        this.snackbarService = snackbarService;
        this.onAddProduct = new core_1.EventEmitter();
        this.onEditProduct = new core_1.EventEmitter();
        this.productForm = forms_1.FormGroup;
        this.dialogAction = "Add";
        this.action = "Add";
        this.categorys = [];
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            name: [null, [forms_1.Validators.required, forms_1.Validators.pattern(global_constraints_1.GlobalConstants.nameRegex)]],
            categoryId: [null, forms_1.Validators.required],
            price: [null, forms_1.Validators.required],
            description: [null, forms_1.Validators.required]
        });
        if (this.dialogData.action === 'Edit') {
            this.dialogAction = "Edit";
            this.action = "Update";
            this.productForm.patchValue(this.dialogData.data);
        }
        this.getCategorys();
    }
    getCategorys() {
        this.categoryService.getCategorys().subscribe((response) => {
            this.categorys = response;
        }, (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    handleSubmit() {
        if (this.dialogAction === 'Edit') {
            this.edit();
        }
        else {
            this.add();
        }
    }
    add() {
        var formData = this.productForm.value;
        var data = {
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            description: formData.description,
        };
        this.productService.add(data).subscribe((response) => {
            this.dialogRef.close();
            this.onAddProduct.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
        }, (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    edit() {
        var formData = this.productForm.value;
        var data = {
            id: this.dialogData.data.id,
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            description: formData.description,
        };
        this.productService.update(data).subscribe((response) => {
            this.dialogRef.close();
            this.onEditProduct.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
        }, (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
};
ProductComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss']
    }),
    __param(0, (0, core_1.Inject)(dialog_1.MAT_DIALOG_DATA))
], ProductComponent);
exports.ProductComponent = ProductComponent;
