"use strict";
(self["webpackChunkbe"] = self["webpackChunkbe"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/error/error.component */ 6359);
/* harmony import */ var _interceptors_auth_auth_guard_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/auth/auth-guard.class */ 9555);
/* harmony import */ var _routes_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/login/login.component */ 7853);
/* harmony import */ var _routes_private_private_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/private/private.component */ 7429);
/* harmony import */ var _routes_public_public_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/public/public.routes */ 7101);
/* harmony import */ var _routes_private_dashboard_dashboard_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/private/dashboard/dashboard.routes */ 9027);
/* harmony import */ var _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/app.layout.component */ 3725);
/* harmony import */ var _routes_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/maintenance/maintenance.component */ 2810);
/* harmony import */ var _routes_private_breweries_breweries_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/private/breweries/breweries.routes */ 9174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6839);














const routes = [{
  path: 'login',
  component: _routes_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}, {
  path: '',
  component: _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_6__.AppLayoutComponent,
  children: [
  //insert new route here, above is the sakai theme from primeng
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'maintenance',
    component: _routes_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_7__.MaintenanceComponent
  }, {
    path: 'error',
    component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent
  }, ..._routes_public_public_routes__WEBPACK_IMPORTED_MODULE_4__.PublicRoutes, {
    path: 'private',
    component: _routes_private_private_component__WEBPACK_IMPORTED_MODULE_3__.PrivateComponent,
    canActivate: [_interceptors_auth_auth_guard_class__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [..._routes_private_dashboard_dashboard_routes__WEBPACK_IMPORTED_MODULE_5__.DashboardRoutes, ..._routes_private_breweries_breweries_routes__WEBPACK_IMPORTED_MODULE_8__.BreweriesRoutes]
  }]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar, _interceptors_auth_auth_guard_class__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, {
    useHash: false,
    onSameUrlNavigation: 'reload'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class AppComponent {
  constructor() {
    this.title = 'bc-be';
  }
  ngOnInit() {}
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_error_error_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/error/error.module */ 2948);
/* harmony import */ var _components_layout_wrapper_layout_wrapper_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout-wrapper/layout-wrapper.module */ 9790);
/* harmony import */ var _components_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/progress-spinner/progress-spinner.module */ 4412);
/* harmony import */ var _interceptors_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/auth/auth-interceptor */ 1552);
/* harmony import */ var _interceptors_auth_auth_interceptor_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/auth/auth-interceptor-options */ 4133);
/* harmony import */ var _interceptors_auth_client_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/auth/client-error-handler */ 6314);
/* harmony import */ var _routes_login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/login/login.module */ 5009);
/* harmony import */ var _routes_private_private_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/private/private.module */ 5479);
/* harmony import */ var _routes_public_public_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/public/public.module */ 6919);
/* harmony import */ var _components_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/custom-snackbar/custom-snackbar.module */ 5743);
/* harmony import */ var _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/app.layout.module */ 6421);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 3095);






















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ErrorHandler,
    useClass: _interceptors_auth_client_error_handler__WEBPACK_IMPORTED_MODULE_7__.ClientErrorHandler
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS,
    useClass: _interceptors_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptor,
    multi: true
  }, {
    provide: _interceptors_auth_auth_interceptor_options__WEBPACK_IMPORTED_MODULE_6__.AUTH_INTERCEPTOR_OPTIONS,
    useValue: {
      whitelist: [new RegExp('.+/api/.+')],
      blacklist: []
    }
  }, {
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline'
    }
  }, primeng_api__WEBPACK_IMPORTED_MODULE_17__.ConfirmationService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_layout_wrapper_layout_wrapper_module__WEBPACK_IMPORTED_MODULE_3__.LayoutWrapperModule, _components_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule, _routes_public_public_module__WEBPACK_IMPORTED_MODULE_10__.PublicModule, _routes_private_private_module__WEBPACK_IMPORTED_MODULE_9__.PrivateModule, _routes_login_login_module__WEBPACK_IMPORTED_MODULE_8__.LoginModule, _components_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_11__.CustomSnackbarModule, _components_error_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_12__.AppLayoutModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__.SharedModule, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_layout_wrapper_layout_wrapper_module__WEBPACK_IMPORTED_MODULE_3__.LayoutWrapperModule, _components_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule, _routes_public_public_module__WEBPACK_IMPORTED_MODULE_10__.PublicModule, _routes_private_private_module__WEBPACK_IMPORTED_MODULE_9__.PrivateModule, _routes_login_login_module__WEBPACK_IMPORTED_MODULE_8__.LoginModule, _components_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_11__.CustomSnackbarModule, _components_error_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_12__.AppLayoutModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__.SharedModule, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule]
  });
})();

/***/ }),

/***/ 5082:
/*!*************************************************************************!*\
  !*** ./src/app/components/custom-snackbar/custom-snackbar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomSnackbarComponent": () => (/* binding */ CustomSnackbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 3677);





class CustomSnackbarComponent {
  constructor(data, snackBarRef) {
    this.data = data;
    this.snackBarRef = snackBarRef;
  }
  ngOnInit() {}
}
CustomSnackbarComponent.ɵfac = function CustomSnackbarComponent_Factory(t) {
  return new (t || CustomSnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
};
CustomSnackbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CustomSnackbarComponent,
  selectors: [["app-custom-snackbar"]],
  decls: 11,
  vars: 3,
  consts: [[1, "flex", "align-items-start", "justify-content-between", "text-white", "relative", "max-w-xs", "lg:max-w-md", "max-h-[200px]", "overflow-y-scroll", "no-scrollbar"], [1, "grow-1"], [1, "mat-body-1"], ["mat-icon-button", "", 1, "align-self-start", "grow-0", 3, "click"]],
  template: function CustomSnackbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2)(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSnackbarComponent_Template_button_click_8_listener() {
        return ctx.snackBarRef.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx.data.errorInfo.status || "", "]");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.errorInfo.name || "Error", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.errorInfo.message || "Unknown error", " ");
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton]
});


/***/ }),

/***/ 5743:
/*!**********************************************************************!*\
  !*** ./src/app/components/custom-snackbar/custom-snackbar.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomSnackbarModule": () => (/* binding */ CustomSnackbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _custom_snackbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-snackbar.component */ 5082);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ 1884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);






class CustomSnackbarModule {}
CustomSnackbarModule.ɵfac = function CustomSnackbarModule_Factory(t) {
  return new (t || CustomSnackbarModule)();
};
CustomSnackbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CustomSnackbarModule
});
CustomSnackbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomSnackbarModule, {
    declarations: [_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.CustomSnackbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionModule],
    exports: [_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.CustomSnackbarComponent]
  });
})();

/***/ }),

/***/ 6359:
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _view_frame_view_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-frame/view-frame.component */ 8811);






function ErrorComponent_div_5_h1_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", ctx_r6.routeParams.name, "");
  }
}
function ErrorComponent_div_5_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ErrorComponent_div_5_h1_1_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ERROR ", ctx_r4.routeParams == null ? null : ctx_r4.routeParams.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.routeParams.name);
  }
}
function ErrorComponent_div_5_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.routeParams == null ? null : ctx_r5.routeParams.message);
  }
}
function ErrorComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ErrorComponent_div_5_h1_1_Template, 3, 2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ErrorComponent_div_5_h3_2_Template, 2, 1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.routeParams == null ? null : ctx_r0.routeParams.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.routeParams == null ? null : ctx_r0.routeParams.message);
  }
}
function ErrorComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Unknown error, sorry :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Go to login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/login");
  }
}
function ErrorComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\t\t\t\t\t", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r2.routeParams.stack), "\n\t\t\t\t\t\t\t\t");
  }
}
function ErrorComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r3.routeParams == null ? null : ctx_r3.routeParams.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Retry ", ctx_r3.routeParams == null ? null : ctx_r3.routeParams.url, " ");
  }
}
class ErrorComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
  }
  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
    this.data = this.activatedRoute.snapshot.data;
  }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-error"]],
  decls: 11,
  vars: 10,
  consts: [["color", "accent", 1, "example-toolbar", "justify-content-center"], [1, "logo"], ["viewMode", "index", 3, "loading", "disableBack", "disableSidebar", "heading", "subTitle", "enableNew"], ["content", ""], [1, "error-container"], [4, "ngIf"], ["class", "pre-container", 4, "ngIf"], ["class", "mr-4", "mat-stroked-button", "", 3, "routerLink", 4, "ngIf"], ["color", "accent", "mat-raised-button", "", "routerLink", "/login"], ["mat-stroked-button", "", 3, "routerLink"], [1, "pre-container"], ["mat-stroked-button", "", 1, "mr-4", 3, "routerLink"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-view-frame", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ErrorComponent_div_5_Template, 3, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ErrorComponent_div_6_Template, 5, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ErrorComponent_div_7_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ErrorComponent_button_8_Template, 2, 2, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Go to login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", false)("disableBack", true)("disableSidebar", true)("heading", "ERROR")("subTitle", (ctx.routeParams == null ? null : ctx.routeParams.url) ? "Error in" + (ctx.routeParams == null ? null : ctx.routeParams.url) + " page" : "")("enableNew", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.routeParams.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.routeParams && !ctx.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.routeParams == null ? null : ctx.routeParams.stack);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.routeParams == null ? null : ctx.routeParams.url) && ctx.routeParams.status !== "404");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _view_frame_view_frame_component__WEBPACK_IMPORTED_MODULE_0__.ViewFrameComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe]
});


/***/ }),

/***/ 2948:
/*!**************************************************!*\
  !*** ./src/app/components/error/error.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorModule": () => (/* binding */ ErrorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.component */ 6359);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/app-routing.module */ 158);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _view_frame_view_frame_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-frame/view-frame.module */ 3174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);








class ErrorModule {}
ErrorModule.ɵfac = function ErrorModule_Factory(t) {
  return new (t || ErrorModule)();
};
ErrorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ErrorModule
});
ErrorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _view_frame_view_frame_module__WEBPACK_IMPORTED_MODULE_2__.ViewFrameModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ErrorModule, {
    declarations: [_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _view_frame_view_frame_module__WEBPACK_IMPORTED_MODULE_2__.ViewFrameModule],
    exports: [_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent]
  });
})();

/***/ }),

/***/ 3838:
/*!***********************************************************************!*\
  !*** ./src/app/components/layout-wrapper/layout-wrapper.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutWrapperComponent": () => (/* binding */ LayoutWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/services/auth-service.service */ 410);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _app_app_services_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/services/sidenav-menu/sidenav-menu.service */ 6452);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 9101);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 9314);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 445);
/* harmony import */ var _services_sidenav_menu_nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sidenav-menu/nested-menu/nested-menu.component */ 8111);













const _c0 = ["snav"];
function LayoutWrapperComponent_app_nested_menu_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-nested-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("afterItemClicked", function LayoutWrapperComponent_app_nested_menu_8_Template_app_nested_menu_afterItemClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("small", ctx_r1.collapse)("item", item_r3);
  }
}
const _c1 = function (a1) {
  return ["/private/users", a1];
};
class LayoutWrapperComponent {
  onResize(event) {
    this.windowWith = event.target.innerWidth;
  }
  constructor(authService, snackbarService, sidenavService, router, changeDetectorRef, media) {
    this.authService = authService;
    this.snackbarService = snackbarService;
    this.sidenavService = sidenavService;
    this.router = router;
    this.collapse = false;
    this.items = [];
    this.windowWith = window.innerWidth;
    this.user = null;
    this.formattedName = '';
    this.routes = [{
      path: 'dashboard',
      label: 'Dashboard',
      icon: 'dashboard'
    }, {
      path: 'imprese',
      label: 'Imprese',
      icon: 'business'
    }, {
      path: 'user',
      label: 'User',
      icon: 'group'
    }];
    this.isCalendarModule = false;
    this.items = this.sidenavService.items;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.authService.isLoggedIn().subscribe(
    //   () => {
    //     console.log('Authenticated');
    //     this.snackbarService.message('Authenticated');
    //     // this.state.go('app..dashboard');
    //   },
    //   () => {
    //     console.warn('Not authenticated, need to login');
    //     this.router.navigate(['login'])
    //   }
    // );
    this.router.events.subscribe(() => {
      if (this.sidenav) {
        this.sidenav.close();
      }
      if (this.router.url.includes('calendar')) {
        this.isCalendarModule = true;
      } else {
        this.isCalendarModule = false;
      }
    });
  }
  ngOnInit() {
    this.user = this.authService.getUserInfo();
    if (this.user.name && this.user.surname) {
      this.formattedName = this.user.name + ' ' + this.user.surname;
    } else {
      this.formattedName = this.user.email + ' ' + this.user.email;
    }
    // console.log('user', this.user);
    if (this.router.url.includes('calendar')) {
      this.isCalendarModule = true;
    }
  }
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
LayoutWrapperComponent.ɵfac = function LayoutWrapperComponent_Factory(t) {
  return new (t || LayoutWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__.SnackService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_app_services_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_2__.SidenavMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.MediaMatcher));
};
LayoutWrapperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LayoutWrapperComponent,
  selectors: [["app-layout-wrapper"]],
  viewQuery: function LayoutWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  hostBindings: function LayoutWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function LayoutWrapperComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 28,
  vars: 14,
  consts: [[1, "grid"], [1, "col-12"], [1, "card", "layout-wrapper-card"], ["autosize", "", 1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], [3, "small", "item", "afterItemClicked", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["disabled", "", "mat-menu-item", ""], ["title", "Esci", "mat-menu-item", "", 3, "disabled"], [3, "routerLink"], ["title", "Esci", "mat-menu-item", "", 3, "click"], [3, "small", "item", "afterItemClicked"]],
  template: function LayoutWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-sidenav-container", 3)(5, "mat-sidenav", 4, 5)(7, "mat-nav-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, LayoutWrapperComponent_app_nested_menu_8_Template, 1, 2, "app-nested-menu", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-divider")(10, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-menu", null, 7)(15, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 9)(19, "a", 10)(20, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "manage_accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Profile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutWrapperComponent_Template_button_click_23_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span")(25, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Logout ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("example-is-mobile", ctx.mobileQuery.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx.isCalendarModule ? "overflow: hidden !important" : "overflow: auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.user.superAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx.user._id));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatNavList, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _services_sidenav_menu_nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_3__.NestedMenuComponent],
  styles: [".external-link[_ngcontent-%COMP%]:hover, .external-link[_ngcontent-%COMP%]:focus {\n  background-color: rgba(62, 62, 62, 0.8);\n  color: #fff;\n}\n\n\n.mat-drawer-content[_ngcontent-%COMP%], .mat-drawer-container[_ngcontent-%COMP%] {\n  position: initial;\n  display: initial;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\n\n  .mat-drawer-inner-container {\n  background-color: #fff !important;\n}\n  .mat-icon {\n  vertical-align: bottom;\n  margin: 0px 5px 0px 5px;\n}\n\n@media (max-width: 460px) {\n  .layout-wrapper-card[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQtd3JhcHBlci9sYXlvdXQtd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx1Q0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQSxxQ0FBQTtBQUNBOztFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLDhFQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0U7MEZBQUE7RUFFQSxPQUFBO0FBRUY7O0FBQ0E7RUFDRTsrREFBQTtFQUVBLGNBQUE7QUFFRjs7QUFFRTtFQUNFLGlDQUFBO0FBQ0o7QUFFRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5leHRlcm5hbC1saW5rOmhvdmVyLFxuLmV4dGVybmFsLWxpbms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMzZTNlM2UsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBPdmVycmlkZSBjc3MgZm9yIG5ldyB0aGVtZSBzYWthaSAqL1xuLm1hdC1kcmF3ZXItY29udGVudCxcbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xuICBkaXNwbGF5OiBpbml0aWFsO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxO1xufVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuOjpuZy1kZWVwIHtcbiAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAubGF5b3V0LXdyYXBwZXItY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 9790:
/*!********************************************************************!*\
  !*** ./src/app/components/layout-wrapper/layout-wrapper.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutWrapperModule": () => (/* binding */ LayoutWrapperModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _layout_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-wrapper.component */ 3838);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 9314);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 9101);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/app-routing.module */ 158);
