"use strict";
(self["webpackChunklalamiam"] = self["webpackChunklalamiam"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 4292);
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ 2081);
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ 6885);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/error-page/error-page.component */ 3469);
/* harmony import */ var _utils_page_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/page-title */ 6538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [{
  path: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.webapp_path,
  children: [{
    path: "",
    component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent,
    title: _utils_page_title__WEBPACK_IMPORTED_MODULE_5__["default"].homePageTitle[src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.language]
  }, {
    path: "error",
    component: _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__.ErrorPageComponent,
    title: _utils_page_title__WEBPACK_IMPORTED_MODULE_5__["default"].errorPageTitle[src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.language]
  }, {
    path: "users-page",
    component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__.UserPageComponent,
    title: _utils_page_title__WEBPACK_IMPORTED_MODULE_5__["default"].userHomePageTitle[src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.language]
  }, {
    path: "not-found-page",
    component: _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundPageComponent,
    title: _utils_page_title__WEBPACK_IMPORTED_MODULE_5__["default"].notFoundPageTitle[src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.language]
  }]
}, {
  path: "",
  redirectTo: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.webapp_path,
  pathMatch: "full"
}, {
  path: "**",
  redirectTo: "not-found-page",
  title: _utils_page_title__WEBPACK_IMPORTED_MODULE_5__["default"].notFoundPageTitle[src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.language]
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);
/* harmony import */ var _components_flash_message_flash_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/flash-message/flash-message.component */ 6799);




class AppComponent {
  constructor() {
    this.title = 'lalamiam';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-flash-message")(1, "app-navbar")(2, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_flash_message_flash_message_component__WEBPACK_IMPORTED_MODULE_1__.FlashMessageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var src_store_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/app.state */ 5105);
/* harmony import */ var src_store_user_ident_store_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/user-ident-store/effect */ 981);
/* harmony import */ var src_store_flash_message_store_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/flash-message-store/effect */ 5794);
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.interceptor */ 6861);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 4292);
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ 2081);
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ 6885);
/* harmony import */ var _components_flash_message_flash_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/flash-message/flash-message.component */ 6799);
/* harmony import */ var _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/error-page/error-page.component */ 3469);
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/auth/auth.module */ 9371);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tabmenu */ 9048);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/card */ 4722);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/divider */ 920);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/skeleton */ 2953);


































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    providers: [primeng_api__WEBPACK_IMPORTED_MODULE_14__.ConfirmationService, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS,
      useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_3__.HandlerHttpInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__.AuthModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forRoot(src_store_app_state__WEBPACK_IMPORTED_MODULE_0__.reducers), _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forRoot([src_store_user_ident_store_effect__WEBPACK_IMPORTED_MODULE_1__.UserEffect, src_store_flash_message_store_effect__WEBPACK_IMPORTED_MODULE_2__.FlashMessageEffect]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__.StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.isDevMode)(),
      serialize: {
        replacer: (_key, value) => typeof value === "bigint" ? value.toString() : value
      }
    }), primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__.InputTextModule, primeng_message__WEBPACK_IMPORTED_MODULE_23__.MessageModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_24__.TabMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_25__.ButtonModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__.ConfirmDialogModule, primeng_card__WEBPACK_IMPORTED_MODULE_27__.CardModule, primeng_divider__WEBPACK_IMPORTED_MODULE_28__.DividerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_29__.SkeletonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__.HomePageComponent, _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundPageComponent, _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_9__.UserPageComponent, _components_flash_message_flash_message_component__WEBPACK_IMPORTED_MODULE_10__.FlashMessageComponent, _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__.ErrorPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__.AuthModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__.StoreDevtoolsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__.InputTextModule, primeng_message__WEBPACK_IMPORTED_MODULE_23__.MessageModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_24__.TabMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_25__.ButtonModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__.ConfirmDialogModule, primeng_card__WEBPACK_IMPORTED_MODULE_27__.CardModule, primeng_divider__WEBPACK_IMPORTED_MODULE_28__.DividerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_29__.SkeletonModule]
  });
})();

/***/ }),

/***/ 6799:
/*!*********************************************************************!*\
  !*** ./src/app/components/flash-message/flash-message.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlashMessageComponent: () => (/* binding */ FlashMessageComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_store_flash_message_store_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/flash-message-store/selector */ 9951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/message */ 7736);






function FlashMessageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("severity", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r0.isErrorMessage$) ? "error" : "success")("text", message_r1);
  }
}
class FlashMessageComponent {
  constructor(_store) {
    this._store = _store;
    this.message$ = this._store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(src_store_flash_message_store_selector__WEBPACK_IMPORTED_MODULE_0__.messageSelector));
    this.isErrorMessage$ = this._store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(src_store_flash_message_store_selector__WEBPACK_IMPORTED_MODULE_0__.isMessageErrorSelector));
  }
  static #_ = this.ɵfac = function FlashMessageComponent_Factory(t) {
    return new (t || FlashMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FlashMessageComponent,
    selectors: [["app-flash-message"]],
    decls: 2,
    vars: 3,
    consts: [["class", "h-1rem absolute flex justify-content-center w-12", 4, "ngIf"], [1, "h-1rem", "absolute", "flex", "justify-content-center", "w-12"], [1, "p-message", 3, "severity", "text"]],
    template: function FlashMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FlashMessageComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.message$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_message__WEBPACK_IMPORTED_MODULE_4__.UIMessage, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 953:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_store_user_ident_store_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/user-ident-store/selector */ 2664);
/* harmony import */ var src_app_modules_auth_store_auth_store_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/store/auth-store/action */ 8312);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/divider */ 920);










function NavbarComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 12)(2, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function NavbarComponent_ng_container_13_Template_p_button_onClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.displayLogoutOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 14)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " connexion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r2.loginLink);
  }
}
function NavbarComponent_ng_container_18_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li")(2, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function NavbarComponent_ng_container_18_ng_container_13_Template_p_button_onClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.displayLogoutOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_container_18_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function NavbarComponent_ng_container_18_ng_template_15_Template_li_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.displayMenuOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_ng_container_18_ng_template_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.displayMenuOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " connexion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r10.loginLink);
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function NavbarComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nav", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function NavbarComponent_ng_container_18_Template_p_button_onClick_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.displayMenuOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 21)(7, "li", 6)(8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_ng_container_18_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.displayMenuOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function NavbarComponent_ng_container_18_Template_li_onClick_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.displayMenuOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_ng_container_18_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.displayMenuOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NavbarComponent_ng_container_18_ng_container_13_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NavbarComponent_ng_container_18_ng_template_15_Template, 4, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rounded", true)("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r3.homeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r3.userLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 7, ctx_r3.userEmail$))("ngIfElse", _r9);
  }
}
const _c1 = function () {
  return {
    "width": "100%"
  };
};
function NavbarComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26)(2, "div", 27)(3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Souhaitez-vous quitter l'application?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 29)(6, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function NavbarComponent_ng_container_19_Template_p_button_onClick_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function NavbarComponent_ng_container_19_Template_p_button_onClick_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.displayLogoutOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));
  }
}
class NavbarComponent {
  constructor(_store) {
    this._store = _store;
    this.isLogoutVisible = false;
    this.isMenuVisible = false;
    this.items = [{
      label: 'Home',
      routerLink: `/`,
      icon: 'pi pi-user'
    }, {
      label: 'User',
      routerLink: `/`,
      icon: 'pi pi-cog'
    }];
    this.activeItem = undefined;
    /**
    * Path pour afficher la web_app
    */
    this.webappPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.webapp_path;
    this.userEmail$ = this._store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(src_store_user_ident_store_selector__WEBPACK_IMPORTED_MODULE_0__.getEmailSelector));
  }
  ngOnInit() {
    this.homeLink = `/${this.webappPath}`;
    this.userLink = `/${this.webappPath}/users-page`;
    this.loginLink = `/${this.webappPath}/connexion`;
  }
  /**
   * Toggle LogoutOverlay
   */
  displayLogoutOverlay() {
    this.isLogoutVisible = !this.isLogoutVisible;
  }
  /**
   * Toggle MenuOverlay
   */
  displayMenuOverlay() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  logout() {
    this._store.dispatch(src_app_modules_auth_store_auth_store_action__WEBPACK_IMPORTED_MODULE_1__.logout());
    this.displayLogoutOverlay();
  }
  /**
   *
   * @param event
   */
  onResize(event) {
    this.checkWidth();
  }
  /**
   *
   */
  checkWidth() {
    if (window.innerWidth > 768 && this.isMenuVisible) {
      this.isMenuVisible = false;
    }
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    decls: 20,
    vars: 10,
    consts: [[1, "p-4"], [1, "flex", "align-items-center", "justify-content-between", "w-12"], [1, "p-4", "navbar-logo", "cursor-pointer", "min-w-min"], [1, "text-3xl", "font-bold", 3, "click"], [1, "hidden", "sm:flex", "w-8"], [1, "p-4", "flex", "justify-content-center", "w-12"], ["routerLinkActive", "active", 1, "mr-4", 3, "routerLinkActiveOptions"], [1, "link", 3, "routerLink"], ["routerLinkActive", "active", 1, "mr-4"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngIf"], [1, "right"], ["label", "D\u00E9connexion", 3, "onClick"], ["routerLinkActive", "active", 1, "right"], [1, "pi", "pi-user"], [1, "inline", "sm:hidden"], [1, "z-1", "bg-black-alpha-10", "absolute", "top-0", "left-0", "bottom-0", "w-full", "flex", "justify-content-start", "align-items-start"], [1, "shadow-2", "sm:w-6", "w-12", "max-w-full", "sm:max-w-30rem", "min-h-full", "bg-white", "flex", "flex-column", "justify-content-start", "align-items-start"], [1, "flex", "w-12", "p-2", "justify-content-end"], ["icon", "pi pi-times", "severity", "danger ", 3, "rounded", "text", "onClick"], [1, "p-4", "flex", "flex-column", "justify-content-center", "w-12"], [1, "link", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "mr-4", 3, "onClick"], ["routerLinkActive", "active", 3, "onClick"], [3, "routerLink", "click"], [1, "z-1", "bg-black-alpha-10", "absolute", "top-0", "left-0", "bottom-0", "w-full", "flex", "align-items-center", "justify-content-center"], [1, "shadow-2", "sm:w-6", "max-w-full", "sm:max-w-30rem", "bg-white", "flex", "flex-column", "justify-content-center", "align-items-center"], [1, "p-5"], [1, "p-5", "w-12", "flex", "flex-column", "sm:flex-row", "align-items-center", "justify-content-center"], ["label", " Me deconnecter", "styleClass", "p-button-secondary", "icon", "pi pi-check", 1, "w-12", "m-1", 3, "outlined", "onClick"], ["label", "Non", 1, "w-12", "m-1", 3, "onClick"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_h2_click_3_listener() {
          return ctx.displayMenuOverlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "MY APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 8)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NavbarComponent_ng_container_13_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NavbarComponent_ng_template_15_Template, 4, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "p-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, NavbarComponent_ng_container_18_Template, 17, 10, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, NavbarComponent_ng_container_19_Template, 8, 7, "ng-container", 11);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.homeLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.userLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 7, ctx.userEmail$))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLogoutVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_divider__WEBPACK_IMPORTED_MODULE_8__.Divider, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["nav[_ngcontent-%COMP%]{\n  height: var(--nav_height);\n}\n\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  padding: 10px;\n  line-height: 2;\n\n}\n\n.right[_ngcontent-%COMP%] {\n  margin-left: auto; \n\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: 900;\n  position: relative;\n}\n\n.active[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: black;\n  left: 0px;\n  bottom: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLG9DQUFvQztBQUN6RDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgaGVpZ2h0OiB2YXIoLS1uYXZfaGVpZ2h0KTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBsaW5lLWhlaWdodDogMjtcclxuXHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IC8qIFB1c2hlcyB0aGUgZWxlbWVudCB0byB0aGUgcmlnaHQgKi9cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hY3RpdmU6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6861:
/*!*************************************!*\
  !*** ./src/app/http.interceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandlerHttpInterceptor: () => (/* binding */ HandlerHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class HandlerHttpInterceptor {
  constructor(_injector) {
    this._injector = _injector;
  }
  intercept(request, next) {
    if (request.urlWithParams.includes('/api/')) {
      let token = undefined;
      const user = localStorage.getItem('user');
      console.log(`Données utilisateur : ${user}`);
      if (user !== null) {
        const userJSON = JSON.parse(user);
        console.log(`token bearer: : ${userJSON.jwt}`);
        token = userJSON.jwt;
      }
      const formToken = localStorage.getItem('form-csrf-token');
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Form-Csrf-Token': formToken === null ? '-' : formToken
        }
      });
    }
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
        const csrfToken = event.headers.get('form-csrf-token');
        if (csrfToken) {
          localStorage.setItem('form-csrf-token', csrfToken);
        }
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)({
      error: error => {
        const errorStatus = error.status;
        const router = this._injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
        const webapp_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webapp_path !== '' ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webapp_path + '/' : '';
        switch (errorStatus) {
          case 0:
            {
              console.log('erreur: 0: ', error.status);
              router.navigate([`${webapp_path}error`]);
              break;
            }
          case 401:
            {
              console.log('erreur: 401: ', error.message);
              router.navigate([`${webapp_path}connexion`]);
              break;
            }
          case 403:
            {
              console.log('error 403: ', 'error 403');
              router.navigate([`${webapp_path}connexion`]);
              break;
            }
          case 404:
            {
              console.log('error 404: ', error.status);
              router.navigate(["not-found-page"]);
              break;
            }
        }
      }
    }));
  }
  static #_ = this.ɵfac = function HandlerHttpInterceptor_Factory(t) {
    return new (t || HandlerHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: HandlerHttpInterceptor,
    factory: HandlerHttpInterceptor.ɵfac
  });
}

