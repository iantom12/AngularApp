"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const core_1 = require("@angular/core");
const autocomplete_1 = require("@angular/material/autocomplete");
const button_1 = require("@angular/material/button");
const button_toggle_1 = require("@angular/material/button-toggle");
const card_1 = require("@angular/material/card");
const checkbox_1 = require("@angular/material/checkbox");
const chips_1 = require("@angular/material/chips");
const datepicker_1 = require("@angular/material/datepicker");
const dialog_1 = require("@angular/material/dialog");
const expansion_1 = require("@angular/material/expansion");
const form_field_1 = require("@angular/material/form-field");
const grid_list_1 = require("@angular/material/grid-list");
const icon_1 = require("@angular/material/icon");
const input_1 = require("@angular/material/input");
const list_1 = require("@angular/material/list");
const menu_1 = require("@angular/material/menu");
const paginator_1 = require("@angular/material/paginator");
const progress_bar_1 = require("@angular/material/progress-bar");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const radio_1 = require("@angular/material/radio");
const select_1 = require("@angular/material/select");
const sidenav_1 = require("@angular/material/sidenav");
const slider_1 = require("@angular/material/slider");
const slide_toggle_1 = require("@angular/material/slide-toggle");
const snack_bar_1 = require("@angular/material/snack-bar");
const sort_1 = require("@angular/material/sort");
const table_1 = require("@angular/material/table");
const tabs_1 = require("@angular/material/tabs");
const toolbar_1 = require("@angular/material/toolbar");
const tooltip_1 = require("@angular/material/tooltip");
const stepper_1 = require("@angular/material/stepper");
const badge_1 = require("@angular/material/badge");
const core_2 = require("@angular/material/core");
const bottom_sheet_1 = require("@angular/material/bottom-sheet");
const table_2 = require("@angular/cdk/table");
const accordion_1 = require("@angular/cdk/accordion");
const a11y_1 = require("@angular/cdk/a11y");
const bidi_1 = require("@angular/cdk/bidi");
const overlay_1 = require("@angular/cdk/overlay");
const platform_1 = require("@angular/cdk/platform");
const observers_1 = require("@angular/cdk/observers");
const portal_1 = require("@angular/cdk/portal");
/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    (0, core_1.NgModule)({
        exports: [
            autocomplete_1.MatAutocompleteModule,
            button_1.MatButtonModule,
            bottom_sheet_1.MatBottomSheetModule,
            button_toggle_1.MatButtonToggleModule,
            card_1.MatCardModule,
            checkbox_1.MatCheckboxModule,
            chips_1.MatChipsModule,
            table_1.MatTableModule,
            datepicker_1.MatDatepickerModule,
            dialog_1.MatDialogModule,
            expansion_1.MatExpansionModule,
            form_field_1.MatFormFieldModule,
            grid_list_1.MatGridListModule,
            icon_1.MatIconModule,
            input_1.MatInputModule,
            list_1.MatListModule,
            menu_1.MatMenuModule,
            paginator_1.MatPaginatorModule,
            progress_bar_1.MatProgressBarModule,
            progress_spinner_1.MatProgressSpinnerModule,
            radio_1.MatRadioModule,
            core_2.MatRippleModule,
            select_1.MatSelectModule,
            badge_1.MatBadgeModule,
            sidenav_1.MatSidenavModule,
            slide_toggle_1.MatSlideToggleModule,
            slider_1.MatSliderModule,
            snack_bar_1.MatSnackBarModule,
            sort_1.MatSortModule,
            stepper_1.MatStepperModule,
            tabs_1.MatTabsModule,
            toolbar_1.MatToolbarModule,
            tooltip_1.MatTooltipModule,
            core_2.MatNativeDateModule,
            table_2.CdkTableModule,
            a11y_1.A11yModule,
            bidi_1.BidiModule,
            accordion_1.CdkAccordionModule,
            observers_1.ObserversModule,
            overlay_1.OverlayModule,
            platform_1.PlatformModule,
            portal_1.PortalModule
        ]
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