/* harmony import */ var _app_app_services_sidenav_menu_sidenav_menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/services/sidenav-menu/sidenav-menu.module */ 8422);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);











class LayoutWrapperModule {}
LayoutWrapperModule.ɵfac = function LayoutWrapperModule_Factory(t) {
  return new (t || LayoutWrapperModule)();
};
LayoutWrapperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LayoutWrapperModule
});
LayoutWrapperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _app_app_services_sidenav_menu_sidenav_menu_module__WEBPACK_IMPORTED_MODULE_2__.SidenavMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutWrapperModule, {
    declarations: [_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.LayoutWrapperComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _app_app_services_sidenav_menu_sidenav_menu_module__WEBPACK_IMPORTED_MODULE_2__.SidenavMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule],
    exports: [_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.LayoutWrapperComponent]
  });
})();

/***/ }),

/***/ 8835:
/*!***************************************************************************!*\
  !*** ./src/app/components/progress-spinner/progress-spinner.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressSpinnerComponent": () => (/* binding */ ProgressSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);


class ProgressSpinnerComponent {
  constructor() {}
  ngOnInit() {}
}
ProgressSpinnerComponent.ɵfac = function ProgressSpinnerComponent_Factory(t) {
  return new (t || ProgressSpinnerComponent)();
};
ProgressSpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgressSpinnerComponent,
  selectors: [["app-progress-spinner"]],
  decls: 1,
  vars: 0,
  template: function ProgressSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
    }
  },
  dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner]
});


/***/ }),

/***/ 4412:
/*!************************************************************************!*\
  !*** ./src/app/components/progress-spinner/progress-spinner.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressSpinnerModule": () => (/* binding */ ProgressSpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-spinner.component */ 8835);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




class ProgressSpinnerModule {}
ProgressSpinnerModule.ɵfac = function ProgressSpinnerModule_Factory(t) {
  return new (t || ProgressSpinnerModule)();
};
ProgressSpinnerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProgressSpinnerModule
});
ProgressSpinnerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressSpinnerModule, {
    declarations: [_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule],
    exports: [_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent]
  });
})();

/***/ }),

/***/ 8811:
/*!***************************************************************!*\
  !*** ./src/app/components/view-frame/view-frame.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFrameComponent": () => (/* binding */ ViewFrameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 8585);









function ViewFrameComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ViewFrameComponent_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "button", 12)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function ViewFrameComponent_ng_template_1_div_3_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.heading, " ");
  }
}
function ViewFrameComponent_ng_template_1_div_3_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.subTitle);
  }
}
function ViewFrameComponent_ng_template_1_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 18)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "library_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r13.newButtonPath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r13.newButtonText || "Create new item", " ");
  }
}
function ViewFrameComponent_ng_template_1_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFrameComponent_ng_template_1_div_3_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onActionButtonChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.newButtonText, " ");
  }
}
function ViewFrameComponent_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewFrameComponent_ng_template_1_div_3_p_2_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewFrameComponent_ng_template_1_div_3_p_3_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewFrameComponent_ng_template_1_div_3_div_4_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewFrameComponent_ng_template_1_div_3_div_5_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.newButtonPath && ctx_r8.enableNew && ctx_r8.viewMode === "index");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.actionButton && ctx_r8.viewMode === "index");
  }
}
function ViewFrameComponent_ng_template_1_ng_container_4_ng_template_3_Template(rf, ctx) {}
function ViewFrameComponent_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewFrameComponent_ng_template_1_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
  }
}
function ViewFrameComponent_ng_template_1_ng_container_5_ng_template_3_Template(rf, ctx) {}
function ViewFrameComponent_ng_template_1_ng_container_5_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ViewFrameComponent_ng_template_1_ng_container_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFrameComponent_ng_template_1_ng_container_5_div_4_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}
function ViewFrameComponent_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div")(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewFrameComponent_ng_template_1_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewFrameComponent_ng_template_1_ng_container_5_div_4_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("lg:col-span-10", !ctx_r10.disableSidebar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.disableSidebar);
  }
}
function ViewFrameComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFrameComponent_ng_template_1_div_1_Template, 4, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewFrameComponent_ng_template_1_div_3_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewFrameComponent_ng_template_1_ng_container_4_Template, 4, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewFrameComponent_ng_template_1_ng_container_5_Template, 5, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.disableBack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.heading || ctx_r2.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isIndex);
  }
}
function ViewFrameComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ViewFrameComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
  }
}
const _c0 = [[["", "sidebar", ""]], [["", "content", ""]]];
const _c1 = ["[sidebar]", "[content]"];
class ViewFrameComponent {
  onResize(event) {
    this.windowWith = event.target.innerWidth;
  }
  constructor(router) {
    this.router = router;
    this.newButtonText = 'Nuovo';
    this.newButtonPath = '^.new';
    this.back = '^.index';
    this.disableBack = true;
    this.backParams = {};
    this.loading = true;
    this.enableNew = false;
    this.viewMode = "index";
    this.disableSidebar = true;
    this.actionButton = false;
    this.onActionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.windowWith = window.innerWidth;
  }
  ngOnInit() {}
  get isIndex() {
    return this.viewMode === 'index';
  }
  onActionButtonChange() {
    this.onActionButton.emit();
  }
}
ViewFrameComponent.ɵfac = function ViewFrameComponent_Factory(t) {
  return new (t || ViewFrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
ViewFrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewFrameComponent,
  selectors: [["app-view-frame"]],
  hostBindings: function ViewFrameComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ViewFrameComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    heading: "heading",
    subTitle: "subTitle",
    newButtonText: "newButtonText",
    newButtonPath: "newButtonPath",
    back: "back",
    disableBack: "disableBack",
    backParams: "backParams",
    loading: "loading",
    enableNew: "enableNew",
    viewMode: "viewMode",
    disableSidebar: "disableSidebar",
    actionButton: "actionButton"
  },
  outputs: {
    onActionButton: "onActionButton"
  },
  ngContentSelectors: _c1,
  decls: 7,
  vars: 2,
  consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", "class", "loader", 4, "ngIf", "ngIfElse"], ["loadedView", ""], ["sidebarContent", ""], ["mainContent", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "loader"], ["fxFlex", "shrink"], [1, "view-wrap", "lg:px-4", "my-4", "container", "mx-auto"], ["class", "mb-4 px-4 lg:px-0", 4, "ngIf"], [1, "content-wrap", "h-full", "p-4", "rounded-md", "bg-white", "shadow-sm"], ["class", "flex align-items-start justify-content-between justify-content-between mb-2", 4, "ngIf"], [4, "ngIf"], [1, "mb-4", "px-4", "lg:px-0"], ["routerLink", "..", "mat-stroked-button", "", "color", "primary"], [1, "flex", "align-items-start", "justify-content-between", "justify-content-between", "mb-2"], ["class", "font-semi text-xl lg:text-2xl", 4, "ngIf"], ["class", "text-sm text-gray-400", 4, "ngIf"], [1, "font-semi", "text-xl", "lg:text-2xl"], [1, "text-sm", "text-gray-400"], ["pButton", "", "pRipple", "", "matTooltip", "Aggiungi", 1, "p-button-danger", 3, "routerLink"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "grid"], [3, "ngTemplateOutlet"], [1, "col-span-12", "lg:col-span-10", "order-1", "lg:order-0"], ["class", "col-span-12 lg:col-span-2 order-0 lg:order-1", 4, "ngIf"], [1, "col-span-12", "lg:col-span-2", "order-0", "lg:order-1"], [4, "ngTemplateOutlet"], ["id", "view-frame-cmp", 1, "px-6", "py-4", "h-full", "rounded-sm", "mat-elevation-z1"]],
  template: function ViewFrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewFrameComponent_div_0_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFrameComponent_ng_template_1_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewFrameComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewFrameComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective],
  styles: [".head[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 16px 0 0;\n}\n\n  .mat-card-header-text {\n  display: none;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -ms-overflow-style: none; \n  scrollbar-width: none; \n}\n.content-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.view-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  position: relative;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 420px;\n  box-sizing: border-box;\n}\n.sidebar.hasNew[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n\nbody.dark[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%], body.dark   [_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  background-color: #424242;\n}\n\n.loader[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n}\n.content.hasNew[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92aWV3LWZyYW1lL3ZpZXctZnJhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBSUEsd0JBQUEsRUFBQSxnQkFBQTtFQUNBLHFCQUFBLEVBQUEsWUFBQTtBQUZGO0FBRkU7RUFDRSxhQUFBO0FBSUo7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFJRSxZQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUdFO0VBQ0UsaUJBQUE7QUFESjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjtBQUlFO0VBQ0UsaUJBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwIDA7XG59XG5cbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGVudC13cmFwIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbn1cblxuLnZpZXctd3JhcCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZWJhciB7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gdG9wOiAwO1xuICAvLyByaWdodDogMDtcbiAgd2lkdGg6IDQyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAmLmhhc05ldyB7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoYm9keS5kYXJrKSB7XG4gIC5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICB9XG59XG5cbi5sb2FkZXIge1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gICYuaGFzTmV3IHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3174:
/*!************************************************************!*\
  !*** ./src/app/components/view-frame/view-frame.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFrameModule": () => (/* binding */ ViewFrameModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _view_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-frame.component */ 8811);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/app-routing.module */ 158);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);










class ViewFrameModule {}
ViewFrameModule.ɵfac = function ViewFrameModule_Factory(t) {
  return new (t || ViewFrameModule)();
};
ViewFrameModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ViewFrameModule
});
ViewFrameModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewFrameModule, {
    declarations: [_view_frame_component__WEBPACK_IMPORTED_MODULE_0__.ViewFrameComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule],
    exports: [_view_frame_component__WEBPACK_IMPORTED_MODULE_0__.ViewFrameComponent]
  });
})();

/***/ }),

/***/ 8042:
/*!*********************************************************************!*\
  !*** ./src/app/directives/is-visible-to/is-visible-to.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsVisibleToDirective": () => (/* binding */ IsVisibleToDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/services/auth-service.service */ 410);


class IsVisibleToDirective {
  constructor(el, authService) {
    this.authService = authService;
    this.nativeElement = el.nativeElement;
  }
  ngOnInit() {
    const currentUser = this.authService.getUserInfo() || {
      sites: [],
      enabledModules: []
    };
    return true;
  }
}
IsVisibleToDirective.ɵfac = function IsVisibleToDirective_Factory(t) {
  return new (t || IsVisibleToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
IsVisibleToDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: IsVisibleToDirective,
  selectors: [["", "isVisibleTo", ""]],
  inputs: {
    isVisibleTo: "isVisibleTo",
    moduleName: "moduleName",
    site: "site"
  }
});


/***/ }),

/***/ 3060:
/*!******************************************************************!*\
  !*** ./src/app/directives/is-visible-to/is-visible-to.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsVisibleToModule": () => (/* binding */ IsVisibleToModule)
/* harmony export */ });
/* harmony import */ var _is_visible_to_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-visible-to.directive */ 8042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class IsVisibleToModule {}
IsVisibleToModule.ɵfac = function IsVisibleToModule_Factory(t) {
  return new (t || IsVisibleToModule)();
};
IsVisibleToModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: IsVisibleToModule
});
IsVisibleToModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IsVisibleToModule, {
    declarations: [_is_visible_to_directive__WEBPACK_IMPORTED_MODULE_0__.IsVisibleToDirective],
    exports: [_is_visible_to_directive__WEBPACK_IMPORTED_MODULE_0__.IsVisibleToDirective]
  });
})();

/***/ }),

/***/ 9555:
/*!*******************************************************!*\
  !*** ./src/app/interceptors/auth/auth-guard.class.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/services/auth-service.service */ 410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    this.authService.isLoggedIn().subscribe(x => {
      if (x) return true;
      this.router.navigate(['/login']);
      return false;
    });
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac
});


/***/ }),

/***/ 4133:
/*!***************************************************************!*\
  !*** ./src/app/interceptors/auth/auth-interceptor-options.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_INTERCEPTOR_OPTIONS": () => (/* binding */ AUTH_INTERCEPTOR_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

const AUTH_INTERCEPTOR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('AUTH_INTERCEPTOR_OPTIONS');

/***/ }),

/***/ 1552:
/*!*******************************************************!*\
  !*** ./src/app/interceptors/auth/auth-interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _auth_interceptor_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-interceptor-options */ 4133);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_app_services_ui_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/services/ui-loading.service */ 14);







class AuthInterceptor {
  constructor(config, snackService, router, uiLoading) {
    this.snackService = snackService;
    this.router = router;
    this.uiLoading = uiLoading;
    this.whitelist = [];
    this.blacklist = [];
    this.whitelist = config.whitelist || [new RegExp('*')];
    this.blacklist = config.blacklist || [new RegExp('*/public/*')];
  }
  intercept(request, next) {
    let cloned;
    if (this.isWhitelisted(request) && !this.isBlacklisted(request)) {
      cloned = request.clone({
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`
        })
      });
    } else {
      cloned = request.clone();
    }
    return next.handle(cloned).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(evt => {
      if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
        const token = evt.headers.get('Authorization');
        const uid = evt.headers.get('X-UID');
        if (!!token && token.split(' ')[0] === 'Bearer' && token.split(' ')[1]) {
          localStorage.setItem('token', token.split(' ')[1]);
          document.cookie = 'token=' + token.split(' ')[1] + '; path=/';
          localStorage.setItem('uid', uid || 'Not-available');
        }
      }
    }, error => {
      const errorInfo = {
        status: error.status,
        name: error.name,
        message: error.error?.message || error.message || 'Unknown error'
      };
      this.uiLoading.stopSpinner();
      if (error && error.status === 401) {
        this.router.navigate(['/login']);
      } else if (error && error.status == 403) {
        this.snackService.error('Non ha accesso a questa sezione');
      } else {
        // this.router.navigate(['/error'], {
        //   queryParams: {
        //     message: errorInfo.message,
        //     status: errorInfo.status,
        //     name: errorInfo.name,
        //   },
        // });
        this.snackService.error('', 'close', 5000, errorInfo);
      }
    })
    // catchError((error) => {
    //   console.log('in auth interceoptor', error);
    //   const message = `${error.status || ''} ${error.name || ''} ${
    //     error.error?.message || 'Unknown error123'
    //   } `;
    //   console.error(message);
    //   if (error && error.status === 401) {
    //     this.snackService.error('Sessione scaduta', 'error');
    //     this.router.navigate(['/login']);
    //   } else {
    //     this.snackService.error(message);
    //   }
    //   // !this.route.queryParamMap.get('disableLoading') &&
    //   this.uiLoading.stopSpinner();
    //   window.alert(message);
    //   return throwError(() => error);
    // })
    );
  }

  isWhitelisted(request) {
    const url = request.url;
    return this.whitelist.findIndex(route => route instanceof RegExp ? route.test(url) : false) > -1;
  }
  isBlacklisted(request) {
    const url = request.url;
    return this.blacklist.findIndex(route => route instanceof RegExp ? route.test(url) : false) > -1;
  }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
  return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_interceptor_options__WEBPACK_IMPORTED_MODULE_0__.AUTH_INTERCEPTOR_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__.SnackService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_app_app_services_ui_loading_service__WEBPACK_IMPORTED_MODULE_2__.UiLoadingService));
};
AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthInterceptor,
  factory: AuthInterceptor.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6314:
/*!***********************************************************!*\
  !*** ./src/app/interceptors/auth/client-error-handler.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientErrorHandler": () => (/* binding */ ClientErrorHandler)
