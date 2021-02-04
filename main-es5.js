(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!*************************************************************!*\
      !*** multi ./projects/progress-button-showcase/src/main.ts ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Crio\WebstormProjects\ydd-progress-button\projects\progress-button-showcase\src\main.ts */
      "8h/P");
      /***/
    },

    /***/
    "2DjF":
    /*!********************************************************************!*\
      !*** ./projects/progress-button-showcase/src/app/app.component.ts ***!
      \********************************************************************/

    /*! exports provided: AppComponent */

    /***/
    function DjF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "iS4g");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "s1v4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(fb) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.fb = fb;
          this.isSidebarSettingsOpen = false;
          this.clipboardCopied = false;

          this.isLinesSize = function () {
            return _this.progressData.animation === 'top-line' || _this.progressData.animation === 'lateral-lines';
          };

          this.isRotateAnimation = function () {
            return _this.progressData.animation.includes('rotate-');
          };

          this.copyClipboard = function (val) {
            if (!_this.clipboardCopied) {
              var selBox = document.createElement('textarea');
              selBox.style.position = 'fixed';
              selBox.style.left = '0';
              selBox.style.top = '0';
              selBox.style.opacity = '0';
              selBox.value = val;
              document.body.appendChild(selBox);
              selBox.focus();
              selBox.select();
              document.execCommand('copy');
              document.body.removeChild(selBox);
              _this.clipboardCopied = true;
              var t = setTimeout(function () {
                _this.clipboardCopied = false;
                clearTimeout(t);
              }, 1000);
            }
          };
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.settingsForm = this.fb.group({
              animation: 'fill',
              direction: 'horizontal',
              status: 'success',
              background: '#516bf0',
              color: '#FFFFFF',
              successBackground: 'rgb(93,196,17)',
              errorBackground: 'rgb(255,10,104)',
              successIconColor: '#ffffff',
              errorIconColor: '#ffffff',
              progressBackground: '#4053AA',
              progressInnerBackground: 'rgba(0, 0, 0,0.5)',
              radius: '50',
              linesSize: '5'
            });
          }
        }, {
          key: "progressData",
          get: function get() {
            return {
              animation: this.settingsForm.value.animation,
              direction: this.settingsForm.value.direction
            };
          }
        }, {
          key: "designData",
          get: function get() {
            return {
              background: this.settingsForm.value.background,
              color: this.settingsForm.value.color,
              successBackground: this.settingsForm.value.successBackground,
              errorBackground: this.settingsForm.value.errorBackground,
              successIconColor: this.settingsForm.value.successIconColor,
              errorIconColor: this.settingsForm.value.errorIconColor,
              progressBackground: this.settingsForm.value.progressBackground,
              progressInnerBackground: this.settingsForm.value.progressInnerBackground,
              radius: parseInt(this.settingsForm.value.radius, 10),
              linesSize: parseInt(this.settingsForm.value.linesSize, 10)
            };
          }
        }, {
          key: "run",
          value: function run(instance) {
            var _this2 = this;

            var progress = 0;
            instance.progressInit();
            var interval = setInterval(function () {
              progress += 5;
              instance.progressValue = progress;

              if (progress === 100) {
                var sub = instance.progressStop(_this2.settingsForm.value.status).subscribe({
                  complete: function complete() {
                    sub.unsubscribe();
                  }
                });
                clearInterval(interval);
              }
            }, 200);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "5/bN":
    /*!*****************************************************************!*\
      !*** ./projects/progress-button-showcase/src/app/app.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AppModule */

    /***/
    function bN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "2DjF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _progress_button_src_lib_progress_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../progress-button/src/lib/progress-button.module */
      "T/iR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-markdown */
      "ZcxY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _app_component_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component.models */
      "TngN");
      /* harmony import */


      var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-scrollbar */
      "AV7R");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _progress_button_src_lib_progress_button_module__WEBPACK_IMPORTED_MODULE_5__["ProgressButtonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot({
          loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
          markedOptions: {
            provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkedOptions"],
            useFactory: _app_component_models__WEBPACK_IMPORTED_MODULE_9__["markedOptionsFactory"]
          }
        })],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "8h/P":
    /*!*******************************************************!*\
      !*** ./projects/progress-button-showcase/src/main.ts ***!
      \*******************************************************/

    /*! no exports provided */

    /***/
    function hP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "5/bN");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "geGj");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "F/Ek":
    /*!*******************************************************************!*\
      !*** ./projects/progress-button/src/lib/progress-button.types.ts ***!
      \*******************************************************************/

    /*! exports provided: ProgressButtonConfig, mergeOptions, FOR_ROOT_CONFIG_TOKEN, progressButtonConfigFactory */

    /***/
    function FEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressButtonConfig", function () {
        return ProgressButtonConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeOptions", function () {
        return mergeOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOR_ROOT_CONFIG_TOKEN", function () {
        return FOR_ROOT_CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "progressButtonConfigFactory", function () {
        return progressButtonConfigFactory;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ProgressButtonConfig = function ProgressButtonConfig() {
        _classCallCheck(this, ProgressButtonConfig);

        this.progress = {
          animation: 'fill',
          direction: 'horizontal',
          statusTime: 1500
        };
        this.design = {
          background: '#222222',
          color: '#FFFFFF',
          successBackground: '#00e175',
          errorBackground: '#ff2948',
          successIconColor: '#ffffff',
          errorIconColor: '#ffffff',
          progressBackground: '#000000',
          progressInnerBackground: 'rgba(255, 255, 255,0.5)',
          linesSize: 10,
          radius: 0
        };
      };

      ProgressButtonConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Button Config used to initialize button options
       */
      ], ProgressButtonConfig);
      /**
       * Merge an object with another
       * @param data Object to merge
       * @param source Original object
       */

      function mergeOptions(data, source) {
        if (data) {
          Object.keys(source).forEach(function (k) {
            if (data[k] !== null && typeof data[k] !== 'undefined' && data[k] !== '') {
              source[k] = data[k];
            }
          }); // Update lateral-lines animation direction to vertical

          if (typeof source !== 'undefined' && source.animation && source.animation === 'lateral-lines') {
            source.direction = 'vertical';
          }
        }

        return source;
      } // Token that makes the raw options available to the following factory function.


      var FOR_ROOT_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('forRoot() ProgressButtonService configuration.');
      /**
       * Return an instance of ProgressButtonConfig
       * @param config The button config for the module
       * @return ProgressButtonConfig;
       */

      function progressButtonConfigFactory(config) {
        var options = new ProgressButtonConfig();

        if (config) {
          options.progress = mergeOptions(config.progress, options.progress);
          options.design = mergeOptions(config.design, options.design);
        }

        return options;
      }
      /***/

    },

    /***/
    "HKPz":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./projects/progress-button/src/lib/progress-button.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HKPz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"progress-button\"\n        [attr.autofocus]=\"autofocus\"\n        [attr.disabled]=\"disabled\"\n\n        [attr.form]=\"form?.id\"\n        [attr.formaction]=\"form?.action\"\n        [attr.formmethod]=\"form?.method\"\n        [attr.formnovalidate]=\"form?.noValidate\"\n        [attr.formtarget]=\"form?.target\"\n        [attr.formenctype]=\"form?.enctype\"\n\n        [attr.name]=\"name\"\n        [attr.type]=\"type\"\n        [attr.value]=\"value\"\n\n        [attr.data-style]=\"progress.animation\"\n        [attr.data-vertical]=\"(progress.direction === 'vertical')?'':null\"\n        [attr.data-horizontal]=\"(progress.direction === 'horizontal')?'':null\"\n        [attr.data-perspective]=\"status.perspective\"\n        (click)=\"click()\"\n        [ngClass]=\"[(loading)?'state-loading':'',statusClass,(status.isBorderRadius)?'radius':'']\"\n        [ngStyle]=\"styles.button\">\n  <!-- perspective -->\n  <ng-container *ngIf=\"status.perspective === ''\">\n      <span class=\"progress-wrap\">\n        <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n      </span>\n  </ng-container>\n  <!-- not perspective -->\n  <ng-container *ngIf=\"status.perspective === null\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </ng-container>\n</button>\n<!-- template -->\n<ng-template #content>\n  <span class=\"content\" [ngStyle]=\"styles.content\">\n    <div class=\"success\" [style.color]=\"design.successIconColor\" [innerHTML]=\"'&#xe600;'\"></div>\n    <ng-content></ng-content>\n    <div class=\"error\" [style.color]=\"design.errorIconColor\" [innerHTML]=\"'&#xe601;'\"></div>\n  </span>\n  <span class=\"progress\"\n        [style.background]=\"design.progressBackground\"\n        [style.borderRadius]=\"(status.isBorderRadius)?design.radius+'px':null\">\n    <span class=\"progress-inner\"\n          [ngStyle]=\"styles.progressInner\"\n          [ngClass]=\"{'notransition':noTransition}\"\n    ></span>\n  </span>\n</ng-template>\n";
      /***/
    },

    /***/
    "T/iR":
    /*!********************************************************************!*\
      !*** ./projects/progress-button/src/lib/progress-button.module.ts ***!
      \********************************************************************/

    /*! exports provided: ProgressButtonService, ProgressButtonConfig, ProgressButtonModule */

    /***/
    function TIR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressButtonModule", function () {
        return ProgressButtonModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _progress_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./progress-button.component */
      "sM0f");
      /* harmony import */


      var _progress_button_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./progress-button.types */
      "F/Ek");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgressButtonConfig", function () {
        return _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["ProgressButtonConfig"];
      });
      /* harmony import */


      var _progress_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./progress-button.service */
      "qaqn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgressButtonService", function () {
        return _progress_button_service__WEBPACK_IMPORTED_MODULE_5__["ProgressButtonService"];
      });

      var ProgressButtonModule_1;

      var ProgressButtonModule = ProgressButtonModule_1 = /*#__PURE__*/function () {
        function ProgressButtonModule() {
          _classCallCheck(this, ProgressButtonModule);
        }

        _createClass(ProgressButtonModule, null, [{
          key: "forRoot",
          value: function forRoot(config) {
            return {
              ngModule: ProgressButtonModule_1,
              providers: [{
                provide: _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["FOR_ROOT_CONFIG_TOKEN"],
                useValue: config
              }, {
                provide: _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["ProgressButtonConfig"],
                useFactory: _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["progressButtonConfigFactory"],
                deps: [_progress_button_types__WEBPACK_IMPORTED_MODULE_4__["FOR_ROOT_CONFIG_TOKEN"]]
              }]
            };
          }
        }]);

        return ProgressButtonModule;
      }();

      ProgressButtonModule = ProgressButtonModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_progress_button_component__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_progress_button_component__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonComponent"]]
      })], ProgressButtonModule);
      /***/
    },

    /***/
    "TngN":
    /*!***************************************************************************!*\
      !*** ./projects/progress-button-showcase/src/app/app.component.models.ts ***!
      \***************************************************************************/

    /*! exports provided: markedOptionsFactory */

    /***/
    function TngN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "markedOptionsFactory", function () {
        return markedOptionsFactory;
      });
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-markdown */
      "ZcxY");

      function markedOptionsFactory() {
        var renderer = new ngx_markdown__WEBPACK_IMPORTED_MODULE_0__["MarkedRenderer"]();
        var headers = [];
        var cellIndex = 0;

        renderer.table = function (header, body) {
          headers = [];
          return '<div class="table"><div class="header">' + header + '</div><div class="table-body">' + body + '</div></div>';
        };

        renderer.tablerow = function (content) {
          cellIndex = 0;
          return '<div class="row">' + content + '</div>';
        };

        renderer.tablecell = function (content, flags) {
          var title = null;

          if (flags.header) {
            headers.push(content);
          } else {
            title = headers[cellIndex];
            cellIndex++;
          }

          return '<div class="cell" ' + (title !== null ? 'data-title="' + title + '"' : '') + '>' + content.replace(/,/g, '') + '</div>';
        };

        return {
          renderer: renderer
        };
      }
      /***/

    },

    /***/
    "geGj":
    /*!***************************************************************************!*\
      !*** ./projects/progress-button-showcase/src/environments/environment.ts ***!
      \***************************************************************************/

    /*! exports provided: environment */

    /***/
    function geGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
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
    "iS4g":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./projects/progress-button-showcase/src/app/app.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iS4g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ydd-main-container\">\n  <div class=\"ydd-main-content\">\n    <div class=\"ydd-page-content\">\n      <div class=\"ydd-page-preview\">\n        <div class=\"item\">\n          <ng-scrollbar visibility=\"hover\">\n            <div class=\"ydd-page-preview-item-description\">\n              <markdown [src]=\"'https://raw.githubusercontent.com/udede/ydd-progress-button/master/README.md'\"></markdown>\n            </div>\n          </ng-scrollbar>\n          <div class=\"ydd-page-preview-item-content\">\n            <div class=\"open-settings-icon\" (click)=\"isSidebarSettingsOpen=true\"></div>\n            <ydd-progress-button (action)=\"run($event)\" [progress]=\"progressData\" [design]=\"designData\">\n              Submit\n            </ydd-progress-button>\n          </div>\n        </div>\n        <div class=\"settings\" [ngClass]=\"{'open':(isSidebarSettingsOpen)}\">\n          <div class=\"close-settings-icon\" (click)=\"isSidebarSettingsOpen=false\"></div>\n          <div class=\"settings-header\">\n            <a href=\"https://www.npmjs.com/package/progress-button\" target=\"_blank\" class=\"repo-link\">\n              <img [src]=\"'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAABACAYAAACgGR3JAAABAUlEQVR4nO3dQQqDQBAAwTHk/19O7vGigsKmq17gLM2eBnebmc+sbTvw9avPOKE5b/X649lgR/CkCJ4UwZMieFIET4rgSRE8KYInRfCkCJ4UwZPyfmDYI0tPv1Zcgjo756qLXmfmvDLjrefohidF8KQInhTBkyJ4UgRPiuBJETwpgidF8KQInhTBkyJ4UgRPiuBJETwpgidF8KQInhTBkyJ4UgRPiuBJETwpT/yIqcILegtww5MieFIET4rgSRE8KYInRfCkCJ4UwZMieFIET4rgSbnywt6Knljsqpzl0tzwpAieFMGTInhSBE+K4EkRPCmCJ0XwpAieFMGTIng6ZuYLDFMJgUMNpzgAAAAASUVORK5CYII='\" alt=\"Npm Logo\"/>\n            </a>\n            <a href=\"https://github.com/udede/ydd-progress-button\" target=\"_blank\" class=\"repo-link\">\n              <img [src]=\"'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABACAYAAACunKHjAAAFg0lEQVR4nNWba4hVVRTHfx4lnRTLBtMmLMoeZE+HRi2i0qKsPlSCRfS0Mix6qH00DKIHhF96QEWGQfSiYqAR+lImNZHVKFZOZSghlkXaaNPDpsSJPbOuHs9ee9997jn33HN/8P+yz95rr73uuft9RlAMxwMzgNOBk4EpwGTgSGCMeDAA7AF+AbYDW4Be4HPgh4L8rAuXAM8C3wODGbUVeA64DCjqx8vEscATwM4cGu9SH7ACOK6MATCv/jsOx+upLuAky5sGMAp4oQEBSOrlWF9TOHOBfsWpRulv4Jqig7CyRAFI6jXL2zowOadRoN7aJv1WXTgH+KsJglDRf8B5eQfCTIb2KZU1g2ZbramRdmC/0uBumTd0ALcALwG7lXz1Up/Ueav4cAzwoaOuC7IGYYqncXOt3MNcL1NkrUweMtPt+Vatw8x22N8LnGLlTsFGxajR5gATjynlsuphqxabrx11GJ8Ps3ILo6yUg7wCnG2lDtNjpdgsA9YA78uT/eLkeuA74Ffgd1lsIU6OBybKbHG61N8iZS+Sv2M1PgPOUPKYN+INYJ71xMONSkTjetxd1ML8hZbKSjMtY6QPuDBFuYcUf+O6yyrhYAKwSzEQ13K9aClYovgb159AW9LRSPH8UaDVSj2U8VZKeWip4snYkDf6LCWCmjqtkuUhdBHonWy9rhTQ9JOvB24wXyj+aupyuRn6NlQU3OkUSLvip0+zKq7F+4g7Uvr7rZXSeDbK8BnKwmQ+M0z97IlcUoWv+1Nghukdis+azDzmqLjpeUoml54ucRAqXOfwXdPN8YKhPe0fwCSr2nKyTvFf06tx7zcrGTStaJIgGG5T/NdkFogjTYFpykOXXGuPMjJB+gBXW+LqiGTnKQTTI3/ZRIEw2wcfW6k60yN5I0JIMyyVhfWBfkwzgZhqJev0qqnlJmTfxDA1kl2oELY1YSB2WCk6bZFs0Yewu8AG5EV/oJ3WKMWSep+VUn5CfR4bpTgzLOtq08doz7M4oyMZS0M4ulGtycDEwKKDkZxehZBpO7xBhPq8N5KDkhA6mjAQM6wUnf5I7iyFYLbTjyiwEVkZneK4b1eUYn5g1vnXWqnl5eoUU4PtkRzzh3J/EwXiASvFzVAMrlRWYz7d5zRXHu70+K9p6CzVnCIPKA99ai9xEE4D/vX4runAeutT5aFPPwYcAjWCcXIn0+d7Ul8R28X+IKXT5l7EBnmbykKr+HRiSn8OaftMJVIh+ge4yjJdPJfKfmotbZiT9LZHyRSqd1NMZ/PEbMe9ncHvbzRfFisZB+WiuLlO+Lzca9DyVLSqnrfZYrSJP5oPabTMsiwHHXsUI8monR+w6/0JcC9wqlVL7ZiefRGwVqmvFg1IX6ey3GGwW7no0aXk0/Qb8GbAcb2LFz33uLLoSUd9Q7TISbdWwU7lgsUmJZ+mdVZN4XQq9rKqL3nUp7HQU0nyDtMsJY8mb/Sr8KBiL6sW+6s8yEeeihYl8l6u5ElqqVVDOLcr9rIo5CLcAc70VLTFyj28e7VKrv1qZW6ySoRT7WJbWs1M64DvL5J8KyocLvsWCyTPDTmMHHkGYollPZCnFGOVziZ0rZ+VvAKxMqsjqxWjg3IOWsTOdh6BWGNZrYHIM/3eKsveMgeiN8/PnEZUGUk65XbsSKvk8NxknJUaTpZA9KQ420hFtS/5+uXUfLWoW9LvsSzVPxDvWZZy5hGl0mpyjTL1CkRhN3sulq/qNCc03W1ZCCdNIMw85opaKtHuYoewVnaE3grMP2il5E+XrB/q/pdwca5skWm/UEULHGVDmK/Yi2tTPT5iy8Icx5U+czR/Qga7k+TTgqTdDZ7PqUqBmVI/I5s8Zk/TnDhlxTTYBMPsS5qdqdB7X2EA/wO4WSD7SJrI9AAAAABJRU5ErkJggg=='\" alt=\"Github Logo\"/>\n            </a>\n            <code (click)=\"copyClipboard('npm i progress-button')\" [ngClass]=\"{'copied':clipboardCopied}\">npm i progress-button</code>\n          </div>\n          <ng-scrollbar visibility=\"hover\">\n            <div class=\"settings-content\">\n              <form [formGroup]=\"settingsForm\" novalidate>\n                <h2>Settings</h2>\n                <h3>Data</h3>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Animation</label>\n                  <div class=\"field\">\n                    <ng-select class=\"ydd-select\" formControlName=\"animation\" [clearable]=\"false\">\n                      <ng-option value=\"fill\">Fill</ng-option>\n                      <ng-option value=\"shrink\">Shrink</ng-option>\n                      <ng-option value=\"rotate-angle-bottom\">Rotate Angle Bottom</ng-option>\n                      <ng-option value=\"rotate-angle-top\">Rotate Angle Top</ng-option>\n                      <ng-option value=\"rotate-angle-left\">Rotate Angle Left</ng-option>\n                      <ng-option value=\"rotate-angle-right\">Rotate Angle Right</ng-option>\n                      <ng-option value=\"rotate-side-down\">Rotate Side Down</ng-option>\n                      <ng-option value=\"rotate-side-up\">Rotate Side Up</ng-option>\n                      <ng-option value=\"rotate-side-left\">Rotate Side Left</ng-option>\n                      <ng-option value=\"rotate-side-right\">Rotate Side Right</ng-option>\n                      <ng-option value=\"rotate-back\">Rotate Back</ng-option>\n                      <ng-option value=\"flip-open\">Flip Open</ng-option>\n                      <ng-option value=\"slide-down\">Slide Down</ng-option>\n                      <ng-option value=\"move-up\">Move Up</ng-option>\n                      <ng-option value=\"top-line\">Top Line</ng-option>\n                      <ng-option value=\"lateral-lines\">Lateral Lines</ng-option>\n                    </ng-select>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Direction</label>\n                  <div class=\"field\" [ngClass]=\"[(progressData.animation === 'lateral-lines')?'disabled':'']\">\n                    <ng-select class=\"ydd-select\" formControlName=\"direction\" [clearable]=\"false\">\n                      <ng-option value=\"horizontal\">Horizontal</ng-option>\n                      <ng-option value=\"vertical\">Vertical</ng-option>\n                    </ng-select>\n                    <small *ngIf=\"(progressData.animation === 'lateral-lines')\">\n                      This property is always vertical when Lateral Lines animation is selected\n                    </small>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Status</label>\n                  <div class=\"field\">\n                    <ng-select class=\"ydd-select\" formControlName=\"status\" [clearable]=\"false\">\n                      <ng-option value=\"success\">Success</ng-option>\n                      <ng-option value=\"error\">Error</ng-option>\n                    </ng-select>\n                  </div>\n                </div>\n                <h3>Design</h3>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"background\" name=\"background\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.background}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Text Color</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"color\" name=\"color\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.color}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Success Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"successBackground\" name=\"successBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.successBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Error Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"errorBackground\" name=\"errorBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.errorBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Success Icon</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"successIconColor\" name=\"successIconColor\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.successIconColor}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Error Icon</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"errorIconColor\" name=\"errorIconColor\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.errorIconColor}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Progress Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"progressBackground\" name=\"progressBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.progressBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Progress Inner Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"progressInnerBackground\" name=\"progressInnerBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.progressInnerBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Line Sizes</label>\n                  <div class=\"field\" [ngClass]=\"[(!isLinesSize())?'disabled':'']\">\n                    <ng-select class=\"ydd-select\" formControlName=\"linesSize\" [clearable]=\"false\">\n                      <ng-option value=\"5\">5px</ng-option>\n                      <ng-option value=\"10\">10px</ng-option>\n                      <ng-option value=\"20\">20px</ng-option>\n                    </ng-select>\n                    <small *ngIf=\"!isLinesSize()\">\n                      This property is disabled with the current animation\n                    </small>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Border Radius</label>\n                  <div class=\"field\" [ngClass]=\"[(isRotateAnimation())?'disabled':'']\">\n                    <ng-select class=\"ydd-select\" formControlName=\"radius\" [clearable]=\"false\">\n                      <ng-option value=\"0\">None</ng-option>\n                      <ng-option value=\"10\">10px</ng-option>\n                      <ng-option value=\"20\">20px</ng-option>\n                      <ng-option value=\"50\">50px</ng-option>\n                    </ng-select>\n                    <small *ngIf=\"isRotateAnimation()\">This property is disabled with the current animation</small>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </ng-scrollbar>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "jXwu":
    /*!******************************************************************************!*\
      !*** ./projects/progress-button/src/lib/progress-button.component.vars.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function jXwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnZhcnMuc2NzcyJ9 */";
      /***/
    },

    /***/
    "lKGO":
    /*!********************************************************************************!*\
      !*** ./projects/progress-button/src/lib/progress-button.component.styles.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function lKGO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".progress-button {\n  transition: background 0.2s;\n  /***************************************************** Fill */\n  /***************************************************** Shrink */\n  /***************************************************** Rotate Bottom 3D */\n  /***************************************************** Rotate Top 3D */\n  /***************************************************** Rotate Left 3D */\n  /***************************************************** Rotate Right 3D */\n  /***************************************************** Rotate Side Down 3D */\n  /***************************************************** Rotate Side Up 3D */\n  /***************************************************** Rotate Side Left 3D */\n  /***************************************************** Rotate Side Right 3D */\n  /***************************************************** Rotate Back 3D */\n  /***************************************************** Flip Open 3D */\n  /***************************************************** Slide Down */\n  /***************************************************** Move Up */\n  /***************************************************** Top Line */\n  /***************************************************** Lateral Lines */\n}\n.progress-button[data-style=fill][data-horizontal], .progress-button[data-style=fill][data-vertical] {\n  overflow: hidden;\n}\n.progress-button[data-style=fill][data-horizontal] .content, .progress-button[data-style=fill][data-vertical] .content {\n  z-index: 10;\n  transition: transform 0.3s;\n}\n.progress-button[data-style=fill][data-horizontal] .content .success, .progress-button[data-style=fill][data-horizontal] .content .error, .progress-button[data-style=fill][data-vertical] .content .success, .progress-button[data-style=fill][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=fill][data-horizontal].state-success .content, .progress-button[data-style=fill][data-horizontal].state-error .content, .progress-button[data-style=fill][data-vertical].state-success .content, .progress-button[data-style=fill][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink] {\n  overflow: hidden;\n  transition: transform 0.2s, border-radius 0.2s linear;\n}\n.progress-button[data-style=shrink][data-horizontal] .content, .progress-button[data-style=shrink][data-vertical] .content {\n  transition: opacity 0.3s, transform 0.3s, border-radius 0.3s linear, padding 0.3s linear;\n}\n.progress-button[data-style=shrink][data-horizontal] .content .success, .progress-button[data-style=shrink][data-horizontal] .content .error, .progress-button[data-style=shrink][data-vertical] .content .success, .progress-button[data-style=shrink][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s, border-radius 0.3s linear;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading, .progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleY(0.3);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading .content, .progress-button[data-style=shrink][data-vertical].state-loading .content {\n  opacity: 0;\n}\n.progress-button[data-style=shrink][data-horizontal].state-success .content, .progress-button[data-style=shrink][data-horizontal].state-error .content, .progress-button[data-style=shrink][data-vertical].state-success .content, .progress-button[data-style=shrink][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleX(0.1);\n}\n.progress-button[data-style=shrink].radius.state-loading {\n  transform: scale3d(0.3, 0.3, 1);\n}\n.progress-button[data-style=shrink].radius.state-loading .content {\n  padding: 20px 120px;\n}\n.progress-button[data-style=shrink].radius[data-vertical].state-loading {\n  transform: scale3d(0.3, 0.3, 1) rotate(-90deg);\n}\n.progress-button[data-style=shrink].radius[data-vertical].state-loading .content {\n  padding: 20px 60px;\n}\n.progress-button[data-style=rotate-angle-bottom] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=rotate-angle-bottom].state-loading .progress-wrap {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=rotate-angle-top] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n}\n.progress-button[data-style=rotate-angle-top].state-loading .progress-wrap {\n  transform: rotateX(-45deg);\n}\n.progress-button[data-style=rotate-angle-left] .progress {\n  position: absolute;\n  top: 0;\n  right: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(-90deg);\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-angle-left].state-loading .progress-wrap {\n  transform: rotateY(45deg);\n}\n.progress-button[data-style=rotate-angle-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: -1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-angle-right].state-loading .progress-wrap {\n  transform: rotateY(-45deg);\n}\n.progress-button[data-style=rotate-side-down] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-down].state-loading .progress-wrap {\n  transform: rotateX(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-up] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-up].state-loading .progress-wrap {\n  transform: rotateX(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-left] .progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left] .progress-wrap {\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left].state-loading .progress-wrap {\n  transform: translateX(50%) rotateY(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-right] .progress-wrap {\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-side-right].state-loading .progress-wrap {\n  transform: translateX(-50%) rotateY(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-back] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotateX(-180deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back] .progress-wrap {\n  transition-timing-function: ease-out;\n}\n.progress-button[data-style=rotate-back] .content {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back].state-loading .progress-wrap {\n  transform: rotateX(180deg) scaleX(0.6) scaleY(0.3);\n}\n.progress-button[data-style=flip-open] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 30%;\n}\n.progress-button[data-style=flip-open] .content {\n  z-index: 10;\n  transition: transform 0.2s, background 0.2s;\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=flip-open].state-loading .content {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=flip-open].radius .progress {\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  overflow: hidden;\n}\n.progress-button[data-style=flip-open].radius.state-loading .progress {\n  opacity: 1;\n}\n.progress-button[data-style=slide-down] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=slide-down] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10px;\n  transition: transform 0.2s, opacity 0.2s;\n}\n.progress-button[data-style=slide-down] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n.progress-button[data-style=slide-down].state-loading .progress {\n  transform: translateY(10px);\n}\n.progress-button[data-style=slide-down].radius .progress, .progress-button[data-style=slide-down].radius .progress-inner {\n  height: 100%;\n  opacity: 0;\n  overflow: hidden;\n}\n.progress-button[data-style=slide-down].radius.state-loading .progress {\n  transform: translateY(5px);\n}\n.progress-button[data-style=slide-down].radius.state-loading .progress, .progress-button[data-style=slide-down].radius.state-loading .progress-inner {\n  opacity: 1;\n}\n.progress-button[data-style=move-up] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=move-up] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 15px;\n  transition: opacity 0.2s;\n}\n.progress-button[data-style=move-up] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n  transition: transform 0.2s, opacity 0.2s;\n}\n.progress-button[data-style=move-up].state-loading .content {\n  transform: translateY(-15px);\n}\n.progress-button[data-style=move-up].radius .progress, .progress-button[data-style=move-up].radius .progress-inner {\n  height: 100%;\n  opacity: 0;\n  overflow: hidden;\n}\n.progress-button[data-style=move-up].radius.state-loading .content {\n  transform: translateY(-5px);\n}\n.progress-button[data-style=move-up].radius.state-loading .progress, .progress-button[data-style=move-up].radius.state-loading .progress-inner {\n  opacity: 1;\n}\n.progress-button[data-style=top-line] {\n  transition: background 0.2s;\n  overflow: hidden;\n}\n.progress-button[data-style=top-line] .progress-inner {\n  height: 10px;\n}\n.progress-button[data-style=lateral-lines] {\n  overflow: hidden;\n}\n.progress-button[data-style=lateral-lines] .progress-inner {\n  width: 100%;\n  border-right-style: solid;\n  border-left-style: solid;\n  border-right-width: 10px;\n  border-left-width: 10px;\n  border-color: \"#555555\";\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHByb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQudmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsMkJBQUE7RUFDQSw2REFBQTtFQTZCQSwrREFBQTtFQXFFQSx5RUFBQTtFQXVCQSxzRUFBQTtFQXVCQSx1RUFBQTtFQXVCQSx3RUFBQTtFQXVCQSw0RUFBQTtFQXdCQSwwRUFBQTtFQXdCQSw0RUFBQTtFQTJCQSw2RUFBQTtFQTJCQSx1RUFBQTtFQWtDQSxxRUFBQTtFQTJDQSxtRUFBQTtFQW1EQSxnRUFBQTtFQXFEQSxpRUFBQTtFQWdCQSxzRUFBQTtBQTNkRjtBQVpJO0VBQ0UsZ0JBQUE7QUFjTjtBQVpNO0VBQ0UsV0FBQTtFQUVBLDBCQUFBO0FBY1I7QUFaUTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLHdCQUFBO0VBRUEsMkJBQUE7QUFjVjtBQVZNO0VBR0UsNEJBQUE7QUFXUjtBQUxFO0VBQ0UsZ0JBQUE7RUFFQSxxREFBQTtBQU9KO0FBSk07RUFFRSx3RkFBQTtBQU1SO0FBSlE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxtREFBQTtFQUVBLDJCQUFBO0FBTVY7QUFGTTtFQUVFLHNCQUFBO0FBSVI7QUFGUTtFQUNFLFVBQUE7QUFJVjtBQUFNO0VBR0UsNEJBQUE7QUFDUjtBQUlNO0VBRUUsc0JBQUE7QUFGUjtBQU9NO0VBRUUsK0JBQUE7QUFMUjtBQU9RO0VBQ0UsbUJBQUE7QUFMVjtBQVVRO0VBRUUsOENBQUE7QUFSVjtBQVVVO0VBQ0Usa0JBQUE7QUFSWjtBQWtCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQXdDLHlDQUFBO0VBRXhDLDBCQUFBO0VBRUEsdUJBQUE7QUFmTjtBQW1CTTtFQUVFLHlCQUFBO0FBakJSO0FBd0JJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFBd0MseUNBQUE7RUFFeEMseUJBQUE7RUFFQSwwQkFBQTtBQXJCTjtBQXlCTTtFQUVFLDBCQUFBO0FBdkJSO0FBOEJJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFBdUMseUNBQUE7RUFFdkMsMEJBQUE7RUFFQSwwQkFBQTtBQTNCTjtBQStCTTtFQUVFLHlCQUFBO0FBN0JSO0FBb0NJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFBd0MseUNBQUE7RUFFeEMseUJBQUE7RUFFQSx1QkFBQTtBQWpDTjtBQXFDTTtFQUVFLDBCQUFBO0FBbkNSO0FBMENJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUF4Q047QUE0Q007RUFFRSwwQ0FBQTtBQTFDUjtBQWlESTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBRUEsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBL0NOO0FBbURNO0VBRUUsMkNBQUE7QUFqRFI7QUF3REk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUVBLHVCQUFBO0FBdEROO0FBeURJO0VBRUUsdUJBQUE7QUF2RE47QUEyRE07RUFFRSwwREFBQTtBQXpEUjtBQWdFSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBRUEsdUJBQUE7QUE5RE47QUFpRUk7RUFFRSwwQkFBQTtBQS9ETjtBQW1FTTtFQUVFLDREQUFBO0FBakVSO0FBd0VJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7RUFFQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUF0RU47QUF5RUk7RUFFRSxvQ0FBQTtBQXZFTjtBQTBFSTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7QUF4RU47QUE0RU07RUFFRSxrREFBQTtBQTFFUjtBQWlGSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUEvRU47QUFrRkk7RUFDRSxXQUFBO0VBRUEsMkNBQUE7RUFFQSx1QkFBQTtBQWhGTjtBQW9GTTtFQUVFLHlCQUFBO0FBbEZSO0FBdUZNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtFQUNBLGdCQUFBO0FBckZSO0FBeUZRO0VBQ0UsVUFBQTtBQXZGVjtBQThGRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUE1Rko7QUE4Rkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQ3pYbUI7RUQyWG5CLHdDQUFBO0FBNUZOO0FBK0ZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJDM1ljO0FEOFNwQjtBQWlHTTtFQUVFLDJCQUFBO0FBL0ZSO0FBb0dNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWxHUjtBQXNHUTtFQUVFLDBCQUFBO0FBcEdWO0FBdUdRO0VBQ0UsVUFBQTtBQXJHVjtBQTRHRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUExR0o7QUE0R0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQzFhZ0I7RUQ0YWhCLHdCQUFBO0FBMUdOO0FBNkdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJDOWJjO0VEZ2NkLHdDQUFBO0FBM0dOO0FBK0dNO0VBRUUsNEJBQUE7QUE3R1I7QUFrSE07RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBaEhSO0FBb0hRO0VBRUUsMkJBQUE7QUFsSFY7QUFxSFE7RUFDRSxVQUFBO0FBbkhWO0FBMEhFO0VBRUUsMkJBQUE7RUFDQSxnQkFBQTtBQXhISjtBQXlISTtFQUNFLFlDM2RNO0FEb1daO0FBa0lFO0VBQ0UsZ0JBQUE7QUFoSUo7QUFpSUk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQzVlTTtFRDZlTix1QkM3ZU07RUQ4ZU4sdUJDaGZxQjtFRGlmckIsdUJBQUE7QUEvSE4iLCJmaWxlIjoicHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQudmFyc1wiO1xyXG5cclxuLnByb2dyZXNzLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGaWxsICovXHJcbiAgJltkYXRhLXN0eWxlPVwiZmlsbFwiXSB7XHJcbiAgICAmW2RhdGEtaG9yaXpvbnRhbF0sICZbZGF0YS12ZXJ0aWNhbF0ge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHJcbiAgICAgICAgLnN1Y2Nlc3MsIC5lcnJvciB7XHJcbiAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsXHJcbiAgICAgICYuc3RhdGUtZXJyb3IgLmNvbnRlbnQge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogU2hyaW5rICovXHJcbiAgJltkYXRhLXN0eWxlPVwic2hyaW5rXCJdIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMsIGJvcmRlci1yYWRpdXMgMC4ycyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm9yZGVyLXJhZGl1cyAwLjJzIGxpbmVhcjtcclxuXHJcbiAgICAmW2RhdGEtaG9yaXpvbnRhbF0sICZbZGF0YS12ZXJ0aWNhbF0ge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIGJvcmRlci1yYWRpdXMgMC4zcyBsaW5lYXIsIHBhZGRpbmcgMC4zcyBsaW5lYXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzIGxpbmVhciwgcGFkZGluZyAwLjNzIGxpbmVhcjtcclxuXHJcbiAgICAgICAgLnN1Y2Nlc3MsIC5lcnJvciB7XHJcbiAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBib3JkZXItcmFkaXVzIDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBib3JkZXItcmFkaXVzIDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjMpO1xyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50LFxyXG4gICAgICAmLnN0YXRlLWVycm9yIC5jb250ZW50IHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZbZGF0YS12ZXJ0aWNhbF0ge1xyXG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yYWRpdXMge1xyXG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDEpO1xyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJltkYXRhLXZlcnRpY2FsXSB7XHJcbiAgICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAxKSByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMSkgcm90YXRlKC05MGRlZyk7XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBCb3R0b20gM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtYW5nbGUtYm90dG9tXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0xcHggMCAkcm90YXRlQmx1cnJpbmVzczsgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnN0YXRlLWxvYWRpbmcge1xyXG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgVG9wIDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLXRvcFwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIExlZnQgM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtYW5nbGUtbGVmdFwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAwIDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDQ1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFJpZ2h0IDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLXJpZ2h0XCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3gtc2hhZG93OiAtMXB4IDAgMCAkcm90YXRlQmx1cnJpbmVzczsgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC00NWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC00NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgU2lkZSBEb3duIDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLXNpZGUtZG93blwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgU2lkZSBVcCAzRCAqL1xyXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1zaWRlLXVwXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIExlZnQgM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtc2lkZS1sZWZ0XCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgUmlnaHQgM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtc2lkZS1yaWdodFwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgQmFjayAzRCAqL1xyXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1iYWNrXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRmxpcCBPcGVuIDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwiZmxpcC1vcGVuXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMsIGJhY2tncm91bmQgMC4ycztcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGJhY2tncm91bmQgMC4ycztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yYWRpdXMge1xyXG4gICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZSBEb3duICovXHJcbiAgJltkYXRhLXN0eWxlPVwic2xpZGUtZG93blwiXSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogYXV0bztcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgICAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHQpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yYWRpdXMge1xyXG4gICAgICAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0UmFkaXVzKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHRSYWRpdXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2dyZXNzLCAucHJvZ3Jlc3MtaW5uZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBNb3ZlIFVwICovXHJcbiAgJltkYXRhLXN0eWxlPVwibW92ZS11cFwiXSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogYXV0bztcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAkbW92ZVVwUHJvZ3Jlc3NIZWlnaHQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgcGFkZGluZzogMjBweCA2MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYnV0dG9uQmFja2dyb3VuZDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnM7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kbW92ZVVwUHJvZ3Jlc3NIZWlnaHQpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJG1vdmVVcFByb2dyZXNzSGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmFkaXVzIHtcclxuICAgICAgLnByb2dyZXNzLCAucHJvZ3Jlc3MtaW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRtb3ZlVXBQcm9ncmVzc0hlaWdodFJhZGl1cyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRtb3ZlVXBQcm9ncmVzc0hlaWdodFJhZGl1cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFRvcCBMaW5lICovXHJcbiAgJltkYXRhLXN0eWxlPVwidG9wLWxpbmVcIl0ge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnByb2dyZXNzLWlubmVyIHtcclxuICAgICAgaGVpZ2h0OiAkbGluZXNTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgLnN1Y2Nlc3MsIC5lcnJvciB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTGF0ZXJhbCBMaW5lcyAqL1xyXG4gICZbZGF0YS1zdHlsZT1cImxhdGVyYWwtbGluZXNcIl0ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJGxpbmVzU2l6ZTtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICRsaW5lc1NpemU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYnV0dG9uQmFja2dyb3VuZCA6ICcjMjIyMjIyJztcclxuJGJ1dHRvblRleHRDb2xvciA6ICcjRkZGRkZGJztcclxuJGJ1dHRvblN1Y2Nlc3NCYWNrZ3JvdW5kIDogJyMwMGUxNzUnO1xyXG4kYnV0dG9uRXJyb3JCYWNrZ3JvdW5kIDogJyNmZjBjMDAnO1xyXG4kc3VjY2Vzc0ljb25Db2xvciA6ICcjZmZmZmZmJztcclxuJGVycm9ySWNvbkNvbG9yIDogJyNmZmZmZmYnO1xyXG4kcHJvZ3Jlc3NCYWNrZ3JvdW5kIDogJyMwMDAwMDAnO1xyXG4kcHJvZ3Jlc3NJbm5lckJhY2tncm91bmQgOiAnIzU1NTU1NSc7XHJcbiRyb3RhdGVCbHVycmluZXNzOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiRsaW5lc1NpemU6IDEwcHg7XHJcbiRzbGlkZURvd25Qcm9ncmVzc0hlaWdodDoxMHB4O1xyXG4kc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHRSYWRpdXM6NXB4O1xyXG4kbW92ZVVwUHJvZ3Jlc3NIZWlnaHQ6MTVweDtcclxuJG1vdmVVcFByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcclxuIl19 */";
      /***/
    },

    /***/
    "qaqn":
    /*!*********************************************************************!*\
      !*** ./projects/progress-button/src/lib/progress-button.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ProgressButtonService */

    /***/
    function qaqn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressButtonService", function () {
        return ProgressButtonService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _progress_button_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./progress-button.types */
      "F/Ek");

      var ProgressButtonService = /*#__PURE__*/function () {
        function ProgressButtonService() {
          var _this3 = this;

          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _progress_button_types__WEBPACK_IMPORTED_MODULE_2__["ProgressButtonConfig"]();

          _classCallCheck(this, ProgressButtonService);

          /**
           * Check if animation is active
           * @param name ProgressButtonAnimation Animation name
           */
          this.isAnimation = function (name) {
            return _this3.progress.animation === name;
          };
          /**
           * Return some progress styles
           * @param progressValue The progress value
           * @param statusClass The status (state-success | state-error)
           */


          this.styles = function (progressValue, statusClass) {
            return {
              progressInner: _this3.progressInnerStyle(progressValue),
              button: _this3.buttonStyle(statusClass),
              content: _this3.contentStyle(statusClass)
            };
          };
          /**
           * Get the Progress Inner Style
           * @param progressValue The progress value
           */


          this.progressInnerStyle = function (progressValue) {
            var style = {
              background: _this3.design.progressInnerBackground,
              borderColor: null,
              borderLeftWidth: null,
              borderRightWidth: null,
              height: null,
              width: null
            }; // Reset LinesSize

            if (_this3.design.linesSize === null || typeof _this3.design.linesSize === 'undefined') {
              _this3.design.linesSize = 10;
            } // Lateral Lines


            if (_this3.isAnimation('lateral-lines')) {
              style.background = null;
              style.borderColor = _this3.design.progressInnerBackground;
              style.borderLeftWidth = _this3.design.linesSize + 'px';
              style.borderRightWidth = _this3.design.linesSize + 'px';
            } // Set Size


            style.height = _this3.progressInnerHeight(progressValue);
            style.width = _this3.progressInnerWidth(progressValue);
            return style;
          };
          /**
           * Get Calculated Progress Inner Width
           */


          this.progressInnerWidth = function (progressValue) {
            if (_this3.progress.direction === 'horizontal') {
              return progressValue + '%';
            } else {
              if (_this3.isAnimation('shrink') && _this3.design.radius) {
                return progressValue + '%';
              }
            }

            if (_this3.isAnimation('top-line')) {
              return _this3.design.linesSize + 'px';
            }

            return null;
          };
          /**
           * Get Calculated Progress Inner Height
           */


          this.progressInnerHeight = function (progressValue) {
            if (_this3.progress.direction === 'vertical') {
              if (_this3.isAnimation('shrink') && _this3.design.radius) {
                return '100%';
              }

              return progressValue + '%';
            }

            if (_this3.isAnimation('top-line')) {
              return _this3.design.linesSize + 'px';
            }

            return null;
          };
          /**
           * Get the background color of the button according to the status
           */


          this.mainBackgroundColor = function (statusClass) {
            var bg = _this3.design.background;

            switch (statusClass) {
              case 'state-success':
                bg = _this3.design.successBackground;
                break;

              case 'state-error':
                bg = _this3.design.errorBackground;
                break;
            }

            return bg;
          };
          /**
           * Get css style of the button
           */


          this.buttonStyle = function (statusClass) {
            return {
              background: !_this3.status.isPerspective ? _this3.mainBackgroundColor(statusClass) : null,
              color: _this3.design.color,
              borderRadius: _this3.status.isBorderRadius ? _this3.design.radius + 'px' : null
            };
          };
          /**
           * Get the content style according to the status
           */


          this.contentStyle = function (statusClass) {
            return {
              background: _this3.status.isContentBackground ? _this3.mainBackgroundColor(statusClass) : null,
              color: _this3.design.color,
              borderRadius: _this3.status.isBorderRadius ? _this3.design.radius + 'px' : null
            };
          };

          var defConfig = new _progress_button_types__WEBPACK_IMPORTED_MODULE_2__["ProgressButtonConfig"]();
          this.progressP = config.progress ? Object.assign({}, config.progress) : Object.assign({}, defConfig.progress);
          this.designP = config.design ? Object.assign({}, config.design) : Object.assign({}, defConfig.design);
        }
        /**
         * Return the status of the data
         */


        _createClass(ProgressButtonService, [{
          key: "status",
          get: function get() {
            var status = {
              perspective: null,
              isHorizontal: true,
              isPerspective: false,
              isBorderRadius: false,
              isRotateAnimation: false,
              isFlipAnimation: false,
              isSlideDownAnimation: false,
              isMoveUpAnimation: false,
              isContentBackground: false
            };
            status.isHorizontal = this.progress.direction === 'horizontal';
            status.isRotateAnimation = this.progress.animation.includes('rotate-');
            status.isFlipAnimation = this.progress.animation.includes('flip-');
            status.isSlideDownAnimation = this.progress.animation.includes('slide-down');
            status.isMoveUpAnimation = this.progress.animation.includes('move-up');
            status.perspective = status.isRotateAnimation || status.isFlipAnimation ? '' : null; // Have progress animation 3D perspective

            status.isPerspective = status.perspective !== null;
            status.isBorderRadius = !status.isRotateAnimation && this.design.radius !== null;
            status.isContentBackground = status.isPerspective || status.isSlideDownAnimation || status.isMoveUpAnimation;
            return status;
          }
        }, {
          key: "design",
          get: function get() {
            return this.designP;
          },
          set: function set(value) {
            this.designP = Object(_progress_button_types__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"])(value, this.designP);
          }
        }, {
          key: "progress",
          get: function get() {
            return this.progressP;
          },
          set: function set(value) {
            this.progressP = Object(_progress_button_types__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"])(value, this.progressP);
          }
        }]);

        return ProgressButtonService;
      }();

      ProgressButtonService.ctorParameters = function () {
        return [{
          type: _progress_button_types__WEBPACK_IMPORTED_MODULE_2__["ProgressButtonConfig"]
        }];
      };

      ProgressButtonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProgressButtonService);
      /***/
    },

    /***/
    "s1v4":
    /*!**********************************************************************!*\
      !*** ./projects/progress-button-showcase/src/app/app.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function s1v4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "sM0f":
    /*!***********************************************************************!*\
      !*** ./projects/progress-button/src/lib/progress-button.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ProgressButtonComponent */

    /***/
    function sM0f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressButtonComponent", function () {
        return ProgressButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_progress_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./progress-button.component.html */
      "HKPz");
      /* harmony import */


      var _progress_button_component_vars_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./progress-button.component.vars.scss */
      "jXwu");
      /* harmony import */


      var _progress_button_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./progress-button.component.scss */
      "zJVy");
      /* harmony import */


      var _progress_button_component_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./progress-button.component.styles.scss */
      "lKGO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _progress_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./progress-button.service */
      "qaqn");

      var ProgressButtonComponent = /*#__PURE__*/function () {
        function ProgressButtonComponent(service) {
          var _this4 = this;

          _classCallCheck(this, ProgressButtonComponent);

          this.service = service;
          this.progressValue = 0;
          this.loading = false;
          this.noTransition = false;
          this.statusClass = '';
          /**
           * Specifies the type of button
           */

          this.type = 'button';
          /**
           * Specifies that a button should automatically get focus when the page loads
           */

          this.autofocus = null;
          /**
           * Specifies that a button should be disabled
           */

          this.disabled = null;
          /**
           *  Fires on a mouse click on the element
           */

          this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          /**
           * Execute click action
           */

          this.click = function () {
            _this4.action.emit(_this4);
          };
          /**
           * Init the progress component
           */


          this.progressInit = function () {
            _this4.disabled = true;
            _this4.loading = true;
            _this4.noTransition = false;
            _this4.progressValue = 0;
          };
          /**
           * Stop the progress animation
           * @param status ProgressButtonStatus State of stop (error, success)
           * @return Observable An observable with after-init and complete steps
           */


          this.progressStop = function (status) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (observer) {
              observer.next('before-init');
              var tim1 = setTimeout(function () {
                _this4.noTransition = true;
                _this4.progressValue = 0;
                _this4.loading = false;
                _this4.statusClass = 'state-' + status;
                observer.next('after-init');
                var tim2 = setTimeout(function () {
                  _this4.statusClass = '';
                  _this4.disabled = null;
                  observer.complete();
                  clearTimeout(tim1);
                  clearTimeout(tim2);
                }, _this4.progress.statusTime);
              }, 300);
            });
          };

          this.progress = this.service.progress;
          this.design = this.service.design;
        }
        /**
         * Return the status of the progress data
         */


        _createClass(ProgressButtonComponent, [{
          key: "status",
          get: function get() {
            return this.service.status;
          }
          /**
           * Return styles of the button and its components
           */

        }, {
          key: "styles",
          get: function get() {
            return this.service.styles(this.progressValue, this.statusClass);
          }
          /**
           * Progress Button Data
           * @param progress ProgressButtonData The Progress Button Data
           */

        }, {
          key: "progress",
          get:
          /**
           * The Progress Button Data
           */
          function get() {
            return this.service.progress;
          }
          /**
           * Progress Button Design
           * @param design ProgressButtonDesign The Progress Button Design
           */
          ,
          set: function set(progress) {
            this.service.progress = progress;
          }
        }, {
          key: "design",
          get:
          /**
           * The Progress Button Design
           */
          function get() {
            return this.service.design;
          },
          set: function set(design) {
            this.service.design = design;
          }
        }]);

        return ProgressButtonComponent;
      }();

      ProgressButtonComponent.ctorParameters = function () {
        return [{
          type: _progress_button_service__WEBPACK_IMPORTED_MODULE_7__["ProgressButtonService"]
        }];
      };

      ProgressButtonComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        action: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }],
        progress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        design: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      ProgressButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'ydd-progress-button',
        template: _raw_loader_progress_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_progress_button_service__WEBPACK_IMPORTED_MODULE_7__["ProgressButtonService"]],
        styles: [_progress_button_component_vars_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _progress_button_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"], _progress_button_component_styles_scss__WEBPACK_IMPORTED_MODULE_4__["default"]]
      })], ProgressButtonComponent);
      /***/
    },

    /***/
    "tgiV":
    /*!****************************************************************************************!*\
      !*** ./projects/progress-button-showcase/$$_lazy_route_resource lazy namespace object ***!
      \****************************************************************************************/

    /*! no static exports found */

    /***/
    function tgiV(module, exports) {
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
      webpackEmptyAsyncContext.id = "tgiV";
      /***/
    },

    /***/
    "zJVy":
    /*!*************************************************************************!*\
      !*** ./projects/progress-button/src/lib/progress-button.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function zJVy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"icomoon\";\n  src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAPYAA0AAAAABbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABoAAAAcadpakEdERUYAAAFMAAAAHwAAACAAMwAGT1MvMgAAAWwAAAA8AAAAYA6xAoFjbWFwAAABqAAAAEoAAAFKy/Ug/2dhc3AAAAH0AAAACAAAAAgAAAAQZ2x5ZgAAAfwAAABaAAAAfGYDQ4loZWFkAAACWAAAAC0AAAA2Fk6lo2hoZWEAAAKIAAAAHAAAACQHwgPGaG10eAAAAqQAAAAWAAAAFgeVAABsb2NhAAACvAAAAA4AAAAOAEYAHG1heHAAAALMAAAAGAAAACAACAAObmFtZQAAAuQAAADNAAABifyQVWlwb3N0AAADtAAAACMAAAA+PkKaWnicY2BgYGQAgjO2i86D6HPnoh/AaABS9wgqAAB4nGNgZGBg4ANiCQYQYGJgZGBmYAWSLGAeAwAEmwA6AHicY2BmDmWcwMDKwMA0k+kMAwNDP4RmfM1gzMjJgAoYBdAEGBwYFJ4xMh/4D4TMB4A8VKDAwAgAYB4MOXicY2BgYGaAYBkGRgYQcAHyGMF8FgYNIM0GpBkZmBgUnjH+/w/kKzxj+P///2MpFqh6IGBkY4BzGJmABBMDKmCEWDGcAQC49wjcAAAAAQAB//8AD3icVYqxDYAwEAPtfxCKolQUTICYgS6jZacs8Dulf/EKosDFyZYPxBcBbsHcC7RiBfYt8aIZmzTzKtX8bQgvoKYNGThDSwz5SFTzwdJ9+OgsEzEn/gcekeAiHQAAeJxjYGRgYADimev2psfz23xl4GZhAIGbMwwmI9MsDMwNQIqDgQnEAwAiqwkVAAAAeJxjYGRgYD7w/wADAwsDCABJRgZUwAoATFcCkgAAAAAAAAAAAVUAAAIAAAAEAAAAAEAAAAAAAAAAAAAAAAgAHAA+AAB4nGNgZGBgYGPgYQDRDAxMDGgAAAJGABd4nHXOMQ6CMBgF4IeARk2MgzGOjE6GI7ghg4sDcRShISTQJlUS2T2Co2fwGJ7LB/kdadL264PXFMACHzjohoMJluIRvRW79F7s0Wexjzke4jHzl3iGFb5sOd6UyaK/ofOI3ohdOhR79EHsY42LeMz8KZ7xNW+UyGBQcxpooMxMbQxxgkKBBhVSWB5V0VQpMfT/UJ7wHosbv3d5wBfuOJEoeyuNDsJdONyN2NV9P8Wde87+FS3XuG8c/41IaWXTu8qDaxvEmTl29R+0pjoZAAAAeJxjYGLAD9iAmJGBiYGZkYmRmb00L9PVzMAAShsCACiABHMA) format(\"woff\");\n}\n\n/* General styles for all types of buttons */\n\n.progress-button {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  outline: none;\n  border: none;\n  background: \"#222222\";\n  color: \"#FFFFFF\";\n  letter-spacing: 1px;\n  font-size: 1em;\n  line-height: 1.4;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.progress-button[disabled], .progress-button[disabled].state-loading {\n  cursor: default;\n}\n\n.progress-button .content {\n  position: relative;\n  display: block;\n  padding: 20px 60px;\n  transition: background-color 0.2s ease;\n}\n\n.progress-button .content .success, .progress-button .content .error {\n  position: absolute;\n  right: 20px;\n  font-family: \"icomoon\", sans-serif;\n  opacity: 0;\n  transition: opacity 0.3s 0.3s;\n  line-height: 1;\n  top: 0;\n  height: 100%;\n  align-items: center;\n  display: flex;\n}\n\n.progress-button .content .success {\n  color: \"#ffffff\";\n}\n\n.progress-button .content .error {\n  color: \"#ffffff\";\n}\n\n.progress-button.state-success .content .success, .progress-button.state-error .content .error {\n  opacity: 1;\n}\n\n.progress-button .progress {\n  background: \"#000000\";\n}\n\n.progress-button .progress-inner {\n  position: absolute;\n  left: 0;\n  background: \"#555555\";\n}\n\n.progress-button .progress-inner.notransition {\n  transition: none !important;\n}\n\n.progress-button[data-horizontal] .progress-inner {\n  top: 0;\n  width: 0;\n  height: 100%;\n  transition: width 0.3s, opacity 0.3s;\n}\n\n.progress-button[data-vertical] .progress-inner {\n  bottom: 0;\n  width: 100%;\n  height: 0;\n  transition: height 0.3s, opacity 0.3s;\n}\n\n.progress-button[data-perspective] {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  background: transparent;\n  perspective: 900px;\n  /* Necessary 3d styles for buttons with perspective */\n}\n\n.progress-button[data-perspective] .content {\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n\n.progress-button[data-perspective] .progress-wrap {\n  display: block;\n  transition: transform 0.2s;\n  transform-style: preserve-3d;\n}\n\n.progress-button[data-perspective] .content, .progress-button[data-perspective] .progress {\n  outline: 1px solid rgba(0, 0, 0, 0);\n  /* Smoothen jagged edges in FF */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxccHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC52YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHRSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMjJDQUFBO0FBREY7O0FBSUEsNENBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJDdEJrQjtFRHVCbEIsZ0JDdEJpQjtFRHVCakIsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFGRjs7QUFJRTtFQUNFLGVBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFISjs7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSE47O0FBTUk7RUFDRSxnQkNsRGM7QUQ4Q3BCOztBQU9JO0VBQ0UsZ0JDckRZO0FEZ0RsQjs7QUFTRTtFQUVFLFVBQUE7QUFSSjs7QUFXRTtFQUNFLHFCQzlEa0I7QURxRHRCOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EscUJDbkV1QjtBRHlEM0I7O0FBWUk7RUFFRSwyQkFBQTtBQVZOOztBQWVJO0VBQ0UsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEsb0NBQUE7QUFiTjs7QUFrQkk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxxQ0FBQTtBQWhCTjs7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFlQSxxREFBQTtBQWhDSjs7QUFtQkk7RUFDRSxrQkFBQTtFQUNBLHFCQ2hIYztBRCtGcEI7O0FBb0JJO0VBQ0UsY0FBQTtFQUVBLDBCQUFBO0VBRUEsNEJBQUE7QUFsQk47O0FBc0JJO0VBQ0UsbUNBQUE7RUFBcUMsZ0NBQUE7QUFuQjNDIiwiZmlsZSI6InByb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnZhcnNcIjtcclxuXHJcbioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICBzcmM6IHVybChkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBUFlBQTBBQUFBQUJiZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFCTUFBQUFCb0FBQUFjYWRwYWtFZEVSVVlBQUFGTUFBQUFId0FBQUNBQU13QUdUMU12TWdBQUFXd0FBQUE4QUFBQVlBNnhBb0ZqYldGd0FBQUJxQUFBQUVvQUFBRkt5L1VnLzJkaGMzQUFBQUgwQUFBQUNBQUFBQWdBQUFBUVoyeDVaZ0FBQWZ3QUFBQmFBQUFBZkdZRFE0bG9aV0ZrQUFBQ1dBQUFBQzBBQUFBMkZrNmxvMmhvWldFQUFBS0lBQUFBSEFBQUFDUUh3Z1BHYUcxMGVBQUFBcVFBQUFBV0FBQUFGZ2VWQUFCc2IyTmhBQUFDdkFBQUFBNEFBQUFPQUVZQUhHMWhlSEFBQUFMTUFBQUFHQUFBQUNBQUNBQU9ibUZ0WlFBQUF1UUFBQUROQUFBQmlmeVFWV2x3YjNOMEFBQUR0QUFBQUNNQUFBQStQa0thV25pY1kyQmdZR1FBZ2pPMmk4NkQ2SFBub2gvQWFBQlM5d2dxQUFCNG5HTmdaR0JnNEFOaUNRWVFZR0pnWkdCbVlBV1NMR0FlQXdBRW13QTZBSGljWTJCbURtV2N3TURLd01BMGsra01Bd05EUDRSbWZNMWd6TWpKZ0FvWUJkQUVHQndZRko0eE1oLzRENFRNQjRBOFZLREF3QWdBWUI0TU9YaWNZMkJnWUdhQVlCa0dSZ1lRY0FIeUdNRjhGZ1lOSU0wR3BCa1ptQmdVbmpIKy93L2tLenhqK1AvLy8yTXBGcWg2SUdCa1k0QnpHSm1BQkJNREttQ0VXREdjQVFDNDl3amNBQUFBQVFBQi8vOEFEM2ljVllxeERZQXdFQVB0ZnhDS29sUVVUSUNZZ1M2alphY3M4RHVsZi9FS29zREZ5WllQeEJjQmJzSGNDN1JpQmZZdDhhSVptelR6S3RYOGJRZ3ZvS1lOR1RoRFN3ejVTRlR6d2RKOStPZ3NFekVuL2djZWtlQWlIUUFBZUp4allHUmdZQURpbWV2MnBzZnoyM3hsNEdaaEFJR2JNd3dtSTlNc0RNd05RSXFEZ1FuRUF3QWlxd2tWQUFBQWVKeGpZR1JnWUQ3dy93QURBd3NEQ0FCSlJnWlV3QW9BVEZjQ2tnQUFBQUFBQUFBQUFWVUFBQUlBQUFBRUFBQUFBRUFBQUFBQUFBQUFBQUFBQUFnQUhBQStBQUI0bkdOZ1pHQmdZR1BnWVFEUkRBeE1ER2dBQUFKR0FCZDRuSFhPTVE2Q01CZ0Y0SWVBUmsyTWd6R09qRTZHSTdnaGc0c0RjUlNoSVNUUUpsVVMyVDJDbzJmd0dKN0xCL2tkYWRMMjY0UFhGTUFDSHpqb2hvTUpsdUlSdlJXNzlGN3MwV2V4anprZTRqSHpsM2lHRmI1c09kNlV5YUsvb2ZPSTNvaGRPaFI3OUVIc1k0MkxlTXo4S1o3eE5XK1V5R0JRY3hwb29NeE1iUXh4Z2tLQkJoVlNXQjVWMFZRcE1mVC9VSjd3SG9zYnYzZDV3QmZ1T0pFb2V5dU5Ec0pkT055TjJOVjlQOFdkZTg3K0ZTM1h1RzhjLzQxSWFXWFR1OHFEYXh2RW1UbDI5UiswcGpvWkFBQUFlSnhqWUdMQUQ5aUFtSkdCaVlHWmtZbVJtYjAwTDlQVnpNQUFTaHNDQUNpQUJITUEpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcblxyXG4vKiBHZW5lcmFsIHN0eWxlcyBmb3IgYWxsIHR5cGVzIG9mIGJ1dHRvbnMgKi9cclxuLnByb2dyZXNzLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICRidXR0b25CYWNrZ3JvdW5kO1xyXG4gIGNvbG9yOiAkYnV0dG9uVGV4dENvbG9yO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcblxyXG4gICZbZGlzYWJsZWRdLCAmW2Rpc2FibGVkXS5zdGF0ZS1sb2FkaW5nIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweCA2MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcblxyXG4gICAgLnN1Y2Nlc3MsIC5lcnJvciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcImljb21vb25cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIDAuM3M7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiAkc3VjY2Vzc0ljb25Db2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICBjb2xvcjogJGVycm9ySWNvbkNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50IC5zdWNjZXNzLFxyXG4gICYuc3RhdGUtZXJyb3IgLmNvbnRlbnQgLmVycm9yIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzQmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kO1xyXG5cclxuICAgICYubm90cmFuc2l0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZbZGF0YS1ob3Jpem9udGFsXSB7XHJcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcywgb3BhY2l0eSAwLjNzO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzLCBvcGFjaXR5IDAuM3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2RhdGEtdmVydGljYWxdIHtcclxuICAgIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJltkYXRhLXBlcnNwZWN0aXZlXSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA5MDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA5MDBweDtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgICAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE5lY2Vzc2FyeSAzZCBzdHlsZXMgZm9yIGJ1dHRvbnMgd2l0aCBwZXJzcGVjdGl2ZSAqL1xyXG4gICAgLmNvbnRlbnQsIC5wcm9ncmVzcyB7XHJcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApOyAvKiBTbW9vdGhlbiBqYWdnZWQgZWRnZXMgaW4gRkYgKi9cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJ1dHRvbkJhY2tncm91bmQgOiAnIzIyMjIyMic7XHJcbiRidXR0b25UZXh0Q29sb3IgOiAnI0ZGRkZGRic7XHJcbiRidXR0b25TdWNjZXNzQmFja2dyb3VuZCA6ICcjMDBlMTc1JztcclxuJGJ1dHRvbkVycm9yQmFja2dyb3VuZCA6ICcjZmYwYzAwJztcclxuJHN1Y2Nlc3NJY29uQ29sb3IgOiAnI2ZmZmZmZic7XHJcbiRlcnJvckljb25Db2xvciA6ICcjZmZmZmZmJztcclxuJHByb2dyZXNzQmFja2dyb3VuZCA6ICcjMDAwMDAwJztcclxuJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kIDogJyM1NTU1NTUnO1xyXG4kcm90YXRlQmx1cnJpbmVzczogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4kbGluZXNTaXplOiAxMHB4O1xyXG4kc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHQ6MTBweDtcclxuJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcclxuJG1vdmVVcFByb2dyZXNzSGVpZ2h0OjE1cHg7XHJcbiRtb3ZlVXBQcm9ncmVzc0hlaWdodFJhZGl1czo1cHg7XHJcbiJdfQ== */";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map