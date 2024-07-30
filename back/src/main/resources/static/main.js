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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 4292);
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ 2081);
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ 6885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: "lalamiam",
  children: [{
    path: "",
    component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent,
    title: "Accueil"
  }, {
    path: "users-page",
    component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__.UserPageComponent,
    title: "Page users"
  }, {
    path: "not-found-page",
    component: _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundPageComponent,
    title: "404"
  }]
}, {
  path: "",
  redirectTo: "/lalamiam",
  pathMatch: "full"
}, {
  path: "**",
  redirectTo: "not-found-page",
  title: '404'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var src_store_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/app.state */ 5105);
/* harmony import */ var src_store_user_ident_store_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/user-ident-store/effect */ 981);
/* harmony import */ var src_store_flash_message_store_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/flash-message-store/effect */ 5794);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 4292);
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ 2081);
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ 6885);
/* harmony import */ var _components_flash_message_flash_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/flash-message/flash-message.component */ 6799);
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/auth/auth.module */ 9371);






















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__.AuthModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.StoreModule.forRoot(src_store_app_state__WEBPACK_IMPORTED_MODULE_0__.reducers), _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.EffectsModule.forRoot([src_store_user_ident_store_effect__WEBPACK_IMPORTED_MODULE_1__.UserEffect, src_store_flash_message_store_effect__WEBPACK_IMPORTED_MODULE_2__.FlashMessageEffect]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__.StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.isDevMode)(),
      serialize: {
        replacer: (_key, value) => typeof value === "bigint" ? value.toString() : value
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__.HomePageComponent, _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundPageComponent, _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__.UserPageComponent, _components_flash_message_flash_message_component__WEBPACK_IMPORTED_MODULE_9__.FlashMessageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__.AuthModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__.StoreDevtoolsModule]
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





function FlashMessageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1);
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
    consts: [[4, "ngIf"]],
    template: function FlashMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FlashMessageComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.message$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_store_user_ident_store_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/user-ident-store/selector */ 2664);
/* harmony import */ var src_app_modules_auth_store_auth_store_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/store/auth-store/action */ 8312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);







function NavbarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " deconnexion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class NavbarComponent {
  constructor(_store) {
    this._store = _store;
    this.userEmail$ = this._store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(src_store_user_ident_store_selector__WEBPACK_IMPORTED_MODULE_0__.getEmailSelector));
  }
  logout() {
    this._store.dispatch(src_app_modules_auth_store_auth_store_action__WEBPACK_IMPORTED_MODULE_1__.logout());
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 15,
    vars: 3,
    consts: [[1, "navbar"], [1, "navbar-logo"], ["src", "assets/hamburger.jpg", "alt", "My App Logo", 1, "small"], [1, "navbar-links"], ["routerLink", "/lalamiam"], ["routerLink", "/lalamiam/users-page"], ["routerLink", "/lalamiam/connexion"], [4, "ngIf"], [3, "click"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3)(4, "li")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li")(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 1, ctx.userEmail$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: [".navbar[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.small[_ngcontent-%COMP%] {\n  width: 25px;\n  height: auto;\n}\n\nli[_ngcontent-%COMP%]{\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5hdmJhci1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmxpe1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 1614);
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ 775);
/* harmony import */ var _routes_auth_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/auth.routing */ 7970);
/* harmony import */ var _store_auth_store_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/auth-store/reducer */ 1579);
/* harmony import */ var _store_auth_store_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/auth-store/effect */ 8309);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);















class AuthModule {
  static #_ = this.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_routes_auth_routing__WEBPACK_IMPORTED_MODULE_2__.authRouting), _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature('authState', _store_auth_store_reducer__WEBPACK_IMPORTED_MODULE_3__.reducers), _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forFeature([_store_auth_store_effect__WEBPACK_IMPORTED_MODULE_4__.AuthEffect])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent, _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__.RegisterPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsFeatureModule]
  });
})();

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

/***/ 9440:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/models/register-dto.model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterDto: () => (/* binding */ RegisterDto)
/* harmony export */ });
class RegisterDto {
  constructor(email, password, name) {
    this.email = email;
    this.password = password;
    this.name = name;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _models_login_dto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/login-dto.model */ 1382);
/* harmony import */ var _store_auth_store_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/auth-store/selector */ 2872);
/* harmony import */ var _store_auth_store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth-store/action */ 8312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);









class LoginPageComponent {
  constructor(_fb, _store) {
    this._fb = _fb;
    this._store = _store;
    this.loginDataFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
    this.isLoading$ = this._store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_store_auth_store_selector__WEBPACK_IMPORTED_MODULE_1__.isLoadingSelector));
  }
  ngOnInit() {
    this.initializeLoginData();
  }
  initializeLoginData() {
    this.loginDataFormGroup = this._fb.group({
      // Email
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      // Password
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  login() {
    if (!this.loginDataFormGroup.valid) {
      return this.loginDataFormGroup.markAllAsTouched();
    }
    const logindata = new _models_login_dto_model__WEBPACK_IMPORTED_MODULE_0__.LoginDto(this.loginDataFormGroup.get('email')?.value, this.loginDataFormGroup.get('password')?.value);
    console.log(logindata);
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_2__.login(logindata));
    console.log("res.email, res.jwt");
    // this._authService.login(logindata).subscribe(res=>{
    //   console.log(res.email, res.jwt);
    // });
  }
  static #_ = this.ɵfac = function LoginPageComponent_Factory(t) {
    return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LoginPageComponent,
    selectors: [["app-login-page"]],
    decls: 17,
    vars: 2,
    consts: [[3, "formGroup", "submit"], ["for", "email"], ["id", "email", "formControlName", "email", "type", "email", "placeholder", "votre email..."], ["for", "password"], ["id", "password", "formControlName", "password", "type", "password", "placeholder", "mot de passe..."], ["type", "submit", "value", "connexion"], [1, "button__container"], [3, "routerLink"]],
    template: function LoginPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function LoginPageComponent_Template_form_submit_2_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "votre email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "votre mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Pas encore inscrit ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "inscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginDataFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/lalamiam/register");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _models_register_dto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/register-dto.model */ 9440);