/* harmony export */ });
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);




class ClientErrorHandler {
  constructor(injector, zone) {
    this.injector = injector;
    this.zone = zone;
  }
  handleError(error) {
    const notifier = this.injector.get(_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_0__.SnackService);
    const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
    const location = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy);
    const url = location instanceof _angular_common__WEBPACK_IMPORTED_MODULE_2__.PathLocationStrategy ? location.path() : '';
    let message;
    if (!navigator.onLine) {
      notifier.error('No internet connection');
      this.zone.run(() => router.navigate(['/error'], {
        queryParams: {
          message: 'No internet connection'
        }
      }));
    }
    console.error(error);
  }
}
ClientErrorHandler.ɵfac = function ClientErrorHandler_Factory(t) {
  return new (t || ClientErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};
ClientErrorHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ClientErrorHandler,
  factory: ClientErrorHandler.ɵfac
});


/***/ }),

/***/ 7823:
/*!***********************************************************!*\
  !*** ./src/app/interfaces/calendar-bg-color.interface.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarBgColor": () => (/* binding */ CalendarBgColor)
/* harmony export */ });
var CalendarBgColor;
(function (CalendarBgColor) {
  CalendarBgColor["red"] = "#E95484";
  CalendarBgColor["orange"] = "#EB745D";
  CalendarBgColor["yellow"] = "#FECA13";
  CalendarBgColor["blue"] = "#226E96";
  CalendarBgColor["sky_blue"] = "#17B3D5";
})(CalendarBgColor || (CalendarBgColor = {}));

/***/ }),

/***/ 4653:
/*!************************************************************!*\
  !*** ./src/app/interfaces/calendar-time-enum.interface.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarTimeEnum": () => (/* binding */ CalendarTimeEnum),
/* harmony export */   "CalendarTimeSlotEnum": () => (/* binding */ CalendarTimeSlotEnum)
/* harmony export */ });
var CalendarTimeEnum;
(function (CalendarTimeEnum) {
  CalendarTimeEnum["zero"] = "00:00:00";
  CalendarTimeEnum["one"] = "01:00:00";
  CalendarTimeEnum["two"] = "02:00:00";
  CalendarTimeEnum["three"] = "03:00:00";
  CalendarTimeEnum["four"] = "04:00:00";
  CalendarTimeEnum["five"] = "05:00:00";
  CalendarTimeEnum["six"] = "06:00:00";
  CalendarTimeEnum["seven"] = "07:00:00";
  CalendarTimeEnum["eight"] = "08:00:00";
  CalendarTimeEnum["nine"] = "09:00:00";
  CalendarTimeEnum["ten"] = "10:00:00";
  CalendarTimeEnum["eleven"] = "11:00:00";
  CalendarTimeEnum["twelve"] = "12:00:00";
  CalendarTimeEnum["thirteen"] = "13:00:00";
  CalendarTimeEnum["fourteen"] = "14:00:00";
  CalendarTimeEnum["fifteen"] = "15:00:00";
  CalendarTimeEnum["sixteen"] = "16:00:00";
  CalendarTimeEnum["seventeen"] = "17:00:00";
  CalendarTimeEnum["eighteen"] = "18:00:00";
  CalendarTimeEnum["nineteen"] = "19:00:00";
  CalendarTimeEnum["twenty"] = "20:00:00";
  CalendarTimeEnum["twenty_one"] = "21:00:00";
  CalendarTimeEnum["twenty_two"] = "22:00:00";
  CalendarTimeEnum["twenty_three"] = "23:00:00";
  CalendarTimeEnum["twenty_four"] = "24:00:00";
})(CalendarTimeEnum || (CalendarTimeEnum = {}));
var CalendarTimeSlotEnum;
(function (CalendarTimeSlotEnum) {
  CalendarTimeSlotEnum["five_min"] = "00:05:00";
  CalendarTimeSlotEnum["ten_min"] = "00:10:00";
  CalendarTimeSlotEnum["fifteen_min"] = "00:15:00";
  CalendarTimeSlotEnum["thirty_min"] = "00:30:00";
  CalendarTimeSlotEnum["one_h"] = "01:00:00";
  CalendarTimeSlotEnum["two_h"] = "02:00:00";
  CalendarTimeSlotEnum["three_h"] = "03:00:00";
  CalendarTimeSlotEnum["four_h"] = "04:00:00";
  CalendarTimeSlotEnum["five_h"] = "05:00:00";
})(CalendarTimeSlotEnum || (CalendarTimeSlotEnum = {}));

/***/ }),

/***/ 8999:
/*!***************************************************!*\
  !*** ./src/app/interfaces/operation.interface.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationType": () => (/* binding */ OperationType)
/* harmony export */ });
var OperationType;
(function (OperationType) {
  OperationType["add"] = "add";
  OperationType["update"] = "update";
  OperationType["delete"] = "delete";
})(OperationType || (OperationType = {}));

/***/ }),

/***/ 8670:
/*!************************************************!*\
  !*** ./src/app/layout/app.footer.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFooterComponent": () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 8568);


class AppFooterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
}
AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) {
  return new (t || AppFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
};
AppFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppFooterComponent,
  selectors: [["app-footer"]],
  decls: 2,
  vars: 0,
  consts: [[1, "layout-footer"]],
  template: function AppFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " by Drilon Hametaj ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 3725:
/*!************************************************!*\
  !*** ./src/app/layout/app.layout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLayoutComponent": () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.sidebar.component */ 6762);
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.topbar.component */ 1242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/app.layout.service */ 8568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.footer.component */ 8670);











class AppLayoutComponent {
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target) || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideProfileMenu();
          }
        });
      }
      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) {
  return new (t || AppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
AppLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppLayoutComponent,
  selectors: [["app-layout"]],
  viewQuery: function AppLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.appSidebar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.appTopbar = _t.first);
    }
  },
  decls: 9,
  vars: 1,
  consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-sidebar"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"]],
  template: function AppLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.containerClass);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, _app_footer_component__WEBPACK_IMPORTED_MODULE_3__.AppFooterComponent, _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent],
  encapsulation: 2
});


/***/ }),

/***/ 6421:
/*!*********************************************!*\
  !*** ./src/app/layout/app.layout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLayoutModule": () => (/* binding */ AppLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ 2238);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/badge */ 7020);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/radiobutton */ 9903);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ 2459);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 8267);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.menu.component */ 3217);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 2937);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.topbar.component */ 1242);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.footer.component */ 8670);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.module */ 7622);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.sidebar.component */ 6762);
/* harmony import */ var _app_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.layout.component */ 3725);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);




















class AppLayoutModule {}
AppLayoutModule.ɵfac = function AppLayoutModule_Factory(t) {
  return new (t || AppLayoutModule)();
};
AppLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppLayoutModule
});
AppLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_14__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_4__.AppConfigModule, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppLayoutModule, {
    declarations: [_app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent, _app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AppTopBarComponent, _app_footer_component__WEBPACK_IMPORTED_MODULE_3__.AppFooterComponent, _app_menu_component__WEBPACK_IMPORTED_MODULE_0__.AppMenuComponent, _app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.AppSidebarComponent, _app_layout_component__WEBPACK_IMPORTED_MODULE_6__.AppLayoutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_14__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_4__.AppConfigModule, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonModule],
    exports: [_app_layout_component__WEBPACK_IMPORTED_MODULE_6__.AppLayoutComponent]
  });
})();

/***/ }),

/***/ 3217:
/*!**********************************************!*\
  !*** ./src/app/layout/app.menu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 8568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 2937);




function AppMenuComponent_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 6);
  }
}
function AppMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuComponent_ng_container_1_li_2_Template, 1, 0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r2)("index", i_r3)("root", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.separator);
  }
}
function AppMenuComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx_r1.layoutService.config.colorScheme === "light" ? "banner-primeblocks" : "banner-primeblocks-dark", ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class AppMenuComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.model = [];
    this.menuItems = [];
    this.displayAllItems = false;
  }
  ngOnInit() {
    this.menuItems = [{
      label: 'Home',
      items: [{
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/private']
      }, {
        label: 'Breweries',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/private/breweries']
      }]
    }];
  }
  changeItems() {
    this.displayAllItems = !this.displayAllItems;
    if (this.displayAllItems) {
      this.menuItems = this.menuItems.concat(this.model);
    } else {
      this.menuItems.splice(this.menuItems.length - this.model.length, this.model.length);
    }
  }
}
AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) {
  return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
};
AppMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppMenuComponent,
  selectors: [["app-menu"]],
  decls: 4,
  vars: 2,
  consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-center", "mt-2"], ["app-menuitem", "", 3, "item", "index", "root"], ["class", "menu-separator", 4, "ngIf"], [1, "menu-separator"], ["href", "https://www.primefaces.org/primeblocks-ng/#/"], ["alt", "Prime Blocks", 1, "w-full", "mt-3", 3, "src"]],
  template: function AppMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_Template, 3, 4, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuComponent_li_2_Template, 3, 1, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayAllItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent],
  encapsulation: 2
});


/***/ }),

/***/ 7326:
/*!********************************************!*\
  !*** ./src/app/layout/app.menu.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class MenuService {
  constructor() {
    this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
}
MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || MenuService)();
};
MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MenuService,
  factory: MenuService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2937:
/*!**************************************************!*\
  !*** ./src/app/layout/app.menuitem.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuitemComponent": () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 2223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 8568);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.service */ 7326);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 8267);









const _c0 = ["app-menuitem", ""];
function AppMenuitemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, " ");
  }
}
function AppMenuitemComponent_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r1.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r1.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.items);
  }
}
function AppMenuitemComponent_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
const _c1 = function () {
  return {
    paths: "exact",
    queryParams: "ignored",
    matrixParams: "ignored",
    fragment: "ignored"
  };
};
function AppMenuitemComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_3_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.class)("routerLink", ctx_r2.item.routerLink)("routerLinkActiveOptions", ctx_r2.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1))("fragment", ctx_r2.item.fragment)("queryParamsHandling", ctx_r2.item.queryParamsHandling)("preserveFragment", ctx_r2.item.preserveFragment)("skipLocationChange", ctx_r2.item.skipLocationChange)("replaceUrl", ctx_r2.item.replaceUrl)("state", ctx_r2.item.state)("queryParams", ctx_r2.item.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx_r2.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.item.items);
  }
}
function AppMenuitemComponent_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](child_r11.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r11)("index", i_r12)("parentKey", ctx_r10.key);
  }
}
function AppMenuitemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@children", ctx_r3.submenuAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.item.items);
  }
}
class AppMenuitemComponent {
  constructor(layoutService, cd, router, menuService) {
    this.layoutService = layoutService;
    this.cd = cd;
    this.router = router;
    this.menuService = menuService;
    this.active = false;
    this.key = '';
    this.userData = {
      roles: ['']
    };
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(params => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
    this.userData = JSON.parse(localStorage.getItem('userInfo') || '');
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
    if (activeRoute) {
      this.menuService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  itemClick(event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    // execute command
    if (this.item.command) {
      this.item.command({
        originalEvent: event,
        item: this.item
      });
    }
    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
    this.menuService.onMenuStateChange({
      key: this.key
    });
  }
  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  checkSectionVisibility(section) {
    let visibility = false;
    if (section.items) {
      section.items.forEach(e => {
        if (this.userData && this.userData.roles && this.userData.roles.some(r => {
          e.roles.includes(r);
        })) {
          visibility = true;
        }
      });
    }
    return visibility;
  }
  checkItemVisibility(module) {
    return true;
  }
}
AppMenuitemComponent.ɵfac = function AppMenuitemComponent_Factory(t) {
  return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
AppMenuitemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppMenuitemComponent,
  selectors: [["", "app-menuitem", ""]],
  hostVars: 4,
  hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  },
  inputs: {
    item: "item",
    index: "index",
    root: "root",
    parentKey: "parentKey"
  },
  attrs: _c0,
  decls: 5,
  vars: 4,
  consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]],
  template: function AppMenuitemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuitemComponent_a_2_Template, 5, 6, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppMenuitemComponent_a_3_Template, 5, 15, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_ul_4_Template, 2, 2, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.root && ctx.item.visible !== false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false && ctx.checkSectionVisibility(ctx.item));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false && (ctx.checkSectionVisibility(ctx.item) || ctx.checkItemVisibility(ctx.item)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, AppMenuitemComponent],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('children', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      height: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('collapsed <=> expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
  }
});


/***/ }),

/***/ 6762:
/*!*************************************************!*\
  !*** ./src/app/layout/app.sidebar.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 8568);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.component */ 3217);



class AppSidebarComponent {
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) {
  return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};
AppSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppSidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 1,
  vars: 0,
  template: function AppSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu");
    }
  },
  dependencies: [_app_menu_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent],
  encapsulation: 2
});


/***/ }),

/***/ 1242:
/*!************************************************!*\
  !*** ./src/app/layout/app.topbar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTopBarComponent": () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 8568);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth-service.service */ 410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);





const _c0 = ["menubutton"];
const _c1 = ["topbarmenubutton"];
const _c2 = ["topbarmenu"];
const _c3 = function (a0) {
  return {
    "layout-topbar-menu-mobile-active": a0
  };
};
function AppTopBarComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppTopBarComponent_ng_container_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.layoutService.onMenuToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppTopBarComponent_ng_container_5_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.layoutService.showProfileSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11, 12)(9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppTopBarComponent_ng_container_5_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c3, ctx_r0.layoutService.state.profileSidebarVisible));
  }
}
class AppTopBarComponent {
  constructor(layoutService, authService, router) {
    this.layoutService = layoutService;
    this.authService = authService;
    this.router = router;
    this.isMaintenance = false;
  }
  ngOnInit() {
    if (this.router.url.includes('maintenance')) {
      this.isMaintenance = true;
      this.layoutService.onMenuToggle();
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
AppTopBarComponent.ɵfac = function AppTopBarComponent_Factory(t) {
  return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AppTopBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppTopBarComponent,
  selectors: [["app-topbar"]],
  viewQuery: function AppTopBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.topbarMenuButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    }
  },
  decls: 6,
  vars: 1,
  consts: [[1, "layout-topbar"], ["routerLink", "/private", 1, "layout-topbar-logo"], ["src", "assets/img/favicon.png", "alt", "Breweries logo", 1, "mr-0", "h-5rem"], [1, "-ml-4"], [4, "ngIf"], [1, "p-link", "layout-menu-button", "layout-topbar-button", 3, "click"], ["menubutton", ""], [1, "pi", "pi-bars"], [1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], ["topbarmenubutton", ""], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 3, "ngClass"], ["topbarmenu", ""], [1, "p-link", "layout-topbar-button", 3, "click"], [1, "pi", "pi-sign-out"]],
  template: function AppTopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Breweries.it");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppTopBarComponent_ng_container_5_Template, 13, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMaintenance);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  encapsulation: 2
});


/***/ }),

