"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageUserComponent = void 0;
const core_1 = require("@angular/core");
const table_1 = require("@angular/material/table");
const global_constraints_1 = require("src/app/shared/global-constraints");
let ManageUserComponent = class ManageUserComponent {
    constructor(ngxService, userService, snackbarService) {
        this.ngxService = ngxService;
        this.userService = userService;
        this.snackbarService = snackbarService;
        this.displayedColumns = ['name', 'email', 'phoneNumber', 'status'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.userService.getUsers().subscribe((response) => {
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
    handleChangeAction(status, id) {
        this.ngxService.start();
        var data = {
            status: status.toString(),
            id: id
        };
        this.userService.update(data).subscribe((response) => {
            this.ngxService.stop();
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
ManageUserComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-manage-user',
        templateUrl: './manage-user.component.html',
        styleUrls: ['./manage-user.component.scss']
    })
], ManageUserComponent);
exports.ManageUserComponent = ManageUserComponent;