/***/ }),

/***/ 9371:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 1614);
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ 775);
/* harmony import */ var _routes_auth_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/auth.routing */ 7970);
/* harmony import */ var _store_auth_store_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/auth-store/reducer */ 1579);
/* harmony import */ var _store_auth_store_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/auth-store/effect */ 8309);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ 3721);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/password */ 3219);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/messages */ 9404);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/divider */ 920);
/* harmony import */ var _directives_show_on_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/show-on-focus.directive */ 5233);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/skeleton */ 2953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);























class AuthModule {
  static #_ = this.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_routes_auth_routing__WEBPACK_IMPORTED_MODULE_2__.authRouting), _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule.forFeature('authState', _store_auth_store_reducer__WEBPACK_IMPORTED_MODULE_3__.reducers), _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsModule.forFeature([_store_auth_store_effect__WEBPACK_IMPORTED_MODULE_4__.AuthEffect]), primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_14__.PasswordModule, primeng_messages__WEBPACK_IMPORTED_MODULE_15__.MessagesModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_message__WEBPACK_IMPORTED_MODULE_17__.MessageModule, primeng_divider__WEBPACK_IMPORTED_MODULE_18__.DividerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__.SkeletonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent, _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__.RegisterPageComponent, _directives_show_on_focus_directive__WEBPACK_IMPORTED_MODULE_6__.ShowOnFocusDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsFeatureModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_14__.PasswordModule, primeng_messages__WEBPACK_IMPORTED_MODULE_15__.MessagesModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_message__WEBPACK_IMPORTED_MODULE_17__.MessageModule, primeng_divider__WEBPACK_IMPORTED_MODULE_18__.DividerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__.SkeletonModule]
  });
})();

/***/ }),

/***/ 5233:
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/directives/show-on-focus.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowOnFocusDirective: () => (/* binding */ ShowOnFocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ShowOnFocusDirective {
  constructor(_el, _viewContainer) {
    this._el = _el;
    this._viewContainer = _viewContainer;
  }
  onFocus(event) {
    this._viewContainer.createEmbeddedView(this.templateRef);
  }
  onFocusOut(event) {
    this._viewContainer.clear();
  }
  isPrimeNgPasswordInput(target) {
    return target instanceof HTMLInputElement && this._el.nativeElement.querySelector('input') === target;
  }
  static #_ = this.ɵfac = function ShowOnFocusDirective_Factory(t) {
    return new (t || ShowOnFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ShowOnFocusDirective,
    selectors: [["", "appShowOnFocus", ""]],
    hostBindings: function ShowOnFocusDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function ShowOnFocusDirective_focusin_HostBindingHandler($event) {
          return ctx.onFocus($event);
        })("focusout", function ShowOnFocusDirective_focusout_HostBindingHandler($event) {
          return ctx.onFocusOut($event);
        });
      }
    },
    inputs: {
      templateRef: ["appShowOnFocus", "templateRef"]
    }
  });
}

/***/ }),

/***/ 861:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/models/captcha.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Captcha: () => (/* binding */ Captcha)
/* harmony export */ });
class Captcha {
  constructor(image, mimeType, question, response) {
    this.image = image;
    this.mimeType = mimeType;
    this.question = question;
    this.response = response;
  }
}

/***/ }),

/***/ 1382:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/models/login-dto.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDto: () => (/* binding */ LoginDto)
/* harmony export */ });
class LoginDto {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

/***/ }),

/***/ 1614:
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/pages/login-page/login-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/auth-store/action */ 8312);
/* harmony import */ var _models_login_dto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/login-dto.model */ 1382);
/* harmony import */ var _store_auth_store_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth-store/selector */ 2872);
/* harmony import */ var src_app_utils_messages_message_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/messages/message-utils */ 5793);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_app_utils_messages_login_page_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/messages/login-page-message */ 6174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ 3219);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/divider */ 920);


















function LoginPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "p-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", ctx_r0.errorMessages.get("emailMissing"));
  }
}
function LoginPageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "p-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", ctx_r1.errorMessages.get("passwordMissing"));
  }
}
class LoginPageComponent {
  constructor(_fb, _store) {
    this._fb = _fb;
    this._store = _store;
    this.loginDataFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
    /**
     * Path pour afficher la web_app
     */
    this.webappPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.webapp_path;
    /**
     * Erreurs formulaire
     */
    this.errorMessages = new Map();
    /**
     * Info sur champs du formulaire   *
     */
    this.formInput = new Map();
    this.isLoading$ = this._store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_auth_store_selector__WEBPACK_IMPORTED_MODULE_2__.isLoadingSelector));
  }
  ngOnInit() {
    this.registerLink = `/${this.webappPath}/register`;
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__.csrf());
    this.initializeLoginData();
    this.initializeFormMessages();
  }
  /**
   * Initialisation FormBuilder
   */
  initializeLoginData() {
    this.loginDataFormGroup = this._fb.group({
      // Email
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      // Password
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  /**
   * Chargement des données du Formulaire
   */
  initializeFormMessages() {
    /**
     * chargement des infos du formulaire
     */
    this.formInput = src_app_utils_messages_message_utils__WEBPACK_IMPORTED_MODULE_3__.MessageUtil.loadMessageInMap(src_app_utils_messages_login_page_message__WEBPACK_IMPORTED_MODULE_5__["default"].loginPage.information, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.language);
    /**
     * Chargement des messages d'erreur
     */
    this.errorMessages = src_app_utils_messages_message_utils__WEBPACK_IMPORTED_MODULE_3__.MessageUtil.loadMessageInMap(src_app_utils_messages_login_page_message__WEBPACK_IMPORTED_MODULE_5__["default"].loginPage.error, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.language);
  }
  /**
   * Login
   * @returns
   */
  login() {
    if (!this.loginDataFormGroup.valid) {
      return this.loginDataFormGroup.markAllAsTouched();
    }
    const logindata = new _models_login_dto_model__WEBPACK_IMPORTED_MODULE_1__.LoginDto(this.loginDataFormGroup.get('email')?.value, this.loginDataFormGroup.get('password')?.value);
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__.login(logindata));
  }
  static #_ = this.ɵfac = function LoginPageComponent_Factory(t) {
    return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LoginPageComponent,
    selectors: [["app-login-page"]],
    decls: 22,
    vars: 10,
    consts: [[1, "container--center"], [1, "flex", "flex-column", "align-items-center", "w-full"], [1, "form--border", "flex", "flex-column", "align-items-center", "p-4", "w-full", "m-w-500", 3, "formGroup", "submit"], [1, "text-base", "pt-6", "pb-4", "font-semibold"], [1, "p-2", "w-full"], [1, "flex", "flex-column", "w-full", "pt-4"], ["for", "email", 1, "pb-1"], ["type", "email", "pInputText", "", "id", "email", "formControlName", "email", "placeholder", "votre email.", 2, "border-color", "var(--first_color)"], [4, "ngIf"], ["for", "password", 1, "pb-1"], ["id", "password", "formControlName", "password", "placeholder", "mot de passe...", 3, "feedback", "toggleMask"], ["type", "submit", "label", "connexion", 1, "pt-4"], [3, "routerLink"], ["severity", "error", 1, "p-message", 3, "text"]],
    template: function LoginPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function LoginPageComponent_Template_form_submit_2_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "p-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, LoginPageComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "p-password", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, LoginPageComponent_div_15_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "p-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "inscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.loginDataFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.formInput.get("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.formInput.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.loginDataFormGroup.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.loginDataFormGroup.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.formInput.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("feedback", false)("toggleMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.loginDataFormGroup.get("password")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.loginDataFormGroup.get("password")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.formInput.get("register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.registerLink);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_password__WEBPACK_IMPORTED_MODULE_12__.Password, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_message__WEBPACK_IMPORTED_MODULE_14__.UIMessage, primeng_divider__WEBPACK_IMPORTED_MODULE_15__.Divider],
    styles: [".main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - var(--nav_height));\n}\n[_nghost-%COMP%]     .p-password input {\n  border-color: var(--first_color);\n}\n\n@media screen and (min-width: 768px) {\n  .form--border[_ngcontent-%COMP%] {\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 5px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLGlEQUFpRDtJQUNqRCxrQkFBa0I7RUFDcEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2X2hlaWdodCkpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucC1wYXNzd29yZCBpbnB1dCB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maXJzdF9jb2xvcik7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm0tLWJvcmRlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 775:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/auth/pages/register-page/register-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageComponent: () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/auth-store/action */ 8312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _store_auth_store_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/auth-store/selector */ 2872);
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/password.validator */ 6302);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_app_utils_messages_register_page_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/messages/register-page-message */ 506);
/* harmony import */ var src_app_utils_messages_message_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/messages/message-utils */ 5793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ 3721);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/password */ 3219);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/divider */ 920);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/skeleton */ 2953);
/* harmony import */ var _directives_show_on_focus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/show-on-focus.directive */ 5233);




















function RegisterPageComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx_r0.errorMessages.get("emailMissing"));
  }
}
function RegisterPageComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx_r1.errorMessages.get("emailNotValid"));
  }
}
function RegisterPageComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx_r2.errorMessages.get("nameMissing"));
  }
}
function RegisterPageComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Contraintes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "p-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ul", 22)(5, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Au moins 1 caract\u00E8re en miniscule");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Au moins 1 caract\u00E8re en majiscule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Au moins 1 chiffre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Minimum 8 caract\u00E8res");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function RegisterPageComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx_r5.errorMessages.get("passwordMissing"));
  }
}
function RegisterPageComponent_li_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx_r6.errorMessages.get("confirmPasswordMissing"));
  }
}
function RegisterPageComponent_li_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx_r7.errorMessages.get("confirmPasswordNotMatch"));
  }
}
function RegisterPageComponent_div_34_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx_r12.errorMessages.get("captchaResponseMissing"));
  }
}
function RegisterPageComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RegisterPageComponent_div_34_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const captcha_r11 = ctx.ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](captcha_r11.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", "data:" + captcha_r11.mimeType + ";base64," + captcha_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r8.registerDataFormGroup.get("captchaClientResponse")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r8.registerDataFormGroup.get("captchaClientResponse")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]));
  }
}
function RegisterPageComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-skeleton", 31)(2, "p-skeleton", 32)(3, "p-skeleton", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class RegisterPageComponent {
  constructor(_fb, _store, _authService) {
    this._fb = _fb;
    this._store = _store;
    this._authService = _authService;
    this.registerDataFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({});
    /**
     * Erreurs formulaire
     */
    this.errorMessages = new Map();
    /**
     * Info sur champs du formulaire   *
     */
    this.formInput = new Map();
    this.captcha$ = _store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_store_auth_store_selector__WEBPACK_IMPORTED_MODULE_1__.captchaSelector));
  }
  ngOnInit() {
    this.initializeFormMessages();
    this.initializeRegisterData();
    this.initializeForm();
  }
  ngOnDestroy() {
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__.leaveRegisterPage());
    localStorage.clear('captcha');
  }
  /**
   * Formgroup Init
   */
  initializeRegisterData() {
    this.registerDataFormGroup = this._fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      captchaClientResponse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    }, {
      validators: (0,_validators_password_validator__WEBPACK_IMPORTED_MODULE_2__.passwordValidator)()
    });
  }
  /**
   * CSRF + Captcha
   */
  initializeForm() {
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__.captcha());
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__.csrf());
  }
  initializeFormMessages() {
    /**
     * chargement des infos du formulaire
     */
    this.formInput = src_app_utils_messages_message_utils__WEBPACK_IMPORTED_MODULE_5__.MessageUtil.loadMessageInMap(src_app_utils_messages_register_page_message__WEBPACK_IMPORTED_MODULE_4__["default"].registerPage.information, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.language);
    /**
     * Chargement des messages d'erreur
     */
    this.errorMessages = src_app_utils_messages_message_utils__WEBPACK_IMPORTED_MODULE_5__.MessageUtil.loadMessageInMap(src_app_utils_messages_register_page_message__WEBPACK_IMPORTED_MODULE_4__["default"].registerPage.error, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.language);
  }
  register() {
    if (!this.registerDataFormGroup.valid) {
      return this.registerDataFormGroup.markAllAsTouched();
    }
    const email = this.registerDataFormGroup.get('email')?.value;
    const password = this.registerDataFormGroup.get('password')?.value;
    const name = this.registerDataFormGroup.get('name')?.value;
    const captchaClientResponse = this.registerDataFormGroup.get('captchaClientResponse')?.value;
    const registerData = this._authService.getRegisterDto(email, password, name, captchaClientResponse);
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_0__.register(registerData));
  }
  static #_ = this.ɵfac = function RegisterPageComponent_Factory(t) {
    return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: RegisterPageComponent,
    selectors: [["app-register-page"]],
    decls: 39,
    vars: 21,
    consts: [[1, "flex", "flex-column", "align-items-center"], [1, "form--border", "flex", "flex-column", "align-items-center", "p-4", "w-full", "m-w-500", 3, "formGroup", "submit"], [1, "text-base", "pt-6", "pb-4", "font-semibold"], [1, "p-2", "w-full"], [1, "flex", "flex-column", "w-full", "pt-4"], ["for", "email", 1, "pb-1"], ["type", "email", "pInputText", "", "id", "email", "formControlName", "email", "aria-describedby", "email-help", "placeholder", "votre email...", 2, "border-color", "var(--first_color)"], [4, "ngIf"], ["for", "name", 1, "pb-1"], ["type", "text", "pInputText", "", "aria-describedby", "name", "id", "name", "formControlName", "name", "placeholder", "nom", 2, "border-color", "var(--first_color)"], [1, "relative", "flex", "flex-column", "w-full"], ["for", "password", 1, "pb-1"], ["id", "password", "aria-describedby", "password-help", "formControlName", "password", "placeholder", "mot de passe...", 3, "appShowOnFocus", "feedback", "toggleMask"], ["passwordTemplate", ""], ["id", "confirmPassword", "aria-describedby", "confirm-password-help", "formControlName", "confirmPassword", "placeholder", "mot de passe", 3, "feedback", "toggleMask"], ["class", "flex flex-column w-full m-4 p-4 shadow-1", 4, "ngIf", "ngIfElse"], ["waitingBlock", ""], ["type", "submit", "label", "creation", 1, "pt-4"], ["severity", "error", 1, "p-message", 3, "text"], [1, "absolute", "top-100", "left-0", "shadow-1", "p-2", "z-1", "bg-white"], [1, "mt-2", "text-sm", "font-bold"], [1, "p-2"], [1, "pl-2", "ml-2", "mt-0", 2, "line-height", "1.5"], [1, "text-sm"], [1, "pi", "pi-caret-right", 2, "font-size", "1rem", "color", "var(--first_color)"], [1, "flex", "flex-column", "w-full", "m-4", "p-4", "shadow-1"], [1, "mb-2"], [1, "flex", "flex-column", "align-items-center", "mb-2"], [3, "src"], ["pInputText", "", "id", "captchaClientResponse", "type", "text", "formControlName", "captchaClientResponse", 2, "border-color", "var(--first_color)"], [1, "shadow-2", "p-4", "m-4", "w-12"], ["width", "10rem", "height", "2rem", 1, "p-2"], ["width", "80%", "height", "70px", "borderRadius", "16px", 1, "ml-4"], ["width", "10rem", "height", "35px", 1, "p-2"]],
    template: function RegisterPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function RegisterPageComponent_Template_form_submit_1_listener() {
          return ctx.register();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "p-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div")(10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, RegisterPageComponent_li_11_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, RegisterPageComponent_li_12_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 4)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, RegisterPageComponent_div_17_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 4)(19, "div", 10)(20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p-password", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, RegisterPageComponent_ng_template_23_Template, 17, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, RegisterPageComponent_div_25_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 4)(27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "p-password", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div")(31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, RegisterPageComponent_li_32_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, RegisterPageComponent_li_33_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, RegisterPageComponent_div_34_Template, 7, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, RegisterPageComponent_ng_template_36_Template, 4, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "p-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](37);
        let tmp_3_0;
        let tmp_4_0;
        let tmp_6_0;
        let tmp_11_0;
        let tmp_15_0;
        let tmp_16_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.registerDataFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.formInput.get("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.formInput.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerDataFormGroup.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.registerDataFormGroup.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerDataFormGroup.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.registerDataFormGroup.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.formInput.get("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.registerDataFormGroup.get("name")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.registerDataFormGroup.get("name")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.formInput.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appShowOnFocus", _r3)("feedback", false)("toggleMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.registerDataFormGroup.get("password")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.registerDataFormGroup.get("password")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.formInput.get("confirmPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("feedback", false)("toggleMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.registerDataFormGroup.get("confirmPassword")) == null ? null : tmp_15_0.touched) && ((tmp_15_0 = ctx.registerDataFormGroup.get("confirmPassword")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.registerDataFormGroup.get("confirmPassword")) == null ? null : tmp_16_0.touched) && (ctx.registerDataFormGroup.errors == null ? null : ctx.registerDataFormGroup.errors["passwordMismatch"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 19, ctx.captcha$))("ngIfElse", _r9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, primeng_password__WEBPACK_IMPORTED_MODULE_13__.Password, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_message__WEBPACK_IMPORTED_MODULE_15__.UIMessage, primeng_divider__WEBPACK_IMPORTED_MODULE_16__.Divider, primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__.Skeleton, _directives_show_on_focus_directive__WEBPACK_IMPORTED_MODULE_7__.ShowOnFocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: ["img[_ngcontent-%COMP%]  {\n  max-width: 260px;\n  height: 10%;\n  width: auto;\n  object-fit: contain ;\n}\n\n\n\n[_nghost-%COMP%]     .p-password input {\n  border-color: var(--first_color);\n}\n\n@media screen and (min-width: 768px) {\n  .form--border[_ngcontent-%COMP%] {\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 5px;\n  }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsaURBQWlEO0lBQ2pELGtCQUFrQjtFQUNwQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1nICB7XHJcbiAgbWF4LXdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDEwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb250YWluIDtcclxufVxyXG5cclxuLyogUGFzc3dvcmQgLSBib3JkZXIgQ29sb3IgKi9cclxuOmhvc3QgOjpuZy1kZWVwIC5wLXBhc3N3b3JkIGlucHV0IHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWZpcnN0X2NvbG9yKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuZm9ybS0tYm9yZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7970:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/routes/auth.routing.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authRouting: () => (/* binding */ authRouting)
/* harmony export */ });
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/login-page/login-page.component */ 1614);
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/register-page/register-page.component */ 775);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_app_utils_page_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/page-title */ 6538);