/***/ 3876:
/*!*******************************************************!*\
  !*** ./src/app/layout/config/app.config.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigComponent": () => (/* binding */ AppConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 8568);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.menu.service */ 7326);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 2238);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ 9903);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputswitch */ 2459);









const _c0 = function (a0) {
  return {
    "text-primary-500": a0
  };
};
function AppConfigComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 44);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, s_r3 === ctx_r0.scale));
  }
}
function AppConfigComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45)(4, "p-radioButton", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 45)(8, "p-radioButton", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Overlay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuMode);
  }
}
function AppConfigComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Input Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 50)(4, "div", 51)(5, "p-radioButton", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.inputStyle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 51)(9, "p-radioButton", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.inputStyle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Ripple Effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p-inputSwitch", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_inputSwitch_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.ripple = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.ripple);
  }
}
class AppConfigComponent {
  constructor(layoutService, menuService) {
    this.layoutService = layoutService;
    this.menuService = menuService;
    this.minimal = false;
    this.scales = [12, 13, 14, 15, 16];
  }
  get visible() {
    return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val) {
    this.layoutService.state.configSidebarVisible = _val;
  }
  get scale() {
    return this.layoutService.config.scale;
  }
  set scale(_val) {
    this.layoutService.config.scale = _val;
  }
  get menuMode() {
    return this.layoutService.config.menuMode;
  }
  set menuMode(_val) {
    this.layoutService.config.menuMode = _val;
  }
  get inputStyle() {
    return this.layoutService.config.inputStyle;
  }
  set inputStyle(_val) {
    this.layoutService.config.inputStyle = _val;
  }
  get ripple() {
    return this.layoutService.config.ripple;
  }
  set ripple(_val) {
    this.layoutService.config.ripple = _val;
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  changeTheme(theme, colorScheme) {
    const themeLink = document.getElementById('theme-css');
    const newHref = themeLink.getAttribute('href').replace(this.layoutService.config.theme, theme);
    this.layoutService.config.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.theme = theme;
      this.layoutService.config.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }
  replaceThemeLink(href, onComplete) {
    const id = 'theme-css';
    const themeLink = document.getElementById('theme-css');
    const cloneLinkElement = themeLink.cloneNode(true);
    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');
    themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);
    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }
  decrementScale() {
    this.scale--;
    this.applyScale();
  }
  incrementScale() {
    this.scale++;
    this.applyScale();
  }
  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }
}
AppConfigComponent.ɵfac = function AppConfigComponent_Factory(t) {
  return new (t || AppConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
AppConfigComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppConfigComponent,
  selectors: [["app-config"]],
  inputs: {
    minimal: "minimal"
  },
  decls: 135,
  vars: 7,
  consts: [["type", "button", 1, "layout-config-button", "p-link", 3, "click"], [1, "pi", "pi-cog"], ["position", "right", "styleClass", "layout-config-sidebar", 3, "visible", "transitionOptions", "visibleChange"], [1, "flex", "align-items-center"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "disabled", "click"], [1, "flex", "gap-2", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "disabled", "click"], [4, "ngIf"], [1, "grid"], [1, "col-3"], [1, "p-link", "w-2rem", "h-2rem", 3, "click"], ["src", "assets/layout/images/themes/bootstrap4-light-blue.svg", "alt", "Bootstrap Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-light-purple.svg", "alt", "Bootstrap Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-blue.svg", "alt", "Bootstrap Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-purple.svg", "alt", "Bootstrap Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-indigo.svg", "alt", "Material Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-indigo.svg", "alt", "Material Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/tailwind-light.png", "alt", "Tailwind Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/fluent-light.png", "alt", "Fluent Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-indigo.png", "alt", "Lara Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-blue.png", "alt", "Lara Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-purple.png", "alt", "Lara Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-teal.png", "alt", "Lara Light Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-indigo.png", "alt", "Lara Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-blue.png", "alt", "Lara Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-purple.png", "alt", "Lara Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-teal.png", "alt", "Lara Dark Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-blue.png", "alt", "Saga Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-green.png", "alt", "Saga Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-orange.png", "alt", "Saga Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-purple.png", "alt", "Saga Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-blue.png", "alt", "Vela Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-green.png", "alt", "Vela Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-orange.png", "alt", "Vela Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-purple.png", "alt", "Vela Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-blue.png", "alt", "Arya Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-green.png", "alt", "Arya Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-orange.png", "alt", "Arya Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-purple.png", "alt", "Arya Purple", 1, "w-2rem", "h-2rem"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"], [1, "field-radiobutton"], ["name", "menuMode", "value", "static", "inputId", "mode1", 3, "ngModel", "ngModelChange"], ["for", "mode1"], ["name", "menuMode", "value", "overlay", "inputId", "mode2", 3, "ngModel", "ngModelChange"], ["for", "mode2"], [1, "flex"], [1, "field-radiobutton", "flex-1"], ["name", "inputStyle", "value", "outlined", "inputId", "outlined_input", 3, "ngModel", "ngModelChange"], ["for", "outlined_input"], ["name", "inputStyle", "value", "filled", "inputId", "filled_input", 3, "ngModel", "ngModelChange"], ["for", "filled_input"], [3, "ngModel", "ngModelChange"]],
  template: function AppConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_0_listener() {
        return ctx.onConfigButtonClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppConfigComponent_Template_p_sidebar_visibleChange_2_listener($event) {
        return ctx.visible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_6_listener() {
        return ctx.decrementScale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppConfigComponent_i_8_Template, 1, 3, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_9_listener() {
        return ctx.incrementScale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppConfigComponent_ng_container_10_Template, 11, 2, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppConfigComponent_ng_container_11_Template, 15, 3, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Bootstrap");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_16_listener() {
        return ctx.changeTheme("bootstrap4-light-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_19_listener() {
        return ctx.changeTheme("bootstrap4-light-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_22_listener() {
        return ctx.changeTheme("bootstrap4-dark-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_25_listener() {
        return ctx.changeTheme("bootstrap4-dark-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Material Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "div", 10)(31, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_31_listener() {
        return ctx.changeTheme("md-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_34_listener() {
        return ctx.changeTheme("md-light-deeppurple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 10)(37, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_37_listener() {
        return ctx.changeTheme("md-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_40_listener() {
        return ctx.changeTheme("md-dark-deeppurple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Material Design Compact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 9)(45, "div", 10)(46, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_46_listener() {
        return ctx.changeTheme("mdc-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 10)(49, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_49_listener() {
        return ctx.changeTheme("mdc-light-deeppurple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 10)(52, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_52_listener() {
        return ctx.changeTheme("mdc-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 10)(55, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_55_listener() {
        return ctx.changeTheme("mdc-dark-deeppurple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Tailwind");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 9)(60, "div", 10)(61, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_61_listener() {
        return ctx.changeTheme("tailwind-light", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Fluent UI");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 9)(66, "div", 10)(67, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_67_listener() {
        return ctx.changeTheme("fluent-light", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "PrimeOne Design - 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 9)(72, "div", 10)(73, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_73_listener() {
        return ctx.changeTheme("lara-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 10)(76, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_76_listener() {
        return ctx.changeTheme("lara-light-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 10)(79, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_79_listener() {
        return ctx.changeTheme("lara-light-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 10)(82, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_82_listener() {
        return ctx.changeTheme("lara-light-teal", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 10)(85, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_85_listener() {
        return ctx.changeTheme("lara-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 10)(88, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_88_listener() {
        return ctx.changeTheme("lara-dark-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 10)(91, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_91_listener() {
        return ctx.changeTheme("lara-dark-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 10)(94, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_94_listener() {
        return ctx.changeTheme("lara-dark-teal", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "PrimeOne Design - 2021");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 9)(99, "div", 10)(100, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_100_listener() {
        return ctx.changeTheme("saga-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 10)(103, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_103_listener() {
        return ctx.changeTheme("saga-green", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 10)(106, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_106_listener() {
        return ctx.changeTheme("saga-orange", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 10)(109, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_109_listener() {
        return ctx.changeTheme("saga-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 10)(112, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_112_listener() {
        return ctx.changeTheme("vela-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 10)(115, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_115_listener() {
        return ctx.changeTheme("vela-green", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 10)(118, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_118_listener() {
        return ctx.changeTheme("vela-orange", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 10)(121, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_121_listener() {
        return ctx.changeTheme("vela-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 10)(124, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_124_listener() {
        return ctx.changeTheme("arya-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 10)(127, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_127_listener() {
        return ctx.changeTheme("arya-green", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 10)(130, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_130_listener() {
        return ctx.changeTheme("arya-orange", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 10)(133, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_133_listener() {
        return ctx.changeTheme("arya-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visible)("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.scales);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__.RadioButton, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__.InputSwitch],
  encapsulation: 2
});


/***/ }),

/***/ 7622:
/*!************************************************!*\
  !*** ./src/app/layout/config/config.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigModule": () => (/* binding */ AppConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ 2238);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/radiobutton */ 9903);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputswitch */ 2459);
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config.component */ 3876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);








class AppConfigModule {}
AppConfigModule.ɵfac = function AppConfigModule_Factory(t) {
  return new (t || AppConfigModule)();
};
AppConfigModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppConfigModule
});
AppConfigModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppConfigModule, {
    declarations: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule],
    exports: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent]
  });
})();

/***/ }),

/***/ 8568:
/*!******************************************************!*\
  !*** ./src/app/layout/service/app.layout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class LayoutService {
  constructor() {
    this.config = {
      ripple: false,
      inputStyle: 'outlined',
      menuMode: 'static',
      colorScheme: 'light',
      theme: 'lara-light-indigo',
      scale: 14
    };
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    };
    this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.overlayOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.configUpdate$ = this.configUpdate.asObservable();
    this.overlayOpen$ = this.overlayOpen.asObservable();
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isOverlay() {
    return this.config.menuMode === 'overlay';
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this.configUpdate.next(this.config);
  }
}
LayoutService.ɵfac = function LayoutService_Factory(t) {
  return new (t || LayoutService)();
};
LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LayoutService,
  factory: LayoutService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 7853:
/*!*************************************************!*\
  !*** ./src/app/routes/login/login.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/layout/service/app.layout.service */ 8568);
/* harmony import */ var _app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/services/auth-service.service */ 410);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/password */ 6971);










class LoginComponent {
  constructor(layoutService, fb, authService, snackbar, router) {
    this.layoutService = layoutService;
    this.fb = fb;
    this.authService = authService;
    this.snackbar = snackbar;
    this.router = router;
    this.errors = [];
    this.form = this.fb.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.authService.isLoggedIn().subscribe(res => {
      if (res == false || res.status == 'error') {
        this.router.navigate(['/login']);
      } else {
        this.snackbar.info('Login effettuato con successo');
        this.router.navigate(['/private/']);
      }
    }, () => {
      console.warn('Not authenticated, need to login');
    });
  }
  setLocale(locale) {
    this.currentLocale = locale;
  }
  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(res => {
        this.router.navigate(['private/']);
        this.snackbar.info('Logged in successfully');
      }, err => {
        console.error(err);
        this.snackbar.error(err.error.message || err.message || 'Authentication failed');
      });
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_2__.SnackService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 22,
  vars: 3,
  consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(\n          180deg,\n          var(--primary-color) 10%,\n          rgba(33, 150, 243, 0) 30%\n        )"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", 2, "border-radius", "53px"], [1, "text-center", "mb-5"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], [1, "text-600", "font-medium"], [3, "formGroup", "ngSubmit"], ["for", "email1", 1, "block", "text-900", "text-xl", "font-medium", "mb-2"], ["id", "email1", "type", "text", "formControlName", "email", "autofocus", "", "required", "", "placeholder", "Nome utente", "name", "email", "autocomplete", "email", "pInputText", "", 1, "w-full", "md:w-30rem", "mb-5", 2, "padding", "1rem"], ["for", "password1", 1, "block", "text-900", "font-medium", "text-xl", "mb-2"], ["id", "password1", "formControlName", "password", "required", "", "placeholder", "Password", "name", "password", "type", "password", "autocomplete", "current-password", "styleClass", "mb-5", "inputStyleClass", "w-full p-3 md:w-30rem", 3, "toggleMask", "feedback"], [1, "flex", "align-items-center", "justify-content-between", "mb-5", "gap-5"], [1, "font-medium", "no-underline", "ml-2", "text-right", "cursor-pointer", 2, "color", "var(--primary-color)"], ["pButton", "", "pRipple", "", "label", "Sign In", "type", "submit", 1, "w-full", "p-3", "text-xl"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Breweries.it ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Benvenuto");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Effettua l'accesso");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div")(11, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "p-password", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12)(19, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Password dimenticata?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("toggleMask", true)("feedback", false);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_password__WEBPACK_IMPORTED_MODULE_8__.Password],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5009:
/*!**********************************************!*\
  !*** ./src/app/routes/login/login.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 7853);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ 6971);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ 1409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);












class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_password__WEBPACK_IMPORTED_MODULE_11__.PasswordModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_password__WEBPACK_IMPORTED_MODULE_11__.PasswordModule],
    exports: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent]
  });
})();

/***/ }),

/***/ 2810:
/*!*************************************************************!*\
  !*** ./src/app/routes/maintenance/maintenance.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class MaintenanceComponent {
  constructor(router) {
    this.router = router;
  }
}
MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) {
  return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
MaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MaintenanceComponent,
  selectors: [["app-maintenance"]],
  decls: 19,
  vars: 0,
  consts: [[1, "grid", "bg-white", "text-center"], [1, "col-12"], ["src", "../../../assets/img/maintenance.png", "alt", "maintenance"], [1, "pi", "pi-instagram", "text-5xl", "mr-4", 2, "color", "#b63999"], [1, "pi", "pi-facebook", "text-5xl", "mr-4", 2, "color", "#275ca0"], [1, "pi", "pi-twitter", "text-5xl", "mr-4", 2, "color", "#01aae5"], [1, "pi", "pi-linkedin", "text-5xl", "mr-4", 2, "color", "#007bbd"], [1, "pi", "pi-google", "text-5xl", 2, "color", "#ff4b34"]],
  template: function MaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WE ARE COMING SOON");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1")(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The website is under maintenance!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " This website is currently undergoing scheduled maintenance. We should be back shortly. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Our Social");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 3)(15, "i", 4)(16, "i", 5)(17, "i", 6)(18, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["body {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL21haW50ZW5hbmNlL21haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});


/***/ }),

/***/ 7924:
/*!****************************************************************!*\
  !*** ./src/app/routes/private/breweries/breweries-resolver.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrewieriesResolver": () => (/* binding */ BrewieriesResolver),
/* harmony export */   "UserSingleResolver": () => (/* binding */ UserSingleResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _breweries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breweries.service */ 7151);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _app_app_services_ui_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/services/ui-loading.service */ 14);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);






class BrewieriesResolver {
  constructor(breweriesService, snackService, uiLoading, router) {
    this.breweriesService = breweriesService;
    this.snackService = snackService;
    this.uiLoading = uiLoading;
    this.router = router;
  }
  resolve(route, state) {
    // !route.queryParamMap.get('disableLoading') &&
    //   this.uiLoading.openSpinner(
    //     { hasBackdrop: true },
    //     ProgressSpinnerComponent
    //   );
  }
}
BrewieriesResolver.ɵfac = function BrewieriesResolver_Factory(t) {
  return new (t || BrewieriesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_breweries_service__WEBPACK_IMPORTED_MODULE_0__.BrewieriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__.SnackService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_app_services_ui_loading_service__WEBPACK_IMPORTED_MODULE_2__.UiLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
BrewieriesResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BrewieriesResolver,
  factory: BrewieriesResolver.ɵfac,
  providedIn: 'root'
});

class UserSingleResolver {
  constructor(breweriesService, snackService, uiLoading, router) {
    this.breweriesService = breweriesService;
    this.snackService = snackService;
    this.uiLoading = uiLoading;
    this.router = router;
  }
  resolve(route, state) {
    const id = route.params['id'];
    if (!id) {
      console.error(`Item id not found`);
      this.uiLoading.stopSpinner();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
        booking: null
      });
    }
  }
}
UserSingleResolver.ɵfac = function UserSingleResolver_Factory(t) {
  return new (t || UserSingleResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_breweries_service__WEBPACK_IMPORTED_MODULE_0__.BrewieriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__.SnackService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_app_services_ui_loading_service__WEBPACK_IMPORTED_MODULE_2__.UiLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
UserSingleResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UserSingleResolver,
  factory: UserSingleResolver.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6906:
/*!*****************************************************************!*\
  !*** ./src/app/routes/private/breweries/breweries.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreweriesComponent": () => (/* binding */ BreweriesComponent)
/* harmony export */ });
/* harmony import */ var _app_app_utils_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/utils/page */ 1676);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _breweries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breweries.service */ 7151);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _components_view_frame_view_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/view-frame/view-frame.component */ 8811);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var _list_breweries_list_breweries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-breweries/list-breweries.component */ 370);











class BreweriesComponent {
  constructor(breweriesService, snackService) {
    this.breweriesService = breweriesService;
    this.snackService = snackService;
    this.page = new _app_app_utils_page__WEBPACK_IMPORTED_MODULE_0__.Page();
    this.breweries = [];
    this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.ColumnMode;
    this.columns = [];
    this.loading = true;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      search: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    });
    this.page.pageNumber = 0;
    this.page.size = 9;
  }
  ngOnInit() {
    this.loading = false;
    this.setPage({
      offset: 0
    });
  }
  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.breweriesService.list({
      length: this.page.size,
      start: this.page.offset
    }, this.page).subscribe(res => {
      if (res.status == 'success') {
        this.page.totalElements = res.total || 0;
        this.page.totalPages = res.total / this.page.size;
        this.breweries = res.data;
        this.snackService.info('Lista breweries');
      }
    });
  }
  onChangePage(pageNumber) {
    this.setPage({
      offset: pageNumber
    });
  }
  filter() {
    let bodyQuery = {};
    if (this.form.value.search != '') {
      Object.assign(bodyQuery, {
        search: this.form.value.search
      });
    }
    this.breweriesService.list(bodyQuery, this.page).subscribe(res => {
      if (res.status == 'success') {
        this.page.totalElements = res.count || 0;
        this.page.totalPages = 1;
        this.breweries = res.data;
        this.snackService.info('Lista utenti aggiornata');
      }
    });
  }
}
BreweriesComponent.ɵfac = function BreweriesComponent_Factory(t) {
  return new (t || BreweriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_breweries_service__WEBPACK_IMPORTED_MODULE_1__.BrewieriesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_2__.SnackService));
};
BreweriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BreweriesComponent,
  selectors: [["app-breweries"]],
  decls: 12,
  vars: 5,
  consts: [["heading", "Breweries", "subTitle", "Lista breweries", 3, "loading", "enableNew"], ["content", ""], [1, "flex", "flex-wrap", "justify-content-between", "mb-2", "mt-2", 3, "formGroup"], [1, "p-float-label"], ["placeholder", "Ragione Sociale", "formControlName", "search", "type", "text", "pInputText", ""], ["for", "float-input"], ["pButton", "", "pRipple", "", 1, "align-self-auto", "mb-2", 3, "click"], [3, "breweries", "page", "onChangePage"]],
  template: function BreweriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-view-frame", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "form", 2)(4, "div")(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Cerca");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BreweriesComponent_Template_button_click_9_listener() {
        return ctx.filter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Cerca ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-list-breweries", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function BreweriesComponent_Template_app_list_breweries_onChangePage_11_listener($event) {
        return ctx.onChangePage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", ctx.loading)("enableNew", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breweries", ctx.breweries)("page", ctx.page);
    }
  },
  dependencies: [_components_view_frame_view_frame_component__WEBPACK_IMPORTED_MODULE_3__.ViewFrameComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, _list_breweries_list_breweries_component__WEBPACK_IMPORTED_MODULE_4__.ListBreweriesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7874:
/*!**************************************************************!*\
  !*** ./src/app/routes/private/breweries/breweries.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreweriesModule": () => (/* binding */ BreweriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _app_app_components_view_frame_view_frame_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/components/view-frame/view-frame.module */ 3174);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/app-routing.module */ 158);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/autocomplete */ 1525);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/messages */ 2946);
/* harmony import */ var _app_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/shared/shared.module */ 4466);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dataview */ 7909);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ 6956);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/card */ 1208);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ 1427);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/paginator */ 934);
/* harmony import */ var _breweries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breweries.component */ 6906);
/* harmony import */ var _list_breweries_list_breweries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-breweries/list-breweries.component */ 370);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/app/services/sidenav-menu/sidenav-menu.service */ 6452);




























