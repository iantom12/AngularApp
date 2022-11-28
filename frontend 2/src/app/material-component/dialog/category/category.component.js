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
exports.CategoryComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const dialog_1 = require("@angular/material/dialog");
const global_constraints_1 = require("src/app/shared/global-constraints");
let CategoryComponent = class CategoryComponent {
    constructor(dialogData, formBuilder, categoryService, dialogRef, snackbarService) {
        this.dialogData = dialogData;
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.dialogRef = dialogRef;
        this.snackbarService = snackbarService;
        this.onAddCategory = new core_1.EventEmitter();
        this.onEditCategory = new core_1.EventEmitter();
        this.categoryForm = forms_1.FormGroup;
        this.dialogAction = "Add";
        this.action = "Add";
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            name: [null, [forms_1.Validators.required]]
        });
        if (this.dialogData.action === 'Edit') {
            this.dialogAction = "Edit";
            this.action = "Update";
            this.categoryForm.patchValue(this.dialogData.data);
        }
    }
    handleSubmit() {
        if (this.dialogAction === "Edit") {
            this.edit();
        }
        else {
            this.add();
        }
    }
    add() {
        var formData = this.categoryForm.value;
        var data = {
            name: formData.name
        };
        this.categoryService.add(data).subscribe((response) => {
            this.dialogRef.close();
            this.onAddCategory.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
        }, (error) => {
            var _a, _b;
            this.dialogRef.close();
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
        var formData = this.categoryForm.value;
        var data = {
            id: this.dialogData.data.id,
            name: formData.name
        };
        this.categoryService.update(data).subscribe((response) => {
            this.dialogRef.close();
            this.onEditCategory.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "Success");
        }, (error) => {
            var _a, _b;
            this.dialogRef.close();
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
CategoryComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-category',
        templateUrl: './category.component.html',
        styleUrls: ['./category.component.scss']
    }),
    __param(0, (0, core_1.Inject)(dialog_1.MAT_DIALOG_DATA))
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