const authRouting = [{
  path: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.webapp_path,
  children: [{
    path: "connexion",
    component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent,
    title: src_app_utils_page_title__WEBPACK_IMPORTED_MODULE_3__["default"].loginPageTitle[src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.language]
  }, {
    path: "register",
    component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__.RegisterPageComponent,
    title: src_app_utils_page_title__WEBPACK_IMPORTED_MODULE_3__["default"].registerPageTitle[src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.language]
  }]
}];

/***/ }),

/***/ 3721:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _models_captcha_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/captcha.model */ 861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);





class AuthService {
  constructor(_http) {
    this._http = _http;
    this._apiEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_base + "/auth";
  }
  login(loginDto) {
    return this._http.post(this._apiEndPoint + "/login", loginDto).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(loginResponse => {
      localStorage.setItem('user', JSON.stringify({
        userId: loginResponse.id,
        email: loginResponse.email,
        jwt: loginResponse.jwt,
        roles: loginResponse.roles
      }));
    }));
  }
  register(registerDto) {
    return this._http.post(this._apiEndPoint + "/register", registerDto);
  }
  csrf() {
    const path = this._apiEndPoint + "/csrf";
    return this._http.get(path, {
      responseType: 'text'
    });
  }
  captcha() {
    const path = this._apiEndPoint + "/captcha";
    return this._http.get(path).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(dto => this.toCaptchaModel(dto)));
  }
  logout() {
    //const user = JSON.parse(localStorage.getItem('user'));
    const user = localStorage.getItem('user');
    let path = "";
    if (user != null) {
      const userString = JSON.parse(user);
      const userId = userString.userId;
      path = this._apiEndPoint + "/logout/" + userId;
    }
    console.log(path);
    return this._http.get(path, {
      responseType: 'text'
    });
  }
  toCaptchaModel(dto) {
    return new _models_captcha_model__WEBPACK_IMPORTED_MODULE_1__.Captcha(dto.imageBase64, dto.imageMimeType, dto.question, dto.response);
  }
  /**
   * Renvoi un RegisterDto
   * @param email
   * @param password
   * @param name
   * @param captchaClientResponse
   * @returns RegisterDto
   */
  getRegisterDto(email, password, name, captchaClientResponse) {
    const captchaData = localStorage.getItem('captcha');
    let captchaResponse = '';
    if (captchaData != null) {
      const captchaDataJson = JSON.parse(captchaData);
      captchaResponse = captchaDataJson.response;
    }
    // Récupération des données du captcha et réponse client
    const captchaClientResponseDto = {
      captchaResponse,
      clientResponse: captchaClientResponse
    };
    return {
      email,
      password,
      name,
      captchaClientResponseDto
    };
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 8312:
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/store/auth-store/action.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captcha: () => (/* binding */ captcha),
/* harmony export */   captchaSuccess: () => (/* binding */ captchaSuccess),
/* harmony export */   csrf: () => (/* binding */ csrf),
/* harmony export */   leaveRegisterPage: () => (/* binding */ leaveRegisterPage),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   logoutFailed: () => (/* binding */ logoutFailed),
/* harmony export */   logoutSuccess: () => (/* binding */ logoutSuccess),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login client', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const csrf = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] csrf');
const captcha = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] get captcha');
const captchaSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] captcha success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout');
const logoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logoutFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const register = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Register client', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const leaveRegisterPage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] leave register page');

/***/ }),

/***/ 8309:
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/store/auth-store/effect.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthEffect: () => (/* binding */ AuthEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 8312);
/* harmony import */ var src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/user-ident-store/action */ 3541);
/* harmony import */ var src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/flash-message-store/action */ 9667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var src_app_utils_frontend_link_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/frontend-link-url */ 6868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 3721);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);










class AuthEffect {
  constructor(_action$, _authService, _router) {
    this._action$ = _action$;
    this._authService = _authService;
    this._router = _router;
    this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.login), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(data => this._authService.login(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(loginResponse => [
    // Creation du UserIdent
    src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__.createUserIden({
      userId: loginResponse.id,
      email: loginResponse.email,
      jwt: loginResponse.jwt,
      roles: loginResponse.roles
    }),
    // Generation Message login
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: loginResponse.message,
      isError: false
    })]), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)([src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__.clearUserIden(),
    // Generation Message d'erreur
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: error.error.error,
      isError: true
    })]))))));
    this.register$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.register), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(data => this._authService.register(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(registerResponse => src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: registerResponse.message,
      isError: false
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(
      // Generation Message d'erreur
      src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
        message: error.error.error,
        isError: true
      }));
    })))));
    this.logout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(() => this._authService.logout().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
      // Redirect HomeApp
      console.log('redirection:  ' + src_app_utils_frontend_link_url__WEBPACK_IMPORTED_MODULE_3__["default"].home);
      this._router.navigate([src_app_utils_frontend_link_url__WEBPACK_IMPORTED_MODULE_3__["default"].home]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(resMessage => {
      localStorage.removeItem('user');
      return [
      // Suppression du UserIdent
      src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__.clearUserIden(),
      // Generation Message logout
      src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
        message: resMessage,
        isError: false
      })];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      localStorage.removeItem('user');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)([
      // Suppression du UserIdent
      src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__.clearUserIden(),
      // Generation Message d'erreur
      src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
        message: error.error.error,
        isError: true
      })]);
    })))));
    this.csrf$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.csrf), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(() => this._authService.csrf().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(csrf => [
    // Generation Message Register
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: csrf,
      isError: false
    })]), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(
      // Generation Message d'erreur
      src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
        message: error.error.error,
        isError: true
      }));
    })))));
    this.captcha$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.captcha), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(() => this._authService.captcha().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(captcha => {
      const captchaString = JSON.stringify(captcha);
      localStorage.setItem('captcha', captchaString);
      return _action__WEBPACK_IMPORTED_MODULE_0__.captchaSuccess({
        captcha
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(
      // Generation Message d'erreur
      src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
        message: error.error.error,
        isError: true
      }));
    })))));
  }
  static #_ = this.ɵfac = function AuthEffect_Factory(t) {
    return new (t || AuthEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: AuthEffect,
    factory: AuthEffect.ɵfac
  });
}

/***/ }),

/***/ 1579:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/store/auth-store/reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 8312);