class BreweriesModule {
  constructor(sidenav) {
    this.sidenav = sidenav;
    this.sidenav.addItem({
      label: 'Breweries',
      icon: 'face',
      hideInSearch: true,
      route: 'private/breweries'
    });
  }
}
BreweriesModule.ɵfac = function BreweriesModule_Factory(t) {
  return new (t || BreweriesModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_app_services_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_5__.SidenavMenuService));
};
BreweriesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: BreweriesModule
});
BreweriesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule, _app_app_components_view_frame_view_frame_module__WEBPACK_IMPORTED_MODULE_0__.ViewFrameModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__.AutoCompleteModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule, _app_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_21__.DataViewModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule, primeng_card__WEBPACK_IMPORTED_MODULE_23__.CardModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__.ConfirmDialogModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_25__.PaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BreweriesModule, {
    declarations: [_breweries_component__WEBPACK_IMPORTED_MODULE_3__.BreweriesComponent, _list_breweries_list_breweries_component__WEBPACK_IMPORTED_MODULE_4__.ListBreweriesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule, _app_app_components_view_frame_view_frame_module__WEBPACK_IMPORTED_MODULE_0__.ViewFrameModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__.AutoCompleteModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule, _app_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_21__.DataViewModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule, primeng_card__WEBPACK_IMPORTED_MODULE_23__.CardModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__.ConfirmDialogModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_25__.PaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule]
  });
})();

/***/ }),

/***/ 9174:
/*!**************************************************************!*\
  !*** ./src/app/routes/private/breweries/breweries.routes.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreweriesRoutes": () => (/* binding */ BreweriesRoutes)
/* harmony export */ });
/* harmony import */ var _breweries_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breweries.component */ 6906);
/* harmony import */ var _breweries_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breweries-resolver */ 7924);


const BreweriesRoutes = [{
  path: 'breweries',
  component: _breweries_component__WEBPACK_IMPORTED_MODULE_0__.BreweriesComponent,
  resolve: {
    items: _breweries_resolver__WEBPACK_IMPORTED_MODULE_1__.BrewieriesResolver
  },
  runGuardsAndResolvers: 'always'
}, {
  path: 'breweries',
  component: _breweries_component__WEBPACK_IMPORTED_MODULE_0__.BreweriesComponent
}];

/***/ }),

/***/ 7151:
/*!***************************************************************!*\
  !*** ./src/app/routes/private/breweries/breweries.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrewieriesService": () => (/* binding */ BrewieriesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/services/api.service */ 5830);


class BrewieriesService {
  constructor(apiService) {
    this.apiService = apiService;
    this.basePath = '/breweries';
  }
  addNew(data) {
    return this.apiService.post(`${this.basePath}/`, {
      data
    });
  }
  update(data, id) {
    return this.apiService.patch(`${this.basePath}/${id}`, {
      data
    });
  }
  get(id) {
    return this.apiService.get(`${this.basePath}/${id}`);
  }
  list(data, params) {
    return this.apiService.post(`${this.basePath}/data?start=${params.pageNumber}&length=${params.size}`, {
      length: params.size,
      start: params.pageNumber,
      search: data.search || null
    });
  }
  delete(id) {
    return this.apiService.delete(`${this.basePath}/${id}`);
  }
}
BrewieriesService.ɵfac = function BrewieriesService_Factory(t) {
  return new (t || BrewieriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
BrewieriesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BrewieriesService,
  factory: BrewieriesService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 370:
/*!*************************************************************************************!*\
  !*** ./src/app/routes/private/breweries/list-breweries/list-breweries.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListBreweriesComponent": () => (/* binding */ ListBreweriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _breweries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../breweries.service */ 7151);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 3095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dataview */ 7909);







function ListBreweriesComponent_ng_template_5_p_dataViewLayoutOptions_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-dataViewLayoutOptions");
  }
}
function ListBreweriesComponent_ng_template_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Province");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ListBreweriesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListBreweriesComponent_ng_template_5_p_dataViewLayoutOptions_1_Template, 1, 0, "p-dataViewLayoutOptions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListBreweriesComponent_ng_template_5_div_2_Template, 27, 0, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.layout !== "grid");
  }
}
function ListBreweriesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 11)(27, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const client_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", client_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.brewery_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.address_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.state_province);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.postal_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.longitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r6.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", client_r6.website_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ListBreweriesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 20)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "City: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p")(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Province: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Postal Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p")(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const client_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](client_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", client_r7.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", client_r7.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", client_r7.state_province, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", client_r7.postal_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", client_r7.website_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class ListBreweriesComponent {
  constructor(breweriesService, snackService, confirmationService) {
    this.breweriesService = breweriesService;
    this.snackService = snackService;
    this.confirmationService = confirmationService;
    this.onChangePage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.layout = 'grid';
    this.mobile = false;
    this.sortOptions = [];
    this.sortOrder = 0;
    this.sortField = '';
    this.sourceCities = [];
    this.targetCities = [];
    this.orderCities = [];
    this.dataSource = [];
    this.displayedColumns = ['id', 'name', 'brewery_type', 'address_1', 'city', 'state_province', 'postal_code', 'country', 'longitude', 'latitude', 'phone', 'website_url', 'state', 'street'];
  }
  ngOnChanges(changes) {
    // if (changes['clients']) this.clients = changes['clients'].currentValue;
    // if (changes['page']) this.page = changes['page'].currentValue;
  }
  ngOnInit() {}
  onLazyLoad(event) {
    this.onChangePage.emit(event.first / this.page.size); //current page
  }

  changeLayout(event) {
    this.layout = event.layout;
  }
  onFilter(dv, event) {
    dv.filter(event.target.value);
  }
}
ListBreweriesComponent.ɵfac = function ListBreweriesComponent_Factory(t) {
  return new (t || ListBreweriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_breweries_service__WEBPACK_IMPORTED_MODULE_0__.BrewieriesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_1__.SnackService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService));
};
ListBreweriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ListBreweriesComponent,
  selectors: [["app-list-breweries"]],
  inputs: {
    breweries: "breweries",
    page: "page"
  },
  outputs: {
    onChangePage: "onChangePage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 8,
  consts: [[1, "card", "list-client-card"], ["filterBy", "name", "layout", "grid", 3, "value", "paginator", "lazy", "rows", "totalRecords", "first", "sortField", "sortOrder", "onLazyLoad", "onChangeLayout"], ["dv", ""], ["pTemplate", "header"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-between", "gap-2"], [4, "ngIf"], ["class", "grid mt-4", 4, "ngIf"], [1, "grid", "mt-4"], [1, "col-1", "overflow-auto"], [1, "col-1/2", "overflow-auto"], [1, "col-12"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "p-3", "w-full"], [3, "href"], [1, "col-12", "md:col-6", "lg:col-4", "mt-4"], [1, "card", "m-3", "border-1", "surface-border"], [1, "grid", "align-items-center", "justify-content-center"], [1, "col-4", "text-center"], ["alt", "Avatar", "src", "https://www.primefaces.org/sakai-ng/assets/demo/images/login/avatar.png", 1, "border-circle", "max-w-5rem"], [1, "col-8", "text-left"]],
  template: function ListBreweriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Lista clienti");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-dataView", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onLazyLoad", function ListBreweriesComponent_Template_p_dataView_onLazyLoad_3_listener($event) {
        return ctx.onLazyLoad($event);
      })("onChangeLayout", function ListBreweriesComponent_Template_p_dataView_onChangeLayout_3_listener($event) {
        return ctx.changeLayout($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ListBreweriesComponent_ng_template_5_Template, 3, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ListBreweriesComponent_ng_template_6_Template, 29, 13, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ListBreweriesComponent_ng_template_7_Template, 29, 6, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.breweries)("paginator", true)("lazy", true)("rows", ctx.page.size)("totalRecords", ctx.page.totalElements)("first", 0)("sortField", ctx.sortField)("sortOrder", ctx.sortOrder);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_dataview__WEBPACK_IMPORTED_MODULE_5__.DataView, primeng_dataview__WEBPACK_IMPORTED_MODULE_5__.DataViewLayoutOptions],
  styles: ["@media (max-width: 460px) {\n  .list-client-card {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3ByaXZhdGUvYnJld2VyaWVzL2xpc3QtYnJld2VyaWVzL2xpc3QtYnJld2VyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC5saXN0LWNsaWVudC1jYXJkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});


/***/ }),

/***/ 3886:
/*!**************************************************************************************************!*\
  !*** ./src/app/routes/private/dashboard/components/cach-flow-stats/cach-flow-stats.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachFlowStatsComponent": () => (/* binding */ CachFlowStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 1208);
/* harmony import */ var _shared_chart_line_chart_line_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/chart-line/chart-line.component */ 3250);



class CachFlowStatsComponent {
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--blue-500'),
        tension: 0.4
      }, {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--pink-500'),
        tension: 0.4
      }]
    };
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
CachFlowStatsComponent.ɵfac = function CachFlowStatsComponent_Factory(t) {
  return new (t || CachFlowStatsComponent)();
};
CachFlowStatsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CachFlowStatsComponent,
  selectors: [["app-cach-flow-stats"]],
  decls: 2,
  vars: 2,
  consts: [["header", "Cash Flow"], [3, "data", "options"]],
  template: function CachFlowStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-chart-line", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, _shared_chart_line_chart_line_component__WEBPACK_IMPORTED_MODULE_0__.ChartLineComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6105:
/*!**************************************************************************************************!*\
  !*** ./src/app/routes/private/dashboard/components/contracts-stats/contracts-stats.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractsStatsComponent": () => (/* binding */ ContractsStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 1208);
/* harmony import */ var _shared_chart_pie_chart_pie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/chart-pie/chart-pie.component */ 1937);



class ContractsStatsComponent {
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [{
        data: [540, 325, 702],
        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
      }]
    };
    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
}
ContractsStatsComponent.ɵfac = function ContractsStatsComponent_Factory(t) {
  return new (t || ContractsStatsComponent)();
};
ContractsStatsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContractsStatsComponent,
  selectors: [["app-contracts-stats"]],
  decls: 2,
  vars: 2,
  consts: [["header", "Contracts"], [3, "data", "options"]],
  template: function ContractsStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-chart-pie", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, _shared_chart_pie_chart_pie_component__WEBPACK_IMPORTED_MODULE_0__.ChartPieComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1270:
/*!************************************************************************************************!*\
  !*** ./src/app/routes/private/dashboard/components/tasks-overview/tasks-overview.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksOverviewComponent": () => (/* binding */ TasksOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 1208);
/* harmony import */ var _shared_generic_list_item_generic_list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/generic-list-item/generic-list-item.component */ 7409);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/divider */ 1124);




