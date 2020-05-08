function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/app/_helpers/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/_helpers/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_helpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authenticationService, router) {
        _classCallCheck(this, AuthGuard);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authenticationService.isLoggedIn() !== true) {
            this.router.navigate(['login']);
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/auth.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/_helpers/auth.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcApp_helpersAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authenticationService) {
        _classCallCheck(this, AuthInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var accessToken = this.authenticationService.getAccessToken();
          req = req.clone({
            setHeaders: {
              Authorization: "JWT $[accessToken}",
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache'
            }
          });
          return next.handle(req);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              _this.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/_helpers/index.ts ***!
    \***********************************/

  /*! exports provided: AuthInterceptor, AuthGuard, ErrorInterceptor, RoleAuthGuard */

  /***/
  function srcApp_helpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.interceptor */
    "./src/app/_helpers/auth.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"];
    });
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
    });
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"];
    });
    /* harmony import */


    var _role_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./role_auth.guard */
    "./src/app/_helpers/role_auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoleAuthGuard", function () {
      return _role_auth_guard__WEBPACK_IMPORTED_MODULE_3__["RoleAuthGuard"];
    });
    /***/

  },

  /***/
  "./src/app/_helpers/role_auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/role_auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: RoleAuthGuard */

  /***/
  function srcApp_helpersRole_authGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleAuthGuard", function () {
      return RoleAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RoleAuthGuard =
    /*#__PURE__*/
    function () {
      function RoleAuthGuard(authenticationService, router) {
        _classCallCheck(this, RoleAuthGuard);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(RoleAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authenticationService.currentUserValue.role_id !== 1) {
            this.router.navigate(['home']);
          }

          return true;
        }
      }]);

      return RoleAuthGuard;
    }();

    RoleAuthGuard.ɵfac = function RoleAuthGuard_Factory(t) {
      return new (t || RoleAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RoleAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoleAuthGuard,
      factory: RoleAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
        this.endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "adminLogin",
        value: function adminLogin(email, password) {
          var _this2 = this;

          var api_url = "".concat(this.endpoint, "/v1/admin/login");
          var data = {
            email: email,
            password: password
          };
          return this.http.post(api_url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.data) {
              localStorage.setItem('access_token', res.data.user.id);
              localStorage.setItem('currentUser', JSON.stringify(res.data.user));

              _this2.currentUserSubject.next(res.data.user);
            }

            return res.data;
          }));
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          return localStorage.getItem('access_token');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var authToken = localStorage.getItem('access_token');
          return authToken !== null ? true : false;
        }
      }, {
        key: "logout",
        value: function logout() {
          if (localStorage.removeItem('access_token') == null && localStorage.removeItem('currentUser') == null) {
            this.router.navigate(['login']);
          }
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/bank.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/bank.service.ts ***!
    \*******************************************/

  /*! exports provided: BankService */

  /***/
  function srcApp_servicesBankServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankService", function () {
      return BankService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");

    var BankService =
    /*#__PURE__*/
    function () {
      function BankService(http) {
        _classCallCheck(this, BankService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
      }

      _createClass(BankService, [{
        key: "addBank",
        value: function addBank(name, wallet_address, rgNumber, email, password) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/v1/bank/add"), {
            name: name,
            wallet_address: wallet_address,
            rn: rgNumber,
            email: email,
            password: password
          });
        }
      }, {
        key: "listBank",
        value: function listBank() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/v1/bank/list"));
        }
      }, {
        key: "viewBank",
        value: function viewBank(wallet_address) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/v1/bank/show/").concat(wallet_address));
        }
      }, {
        key: "deleteBank",
        value: function deleteBank(wallet_address) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/v1/bank/delete"), {
            wallet_address: wallet_address
          });
        }
      }]);

      return BankService;
    }();

    BankService.ɵfac = function BankService_Factory(t) {
      return new (t || BankService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BankService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BankService,
      factory: BankService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BankService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/ethereum.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/ethereum.service.ts ***!
    \***********************************************/

  /*! exports provided: EthereumService */

  /***/
  function srcApp_servicesEthereumServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EthereumService", function () {
      return EthereumService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");

    var kyc = __webpack_require__(
    /*! ./kyc.json */
    "./src/app/_services/kyc.json");

    var Web3 = __webpack_require__(
    /*! web3 */
    "./node_modules/web3/src/index.js");

    var EthereumService =
    /*#__PURE__*/
    function () {
      function EthereumService() {
        var _this3 = this;

        _classCallCheck(this, EthereumService);

        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

        this.refreshAccounts = function () {
          if (typeof window.web3 !== 'undefined') {
            _this3.web3.eth.getAccounts(function (err, accs) {
              if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
              } // Get the initial account balance so it can be displayed.


              if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
              }

              if (!_this3.accounts || _this3.accounts.length !== accs.length || _this3.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');

                _this3.accountsObservable.next(accs);

                _this3.accounts = accs;
              }

              _this3.ready = true;
            });
          }
        };

        this.kycWeb3();
      }

      _createClass(EthereumService, [{
        key: "enableAccounts",
        value: function enableAccounts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!window.ethereum) {
                      _context.next = 9;
                      break;
                    }

                    window.web3 = new Web3(ethereum);
                    _context.prev = 2;
                    _context.next = 5;
                    return ethereum.enable();

                  case 5:
                    _context.next = 9;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](2);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[2, 7]]);
          }));
        }
      }, {
        key: "kycWeb3",
        value: function kycWeb3() {
          var _this4 = this;

          if (typeof window.web3 !== 'undefined') {
            this.web3 = new Web3(new Web3(window.web3.currentProvider));
          } else {
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            this.web3 = new Web3(new Web3.providers.HttpProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].RPCProvider)); //console.log(this.web3);
          }

          console.log("this web3", this.web3);
          this.enableAccounts().then(function () {
            _this4.refreshAccounts();
          });
          this.contract = new this.web3.eth.Contract(kyc, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ContractAddress);
        }
      }, {
        key: "getProvider",
        value: function getProvider() {
          return this.web3.currentProvider;
        }
      }, {
        key: "getAccount",
        value: function getAccount() {
          if (!this.accounts) {
            console.log('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
            return null;
          }

          return this.accounts[0];
        }
      }, {
        key: "getBank",
        value: function getBank(wallet_address) {
          return this.contract.methods.getBank(wallet_address).call();
        }
      }, {
        key: "getBankRating",
        value: function getBankRating(wallet_address) {
          return this.contract.methods.getBankRating(wallet_address).call();
        }
      }, {
        key: "upvotebank",
        value: function upvotebank(wallet_address, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context2.sent;
                    return _context2.abrupt("return", this.contract.methods.upvoteBank(wallet_address).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addRequest",
        value: function addRequest(username, data, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context3.sent;
                    return _context3.abrupt("return", this.contract.methods.addRequest(Web3.utils.asciiToHex(username), Web3.utils.asciiToHex(data)).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getBankRequest",
        value: function getBankRequest(wallet_address, index) {
          return this.contract.methods.getBankRequest(wallet_address, index).call({
            from: wallet_address
          });
        }
      }, {
        key: "getBankRequestsNum",
        value: function getBankRequestsNum(wallet_address) {
          return this.contract.methods.getBankRequestsNum(wallet_address).call({
            from: wallet_address
          });
        }
      }, {
        key: "removeRequest",
        value: function removeRequest(username, data, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context4.sent;
                    return _context4.abrupt("return", this.contract.methods.removeRequest(Web3.utils.asciiToHex(username), Web3.utils.asciiToHex(data)).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "addCustomer",
        value: function addCustomer(username, data, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context5.sent;
                    return _context5.abrupt("return", this.contract.methods.addCustomer(Web3.utils.asciiToHex(username), Web3.utils.asciiToHex(data)).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "upvoteCust",
        value: function upvoteCust(username, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context6.sent;
                    return _context6.abrupt("return", this.contract.methods.upvoteCust(Web3.utils.asciiToHex(username)).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "viewCustomer",
        value: function viewCustomer(username, password, bank_session_wallet_address) {
          return this.contract.methods.viewCustomer(Web3.utils.asciiToHex(username), Web3.utils.asciiToHex(password)).call({
            from: bank_session_wallet_address
          });
        }
      }, {
        key: "getCustRating",
        value: function getCustRating(username, bank_session_wallet_address) {
          return this.contract.methods.getCustRating(Web3.utils.asciiToHex(username)).call({
            from: bank_session_wallet_address
          });
        }
      }, {
        key: "modifyCustomer",
        value: function modifyCustomer(username, password, data, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context7.sent;
                    return _context7.abrupt("return", this.contract.methods.modifyCustomer(Web3.utils.asciiToHex(username), Web3.utils.asciiToHex(password), Web3.utils.asciiToHex(data)).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "removeCustomer",
        value: function removeCustomer(username, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context8.sent;
                    return _context8.abrupt("return", this.contract.methods.removeCustomer(Web3.utils.asciiToHex(username)).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "setCustPassword",
        value: function setCustPassword(username, password, bank_session_wallet_address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var nonce;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.web3.eth.getTransactionCount(bank_session_wallet_address);

                  case 2:
                    nonce = _context9.sent;
                    return _context9.abrupt("return", this.contract.methods.setCustPassword(Web3.utils.asciiToHex(username), Web3.utils.asciiToHex(password)).send({
                      nonce: nonce,
                      from: bank_session_wallet_address
                    }));

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "customerAccessHistory",
        value: function customerAccessHistory(username, bank_session_wallet_address) {
          return this.contract.methods.accessHistory(Web3.utils.asciiToHex(username)).call({
            from: bank_session_wallet_address
          });
        }
      }]);

      return EthereumService;
    }();

    EthereumService.ɵfac = function EthereumService_Factory(t) {
      return new (t || EthereumService)();
    };

    EthereumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EthereumService,
      factory: EthereumService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EthereumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/index.ts":
  /*!************************************!*\
    !*** ./src/app/_services/index.ts ***!
    \************************************/

  /*! exports provided: AuthenticationService, UserService, BankService, EthereumService */

  /***/
  function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"];
    });
    /* harmony import */


    var _bank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bank.service */
    "./src/app/_services/bank.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BankService", function () {
      return _bank_service__WEBPACK_IMPORTED_MODULE_2__["BankService"];
    });
    /* harmony import */


    var _ethereum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ethereum.service */
    "./src/app/_services/ethereum.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EthereumService", function () {
      return _ethereum_service__WEBPACK_IMPORTED_MODULE_3__["EthereumService"];
    });
    /***/

  },

  /***/
  "./src/app/_services/kyc.json":
  /*!************************************!*\
    !*** ./src/app/_services/kyc.json ***!
    \************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, default */

  /***/
  function srcApp_servicesKycJson(module) {
    module.exports = JSON.parse("[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"b2bRatings\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"b2cRatings\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"bankAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"bankRequests\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"username\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"bank\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"data\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"isAllowed\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"banks\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"name\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"ethAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"rating\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"kycCount\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"regNumber\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"customers\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"username\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"data\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"rating\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"bank\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"finalCustomers\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"username\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"data\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"rating\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"bank\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"n\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"e\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"rn\",\"type\":\"bytes32\"}],\"name\":\"addBank\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"removeBank\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"u\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"d\",\"type\":\"bytes32\"}],\"name\":\"addRequest\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"u\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"d\",\"type\":\"bytes32\"}],\"name\":\"removeRequest\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"upvoteBank\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"u\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"p\",\"type\":\"bytes32\"}],\"name\":\"setCustPassword\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"u\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"d\",\"type\":\"bytes32\"}],\"name\":\"addCustomer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"user\",\"type\":\"bytes32\"}],\"name\":\"removeCustomer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"u\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"p\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"d\",\"type\":\"bytes32\"}],\"name\":\"modifyCustomer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"u\",\"type\":\"bytes32\"}],\"name\":\"upvoteCust\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"user\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"p\",\"type\":\"bytes32\"}],\"name\":\"viewCustomer\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"user\",\"type\":\"bytes32\"}],\"name\":\"getCustRating\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"user\",\"type\":\"bytes32\"}],\"name\":\"accessHistory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"getBank\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"getBankRating\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"getBankRequestsNum\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"i\",\"type\":\"uint256\"}],\"name\":\"getBankRequest\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]");
    /***/
  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
      }

      _createClass(UserService, [{
        key: "getById",
        value: function getById(id) {
          //var d = new Date();
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/v1/user/").concat(id));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/add-bank/add-bank.component.ts":
  /*!************************************************!*\
    !*** ./src/app/add-bank/add-bank.component.ts ***!
    \************************************************/

  /*! exports provided: AddBankComponent */

  /***/
  function srcAppAddBankAddBankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBankComponent", function () {
      return AddBankComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddBankComponent_p_22_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bank name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddBankComponent_p_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBankComponent_p_22_span_1_Template, 2, 0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.bankAddForm.controls["name"].errors.required);
      }
    }

    function AddBankComponent_p_29_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wallet address is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddBankComponent_p_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBankComponent_p_29_span_1_Template, 2, 0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.bankAddForm.controls["walletAddress"].errors.required);
      }
    }

    function AddBankComponent_p_36_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register number is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddBankComponent_p_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBankComponent_p_36_span_1_Template, 2, 0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.bankAddForm.controls["rgNumber"].errors.required);
      }
    }

    function AddBankComponent_p_43_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddBankComponent_p_43_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddBankComponent_p_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBankComponent_p_43_span_1_Template, 2, 0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddBankComponent_p_43_span_2_Template, 2, 0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.bankAddForm.controls["email"].errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.bankAddForm.controls["email"].errors.email);
      }
    }

    function AddBankComponent_p_50_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddBankComponent_p_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBankComponent_p_50_span_1_Template, 2, 0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.bankAddForm.controls["password"].errors.required);
      }
    }

    var AddBankComponent =
    /*#__PURE__*/
    function () {
      function AddBankComponent(fb, bankService, router, authenticationService) {
        _classCallCheck(this, AddBankComponent);

        this.fb = fb;
        this.bankService = bankService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.bankForm();
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(AddBankComponent, [{
        key: "bankForm",
        value: function bankForm() {
          this.bankAddForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            walletAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rgNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "addBank",
        value: function addBank(name, wallet_address, rgNumber, email, password) {
          var _this5 = this;

          console.log("name", name, wallet_address, rgNumber, email, password);
          this.bankService.addBank(name, wallet_address, rgNumber, email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (res) {
            if (res.success == 1) {
              alert("Bank added successfully");

              _this5.router.navigate(['banks']);
            } else {
              console.log("Something went wrong");
              console.log(res);
            }
          }, function (error) {
            console.log(error);
            alert(error.message);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddBankComponent;
    }();

    AddBankComponent.ɵfac = function AddBankComponent_Factory(t) {
      return new (t || AddBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    AddBankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddBankComponent,
      selectors: [["app-add-bank"]],
      decls: 55,
      vars: 7,
      consts: [["id", "wrapper"], [1, "sidebar"], ["id", "content-wrapper"], [1, "container-fluid"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], [1, "breadcrumb-item", "active"], [1, "card", "card-register", "mx-auto", "mt-5"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], [1, "form-label-group"], ["type", "text", "id", "name", "placeholder", "Bank name", "autofocus", "autofocus", "formControlName", "name", 1, "form-control"], ["name", ""], ["for", "name"], ["class", "alert-danger", 4, "ngIf"], ["type", "text", "id", "walletAddress", "placeholder", "Wallet Address", "autofocus", "autofocus", "formControlName", "walletAddress", 1, "form-control"], ["walletAddress", ""], ["for", "walletAddress"], ["type", "text", "id", "rgNumber", "placeholder", "Wallet Address", "autofocus", "autofocus", "formControlName", "rgNumber", 1, "form-control"], ["rgNumber", ""], ["for", "rgNumber"], ["type", "email", "id", "email", "placeholder", "Email", "autofocus", "autofocus", "formControlName", "email", 1, "form-control"], ["email", ""], ["for", "email"], ["type", "password", "id", "password", "placeholder", "Email", "autofocus", "autofocus", "formControlName", "password", 1, "form-control"], ["password", ""], ["for", "password"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"], [1, "alert-danger"], [4, "ngIf"]],
      template: function AddBankComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Bank");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bank Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddBankComponent_p_22_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wallet Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddBankComponent_p_29_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Register Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddBankComponent_p_36_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddBankComponent_p_43_Template, 3, 2, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AddBankComponent_p_50_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBankComponent_Template_button_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

            return ctx.addBank(_r9.value, _r11.value, _r13.value, _r15.value, _r17.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bankAddForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankAddForm.controls["name"].invalid && (ctx.bankAddForm.controls["name"].dirty || ctx.bankAddForm.controls["name"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankAddForm.controls["walletAddress"].invalid && (ctx.bankAddForm.controls["walletAddress"].dirty || ctx.bankAddForm.controls["walletAddress"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankAddForm.controls["rgNumber"].invalid && (ctx.bankAddForm.controls["rgNumber"].dirty || ctx.bankAddForm.controls["rgNumber"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankAddForm.controls["email"].invalid && (ctx.bankAddForm.controls["email"].dirty || ctx.bankAddForm.controls["email"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankAddForm.controls["password"].invalid && (ctx.bankAddForm.controls["password"].dirty || ctx.bankAddForm.controls["password"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.bankAddForm.pristine || ctx.bankAddForm.invalid);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1iYW5rL2FkZC1iYW5rLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-bank',
          templateUrl: './add-bank.component.html',
          styleUrls: ['./add-bank.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/add-request/add-request.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/add-request/add-request.component.ts ***!
    \******************************************************/

  /*! exports provided: AddRequestComponent */

  /***/
  function srcAppAddRequestAddRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRequestComponent", function () {
      return AddRequestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddRequestComponent_p_22_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddRequestComponent_p_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddRequestComponent_p_22_span_1_Template, 2, 0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.bankRequestForm.controls["name"].errors.required);
      }
    }

    function AddRequestComponent_p_29_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Adhar number is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddRequestComponent_p_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddRequestComponent_p_29_span_1_Template, 2, 0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r66.bankRequestForm.controls["adharAddress"].errors.required);
      }
    }

    var AddRequestComponent =
    /*#__PURE__*/
    function () {
      function AddRequestComponent(fb, bankService, router, authenticationService, ethereumService) {
        _classCallCheck(this, AddRequestComponent);

        this.fb = fb;
        this.bankService = bankService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.ethereumService = ethereumService;
        this.bankForm();
        this.currentUser = this.authenticationService.currentUserValue;
        console.log(this.currentUser.role_id);

        if (this.currentUser.role_id == 1) {
          this.router.navigate(['home']);
        }
      }

      _createClass(AddRequestComponent, [{
        key: "bankForm",
        value: function bankForm() {
          this.bankRequestForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adharAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "addBankRequest",
        value: function addBankRequest(name, adhareAddress) {
          var _this6 = this;

          this.ethereumService.addRequest(name, adhareAddress, this.currentUser.bank.wallet_address).then(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      console.log(result);
                      alert("Request for KYC has been added successfully.");
                      this.router.navigate(['banks/requests']);

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          })["catch"](function (error) {
            console.log("addRequest error", error.message);
            alert("Something went wrong!");
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddRequestComponent;
    }();

    AddRequestComponent.ɵfac = function AddRequestComponent_Factory(t) {
      return new (t || AddRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]));
    };

    AddRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddRequestComponent,
      selectors: [["app-add-request"]],
      decls: 34,
      vars: 4,
      consts: [["id", "wrapper"], [1, "sidebar"], ["id", "content-wrapper"], [1, "container-fluid"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], [1, "breadcrumb-item", "active"], [1, "card", "card-register", "mx-auto", "mt-5"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], [1, "form-label-group"], ["type", "text", "id", "name", "placeholder", "Bank name", "autofocus", "autofocus", "formControlName", "name", 1, "form-control"], ["name", ""], ["for", "name"], ["class", "alert-danger", 4, "ngIf"], ["type", "text", "id", "adharAddress", "placeholder", "Wallet Address", "autofocus", "autofocus", "formControlName", "adharAddress", 1, "form-control"], ["adharAddress", ""], ["for", "adharAddress"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"], [1, "alert-danger"], [4, "ngIf"]],
      template: function AddRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Request KYC");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddRequestComponent_p_22_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Adhar Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddRequestComponent_p_29_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestComponent_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);

            var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

            return ctx.addBankRequest(_r63.value, _r65.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.bankRequestForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bankRequestForm.controls["name"].invalid && (ctx.bankRequestForm.controls["name"].dirty || ctx.bankRequestForm.controls["name"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bankRequestForm.controls["adharAddress"].invalid && (ctx.bankRequestForm.controls["adharAddress"].dirty || ctx.bankRequestForm.controls["adharAddress"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.bankRequestForm.pristine || ctx.bankRequestForm.invalid);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZXF1ZXN0L2FkZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-request',
          templateUrl: './add-request.component.html',
          styleUrls: ['./add-request.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-login/admin-login.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin-login/admin-login.component.ts ***!
    \******************************************************/

  /*! exports provided: AdminLoginComponent */

  /***/
  function srcAppAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
      return AdminLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! web3 */
    "./node_modules/web3/src/index.js");
    /* harmony import */


    var web3__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminLoginComponent_p_12_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_p_12_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminLoginComponent_p_12_span_1_Template, 2, 0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminLoginComponent_p_12_span_2_Template, 2, 0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.adminLoginForm.controls["inputEmail"].errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.adminLoginForm.controls["inputEmail"].errors.email);
      }
    }

    function AdminLoginComponent_p_19_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_p_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminLoginComponent_p_19_span_1_Template, 2, 0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.adminLoginForm.controls["inputPassword"].errors.required);
      }
    } //declare let ethereum: any;


    var AdminLoginComponent =
    /*#__PURE__*/
    function () {
      function AdminLoginComponent(fb, login, router) {
        var _this7 = this;

        _classCallCheck(this, AdminLoginComponent);

        this.fb = fb;
        this.login = login;
        this.router = router;
        this.web3 = undefined;

        this.walletLogin = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var coinbase, nonce, signature;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (!window.ethereum) {
                      alert("Please install MetaMask first.");
                    }

                    if (this.web3) {
                      _context11.next = 12;
                      break;
                    }

                    _context11.prev = 2;
                    _context11.next = 5;
                    return window.ethereum.enable();

                  case 5:
                    // We don't know window.web3 version, so we use our own instance of Web3
                    // with the injected provider given by MetaMask
                    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.ethereum);
                    _context11.next = 12;
                    break;

                  case 8:
                    _context11.prev = 8;
                    _context11.t0 = _context11["catch"](2);
                    window.alert('You need to allow MetaMask.');
                    return _context11.abrupt("return");

                  case 12:
                    _context11.next = 14;
                    return this.web3.eth.getCoinbase();

                  case 14:
                    coinbase = _context11.sent;
                    console.log("adddress", coinbase);

                    if (coinbase) {
                      _context11.next = 19;
                      break;
                    }

                    alert('Please activate MetaMask first.');
                    return _context11.abrupt("return");

                  case 19:
                    nonce = this.web3.eth.getTransactionCount(coinbase);
                    _context11.next = 22;
                    return this.web3.eth.personal.sign("I am signing my one-time nonce: ".concat(nonce), coinbase, '' // MetaMask will ignore the password argument here
                    );

                  case 22:
                    signature = _context11.sent;
                    console.log("signature", signature);

                  case 24:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[2, 8]]);
          }));
        };

        this.loginForm();

        if (this.login.isLoggedIn() == true) {
          this.router.navigate(['home']);
        }
      }

      _createClass(AdminLoginComponent, [{
        key: "loginForm",
        value: function loginForm() {
          this.adminLoginForm = this.fb.group({
            inputEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            inputPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "adminLogin",
        value: function adminLogin(inputEmail, inputPassword) {
          var _this8 = this;

          this.login.adminLogin(inputEmail, inputPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
            _this8.router.navigate(['home']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('bg-dark');
        }
      }]);

      return AdminLoginComponent;
    }();

    AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) {
      return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminLoginComponent,
      selectors: [["app-admin-login"]],
      decls: 30,
      vars: 4,
      consts: [[1, "container"], [1, "card", "card-login", "mx-auto", "mt-5"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], [1, "form-label-group"], ["type", "email", "placeholder", "Email address", "autofocus", "autofocus", "formControlName", "inputEmail", "id", "inputEmail", 1, "form-control"], ["inputEmail", ""], ["for", "inputEmail"], ["class", "alert-danger", 4, "ngIf"], ["type", "password", "placeholder", "Password", "formControlName", "inputPassword", "id", "inputPassword", 1, "form-control"], ["inputPassword", ""], ["for", "inputPassword"], [1, "checkbox"], ["type", "checkbox", "value", "remember-me"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "text-center"], ["href", "forgot-password.html", 1, "d-block", "small"], [1, "alert-danger"], [4, "ngIf"]],
      template: function AdminLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminLoginComponent_p_12_Template, 3, 2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminLoginComponent_p_19_Template, 2, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Remember Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminLoginComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

            return ctx.adminLogin(_r1.value, _r3.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.adminLoginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adminLoginForm.controls["inputEmail"].invalid && (ctx.adminLoginForm.controls["inputEmail"].dirty || ctx.adminLoginForm.controls["inputEmail"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adminLoginForm.controls["inputPassword"].invalid && (ctx.adminLoginForm.controls["inputPassword"].dirty || ctx.adminLoginForm.controls["inputPassword"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.adminLoginForm.pristine || ctx.adminLoginForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-admin-login',
          templateUrl: './admin-login.component.html',
          styleUrls: ['./admin-login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-login/admin-login.component */
    "./src/app/admin-login/admin-login.component.ts");
    /* harmony import */


    var _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-bank/add-bank.component */
    "./src/app/add-bank/add-bank.component.ts");
    /* harmony import */


    var _list_bank_list_bank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-bank/list-bank.component */
    "./src/app/list-bank/list-bank.component.ts");
    /* harmony import */


    var _view_bank_view_bank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-bank/view-bank.component */
    "./src/app/view-bank/view-bank.component.ts");
    /* harmony import */


    var _list_request_list_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list-request/list-request.component */
    "./src/app/list-request/list-request.component.ts");
    /* harmony import */


    var _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-request/add-request.component */
    "./src/app/add-request/add-request.component.ts");
    /* harmony import */


    var _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./view-customer/view-customer.component */
    "./src/app/view-customer/view-customer.component.ts");
    /* harmony import */


    var _app_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/_helpers */
    "./src/app/_helpers/index.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: 'banks/add',
      component: _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_4__["AddBankComponent"],
      canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _app_helpers__WEBPACK_IMPORTED_MODULE_10__["RoleAuthGuard"]]
    }, {
      path: 'banks',
      component: _list_bank_list_bank_component__WEBPACK_IMPORTED_MODULE_5__["ListBankComponent"],
      canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: 'banks/view/:walletAddress',
      component: _view_bank_view_bank_component__WEBPACK_IMPORTED_MODULE_6__["ViewBankComponent"],
      canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: 'banks/requests/add',
      component: _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_8__["AddRequestComponent"],
      canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: 'banks/requests',
      component: _list_request_list_request_component__WEBPACK_IMPORTED_MODULE_7__["ListRequestComponent"],
      canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: 'customers/view',
      component: _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_9__["ViewCustomerComponent"],
      canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_services */
    "./src/app/_services/index.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, authenticationService) {
        var _this9 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'angular-app';
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this9.currentUser = x;
        });
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return this.currentUser && this.currentUser.role_id == 1;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-login/admin-login.component */
    "./src/app/admin-login/admin-login.component.ts");
    /* harmony import */


    var _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./add-bank/add-bank.component */
    "./src/app/add-bank/add-bank.component.ts");
    /* harmony import */


    var _list_bank_list_bank_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./list-bank/list-bank.component */
    "./src/app/list-bank/list-bank.component.ts");
    /* harmony import */


    var _view_bank_view_bank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./view-bank/view-bank.component */
    "./src/app/view-bank/view-bank.component.ts");
    /* harmony import */


    var _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./add-request/add-request.component */
    "./src/app/add-request/add-request.component.ts");
    /* harmony import */


    var _list_request_list_request_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./list-request/list-request.component */
    "./src/app/list-request/list-request.component.ts");
    /* harmony import */


    var _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./view-customer/view-customer.component */
    "./src/app/view-customer/view-customer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _app_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _app_helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_13__["AdminLoginComponent"], _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_14__["AddBankComponent"], _list_bank_list_bank_component__WEBPACK_IMPORTED_MODULE_15__["ListBankComponent"], _view_bank_view_bank_component__WEBPACK_IMPORTED_MODULE_16__["ViewBankComponent"], _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_17__["AddRequestComponent"], _list_request_list_request_component__WEBPACK_IMPORTED_MODULE_18__["ListRequestComponent"], _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_19__["ViewCustomerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_13__["AdminLoginComponent"], _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_14__["AddBankComponent"], _list_bank_list_bank_component__WEBPACK_IMPORTED_MODULE_15__["ListBankComponent"], _view_bank_view_bank_component__WEBPACK_IMPORTED_MODULE_16__["ViewBankComponent"], _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_17__["AddRequestComponent"], _list_request_list_request_component__WEBPACK_IMPORTED_MODULE_18__["ListRequestComponent"], _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_19__["ViewCustomerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _app_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _app_helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [[1, "sticky-footer"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copyright \xA9 Your Website 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authenticationService, ethereumService) {
        _classCallCheck(this, HeaderComponent);

        this.authenticationService = authenticationService;
        this.ethereumService = ethereumService;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(HeaderComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["EthereumService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 19,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark", "static-top"], ["href", "index.html", 1, "navbar-brand", "mr-1"], ["id", "sidebarToggle", "href", "#", 1, "btn", "btn-link", "btn-sm", "text-white", "order-1", "order-sm-0"], [1, "fas", "fa-bars"], [1, "d-none", "d-md-inline-block", "form-inline", "ml-auto", "mr-0", "mr-md-3", "my-2", "my-md-0"], [1, "input-group"], [1, "navbar-nav", "ml-auto", "ml-md-0"], [1, "nav-item", "dropdown", "no-arrow"], ["href", "#", "id", "userDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-user-circle", "fa-fw"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Activity Log");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["EthereumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_p_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Current user from secure api end point: ", ctx_r0.userFromApi.email, " ");
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(userService, authenticationService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.currentUser = this.authenticationService.currentUserValue;
        console.log(this.currentUser);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var body = document.getElementsByTagName('body')[0];
          body.classList.remove('bg-dark');
          this.loading = true;
          this.userService.getById(this.currentUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (user) {
            _this10.loading = false;
            _this10.userFromApi = user.data;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 25,
      vars: 2,
      consts: [["id", "wrapper"], [1, "sidebar"], ["id", "content-wrapper"], [1, "container-fluid"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], [1, "row"], [1, "col-md-12", "col-xl-12", "col-sm-12"], [1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], ["class", "mb-1", 4, "ngIf"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"], [1, "mb-1"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Your role is: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_p_21_Template, 2, 1, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.role_id == 1 ? "Admin" : "Bank");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userFromApi);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list-bank/list-bank.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/list-bank/list-bank.component.ts ***!
    \**************************************************/

  /*! exports provided: ListBankComponent */

  /***/
  function srcAppListBankListBankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListBankComponent", function () {
      return ListBankComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListBankComponent_div_17_tr_13_a_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListBankComponent_div_17_tr_13_a_11_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var bank_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.deleteBank(bank_r29.wallet_address);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListBankComponent_div_17_tr_13_a_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListBankComponent_div_17_tr_13_a_13_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var bank_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.upvoteBank(bank_r29.wallet_address, ctx_r36.currentUser.bank.wallet_address);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListBankComponent_div_17_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListBankComponent_div_17_tr_13_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var bank_r29 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r39.router.navigate(["/banks/view", bank_r29.wallet_address]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListBankComponent_div_17_tr_13_a_11_Template, 2, 0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListBankComponent_div_17_tr_13_a_13_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bank_r29 = ctx.$implicit;
        var num_r30 = ctx.index;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r30 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bank_r29.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bank_r29.rg_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.currentUser.role_id == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.currentUser.role_id == 2);
      }
    }

    function ListBankComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "S.No.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registered Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListBankComponent_div_17_tr_13_Template, 14, 5, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.banksList);
      }
    }

    function ListBankComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Records Found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ListBankComponent =
    /*#__PURE__*/
    function () {
      function ListBankComponent(spinner, bankService, router, authenticationService, ethereumService) {
        _classCallCheck(this, ListBankComponent);

        this.spinner = spinner;
        this.bankService = bankService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.ethereumService = ethereumService;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(ListBankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.spinner.show();
          this.bankService.listBank().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (res) {
            console.log(res);

            if (res.success == 1) {
              _this11.banksList = res.data;
            }

            _this11.spinner.hide();
          }, function (error) {
            console.log("listBank", error);
          });
        }
      }, {
        key: "deleteBank",
        value: function deleteBank(walletAddress) {
          var _this12 = this;

          var result = confirm("Are you sure, want to delete bank?");

          if (result) {
            this.bankService.deleteBank(walletAddress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (res) {
              if (res.success == 1) {
                _this12.ngOnInit();
              }
            }, function (error) {
              alert("Something went wrong, please try again after few minutes");
            });
          }
        }
      }, {
        key: "upvoteBank",
        value: function upvoteBank(walletAddress, bankSessionWalletAddress) {
          var _this13 = this;

          this.ethereumService.upvotebank(walletAddress, bankSessionWalletAddress).then(function (result) {
            alert("You have successfully voted for this bank");

            _this13.ngOnInit();
          })["catch"](function (error) {
            console.log("upvotebank error", error);
          });
        }
      }]);

      return ListBankComponent;
    }();

    ListBankComponent.ɵfac = function ListBankComponent_Factory(t) {
      return new (t || ListBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]));
    };

    ListBankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListBankComponent,
      selectors: [["app-list-bank"]],
      decls: 22,
      vars: 2,
      consts: [["id", "wrapper"], [1, "sidebar"], ["id", "content-wrapper"], [1, "container-fluid"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], [1, "breadcrumb-item", "active"], [1, "card", "mb-3"], [1, "card-header"], [1, "fas", "fa-table"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], ["class", "table-responsive text-center", 4, "ngIf"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"], [1, "table-responsive"], ["id", "dataTable", "width", "100%", "cellspacing", "0", 1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "title", "View bank", 1, "text-success", 3, "click"], [1, "fas", "fa-fw", "fa-eye"], ["href", "javascript:void(0)", "class", "text-danger", "title", "Remove bank", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "class", "tex-primary", "title", "Rating bank", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Remove bank", 1, "text-danger", 3, "click"], [1, "fas", "fa-fw", "fa-trash"], ["href", "javascript:void(0)", "title", "Rating bank", 1, "tex-primary", 3, "click"], [1, "fas", "fa-fw", "fa-chevron-circle-up"], [1, "table-responsive", "text-center"]],
      template: function ListBankComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Banks List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Banks Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListBankComponent_div_17_Template, 14, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListBankComponent_div_18_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngx-spinner");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.banksList == null ? null : ctx.banksList.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.banksList == null ? null : ctx.banksList.length));
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtYmFuay9saXN0LWJhbmsuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-bank',
          templateUrl: './list-bank.component.html',
          styleUrls: ['./list-bank.component.css']
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list-request/list-request.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/list-request/list-request.component.ts ***!
    \********************************************************/

  /*! exports provided: ListRequestComponent */

  /***/
  function srcAppListRequestListRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListRequestComponent", function () {
      return ListRequestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListRequestComponent_div_17_tr_11_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListRequestComponent_div_17_tr_11_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

          var bankRequest_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r55.approveBankRequest(bankRequest_r52.username, bankRequest_r52.user_data, bankRequest_r52.wallet_address);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ListRequestComponent_div_17_tr_11_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListRequestComponent_div_17_tr_11_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60);

          var bankRequest_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r58.deleteBankRequest(bankRequest_r52.username, bankRequest_r52.user_data, bankRequest_r52.wallet_address);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ListRequestComponent_div_17_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListRequestComponent_div_17_tr_11_a_6_Template, 2, 0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListRequestComponent_div_17_tr_11_a_8_Template, 2, 0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bankRequest_r52 = ctx.$implicit;

        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bankRequest_r52.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bankRequest_r52.user_data);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.currentUser.role_id == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.currentUser.role_id == 2);
      }
    }

    function ListRequestComponent_div_17_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListRequestComponent_div_17_td_13_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r61.loadRequests();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Load More");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ListRequestComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Username");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Adhar Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListRequestComponent_div_17_tr_11_Template, 9, 4, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListRequestComponent_div_17_td_13_Template, 3, 0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r48.bankRequestLists);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.last < ctx_r48.total);
      }
    }

    function ListRequestComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Records Found");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ListRequestComponent =
    /*#__PURE__*/
    function () {
      function ListRequestComponent(spinner, bankService, router, authenticationService, ethereumService) {
        _classCallCheck(this, ListRequestComponent);

        this.spinner = spinner;
        this.bankService = bankService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.ethereumService = ethereumService;
        this.last = 0;
        this.bankRequestLists = [];
        this.total = 0;
        this.perload = 10;
        this.currentUser = this.authenticationService.currentUserValue;

        if (this.currentUser.role_id == 2) {
          this.wallet_address = this.currentUser.bank.wallet_address;
        } else {
          this.wallet_address = null;
        }
      }

      _createClass(ListRequestComponent, [{
        key: "approveBankRequest",
        value: function approveBankRequest(username, data, wallet_address) {
          var _this14 = this;

          this.ethereumService.addCustomer(username, data, wallet_address).then(function (result) {
            alert("Approved successfully");

            _this14.ngOnInit();
          })["catch"](function (error) {
            console.log("approval error", error);
            alert("Something went wrong please try again!");
          });
        }
      }, {
        key: "deleteBankRequest",
        value: function deleteBankRequest(username, data, wallet_address) {
          var _this15 = this;

          var con = confirm("Are you sure, want to delete bank kyc request?");

          if (con) {
            this.ethereumService.removeRequest(username, data, wallet_address).then(function (result) {
              alert("Removed successfully");

              _this15.ngOnInit();
            })["catch"](function (error) {
              console.log("removal error", error);
              alert("Something went wrong please try again!");
            });
          }
        }
      }, {
        key: "loadRequests",
        value: function loadRequests() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var i, cnt, results;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    cnt = 0, results = [];

                  case 1:
                    if (!(cnt < this.perload && this.last < this.total)) {
                      _context12.next = 17;
                      break;
                    }

                    _context12.prev = 2;
                    _context12.next = 5;
                    return this.ethereumService.getBankRequest(this.wallet_address, this.last);

                  case 5:
                    results[this.last] = _context12.sent;
                    console.log(results[this.last][2]); // if((results[this.last][2])!="0x0000000000000000000000000000000000000000" && results[this.last][3]){

                    if (results[this.last][2] != "0x0000000000000000000000000000000000000000") {
                      this.bankRequestLists.push({
                        username: this.ethereumService.web3.utils.hexToString(results[this.last][0]),
                        user_data: this.ethereumService.web3.utils.hexToString(results[this.last][1]),
                        wallet_address: results[this.last][2],
                        is_active: results[this.last][3]
                      });
                      cnt++;
                    }

                    this.last++;
                    _context12.next = 15;
                    break;

                  case 11:
                    _context12.prev = 11;
                    _context12.t0 = _context12["catch"](2);
                    console.log("getBankRequest error", _context12.t0);
                    this.last++;

                  case 15:
                    _context12.next = 1;
                    break;

                  case 17:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this, [[2, 11]]);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.last = 0;
          this.bankRequestLists = [];
          this.total = 0;
          this.perload = 10;
          this.spinner.show();
          this.ethereumService.getBankRequestsNum(this.wallet_address).then(function (result) {
            _this16.total = result;

            _this16.loadRequests();

            _this16.spinner.hide();
          })["catch"](function (e) {
            console.log("getBankRequestsNum error", e);
            alert("Something went wrong please try again!");
          });
        }
      }]);

      return ListRequestComponent;
    }();

    ListRequestComponent.ɵfac = function ListRequestComponent_Factory(t) {
      return new (t || ListRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]));
    };

    ListRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListRequestComponent,
      selectors: [["app-list-request"]],
      decls: 22,
      vars: 2,
      consts: [["id", "wrapper"], [1, "sidebar"], ["id", "content-wrapper"], [1, "container-fluid"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], [1, "breadcrumb-item", "active"], [1, "card", "mb-3"], [1, "card-header"], [1, "fas", "fa-table"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], ["class", "table-responsive text-center", 4, "ngIf"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"], [1, "table-responsive"], ["id", "dataTable", "width", "100%", "cellspacing", "0", 1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["colspan", "3", "class", "text-center", 4, "ngIf"], ["href", "javascript:void(0)", "class", "text-warning", "title", "Approve", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "class", "text-danger", "title", "Remove", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Approve", 1, "text-warning", 3, "click"], [1, "fas", "fa-fw", "fa-check"], ["href", "javascript:void(0)", "title", "Remove", 1, "text-danger", 3, "click"], [1, "fas", "fa-fw", "fa-trash"], ["colspan", "3", 1, "text-center"], ["href", "javascript:void(0)", 3, "click"], [1, "table-responsive", "text-center"]],
      template: function ListRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Bank Requests List");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Bank Requests Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListRequestComponent_div_17_Template, 14, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ListRequestComponent_div_18_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ngx-spinner");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.bankRequestLists == null ? null : ctx.bankRequestLists.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.bankRequestLists == null ? null : ctx.bankRequestLists.length));
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcmVxdWVzdC9saXN0LXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-list-request',
          templateUrl: './list-request.component.html',
          styleUrls: ['./list-request.component.css']
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SidebarComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_15_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " KYC Requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_li_15_a_8_Template, 2, 0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.isBank);
      }
    }

    function SidebarComponent_li_16_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Customers ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_a_6_Template, 2, 0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r87.isBank);
      }
    }

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(router, authenticationService) {
        var _this17 = this;

        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this17.currentUser = x;
        });
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isAdmin",
        get: function get() {
          return this.currentUser && this.currentUser.role_id == 1;
        }
      }, {
        key: "isBank",
        get: function get() {
          return this.currentUser && this.currentUser.role_id == 2;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 17,
      vars: 3,
      consts: [[1, "sidebar", "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-fw", "fa-tachometer-alt"], [1, "nav-item", "dropdown"], ["routerLinkActive", "active", "href", "#", "id", "pagesDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-fw", "fa-landmark"], ["aria-labelledby", "pagesDropdown", 1, "dropdown-menu"], ["routerLink", "/banks", 1, "dropdown-item"], ["class", "dropdown-item", "routerLink", "/banks/add", 4, "ngIf"], ["class", "nav-item dropdown", 4, "ngIf"], ["routerLink", "/banks/add", 1, "dropdown-item"], [1, "fas", "fa-fw", "fa-check-circle"], ["routerLink", "/banks/requests", 1, "dropdown-item"], ["class", "dropdown-item", "routerLink", "/banks/requests/add", 4, "ngIf"], ["routerLink", "/banks/requests/add", 1, "dropdown-item"], [1, "fas", "fa-fw", "fa-users"], ["class", "dropdown-item", "routerLink", "/customers/view", 4, "ngIf"], ["routerLink", "/customers/view", 1, "dropdown-item"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Banks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SidebarComponent_a_14_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SidebarComponent_li_15_Template, 9, 1, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidebarComponent_li_16_Template, 7, 1, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/view-bank/view-bank.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/view-bank/view-bank.component.ts ***!
    \**************************************************/

  /*! exports provided: ViewBankComponent */

  /***/
  function srcAppViewBankViewBankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewBankComponent", function () {
      return ViewBankComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewBankComponent_div_21_a_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBankComponent_div_21_a_22_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.upvoteBank(ctx_r44.bankData[1], ctx_r44.currentUser.bank.wallet_address);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewBankComponent_div_21_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBankComponent_div_21_tr_28_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.deleteBank(ctx_r46.bankData[1]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewBankComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bank Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registration Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wallet address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Rating");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewBankComponent_div_21_a_22_Template, 2, 0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "KYC Count");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewBankComponent_div_21_tr_28_Template, 6, 0, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.bankData[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.bankData[4]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.bankData[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r41.bankData[2], " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.currentUser.role_id == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.bankData[3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.currentUser.role_id == 1);
      }
    }

    var ViewBankComponent =
    /*#__PURE__*/
    function () {
      function ViewBankComponent(bankService, route, router, authenticationService, ethereumService) {
        _classCallCheck(this, ViewBankComponent);

        this.bankService = bankService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.ethereumService = ethereumService;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(ViewBankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.route.params.subscribe(function (params) {
            _this18.ethereumService.getBank(params['walletAddress']).then(function (result) {
              result[0] = _this18.ethereumService.web3.utils.hexToString(result[0]);
              result[4] = _this18.ethereumService.web3.utils.hexToString(result[4]);
              _this18.bankData = result;
            })["catch"](function (error) {
              console.log(error);
            });
          });
        }
      }, {
        key: "deleteBank",
        value: function deleteBank(walletAddress) {
          var _this19 = this;

          var result = confirm("Are you sure, want to delete bank?");

          if (result) {
            this.bankService.deleteBank(walletAddress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (res) {
              if (res.success == 1) {
                _this19.ngOnInit();
              }
            }, function (error) {
              alert("Something went wrong, please try again after few minutes");
            });
          }
        }
      }, {
        key: "upvoteBank",
        value: function upvoteBank(walletAddress, bankSessionWalletAddress) {
          var _this20 = this;

          this.ethereumService.upvotebank(walletAddress, bankSessionWalletAddress).then(function (result) {
            alert("You have successfully voted for this bank");

            _this20.ngOnInit();
          })["catch"](function (error) {
            console.log("error", error);
          });
        }
      }]);

      return ViewBankComponent;
    }();

    ViewBankComponent.ɵfac = function ViewBankComponent_Factory(t) {
      return new (t || ViewBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["BankService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["EthereumService"]));
    };

    ViewBankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewBankComponent,
      selectors: [["app-view-bank"]],
      decls: 23,
      vars: 1,
      consts: [["id", "wrapper"], [1, "sidebar"], ["id", "content-wrapper"], [1, "container-fluid"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], ["href", "/banks"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-sm-8", "offset-md-2"], [1, "card"], [1, "card-header"], [1, "fas", "fa-table"], ["class", "card-body table-responsive", 4, "ngIf"], [1, "card-body", "table-responsive"], [1, "table", "table-bordered"], ["href", "javascript:void(0)", "class", "tex-primary", "title", "Rating bank", 3, "click", 4, "ngIf"], [4, "ngIf"], ["href", "javascript:void(0)", "title", "Rating bank", 1, "tex-primary", 3, "click"], [1, "fas", "fa-fw", "fa-chevron-circle-up"], ["href", "javascript:void(0)", "title", "Remove bank", 1, "text-danger", 3, "click"], [1, "fas", "fa-fw", "fa-trash"]],
      template: function ViewBankComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Banks List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bank View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Bank Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewBankComponent_div_21_Template, 29, 7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankData);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYmFuay92aWV3LWJhbmsuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-bank',
          templateUrl: './view-bank.component.html',
          styleUrls: ['./view-bank.component.css']
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["BankService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["EthereumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/view-customer/view-customer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/view-customer/view-customer.component.ts ***!
    \**********************************************************/

  /*! exports provided: ViewCustomerComponent */

  /***/
  function srcAppViewCustomerViewCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewCustomerComponent", function () {
      return ViewCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewCustomerComponent_p_24_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ViewCustomerComponent_p_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewCustomerComponent_p_24_span_1_Template, 2, 0, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.viewCustomerForm.controls["name"].errors.required);
      }
    }

    function ViewCustomerComponent_p_31_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ViewCustomerComponent_p_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewCustomerComponent_p_31_span_1_Template, 2, 0, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.viewCustomerForm.controls["password"].errors.required);
      }
    }

    function ViewCustomerComponent_div_34_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomerComponent_div_34_tr_20_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r78.accessHistory(ctx_r78.displayCustomer.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomerComponent_div_34_tr_20_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r80.upvoteCustomer(ctx_r80.displayCustomer.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomerComponent_div_34_tr_20_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r81.updateCustomer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomerComponent_div_34_tr_20_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r82.updateCustomerPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomerComponent_div_34_tr_20_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r83.deleteCustomer(ctx_r83.displayCustomer.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ViewCustomerComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Username");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Aadhaar address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Rating");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ViewCustomerComponent_div_34_tr_20_Template, 18, 0, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r74.displayCustomer.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r74.displayCustomer.aadhaar_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r74.displayCustomer.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r74.currentUser.role_id == 2);
      }
    }

    var ViewCustomerComponent =
    /*#__PURE__*/
    function () {
      function ViewCustomerComponent(fb, bankService, router, authenticationService, ethereumService) {
        _classCallCheck(this, ViewCustomerComponent);

        this.fb = fb;
        this.bankService = bankService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.ethereumService = ethereumService;
        this.displayCustomer = {
          username: null,
          aadhaar_number: null,
          rating: null
        };
        this.custForm();
        this.currentUser = this.authenticationService.currentUserValue;
        this.wallet_address = this.currentUser.bank.wallet_address;
        console.log(this.currentUser.role_id);

        if (this.currentUser.role_id == 1) {
          this.router.navigate(['home']);
        }
      }

      _createClass(ViewCustomerComponent, [{
        key: "custForm",
        value: function custForm() {
          this.viewCustomerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "viewCustomer",
        value: function viewCustomer(name, password) {
          var _this21 = this;

          this.ethereumService.viewCustomer(name, password, this.currentUser.bank.wallet_address).then(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!result) {
                        _context13.next = 9;
                        break;
                      }

                      this.displayCustomer.username = name;
                      this.displayCustomer.password = password;
                      this.displayCustomer.aadhaar_number = this.ethereumService.web3.utils.hexToString(result);
                      _context13.next = 6;
                      return this.ethereumService.getCustRating(name, this.wallet_address);

                    case 6:
                      this.displayCustomer.rating = _context13.sent;
                      _context13.next = 10;
                      break;

                    case 9:
                      alert("Customer not present");

                    case 10:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          })["catch"](function (error) {
            console.log("viewCustomer error", error.message);
            alert("Something went wrong!");
          });
        }
      }, {
        key: "upvoteCustomer",
        value: function upvoteCustomer(username) {
          var _this22 = this;

          this.ethereumService.upvoteCust(username, this.wallet_address).then(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee14() {
              var rating;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.ethereumService.getCustRating(username, this.wallet_address);

                    case 2:
                      rating = _context14.sent;
                      alert("You have voted successfully");
                      this.ngOnInit();

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          })["catch"](function (error) {
            alert("Something went wrong please try again in few minutes!");
          });
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(username) {
          var _this23 = this;

          var del = confirm("Are you sure, want to remove this customer?");

          if (del) {
            this.ethereumService.removeCustomer(username, this.wallet_address).then(function (result) {
              alert("You have deleted customer successfully");

              _this23.ngOnInit();
            })["catch"](function (error) {
              alert("Something went wrong please try again in few minutes!");
            });
          } else {
            this.ngOnInit();
          }
        }
      }, {
        key: "accessHistory",
        value: function accessHistory(username) {
          this.ethereumService.customerAccessHistory(username, this.wallet_address).then(function (result) {
            alert("This customer accessed by bank address " + result);
          })["catch"](function (error) {
            console.log("access history error", error);
          });
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var aadhaar_number;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.prev = 0;
                    aadhaar_number = prompt("Please enter new aadhaar number:", "");

                    if (!(aadhaar_number == null || aadhaar_number == "")) {
                      _context15.next = 5;
                      break;
                    }

                    _context15.next = 9;
                    break;

                  case 5:
                    _context15.next = 7;
                    return this.ethereumService.modifyCustomer(this.displayCustomer.username, this.displayCustomer.password, aadhaar_number, this.wallet_address);

                  case 7:
                    alert("Customer record has been updated");
                    this.ngOnInit();

                  case 9:
                    _context15.next = 15;
                    break;

                  case 11:
                    _context15.prev = 11;
                    _context15.t0 = _context15["catch"](0);
                    console.log("updateCustomer error", _context15.t0);
                    alert("Something went wrong");

                  case 15:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this, [[0, 11]]);
          }));
        }
      }, {
        key: "updateCustomerPassword",
        value: function updateCustomerPassword() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var password;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.prev = 0;
                    password = prompt("Please enter new password:", "");

                    if (!(password == null || password == "")) {
                      _context16.next = 5;
                      break;
                    }

                    _context16.next = 9;
                    break;

                  case 5:
                    _context16.next = 7;
                    return this.ethereumService.setCustPassword(this.displayCustomer.username, password, this.wallet_address);

                  case 7:
                    alert("Customer record has been updated");
                    this.ngOnInit();

                  case 9:
                    _context16.next = 15;
                    break;

                  case 11:
                    _context16.prev = 11;
                    _context16.t0 = _context16["catch"](0);
                    console.log("updateCustomer error", _context16.t0);
                    alert("Something went wrong");

                  case 15:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this, [[0, 11]]);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayCustomer = {
            username: null,
            aadhaar_number: null
          };
          this.custForm();
        }
      }]);

      return ViewCustomerComponent;
    }();

    ViewCustomerComponent.ɵfac = function ViewCustomerComponent_Factory(t) {
      return new (t || ViewCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]));
    };

    ViewCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ViewCustomerComponent,
      selectors: [["app-view-customer"]],
      decls: 38,
      vars: 5,
      consts: [["id", "wrapper"], [1, "sidebar"], ["id", "content-wrapper"], [1, "container-fluid"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-sm-6"], [1, "card", "card-register", "mx-auto", "mt-5"], [1, "card-header"], [1, "card-body", "table-responsive"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], [1, "form-label-group"], ["type", "text", "id", "name", "placeholder", "Bank name", "autofocus", "autofocus", "formControlName", "name", 1, "form-control"], ["name", ""], ["for", "name"], ["class", "alert-danger", 4, "ngIf"], ["type", "password", "id", "password", "placeholder", "Password", "autofocus", "autofocus", "formControlName", "password", "autocomplete", "false", 1, "form-control"], ["password", ""], ["for", "password"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], ["class", "col-sm-6", 4, "ngIf"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"], [1, "alert-danger"], [4, "ngIf"], [1, "table", "table-bordered"], ["href", "javascript:void(0)", "title", "Access History", 1, "text-secondary", 3, "click"], [1, "fas", "fa-fw", "fa-history"], ["href", "javascript:void(0)", "title", "Rating customer", 1, "text-primary", 3, "click"], [1, "fas", "fa-fw", "fa-chevron-circle-up"], ["href", "javascript:void(0)", "title", "Edit customer", 1, "text-warning", 3, "click"], [1, "fas", "fa-fw", "fa-edit"], ["href", "javascript:void(0)", "title", "Set Password", 1, "text-warning", 3, "click"], [1, "fas", "fa-fw", "fa-key"], ["href", "javascript:void(0)", "title", "Remove customer", 1, "text-danger", 3, "click"], [1, "fas", "fa-fw", "fa-trash"]],
      template: function ViewCustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "View Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ViewCustomerComponent_p_24_Template, 2, 1, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ViewCustomerComponent_p_31_Template, 2, 1, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomerComponent_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

            var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

            var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

            return ctx.viewCustomer(_r70.value, _r72.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Get");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ViewCustomerComponent_div_34_Template, 21, 4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewCustomerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewCustomerForm.controls["name"].invalid && (ctx.viewCustomerForm.controls["name"].dirty || ctx.viewCustomerForm.controls["name"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewCustomerForm.controls["password"].invalid && (ctx.viewCustomerForm.controls["password"].dirty || ctx.viewCustomerForm.controls["password"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewCustomerForm.pristine || ctx.viewCustomerForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayCustomer.aadhaar_number);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY3VzdG9tZXIvdmlldy1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewCustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-view-customer',
          templateUrl: './view-customer.component.html',
          styleUrls: ['./view-customer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["BankService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["EthereumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://kyc.softprodigyphp.in',
      RPCProvider: 'https://rinkeby.infura.io/v3/9bdab8bf5f19496f8f81c1a870bbb52a',
      ContractAddress: '0xd187d06bB8aFf2640261D67aB2004A28a8619B48',
      WalletAddress: '0x3a55AA0731FdF36Cd0608719ae5c1A2A786EB972'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /var/www/html/bank-kyc-angular/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!************************!*\
    !*** buffer (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map