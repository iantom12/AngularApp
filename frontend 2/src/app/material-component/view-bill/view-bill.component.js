"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewBillComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const table_1 = require("@angular/material/table");
const saveAs = __importStar(require("file-saver"));
const global_constraints_1 = require("src/app/shared/global-constraints");
const confirmation_component_1 = require("../dialog/confirmation/confirmation.component");
const view_bill_products_component_1 = require("../dialog/view-bill-products/view-bill-products.component");
let ViewBillComponent = class ViewBillComponent {
    constructor(billService, ngxService, dialog, snackbarService, router) {
        this.billService = billService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.snackbarService = snackbarService;
        this.router = router;
        this.displayedColumns = ['name', 'email', 'phoneNumber', 'paymentMethod', 'total', 'view'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.billService.getBills().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new table_1.MatTableDataSource(response);
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
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    handleViewAction(values) {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.data = {
            data: values
        };
        dialogConfig.width = "100%";
        const dialogRef = this.dialog.open(view_bill_products_component_1.ViewBillProductsComponent, dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
    }
    downloadReportAction(values) {
        this.ngxService.start();
        var data = {
            name: values.name,
            email: values.email,
            uuid: values.uuid,
            phoneNumber: values.phoneNumber,
            paymentMethod: values.paymentMethod,
            totalAmount: values.total,
            productDetails: values.productDetails
        };
        this.billService.getPDF(data).subscribe((response) => {
            saveAs(response, values.uuid + '.pdf');
            this.ngxService.stop();
        });
    }
    handleDeleteAction(values) {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.data = {
            message: 'delete ' + values.name + ' bill'
        };
        const dialogRef = this.dialog.open(confirmation_component_1.ConfirmationComponent, dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
            this.ngxService.start();
            this.deleteProduct(values.id);
            dialogRef.close();
        });
    }
    deleteProduct(id) {
        this.billService.delete(id).subscribe((response) => {
            this.ngxService.stop();
            this.tableData();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
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
};
ViewBillComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-view-bill',
        templateUrl: './view-bill.component.html',
        styleUrls: ['./view-bill.component.scss']
    })
], ViewBillComponent);
exports.ViewBillComponent = ViewBillComponent;