class TasksOverviewComponent {
  ngOnInit() {
    this.tasks = [{
      title: 'Send Message to GINO',
      subTitle: '1 day left',
      img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    }, {
      title: 'Send MAIL to Rocco',
      subTitle: '2 day left',
      img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    }, {
      title: 'Add Prime Video to Android Phone',
      subTitle: '3 day left',
      img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    }];
  }
}
TasksOverviewComponent.ɵfac = function TasksOverviewComponent_Factory(t) {
  return new (t || TasksOverviewComponent)();
};
TasksOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TasksOverviewComponent,
  selectors: [["app-tasks-overview"]],
  decls: 3,
  vars: 2,
  consts: [["header", "Tasks", 1, "cmp-task-overview"], [3, "list", "iconAction"]],
  template: function TasksOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-divider")(2, "app-generic-list-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("list", ctx.tasks)("iconAction", "pi-ellipsis-v");
    }
  },
  dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, _shared_generic_list_item_generic_list_item_component__WEBPACK_IMPORTED_MODULE_0__.GenericListItemComponent, primeng_divider__WEBPACK_IMPORTED_MODULE_3__.Divider],
  styles: [".cmp-task-overview .p-card-content {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3ByaXZhdGUvZGFzaGJvYXJkL2NvbXBvbmVudHMvdGFza3Mtb3ZlcnZpZXcvdGFza3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY21wLXRhc2stb3ZlcnZpZXcgLnAtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});


/***/ }),

/***/ 6129:
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/private/dashboard/components/top-contracts/top-contracts.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopContractsComponent": () => (/* binding */ TopContractsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 1208);
/* harmony import */ var _shared_generic_list_item_generic_list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/generic-list-item/generic-list-item.component */ 7409);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/divider */ 1124);




class TopContractsComponent {
  ngOnInit() {
    this.contracts = [{
      title: 'Dropbox',
      subTitle: 'SF, NY',
      img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      price: '349222'
    }, {
      title: 'Amazon',
      subTitle: 'US, IT',
      img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      price: '23444'
    }, {
      title: 'Elefant',
      subTitle: 'California',
      img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      price: '222233'
    }, {
      title: 'Nerflix',
      subTitle: 'Zurigo',
      img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      price: '999'
    }];
  }
}
TopContractsComponent.ɵfac = function TopContractsComponent_Factory(t) {
  return new (t || TopContractsComponent)();
};
TopContractsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TopContractsComponent,
  selectors: [["app-top-contracts"]],
  decls: 3,
  vars: 1,
  consts: [["header", "Top 5 Contracts", 1, "cmp-task-overview"], [3, "list"]],
  template: function TopContractsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-divider")(2, "app-generic-list-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("list", ctx.contracts);
    }
  },
  dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, _shared_generic_list_item_generic_list_item_component__WEBPACK_IMPORTED_MODULE_0__.GenericListItemComponent, primeng_divider__WEBPACK_IMPORTED_MODULE_3__.Divider],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2151:
/*!************************************************************************************************************!*\
  !*** ./src/app/routes/private/dashboard/components/users-activity-stats/users-activity-stats.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersActivityStatsComponent": () => (/* binding */ UsersActivityStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 1208);
/* harmony import */ var _shared_chart_line_chart_line_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/chart-line/chart-line.component */ 3250);



class UsersActivityStatsComponent {
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 11, 80, 81, 22, 55, 40],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--red-500'),
        tension: 0.4
      }]
    };
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
UsersActivityStatsComponent.ɵfac = function UsersActivityStatsComponent_Factory(t) {
  return new (t || UsersActivityStatsComponent)();
};
UsersActivityStatsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UsersActivityStatsComponent,
  selectors: [["app-users-activity-stats"]],
  decls: 2,
  vars: 2,
  consts: [["header", "Activity"], [3, "data", "options"]],
  template: function UsersActivityStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-chart-line", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, _shared_chart_line_chart_line_component__WEBPACK_IMPORTED_MODULE_0__.ChartLineComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 607:
/*!*****************************************************************!*\
  !*** ./src/app/routes/private/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _components_contracts_stats_contracts_stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contracts-stats/contracts-stats.component */ 6105);
/* harmony import */ var _components_cach_flow_stats_cach_flow_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cach-flow-stats/cach-flow-stats.component */ 3886);
/* harmony import */ var _components_tasks_overview_tasks_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tasks-overview/tasks-overview.component */ 1270);
/* harmony import */ var _components_top_contracts_top_contracts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/top-contracts/top-contracts.component */ 6129);
/* harmony import */ var _components_users_activity_stats_users_activity_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-activity-stats/users-activity-stats.component */ 2151);






class DashboardComponent {}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 15,
  vars: 0,
  consts: [[1, "text-center"], [1, "grid"], [1, "col-5"], [1, "col-7"], [1, "col-4"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "CRM DASHBOARD");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1)(5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-contracts-stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-cach-flow-stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-tasks-overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-top-contracts");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-users-activity-stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_components_contracts_stats_contracts_stats_component__WEBPACK_IMPORTED_MODULE_0__.ContractsStatsComponent, _components_cach_flow_stats_cach_flow_stats_component__WEBPACK_IMPORTED_MODULE_1__.CachFlowStatsComponent, _components_tasks_overview_tasks_overview_component__WEBPACK_IMPORTED_MODULE_2__.TasksOverviewComponent, _components_top_contracts_top_contracts_component__WEBPACK_IMPORTED_MODULE_3__.TopContractsComponent, _components_users_activity_stats_users_activity_stats_component__WEBPACK_IMPORTED_MODULE_4__.UsersActivityStatsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9591:
/*!**************************************************************!*\
  !*** ./src/app/routes/private/dashboard/dashboard.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 607);
/* harmony import */ var _components_contracts_stats_contracts_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contracts-stats/contracts-stats.component */ 6105);
/* harmony import */ var _components_cach_flow_stats_cach_flow_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cach-flow-stats/cach-flow-stats.component */ 3886);
/* harmony import */ var _components_tasks_overview_tasks_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tasks-overview/tasks-overview.component */ 1270);
/* harmony import */ var _components_top_contracts_top_contracts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/top-contracts/top-contracts.component */ 6129);
/* harmony import */ var _components_users_activity_stats_users_activity_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users-activity-stats/users-activity-stats.component */ 2151);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 1208);
/* harmony import */ var _app_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/app/shared/shared.module */ 4466);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/divider */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app/services/sidenav-menu/sidenav-menu.service */ 6452);












class DashboardModule {
  constructor(sidenav) {
    this.sidenav = sidenav;
    this.sidenav.addItem({
      label: 'Dashboard',
      icon: 'dashboard',
      hideInSearch: true,
      isVisibleTo: ['admin', 'user'],
      route: 'private/',
      moduleName: 'user'
    });
  }
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_app_app_services_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_7__.SidenavMenuService));
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule, _app_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_divider__WEBPACK_IMPORTED_MODULE_11__.DividerModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _components_contracts_stats_contracts_stats_component__WEBPACK_IMPORTED_MODULE_1__.ContractsStatsComponent, _components_cach_flow_stats_cach_flow_stats_component__WEBPACK_IMPORTED_MODULE_2__.CachFlowStatsComponent, _components_tasks_overview_tasks_overview_component__WEBPACK_IMPORTED_MODULE_3__.TasksOverviewComponent, _components_top_contracts_top_contracts_component__WEBPACK_IMPORTED_MODULE_4__.TopContractsComponent, _components_users_activity_stats_users_activity_stats_component__WEBPACK_IMPORTED_MODULE_5__.UsersActivityStatsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule, _app_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_divider__WEBPACK_IMPORTED_MODULE_11__.DividerModule]
  });
})();

/***/ }),

/***/ 9027:
/*!**************************************************************!*\
  !*** ./src/app/routes/private/dashboard/dashboard.routes.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutes": () => (/* binding */ DashboardRoutes)
/* harmony export */ });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 607);

const DashboardRoutes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];

/***/ }),

/***/ 7429:
/*!*****************************************************!*\
  !*** ./src/app/routes/private/private.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateComponent": () => (/* binding */ PrivateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class PrivateComponent {
  constructor() {}
  ngOnInit() {}
}
PrivateComponent.ɵfac = function PrivateComponent_Factory(t) {
  return new (t || PrivateComponent)();
};
PrivateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PrivateComponent,
  selectors: [["app-private"]],
  decls: 1,
  vars: 0,
  template: function PrivateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout-wrapper");
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 5479:
/*!**************************************************!*\
  !*** ./src/app/routes/private/private.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateModule": () => (/* binding */ PrivateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_app_components_layout_wrapper_layout_wrapper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/components/layout-wrapper/layout-wrapper.module */ 9790);
/* harmony import */ var _app_app_services_sidenav_menu_sidenav_menu_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/services/sidenav-menu/sidenav-menu.module */ 8422);
/* harmony import */ var _private_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private.component */ 7429);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.module */ 9591);
/* harmony import */ var _breweries_breweries_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breweries/breweries.module */ 7874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _components_layout_wrapper_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout-wrapper/layout-wrapper.component */ 3838);









class PrivateModule {}
PrivateModule.ɵfac = function PrivateModule_Factory(t) {
  return new (t || PrivateModule)();
};
PrivateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: PrivateModule
});
PrivateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _app_app_components_layout_wrapper_layout_wrapper_module__WEBPACK_IMPORTED_MODULE_0__.LayoutWrapperModule, _app_app_services_sidenav_menu_sidenav_menu_module__WEBPACK_IMPORTED_MODULE_1__.SidenavMenuModule, _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__.DashboardModule, _breweries_breweries_module__WEBPACK_IMPORTED_MODULE_4__.BreweriesModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PrivateModule, {
    declarations: [_private_component__WEBPACK_IMPORTED_MODULE_2__.PrivateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _app_app_components_layout_wrapper_layout_wrapper_module__WEBPACK_IMPORTED_MODULE_0__.LayoutWrapperModule, _app_app_services_sidenav_menu_sidenav_menu_module__WEBPACK_IMPORTED_MODULE_1__.SidenavMenuModule, _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__.DashboardModule, _breweries_breweries_module__WEBPACK_IMPORTED_MODULE_4__.BreweriesModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_private_component__WEBPACK_IMPORTED_MODULE_2__.PrivateComponent, [_components_layout_wrapper_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_5__.LayoutWrapperComponent], []);

/***/ }),

/***/ 5608:
/*!**************************************************!*\
  !*** ./src/app/routes/public/public-resolver.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicResolver": () => (/* binding */ PublicResolver)
/* harmony export */ });
/* harmony import */ var _app_app_components_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/components/progress-spinner/progress-spinner.component */ 8835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/services/auth-service.service */ 410);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_app_services_ui_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app/services/ui-loading.service */ 14);







class PublicResolver {
  constructor(authService, snackService, router, uiLoading) {
    this.authService = authService;
    this.snackService = snackService;
    this.router = router;
    this.uiLoading = uiLoading;
  }
  resolve(route, state) {
    this.uiLoading.openSpinner({
      hasBackdrop: true
    }, _app_app_components_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent);
    return this.authService.verify(route.queryParams).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
      if (user && user._id) {
        this.authService.saveUserInfo(user);
        this.authService.saveTokenUid(route.queryParams);
      }
      return {
        user
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.uiLoading.stopSpinner()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      const message = `${error.name || ''} ${error.message}`;
      console.error(message);
      this.snackService.message(message, 'error');
      this.uiLoading.stopSpinner();
      this.router.navigate(['/login']);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        user: null,
        error: message
      });
    }));
  }
}
PublicResolver.ɵfac = function PublicResolver_Factory(t) {
  return new (t || PublicResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_app_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_2__.SnackService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_app_app_services_ui_loading_service__WEBPACK_IMPORTED_MODULE_3__.UiLoadingService));
};
PublicResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: PublicResolver,
  factory: PublicResolver.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3960:
/*!***************************************************!*\
  !*** ./src/app/routes/public/public.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicComponent": () => (/* binding */ PublicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/services/snack.service */ 2325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);





function PublicComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Impossibile recuperare utente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class PublicComponent {
  constructor(route, router, snackService) {
    this.route = route;
    this.router = router;
    this.snackService = snackService;
    this.isLogged = false;
  }
  ngOnInit() {
    const resolvedData = this.route.snapshot.data['auth'];
    if (resolvedData.user && resolvedData.user._id) {
      this.isLogged = true;
      this.snackService.message("Utente autenticato");
      this.router.navigate(['private/imprese']);
    } else {
      this.snackService.message('Utente non autenticato');
    }
  }
}
PublicComponent.ɵfac = function PublicComponent_Factory(t) {
  return new (t || PublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_app_services_snack_service__WEBPACK_IMPORTED_MODULE_0__.SnackService));
};
PublicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PublicComponent,
  selectors: [["app-public"]],
  decls: 5,
  vars: 1,
  consts: [["color", "#fff", 1, "sticky-toolbar"], [1, "grow", "md:hidden"], ["src", "https://via.placeholder.com/200x100", "alt", "", 1, "h-[40px]"], [1, "grow"], ["class", "container mx-auto my-16", 4, "ngIf"], [1, "container", "mx-auto", "my-16"]],
  template: function PublicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "img", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PublicComponent_div_4_Template, 3, 0, "div", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogged);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar],
  encapsulation: 2
});


/***/ }),

/***/ 6919:
/*!************************************************!*\
  !*** ./src/app/routes/public/public.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicModule": () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.component */ 3960);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);





class PublicModule {}
PublicModule.ɵfac = function PublicModule_Factory(t) {
  return new (t || PublicModule)();
};
PublicModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PublicModule
});
PublicModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicModule, {
    declarations: [_public_component__WEBPACK_IMPORTED_MODULE_0__.PublicComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule]
  });
})();

/***/ }),

/***/ 7101:
/*!************************************************!*\
  !*** ./src/app/routes/public/public.routes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicRoutes": () => (/* binding */ PublicRoutes)
/* harmony export */ });
/* harmony import */ var _public_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-resolver */ 5608);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public.component */ 3960);


const PublicRoutes = [{
  path: 'public',
  component: _public_component__WEBPACK_IMPORTED_MODULE_1__.PublicComponent,
  resolve: {
    auth: _public_resolver__WEBPACK_IMPORTED_MODULE_0__.PublicResolver
  },
  runGuardsAndResolvers: 'always'
}];