const initialState = {
  error: '',
  isErrorVisible: false,
  isLoading: false,
  captcha: null
};
const reducers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.login, state => ({
  ...state,
  isLoading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.register, state => ({
  ...state,
  isLoading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.captchaSuccess, (state, {
  captcha
}) => ({
  ...state,
  ...state.captcha,
  captcha
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.leaveRegisterPage, state => ({
  ...state,
  captcha: null
})));

/***/ }),

/***/ 2872:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/store/auth-store/selector.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captchaQuestionSelector: () => (/* binding */ captchaQuestionSelector),
/* harmony export */   captchaSelector: () => (/* binding */ captchaSelector),
/* harmony export */   errorMessageSelector: () => (/* binding */ errorMessageSelector),
/* harmony export */   isErrorVisibleSelector: () => (/* binding */ isErrorVisibleSelector),
/* harmony export */   isLoadingSelector: () => (/* binding */ isLoadingSelector),
/* harmony export */   selector: () => (/* binding */ selector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const selector = state => state.authState;
const isErrorVisibleSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.isErrorVisible);
const isLoadingSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.isLoading);
const errorMessageSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.error);
const captchaSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.captcha);
const captchaQuestionSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.captcha?.question);

/***/ }),

/***/ 6302:
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/validators/password.validator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passwordValidator: () => (/* binding */ passwordValidator)
/* harmony export */ });
function passwordValidator() {
  return formGroup => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return {
        passwordMismatch: true
      };
    }
    return null;
  };
}

/***/ }),

/***/ 3469:
/*!**********************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorPageComponent: () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ErrorPageComponent {
  static #_ = this.ɵfac = function ErrorPageComponent_Factory(t) {
    return new (t || ErrorPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorPageComponent,
    selectors: [["app-error-page"]],
    decls: 2,
    vars: 0,
    template: function ErrorPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Erreur page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4292:
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/home.service */ 7082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/skeleton */ 2953);




function HomePageComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function HomePageComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-skeleton", 5);
  }
}
class HomePageComponent {
  constructor(_homeService) {
    this._homeService = _homeService;
    this.message = '';
  }
  ngOnInit() {
    this._homeService.getHomeMessage().subscribe(res => this.message = res, error => console.error('Erreur!', error));
  }
  static #_ = this.ɵfac = function HomePageComponent_Factory(t) {
    return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_0__.HomeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomePageComponent,
    selectors: [["app-home-page"]],
    decls: 7,
    vars: 2,
    consts: [[1, "container--center"], [1, "p-4", "shadow-5"], [1, "pb-2", "font-bold", "text-xl"], [4, "ngIf", "ngIfElse"], ["waitingBlock", ""], ["width", "10rem", "height", "1rem", 1, "p-2"]],
    template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Message du backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePageComponent_p_4_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomePageComponent_ng_template_5_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2081:
/*!******************************************************************!*\
  !*** ./src/app/pages/not-found-page/not-found-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundPageComponent: () => (/* binding */ NotFoundPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotFoundPageComponent {
  static #_ = this.ɵfac = function NotFoundPageComponent_Factory(t) {
    return new (t || NotFoundPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundPageComponent,
    selectors: [["app-not-found-page"]],
    decls: 2,
    vars: 0,
    template: function NotFoundPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6885:
/*!********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPageComponent: () => (/* binding */ UserPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 4167);


class UserPageComponent {
  constructor(_userService) {
    this._userService = _userService;
    this.message = '';
  }
  ngOnInit() {
    this._userService.getUsers().subscribe(res => this.message = res);
  }
  static #_ = this.ɵfac = function UserPageComponent_Factory(t) {
    return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserPageComponent,
    selectors: [["app-user-page"]],
    decls: 4,
    vars: 1,
    template: function UserPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PAge sur les utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7082:
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeService: () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class HomeService {
  constructor(_http) {
    this._http = _http;
    this._apiEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_base + "/version";
  }
  getHomeMessage() {
    return this._http.get(this._apiEndPoint, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function HomeService_Factory(t) {
    return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HomeService,
    factory: HomeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4167:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class UserService {
  constructor(_http) {
    this._http = _http;
    this._apiEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_base + "/users";
  }
  getUsers() {
    return this._http.get(this._apiEndPoint, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6868:
/*!********************************************!*\
  !*** ./src/app/utils/frontend-link-url.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  home: {
    url: 'home'
  },
  notFound: {
    url: 'not-found'
  },
  forbidden: {
    url: "forbidden"
  },
  error: {
    url: 'error'
  },
  login: {
    url: 'auth/login'
  },
  register: {
    url: 'auth/create-account/user/:user/confirmation/:confirmation'
  },
  userHome: {
    url: 'user/home'
  }
});

/***/ }),

/***/ 6174:
/*!******************************************************!*\
  !*** ./src/app/utils/messages/login-page-message.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loginPage: {
    information: {
      title: {
        fr: 'Page de connexion',
        en: 'Login page'
      },
      email: {
        fr: 'Votre email',
        en: 'Email'
      },
      password: {
        fr: 'Votre mot de passe',
        en: 'Your password'
      },
      register: {
        fr: 'Pas encore de compte chez nous?',
        en: 'Not yet register?'
      }
    },
    error: {
      emailMissing: {
        fr: 'Email manquant',
        en: 'Email missing'
      },
      emailNotValid: {
        fr: 'Email non valide',
        en: 'Email unvalid'
      },
      passwordMissing: {
        fr: 'Mot de passe manquant',
        en: 'Password missing'
      }
    }
  }
});

/***/ }),

/***/ 5793:
/*!*************************************************!*\
  !*** ./src/app/utils/messages/message-utils.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageUtil: () => (/* binding */ MessageUtil)
/* harmony export */ });
class MessageUtil {
  /**
   * Remplie une map de string
   * @returns Map<string, string>
   */
  static loadMessageInMap(data, language) {
    const map = new Map();
    function addEntriesInMap(data) {
      Object.entries(data).forEach(([key, value]) => {
        map.set(key, value[language]);
      });
    }
    addEntriesInMap(data);
    return map;
  }
}

/***/ }),

/***/ 506:
/*!*********************************************************!*\
  !*** ./src/app/utils/messages/register-page-message.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerPage: {
    information: {
      title: {
        fr: 'Création compte',
        en: 'Create account'
      },
      email: {
        fr: 'Votre email',
        en: 'Email'
      },
      name: {
        fr: 'Votre pseudo',
        en: 'Your nickname '
      },
      password: {
        fr: 'Votre mot de passe',
        en: 'Your password'
      },
      confirmPassword: {
        fr: 'Confirmer votre mot de passe',
        en: 'Confirm your password'
      }
    },
    error: {
      emailMissing: {
        fr: 'Email manquant',
        en: 'Email missing'
      },
      emailNotValid: {
        fr: 'Email non valide',
        en: 'Email unvalid'
      },
      nameMissing: {
        fr: 'Nom manquant',
        en: 'Name missing'
      },
      passwordMissing: {
        fr: 'Mot de passe manquant',
        en: 'Password missing'
      },
      confirmPasswordMissing: {
        fr: 'Confirmation mot de passe manquant',
        en: 'Confirm password missing'
      },
      confirmPasswordNotMatch: {
        fr: 'Erreur confirmation mot de passe',
        en: 'Confirm password unvalid'
      },
      captchaResponseMissing: {
        fr: 'Réponse manquante',
        en: 'Answer missing'
      }
    }
  }
});

/***/ }),

