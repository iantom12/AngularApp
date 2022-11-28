"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageProductComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const table_1 = require("@angular/material/table");
const global_constraints_1 = require("src/app/shared/global-constraints");
const confirmation_component_1 = require("../dialog/confirmation/confirmation.component");
const product_component_1 = require("../dialog/product/product.component");
let ManageProductComponent = class ManageProductComponent {
    constructor(productService, ngxService, dialog, snackbarService, router) {
        this.productService = productService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.snackbarService = snackbarService;
        this.router = router;
        this.displayedColumns = ['name', 'categoryName', 'description', 'price', 'edit'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.productService.getProducts().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new table_1.MatTableDataSource(response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    handleAddAction() {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.data = {
            action: 'Add'
        };
        dialogConfig.width = "850px";
        const dialogRef = this.dialog.open(product_component_1.ProductComponent, dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onAddProduct.subscribe((response) => {
            this.tableData();
        });
    }
    handleEditAction(values) {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.data = {
            action: 'Edit',
            data: values
        };
        dialogConfig.width = "850px";
        const dialogRef = this.dialog.open(product_component_1.ProductComponent, dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onEditProduct.subscribe((response) => {
            this.tableData();
        });
    }
    handleDeleteAction(values) {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.data = {
            message: 'delete ' + values.name + ' product'
        };
        const dialogRef = this.dialog.open(confirmation_component_1.ConfirmationComponent, dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
            this.ngxService.start();
            this.deleteProduct(values.id);
            dialogRef.close();
        });
    }
    deleteProduct(id) {
        this.productService.delete(id).subscribe((response) => {
            this.ngxService.stop();
            this.tableData();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = global_constraints_1.GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, global_constraints_1.GlobalConstants.error);
        });
    }
    onChange(status, id) {
        var data = {
            status: status.toString(),
            id: id
        };
        this.productService.updateStatus(data).subscribe((response) => {
            this.ngxService.stop();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
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
ManageProductComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-manage-product',
        templateUrl: './manage-product.component.html',
        styleUrls: ['./manage-product.component.scss']
    })
], ManageProductComponent);
exports.ManageProductComponent = ManageProductComponent;