/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class ApiService {
  constructor(http) {
    this.http = http;
    this.apiConfig = _app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.config.api;
    this.locale = '';
  }
  setLocale(locale) {
    this.locale = locale;
    return this;
  }
  interpolatesLocale(url) {
    if (this.locale && url.indexOf('{{locale}}') >= 0) {
      return url.replace('{{locale}}', this.locale);
    } else {
      return url;
    }
  }
  request(method, url, options = {}) {
    let requestUrl = '';
    if (typeof url === typeof '') {
      requestUrl = `${this.apiConfig?.fullPath}${url}`;
    } else {
      requestUrl = `${url.basePath}${url.url}`;
    }
    let params = {};
    if (options && options.params) {
      Object.keys(options.params).forEach(p => {
        if (undefined !== options.params[p]) {
          // @ts-ignore
          params[p] = options.params[p];
        }
      });
    }
    options.params = params;
    return this.http.request(method, this.interpolatesLocale(requestUrl), Object.assign({
      withCredentials: true
    }, options));
  }
  get(url, options) {
    return this.request('GET', url, options);
  }
  post(url, body, options = {}) {
    return this.request('POST', url, Object.assign(options, {
      body
    }));
  }
  patch(url, body, options = {}) {
    return this.request('PATCH', url, Object.assign(options, {
      body
    }));
  }
  put(url, body, options = {}) {
    return this.request('PUT', url, Object.assign(options, {
      body
    }));
  }
  delete(url, options = {}) {
    return this.request('DELETE', url, options);
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 410:
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);





class AuthService {
  constructor(apiService) {
    this.apiService = apiService;
    this.loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  }
  login(email, password) {
    return this.apiService.post('/auth/login', {
      email,
      password
    }, {
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      this.saveUserInfo(res.body);
      this.saveTokenUid(res.body);
    }));
  }
  saveUserInfo(body) {
    localStorage.setItem('userInfo', JSON.stringify(body?.data?.user || body));
    this.loggedUser.next(body);
  }
  saveTokenUid(info) {
    console.log('save token uid', {
      token: info.authorisation.token
    });
    localStorage.setItem('token', info.authorisation.token);
    // save data to cookie
    document.cookie = 'token=' + info.authorisation.token + '; path=/';
  }
  removeUserInfo() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    this.loggedUser.next(undefined);
  }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo') || '');
  }
  getLoggedUser() {
    return this.loggedUser.asObservable();
  }
  logout() {
    // force header in logout
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.removeUserInfo();
  }
  isLoggedIn() {
    return this.apiService.post('/auth/verify', {
      token: localStorage.getItem('token')
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      //console.log(res)
      //this.saveUserInfo(res)
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
      return true;
    }));
  }
  verify(info) {
    return this.apiService.post('/auth/verify', {
      token: info.token,
      uid: info.uid
    });
  }
  // public isLoggedIn(info: any) {
  //   return this.apiService
  //     .post('/auth/verify', {
  //       token: info.token,
  //       uid: info.uid,
  //     })
  //     .pipe(
  //       tap((res) => this.saveUserInfo(res)),
  //       map((user) => {
  //         return !!user['_id'];
  //       })
  //     );
  // }
  generateToken(email) {
    return this.apiService.post('/auth/reset-password-request', {
      email
    });
  }
  validatePasswordReset(email, token, password, passwordConfirmation) {
    return this.apiService.post('/auth/reset-password', {
      email,
      token,
      password,
      passwordConfirmation
    });
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 8111:
/*!****************************************************************************!*\
  !*** ./src/app/services/sidenav-menu/nested-menu/nested-menu.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestedMenuComponent": () => (/* binding */ NestedMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 2223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _directives_is_visible_to_is_visible_to_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/is-visible-to/is-visible-to.directive */ 8042);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6069);








function NestedMenuComponent_a_0_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.item.icon);
  }
}
function NestedMenuComponent_a_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@indicatorRotate", ctx_r4.expanded ? "expanded" : "collapsed");
  }
}
const _c0 = function (a0) {
  return {
    "padding-left": a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
const _c2 = function (a0) {
  return {
    expanded: a0
  };
};
const _c3 = function () {
  return [];
};
function NestedMenuComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NestedMenuComponent_a_0_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onItemSelected(ctx_r5.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NestedMenuComponent_a_0_mat_icon_1_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NestedMenuComponent_a_0_span_4_Template, 4, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("small", ctx_r0.small);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx_r0.depth * 24 + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx_r0.small ? "py-2 pr-2" : "py-4 pr-2"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c2, ctx_r0.expanded))("isVisibleTo", ctx_r0.item.isVisibleTo || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3))("moduleName", ctx_r0.item.moduleName || "")("site", ctx_r0.item.site || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.item == null ? null : ctx_r0.item.children) && (ctx_r0.item == null ? null : ctx_r0.item.children == null ? null : ctx_r0.item.children.length));
  }
}
function NestedMenuComponent_a_1_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.item.icon);
  }
}
function NestedMenuComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NestedMenuComponent_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.newLink(ctx_r8.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NestedMenuComponent_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("small", ctx_r1.small);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx_r1.depth * 24 + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx_r1.small ? "py-2 pr-2" : "py-4 pr-2"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, ctx_r1.expanded))("isVisibleTo", ctx_r1.item.isVisibleTo || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c3))("moduleName", ctx_r1.item.moduleName || "")("site", ctx_r1.item.site || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.item.label);
  }
}
function NestedMenuComponent_div_2_app_nested_menu_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nested-menu", 8);
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", child_r11)("depth", ctx_r10.depth + 1)("site", child_r11.site || null);
  }
}
function NestedMenuComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NestedMenuComponent_div_2_app_nested_menu_1_Template, 1, 3, "app-nested-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.item == null ? null : ctx_r2.item.children);
  }
}
class NestedMenuComponent {
  constructor(router) {
    this.router = router;
    this.expanded = false;
    this.item = null;
    this.depth = 0;
    this.small = true;
    this.site = null;
    this.afterItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.ariaExpanded = this.expanded;
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }
  onItemSelected(item) {
    if (!item?.children?.length) {
      this.router.navigate([item.route]);
      this.afterItemClicked.emit();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  newLink(item) {
    window.open(item.link, "_blank");
  }
  ngOnInit() {}
}
NestedMenuComponent.ɵfac = function NestedMenuComponent_Factory(t) {
  return new (t || NestedMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
NestedMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NestedMenuComponent,
  selectors: [["app-nested-menu"]],
  hostVars: 1,
  hostBindings: function NestedMenuComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.ariaExpanded);
    }
  },
  inputs: {
    item: "item",
    depth: "depth",
    small: "small",
    site: "site"
  },
  outputs: {
    afterItemClicked: "afterItemClicked"
  },
  decls: 3,
  vars: 3,
  consts: [["mat-list-item", "", "class", "h-full py-4", 3, "small", "ngStyle", "ngClass", "isVisibleTo", "moduleName", "site", "click", 4, "ngIf"], [4, "ngIf"], ["mat-list-item", "", 1, "h-full", "py-4", 3, "ngStyle", "ngClass", "isVisibleTo", "moduleName", "site", "click"], ["class", "routeIcon", 4, "ngIf"], ["fxFlex", "", 4, "ngIf"], [1, "routeIcon"], ["fxFlex", ""], [3, "item", "depth", "site", 4, "ngFor", "ngForOf"], [3, "item", "depth", "site"]],
  template: function NestedMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NestedMenuComponent_a_0_Template, 5, 18, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NestedMenuComponent_a_1_Template, 4, 17, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NestedMenuComponent_div_2_Template, 2, 1, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.item);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.item && ctx.item.link);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.expanded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _directives_is_visible_to_is_visible_to_directive__WEBPACK_IMPORTED_MODULE_0__.IsVisibleToDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, NestedMenuComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  outline: none;\n}\n[_nghost-%COMP%]   .mat-list-item.active[_ngcontent-%COMP%] {\n  background-color: #233787;\n  color: #fff;\n}\n[_nghost-%COMP%]:hover    > .mat-list-item[_ngcontent-%COMP%]:not(.expanded), [_nghost-%COMP%]:focus    > .mat-list-item[_ngcontent-%COMP%]:not(.expanded) {\n  background-color: rgba(35, 55, 135, 0.8);\n  color: #fff;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 0;\n}\n.mat-list-item[_ngcontent-%COMP%]   .routeIcon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n  .mat-list-item.small .mat-list-item-content {\n  padding: 0 8px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VydmljZXMvc2lkZW5hdi1tZW51L25lc3RlZC1tZW51L25lc3RlZC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFERjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBREo7QUFLSTtFQUNFLHdDQUFBO0VBQ0EsV0FBQTtBQUhOOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjtBQU9FO0VBQ0Usa0JBQUE7QUFMSjs7QUFVSTtFQUNFLHlCQUFBO0FBUE4iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3V0bGluZTogbm9uZTtcblxuICAubWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM3ODc7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgPiAubWF0LWxpc3QtaXRlbTpub3QoLmV4cGFuZGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyMzM3ODcsIDAuOCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn1cblxuLm1hdC1saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xuXG4gIC5yb3V0ZUljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtIHtcbiAgJi5zbWFsbCB7XG4gICAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('indicatorRotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      transform: 'rotate(0deg)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      transform: 'rotate(180deg)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('225ms cubic-bezier(0.4,0.0,0.2,1)'))])]
  }
});


/***/ }),

/***/ 8422:
/*!**************************************************************!*\
  !*** ./src/app/services/sidenav-menu/sidenav-menu.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavMenuModule": () => (/* binding */ SidenavMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nested-menu/nested-menu.component */ 8111);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _app_app_directives_is_visible_to_is_visible_to_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/directives/is-visible-to/is-visible-to.module */ 3060);
/* harmony import */ var _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/app-routing.module */ 158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);







class SidenavMenuModule {}
SidenavMenuModule.ɵfac = function SidenavMenuModule_Factory(t) {
  return new (t || SidenavMenuModule)();
};
SidenavMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SidenavMenuModule
});
SidenavMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_app_directives_is_visible_to_is_visible_to_module__WEBPACK_IMPORTED_MODULE_1__.IsVisibleToModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SidenavMenuModule, {
    declarations: [_nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_0__.NestedMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_app_directives_is_visible_to_is_visible_to_module__WEBPACK_IMPORTED_MODULE_1__.IsVisibleToModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule, _app_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule],
    exports: [_nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_0__.NestedMenuComponent]
  });
})();

/***/ }),

/***/ 6452:
/*!***************************************************************!*\
  !*** ./src/app/services/sidenav-menu/sidenav-menu.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavMenuService": () => (/* binding */ SidenavMenuService)
/* harmony export */ });
/* harmony import */ var _sidenav_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-menu.module */ 8422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ 410);



class SidenavMenuService {
  constructor(auth) {
    this.auth = auth;
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
}
SidenavMenuService.ɵfac = function SidenavMenuService_Factory(t) {
  return new (t || SidenavMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
SidenavMenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SidenavMenuService,
  factory: SidenavMenuService.ɵfac,
  providedIn: _sidenav_menu_module__WEBPACK_IMPORTED_MODULE_0__.SidenavMenuModule
});


/***/ }),

/***/ 2325:
/*!*******************************************!*\
  !*** ./src/app/services/snack.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackService": () => (/* binding */ SnackService)
/* harmony export */ });
/* harmony import */ var _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/custom-snackbar/custom-snackbar.component */ 5082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);



class SnackService {
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'bottom';
    this.closeLabel = 'chiudi';
    this.warning = this.warn;
    this.err = this.error;
  }
  scrollTo(el) {
    if (el) {
      el.scrollIntoView();
    }
  }
  scrollToError() {
    const firstElementWithError = document.querySelector('.ng-invalid');
    console.log('scrolling to invalid input', {
      firstElementWithError
    });
    firstElementWithError && this.scrollTo(firstElementWithError);
  }
  message(message, action, duration) {
    console.warn('SnackService.message is depricated, please use SnackService.info SnackService.warn SnackService.error instead');
    return this.info(message, action, duration);
  }
  customSnack(data) {
    this.scrollToError();
    console.log({
      data
    });
    return this.snackBar.openFromComponent(_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.CustomSnackbarComponent, {
      data,
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['snackbar-custom', 'snackbar-error']
    });
  }
  info(message, action, duration) {
    return this.snackBar.open(message, action ? action : undefined, {
      duration: duration ? duration : 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['snackbar-custom', 'snackbar-info']
    });
  }
  warn(message, action, duration) {
    return this.snackBar.open(message, action ? action : this.closeLabel, {
      duration: duration ? duration : 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['snackbar-custom', 'snackbar-warn']
    });
  }
  error(message, action, duration, errorInfo) {
    if (!errorInfo) {
      this.snackBar.open(message, action ? action : this.closeLabel, {
        duration: duration ? duration : 10000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['snackbar-custom', 'snackbar-error']
      });
    } else {
      this.snackBar.openFromComponent(_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.CustomSnackbarComponent, {
        data: {
          errorInfo
        },
        duration: duration ? duration : 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['snackbar-custom', 'snackbar-error']
      });
    }
  }
}
SnackService.ɵfac = function SnackService_Factory(t) {
  return new (t || SnackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
};
SnackService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SnackService,
  factory: SnackService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 14:
/*!************************************************!*\
  !*** ./src/app/services/ui-loading.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiLoadingService": () => (/* binding */ UiLoadingService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 2778);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 2035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);




class UiLoadingService extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayConfig {
  constructor(overlay) {
    super();
    this.overlay = overlay;
  }
  openSpinner(config, component) {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    config['positionStrategy'] = positionStrategy;
    // Returns an OverlayRef which is a PortalHost
    this.overlayRef = this.overlay.create(config);
    // Create ComponentPortal that can be attached to a PortalHost
    const componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(component);
    // Attach ComponentPortal to PortalHost
    this.overlayRef.attach(componentPortal);
  }
  stopSpinner() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
UiLoadingService.ɵfac = function UiLoadingService_Factory(t) {
  return new (t || UiLoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.Overlay));
};
UiLoadingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UiLoadingService,
  factory: UiLoadingService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6066:
/*!*********************************************************************!*\
  !*** ./src/app/shared/calendar-custom/calendar-custom.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarCustomComponent": () => (/* binding */ CalendarCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 4213);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ 8186);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ 2611);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ 9142);
/* harmony import */ var _fullcalendar_core_locales_it__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/core/locales/it */ 8176);
/* harmony import */ var _app_app_interfaces_operation_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app/interfaces/operation.interface */ 8999);
/* harmony import */ var _app_app_interfaces_calendar_bg_color_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app/interfaces/calendar-bg-color.interface */ 7823);
/* harmony import */ var _app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app/interfaces/calendar-time-enum.interface */ 4653);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 3095);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/angular */ 8245);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 1241);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 6956);
















function CalendarCustomComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarCustomComponent_ng_template_23_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onUpdateCalendarSetting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    width: "50%",
    height: "30%"
  };
};
const _c1 = function () {
  return {
    overflow: "visible"
  };
};
const _c2 = function () {
  return {
    width: "70%"
  };
};
class CalendarCustomComponent {
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.onChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.calendarSetting = {
      slotMinTime: _app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarTimeEnum.zero,
      slotMaxTime: _app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarTimeEnum.twenty_four,
      slotDuration: _app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarTimeSlotEnum.thirty_min
    };
    this.openCalendarSetting = false;
    this.calendarSlotMinTimeOptions = [];
    this.calendarSlotMaxTimeOptions = [];
    this.calendarSlotDurationTimeOptions = [];
    this.calendarOptions = {
      plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__["default"]],
      lazyFetching: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek settingButton'
      },
      initialView: 'dayGridMonth',
      firstDay: 1,
      locale: _fullcalendar_core_locales_it__WEBPACK_IMPORTED_MODULE_8__["default"],
      events: this.displayedEvents,
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      eventBackgroundColor: _app_app_interfaces_calendar_bg_color_interface__WEBPACK_IMPORTED_MODULE_1__.CalendarBgColor.blue,
      eventBorderColor: _app_app_interfaces_calendar_bg_color_interface__WEBPACK_IMPORTED_MODULE_1__.CalendarBgColor.blue,
      customButtons: {
        settingButton: {
          icon: 'setting-icon',
          click: this.onOpenCalendarSetting.bind(this)
        }
      },
      slotMinTime: this.calendarSetting.slotMinTime,
      slotMaxTime: this.calendarSetting.slotMaxTime,
      slotDuration: this.calendarSetting.slotDuration,
      height: 'auto',
      select: this.onDateSelect.bind(this),
      eventClick: this.onEventClick.bind(this),
      eventsSet: this.onEvents.bind(this),
      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
      contentHeight: screen.width < 577 ? 600 : 1000 //for mobile
    };

    this.currentEvents = [];
  }
  ngOnInit() {
    this.mapBEeventsToCalendarEvent();
    this.setCalendarSettingOptions();
  }
  ngOnChanges(changes) {
    if (changes['events']) {
      this.events = changes['events'].currentValue;
      this.mapBEeventsToCalendarEvent();
    }
  }
  ngAfterViewInit() {
    //Force icon in header calendar
    document.querySelector('.fc-settingButton-button').innerHTML = '<i class="pi pi-cog"></i>';
  }
  setCalendarSettingOptions() {
    const keysTime = Object.keys(_app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarTimeEnum);
    const keysTimeSlot = Object.keys(_app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarTimeSlotEnum);
    keysTime.forEach(k => {
      var currentHours = '';
      var currentMinutes = '';
      if (k === 'twenty_four') {
        currentHours = '24';
        currentMinutes = '00';
      } else {
        const date = new Date('1995-12-17T' + this.calculateTimeEnum(k, false));
        currentHours = ('0' + date.getHours()).substr(-2);
        currentMinutes = ('0' + date.getMinutes()).substr(-2);
      }
      this.calendarSlotMinTimeOptions.push({
        label: currentHours + ':' + currentMinutes,
        value: this.calculateTimeEnum(k, false)
      });
      this.calendarSlotMaxTimeOptions.push({
        label: currentHours + ':' + currentMinutes,
        value: this.calculateTimeEnum(k, false)
      });
    });
    keysTimeSlot.forEach(k => {
      const date = new Date('1995-12-17T' + this.calculateTimeEnum(k, true));
      let label = '';
      if (k.includes('min')) {
        label = date.getMinutes().toString() + 'min';
      } else {
        label = date.getHours().toString() + 'h';
      }
      this.calendarSlotDurationTimeOptions.push({
        label: label,
        value: this.calculateTimeEnum(k, true)
      });
    });
  }
  onOpenCalendarSetting() {
    this.openCalendarSetting = true;
  }
  onUpdateCalendarSetting() {
    this.calendarOptions.slotMinTime = this.calendarSetting.slotMinTime;
    this.calendarOptions.slotMaxTime = this.calendarSetting.slotMaxTime;
    this.calendarOptions.slotDuration = this.calendarSetting.slotDuration;
    this.openCalendarSetting = false;
  }
  calculateTimeEnum(time, isTimeSlot) {
    if (isTimeSlot) {
      return _app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarTimeSlotEnum[time];
    } else {
      return _app_app_interfaces_calendar_time_enum_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarTimeEnum[time];
    }
  }
  mapBEeventsToCalendarEvent() {
    this.displayedEvents = this.events.map(event => {
      return {
        id: event._id,
        title: event.title,
        start: event.start,
        end: event.end,
        allDay: event.allDay,
        backgroundColor: event.backgroundColor,
        borderColor: event.backgroundColor
      };
    });
    this.calendarOptions.events = this.displayedEvents;
  }
  onDateSelect(selectInfo) {
    //const title = prompt('Please enter a new title for your event');
    //to deselect the user selected dates
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    this.onChangeEvent.emit({
      event: {
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      },
      operationType: _app_app_interfaces_operation_interface__WEBPACK_IMPORTED_MODULE_0__.OperationType.add
    });
    //if (title) {
    /*calendarApi.addEvent({
        id: this.events[this.events.length - 1]._id + 1,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });*/
    /*this.events.push({
        _id: this.events[this.events.length - 1]._id + 1,
        title: title,
        description: '',
        start: new Date(selectInfo.startStr),
        end: new Date(selectInfo.endStr),
        allDay: selectInfo.allDay,
      });
      this.mapBEeventsToCalendarEvent();
    }*/
  }

  onEventClick(clickInfo) {
    //clickInfo.event.remove();
    this.onChangeEvent.emit({
      event: {
        id: clickInfo.event.id
      },
      operationType: _app_app_interfaces_operation_interface__WEBPACK_IMPORTED_MODULE_0__.OperationType.update
    });
  }
  onEvents(events) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}
CalendarCustomComponent.ɵfac = function CalendarCustomComponent_Factory(t) {
  return new (t || CalendarCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
CalendarCustomComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CalendarCustomComponent,
  selectors: [["app-calendar-custom"]],
  inputs: {
    events: "events"
  },
  outputs: {
    onChangeEvent: "onChangeEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 24,
  vars: 26,
  consts: [[3, "options"], ["header", "Modifica Impostazioni", 3, "visible", "modal", "baseZIndex", "contentStyle", "draggable", "resizable", "visibleChange"], [1, "m-0", "flex", "grid"], [1, "col-12", "justify-content-center", "flex", "mb-2"], [1, "col-6", "justify-content-end", "align-items-center", "flex", "mb-2"], [1, "col-6", "justify-content-start", "flex", "mb-2"], [1, "w-full"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Seleziona l'orario giornaliero minimo", "name", "slotMinTime", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Seleziona l'orario giornaliero massimo", "name", "slotMaxTime", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Seleziona la durata di uno slot", "name", "slotDuration", 3, "options", "ngModel", "ngModelChange"], ["pTemplate", "footer"], ["icon", "pi pi-check", "label", "Salva", 3, "click"]],
  template: function CalendarCustomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "full-calendar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-dialog", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function CalendarCustomComponent_Template_p_dialog_visibleChange_1_listener($event) {
        return ctx.openCalendarSetting = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Modifica impostazioni calendario ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Orario minimo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "span", 6)(10, "p-dropdown", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CalendarCustomComponent_Template_p_dropdown_ngModelChange_10_listener($event) {
        return ctx.calendarSetting.slotMinTime = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Orario massimo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 5)(15, "span", 6)(16, "p-dropdown", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CalendarCustomComponent_Template_p_dropdown_ngModelChange_16_listener($event) {
        return ctx.calendarSetting.slotMaxTime = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4)(18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Durata di uno slot");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5)(21, "span", 6)(22, "p-dropdown", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CalendarCustomComponent_Template_p_dropdown_ngModelChange_22_listener($event) {
        return ctx.calendarSetting.slotDuration = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CalendarCustomComponent_ng_template_23_Template, 1, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.calendarOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.openCalendarSetting)("modal", true)("baseZIndex", 99999)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c1))("draggable", false)("resizable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.calendarSlotMinTimeOptions)("ngModel", ctx.calendarSetting.slotMinTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.calendarSlotMaxTimeOptions)("ngModel", ctx.calendarSetting.slotMaxTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.calendarSlotDurationTimeOptions)("ngModel", ctx.calendarSetting.slotDuration);
    }
  },
  dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_12__.FullCalendarComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown],
  styles: [".fc-icon-setting-icon {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NhbGVuZGFyLWN1c3RvbS9jYWxlbmRhci1jdXN0b20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZjLWljb24tc2V0dGluZy1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});


/***/ }),

/***/ 3250:
/*!***********************************************************!*\
  !*** ./src/app/shared/chart-line/chart-line.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartLineComponent": () => (/* binding */ ChartLineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/chart */ 8817);


class ChartLineComponent {
  ngOnInit() {}
}
ChartLineComponent.ɵfac = function ChartLineComponent_Factory(t) {
  return new (t || ChartLineComponent)();
};
ChartLineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ChartLineComponent,
  selectors: [["app-chart-line"]],
  inputs: {
    data: "data",
    options: "options"
  },
  decls: 2,
  vars: 2,
  consts: [[1, "card", "border-none"], ["type", "line", "height", "250", 3, "data", "options"]],
  template: function ChartLineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-chart", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [primeng_chart__WEBPACK_IMPORTED_MODULE_1__.UIChart],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1937:
/*!*********************************************************!*\
  !*** ./src/app/shared/chart-pie/chart-pie.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartPieComponent": () => (/* binding */ ChartPieComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/chart */ 8817);


class ChartPieComponent {}
ChartPieComponent.ɵfac = function ChartPieComponent_Factory(t) {
  return new (t || ChartPieComponent)();
};
ChartPieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ChartPieComponent,
  selectors: [["app-chart-pie"]],
  inputs: {
    data: "data",
    options: "options"
  },
  decls: 2,
  vars: 2,
  consts: [[1, "card", "flex", "justify-content-center", "border-none"], ["type", "pie", "height", "250", 3, "data", "options"]],
  template: function ChartPieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-chart", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [primeng_chart__WEBPACK_IMPORTED_MODULE_1__.UIChart],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7409:
/*!*************************************************************************!*\
  !*** ./src/app/shared/generic-list-item/generic-list-item.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericListItemComponent": () => (/* binding */ GenericListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 8585);



function GenericListItemComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r1.price, "EUR"));
  }
}
function GenericListItemComponent_div_0_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-button", 10);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "pi " + ctx_r3.iconAction);
  }
}
function GenericListItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GenericListItemComponent_div_0_span_9_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GenericListItemComponent_div_0_p_button_10_Template, 1, 1, "p-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.iconAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.iconAction);
  }
}
class GenericListItemComponent {}
GenericListItemComponent.ɵfac = function GenericListItemComponent_Factory(t) {
  return new (t || GenericListItemComponent)();
};
GenericListItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GenericListItemComponent,
  selectors: [["app-generic-list-item"]],
  inputs: {
    list: "list",
    iconAction: "iconAction"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "flex flex-wrap p-2 align-items-center gap-3", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "p-2", "align-items-center", "gap-3"], [1, "w-4rem", "shadow-2", "flex-shrink-0", "border-circle", 3, "src", "alt"], [1, "flex-1", "flex", "flex-column", "gap-2"], [1, "font-bold"], [1, "flex", "align-items-center", "gap-2"], [1, "pi", "pi-tag", "text-sm"], ["class", "font-bold text-900", 4, "ngIf"], ["styleClass", "p-button-link", 3, "icon", 4, "ngIf"], [1, "font-bold", "text-900"], ["styleClass", "p-button-link", 3, "icon"]],
  template: function GenericListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GenericListItemComponent_div_0_Template, 11, 6, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_2__.Button, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 6918);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 5731);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/divider */ 1124);
/* harmony import */ var _chart_pie_chart_pie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-pie/chart-pie.component */ 1937);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/chart */ 8817);
/* harmony import */ var _chart_line_chart_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-line/chart-line.component */ 3250);
/* harmony import */ var _generic_list_item_generic_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-list-item/generic-list-item.component */ 7409);
/* harmony import */ var _calendar_custom_calendar_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-custom/calendar-custom.component */ 6066);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/angular */ 8245);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 1241);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 6956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
















class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.MenubarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_divider__WEBPACK_IMPORTED_MODULE_11__.DividerModule, primeng_chart__WEBPACK_IMPORTED_MODULE_12__.ChartModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__.FullCalendarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _chart_pie_chart_pie_component__WEBPACK_IMPORTED_MODULE_1__.ChartPieComponent, _chart_line_chart_line_component__WEBPACK_IMPORTED_MODULE_2__.ChartLineComponent, _generic_list_item_generic_list_item_component__WEBPACK_IMPORTED_MODULE_3__.GenericListItemComponent, _calendar_custom_calendar_custom_component__WEBPACK_IMPORTED_MODULE_4__.CalendarCustomComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.MenubarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_divider__WEBPACK_IMPORTED_MODULE_11__.DividerModule, primeng_chart__WEBPACK_IMPORTED_MODULE_12__.ChartModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__.FullCalendarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule],
    exports: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _chart_pie_chart_pie_component__WEBPACK_IMPORTED_MODULE_1__.ChartPieComponent, _chart_line_chart_line_component__WEBPACK_IMPORTED_MODULE_2__.ChartLineComponent, _generic_list_item_generic_list_item_component__WEBPACK_IMPORTED_MODULE_3__.GenericListItemComponent, _calendar_custom_calendar_custom_component__WEBPACK_IMPORTED_MODULE_4__.CalendarCustomComponent]
  });
})();

/***/ }),

/***/ 6918:
/*!*****************************************************!*\
  !*** ./src/app/shared/top-bar/top-bar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);






function TopBarComponent_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function TopBarComponent_p_button_2_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toogleMenu && ctx_r2.toogleMenu.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TopBarComponent_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function TopBarComponent_p_button_3_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.toogleMenu && ctx_r4.toogleMenu.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class TopBarComponent {
  constructor() {
    this.logoutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    console.log(this.toogleMenu);
  }
  onLogout() {
    this.logoutEvent.emit(true);
  }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
  return new (t || TopBarComponent)();
};
TopBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TopBarComponent,
  selectors: [["app-top-bar"]],
  inputs: {
    toogleMenu: "toogleMenu"
  },
  outputs: {
    logoutEvent: "logoutEvent"
  },
  decls: 11,
  vars: 3,
  consts: [[1, "grid", "align-items-center", "mt-0", "surface-border", "border-bottom-1"], [1, "col-1", "text-left"], ["icon", "pi pi-caret-left", "styleClass", "p-button-link", 3, "onClick", 4, "ngIf"], ["icon", "pi pi-bars", "styleClass", "p-button-link", 3, "onClick", 4, "ngIf"], [1, "col-11", "grid", "mt-0", "align-items-center", "justify-content-end"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", 1, "p-inputtext-sm", "border-round-3xl", 3, "ngModel", "ngModelChange"], ["icon", "pi pi-user", "styleClass", "p-button-link"], ["icon", "pi pi-bell", "styleClass", "p-button-link"], ["icon", "pi pi-sign-out", "styleClass", "p-button-link", 3, "onClick"], ["icon", "pi pi-caret-left", "styleClass", "p-button-link", 3, "onClick"], ["icon", "pi pi-bars", "styleClass", "p-button-link", 3, "onClick"]],
  template: function TopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopBarComponent_p_button_2_Template, 1, 0, "p-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopBarComponent_p_button_3_Template, 1, 0, "p-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopBarComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.searchValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-button", 8)(9, "p-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function TopBarComponent_Template_p_button_onClick_10_listener() {
        return ctx.onLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toogleMenu._opened);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toogleMenu._opened);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});


/***/ }),

/***/ 1676:
/*!*******************************!*\
  !*** ./src/app/utils/page.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
class Page {
  constructor() {
    // The number of elements in the page
    this.size = 10;
    // The total number of elements
    this.totalElements = 0;
    // The total number of pages
    this.totalPages = 0;
    // The current page number
    this.pageNumber = 0;
    this.offset = 0;
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
let config;
// config = {
//   api: {
//     domain: 'api.imprese2030.it',
//     port: 443,
//     /** COMMON **/
//     protocol: 'https',
//     basePath: '/api/v1',
//     fullPath: null,
//     path: null,
//     feUrl: 'https://imprese2030.it',
//   },
//   resources: {
//     basePath: 'http://localhost:3000',
//   }
// }
config = {
  api: {
    domain: 'localhost',
    port: 8000,
    /** COMMON **/
    protocol: '',
    basePath: '/api',
    fullPath: null,
    path: null,
    feUrl: 'http://localhost:4200'
  },
  resources: {
    basePath: 'http://localhost:8000/api'
  }
};
config.i18n = {
  defaultLocale: 'it',
  availableLocales: ['it']
};
const {
  protocol,
  domain,
  port,
  basePath
} = config.api;
const getBasePath = () => basePath[0] === '/' ? basePath : '' + basePath;
if (port === 80 || port === 443) {
  config.api.path = `${protocol ? protocol + '://' : '//'}${domain}`;
  config.api.fullPath = `${protocol ? protocol + '://' : '//'}${domain}${getBasePath()}`;
} else {
  config.api.path = `${protocol ? protocol + '://' : '//'}${domain}:${port}`;
  config.api.fullPath = `${protocol ? protocol + '://' : '//'}${domain}:${port}${getBasePath()}`;
}
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map