/* harmony import */ var _store_auth_store_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/auth-store/action */ 8312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);






class RegisterPageComponent {
  constructor(_fb, _store) {
    this._fb = _fb;
    this._store = _store;
    this.registerDataFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
  }
  ngOnInit() {
    this.initializeRegisterData();
  }
  initializeRegisterData() {
    this.registerDataFormGroup = this._fb.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  register() {
    if (!this.registerDataFormGroup.valid) {
      return this.registerDataFormGroup.markAllAsTouched();
    }
    const registerData = new _models_register_dto_model__WEBPACK_IMPORTED_MODULE_0__.RegisterDto(this.registerDataFormGroup.get('email')?.value, this.registerDataFormGroup.get('password')?.value, this.registerDataFormGroup.get('name')?.value);
    this._store.dispatch(_store_auth_store_action__WEBPACK_IMPORTED_MODULE_1__.register({
      email: registerData.email,
      password: registerData.password,
      name: registerData.name
    }));
  }
  static #_ = this.ɵfac = function RegisterPageComponent_Factory(t) {
    return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RegisterPageComponent,
    selectors: [["app-register-page"]],
    decls: 16,
    vars: 1,
    consts: [[3, "formGroup", "submit"], ["for", "email"], ["id", "email", "formControlName", "email", "type", "email", "placeholder", "votre email..."], ["for", "password"], ["id", "password", "formControlName", "password", "type", "password", "placeholder", "mot de passe..."], ["for", "name"], ["id", "name", "formControlName", "name", "type", "password", "placeholder", "nom"], ["type", "submit", "value", "creation"]],
    template: function RegisterPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Creation compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function RegisterPageComponent_Template_form_submit_2_listener() {
          return ctx.register();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "votre email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "votre mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "votre nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerDataFormGroup);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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


const authRouting = [{
  path: "lalamiam",
  children: [{
    path: "connexion",
    component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent,
    title: "Connexion"
  }, {
    path: "register",
    component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__.RegisterPageComponent,
    title: "Creation compte"
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);




class AuthService {
  constructor(_http) {
    this._http = _http;
    this._apiEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_base + "/auth";
  }
  login(loginDto) {
    return this._http.post(this._apiEndPoint + "/login", loginDto).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(loginResponse => {
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
  logout() {
    //const user = JSON.parse(localStorage.getItem('user'));
    const user = localStorage.getItem('user');
    let path = "";
    if (user != null) {
      const userString = JSON.parse(user);
      const userId = userString.userId;
      console.log(userString, userId);
      console.log(this._apiEndPoint + "/logout/" + userId);
      path = this._apiEndPoint + "/logout/" + userId;
    }
    return this._http.get(path, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
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
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   logoutFailed: () => (/* binding */ logoutFailed),
/* harmony export */   logoutSuccess: () => (/* binding */ logoutSuccess),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login client', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout');
const logoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logoutFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const register = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Register client', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

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
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 8312);
/* harmony import */ var src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/user-ident-store/action */ 3541);
/* harmony import */ var src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/flash-message-store/action */ 9667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 3721);








class AuthEffect {
  constructor(_action$, _authService) {
    this._action$ = _action$;
    this._authService = _authService;
    this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.login), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(data => this._authService.login(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(loginResponse => [
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
    })]), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)([src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__.clearUserIden(),
    // Generation Message login
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: error.error,
      isError: true
    })]))))));
    this.register$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.register), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(data => this._authService.register(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(registerResponse => [
    // Generation Message Register
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: registerResponse.message,
      isError: false
    })]), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)([
    // Generation Message Register
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: error.error,
      isError: true
    })]))))));
    this.logout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this._action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_action__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this._authService.logout().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(resMessage => [
    // Suppression du UserIdent
    src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__.clearUserIden(),
    // Generation Message logout
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: resMessage,
      isError: false
    })]), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)([src_store_user_ident_store_action__WEBPACK_IMPORTED_MODULE_1__.clearUserIden(),
    // Generation Message logout
    src_store_flash_message_store_action__WEBPACK_IMPORTED_MODULE_2__.createMessage({
      message: error.error,
      isError: true
    })]))))));
  }
  static #_ = this.ɵfac = function AuthEffect_Factory(t) {
    return new (t || AuthEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
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
  isLoading: false
};
const reducers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.login, state => ({
  ...state,
  isLoading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.register, state => ({
  ...state,
  isLoading: true
})));

/***/ }),

/***/ 2872:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/store/auth-store/selector.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    decls: 6,
    vars: 1,
    template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "home-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Message du backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
      }
    },
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
  api_base: 'http://localhost:8080/api'
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
  message
}) => ({
  ...state,
  message
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_action__WEBPACK_IMPORTED_MODULE_0__.clearMessage, state => ({
  ...state,
  message: ''
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
    console.log('AppInitEffects instantiated'); // Log for instantiation
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