/***/ 6538:
/*!*************************************!*\
  !*** ./src/app/utils/page-title.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loginPageTitle: {
    fr: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Page de connexion`,
    en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Login page`
  },
  registerPageTitle: {
    fr: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Inscription`,
    en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Register`
  },
  notFoundPageTitle: {
    fr: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Pas de résultat`,
    en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | No found`
  },
  forbiddenPageTitle: {
    fr: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Interdit`,
    en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Forbidden page`
  },
  errorPageTitle: {
    fr: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Erreur`,
    en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Error`
  },
  userHomePageTitle: {
    fr: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Votre compte`,
    en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title} | Your account`
  },
  homePageTitle: {
    fr: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title}`,
    en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.main_page_title}`
  }
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/**
 * Dev - LocalServer
 */
const environment = {
  production: false,
  name: 'dev',
  language: 'fr',
  api_base: 'http://localhost:8080/api',
  webapp_path: 'webapp',
  main_page_title: 'My APP'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 5105:
/*!********************************!*\
  !*** ./src/store/app.state.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _app_modules_auth_store_auth_store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/modules/auth/store/auth-store/reducer */ 1579);
/* harmony import */ var _user_ident_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-ident-store/reducer */ 4157);
/* harmony import */ var _flash_message_store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flash-message-store/reducer */ 8382);



const reducers = {
  userIdentState: _user_ident_store_reducer__WEBPACK_IMPORTED_MODULE_1__.reducers,
  authState: _app_modules_auth_store_auth_store_reducer__WEBPACK_IMPORTED_MODULE_0__.reducers,
  messageState: _flash_message_store_reducer__WEBPACK_IMPORTED_MODULE_2__.reducers
};

/***/ }),

/***/ 9667:
/*!*************************************************!*\
  !*** ./src/store/flash-message-store/action.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearMessage: () => (/* binding */ clearMessage),
/* harmony export */   createMessage: () => (/* binding */ createMessage)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const createMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[message] create message', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[message] clear message');

/***/ }),

/***/ 5794:
/*!*************************************************!*\
  !*** ./src/store/flash-message-store/effect.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlashMessageEffect: () => (/* binding */ FlashMessageEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 9667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class FlashMessageEffect {
  constructor(_action$) {
    this._action$ = _action$;
    this.clear$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.createMessage), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(5000), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => _action__WEBPACK_IMPORTED_MODULE_0__.clearMessage())));
  }
  static #_ = this.ɵfac = function FlashMessageEffect_Factory(t) {
    return new (t || FlashMessageEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: FlashMessageEffect,
    factory: FlashMessageEffect.ɵfac
  });
}

/***/ }),

/***/ 8382:
/*!**************************************************!*\
  !*** ./src/store/flash-message-store/reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialMessageState: () => (/* binding */ initialMessageState),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 9667);


const initialMessageState = {
  message: '',
  isError: false
};
const reducers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialMessageState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.createMessage, (state, {
  message,
  isError
}) => ({
  ...state,
  message,
  isError
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.clearMessage, state => ({
  ...state,
  message: '',
  isError: false
})));

/***/ }),

/***/ 9951:
/*!***************************************************!*\
  !*** ./src/store/flash-message-store/selector.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMessageErrorSelector: () => (/* binding */ isMessageErrorSelector),
/* harmony export */   messageSelector: () => (/* binding */ messageSelector),
/* harmony export */   selector: () => (/* binding */ selector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const selector = state => state.messageState;
const messageSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.message);
const isMessageErrorSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.isError);

/***/ }),

/***/ 3541:
/*!**********************************************!*\
  !*** ./src/store/user-ident-store/action.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearUserIden: () => (/* binding */ clearUserIden),
/* harmony export */   createUserIden: () => (/* binding */ createUserIden)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const createUserIden = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[user] create user ident', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearUserIden = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[user] clear user ident');

/***/ }),

/***/ 981:
/*!**********************************************!*\
  !*** ./src/store/user-ident-store/effect.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserEffect: () => (/* binding */ UserEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 3541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class UserEffect {
  constructor(_action$) {
    this._action$ = _action$;
    this.init$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ROOT_EFFECTS_INIT), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(value => {
      console.log(value);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
      const userString = localStorage.getItem('user');
      if (userString) {
        console.log("ici, userinfo: " + userString);
        const user = JSON.parse(userString);
        return _action__WEBPACK_IMPORTED_MODULE_0__.createUserIden({
          userId: user.userid,
          email: user.email,
          jwt: user.jwt,
          roles: user.roles
        });
      }
      return {
        type: '[user] clear user ident'
      };
    })));
    this.clearUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.clearUserIden), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
      return _action__WEBPACK_IMPORTED_MODULE_0__.createUserIden({
        userId: BigInt(0),
        jwt: '',
        email: '',
        roles: []
      });
    })));
  }
  static #_ = this.ɵfac = function UserEffect_Factory(t) {
    return new (t || UserEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: UserEffect,
    factory: UserEffect.ɵfac
  });
}

/***/ }),

/***/ 4157:
/*!***********************************************!*\
  !*** ./src/store/user-ident-store/reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialUserState: () => (/* binding */ initialUserState),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 3541);


const initialUserState = {
  userId: BigInt(0),
  token: '',
  jwt: '',
  email: '',
  roles: []
};
const reducers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialUserState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.createUserIden, (state, {
  email,
  jwt,
  userId,
  roles
}) => ({
  ...state,
  email,
  jwt,
  userId,
  roles,
  token: ''
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.clearUserIden, state => ({
  ...state,
  email: '',
  roles: [],
  userId: BigInt(0),
  jwt: '',
  token: ''
})));

/***/ }),

/***/ 2664:
/*!************************************************!*\
  !*** ./src/store/user-ident-store/selector.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEmailSelector: () => (/* binding */ getEmailSelector),
/* harmony export */   getJwtSelector: () => (/* binding */ getJwtSelector),
/* harmony export */   selector: () => (/* binding */ selector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const selector = state => state.userIdentState;
const getEmailSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.email);
const getJwtSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selector, state => state.jwt);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map