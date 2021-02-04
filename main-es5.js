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
      /*! /home/travis/build/udede/ydd-progress-button/projects/progress-button-showcase/src/main.ts */
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


      __webpack_exports__["default"] = ".progress-button {\n  transition: background 0.2s;\n  /***************************************************** Fill */\n  /***************************************************** Shrink */\n  /***************************************************** Rotate Bottom 3D */\n  /***************************************************** Rotate Top 3D */\n  /***************************************************** Rotate Left 3D */\n  /***************************************************** Rotate Right 3D */\n  /***************************************************** Rotate Side Down 3D */\n  /***************************************************** Rotate Side Up 3D */\n  /***************************************************** Rotate Side Left 3D */\n  /***************************************************** Rotate Side Right 3D */\n  /***************************************************** Rotate Back 3D */\n  /***************************************************** Flip Open 3D */\n  /***************************************************** Slide Down */\n  /***************************************************** Move Up */\n  /***************************************************** Top Line */\n  /***************************************************** Lateral Lines */\n}\n.progress-button[data-style=fill][data-horizontal], .progress-button[data-style=fill][data-vertical] {\n  overflow: hidden;\n}\n.progress-button[data-style=fill][data-horizontal] .content, .progress-button[data-style=fill][data-vertical] .content {\n  z-index: 10;\n  transition: transform 0.3s;\n}\n.progress-button[data-style=fill][data-horizontal] .content .success, .progress-button[data-style=fill][data-horizontal] .content .error, .progress-button[data-style=fill][data-vertical] .content .success, .progress-button[data-style=fill][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=fill][data-horizontal].state-success .content, .progress-button[data-style=fill][data-horizontal].state-error .content, .progress-button[data-style=fill][data-vertical].state-success .content, .progress-button[data-style=fill][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink] {\n  overflow: hidden;\n  transition: transform 0.2s, border-radius 0.2s linear;\n}\n.progress-button[data-style=shrink][data-horizontal] .content, .progress-button[data-style=shrink][data-vertical] .content {\n  transition: opacity 0.3s, transform 0.3s, border-radius 0.3s linear, padding 0.3s linear;\n}\n.progress-button[data-style=shrink][data-horizontal] .content .success, .progress-button[data-style=shrink][data-horizontal] .content .error, .progress-button[data-style=shrink][data-vertical] .content .success, .progress-button[data-style=shrink][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s, border-radius 0.3s linear;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading, .progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleY(0.3);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading .content, .progress-button[data-style=shrink][data-vertical].state-loading .content {\n  opacity: 0;\n}\n.progress-button[data-style=shrink][data-horizontal].state-success .content, .progress-button[data-style=shrink][data-horizontal].state-error .content, .progress-button[data-style=shrink][data-vertical].state-success .content, .progress-button[data-style=shrink][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleX(0.1);\n}\n.progress-button[data-style=shrink].radius.state-loading {\n  transform: scale3d(0.3, 0.3, 1);\n}\n.progress-button[data-style=shrink].radius.state-loading .content {\n  padding: 20px 120px;\n}\n.progress-button[data-style=shrink].radius[data-vertical].state-loading {\n  transform: scale3d(0.3, 0.3, 1) rotate(-90deg);\n}\n.progress-button[data-style=shrink].radius[data-vertical].state-loading .content {\n  padding: 20px 60px;\n}\n.progress-button[data-style=rotate-angle-bottom] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=rotate-angle-bottom].state-loading .progress-wrap {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=rotate-angle-top] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n}\n.progress-button[data-style=rotate-angle-top].state-loading .progress-wrap {\n  transform: rotateX(-45deg);\n}\n.progress-button[data-style=rotate-angle-left] .progress {\n  position: absolute;\n  top: 0;\n  right: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(-90deg);\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-angle-left].state-loading .progress-wrap {\n  transform: rotateY(45deg);\n}\n.progress-button[data-style=rotate-angle-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: -1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-angle-right].state-loading .progress-wrap {\n  transform: rotateY(-45deg);\n}\n.progress-button[data-style=rotate-side-down] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-down].state-loading .progress-wrap {\n  transform: rotateX(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-up] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-up].state-loading .progress-wrap {\n  transform: rotateX(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-left] .progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left] .progress-wrap {\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left].state-loading .progress-wrap {\n  transform: translateX(50%) rotateY(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-right] .progress-wrap {\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-side-right].state-loading .progress-wrap {\n  transform: translateX(-50%) rotateY(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-back] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotateX(-180deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back] .progress-wrap {\n  transition-timing-function: ease-out;\n}\n.progress-button[data-style=rotate-back] .content {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back].state-loading .progress-wrap {\n  transform: rotateX(180deg) scaleX(0.6) scaleY(0.3);\n}\n.progress-button[data-style=flip-open] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 30%;\n}\n.progress-button[data-style=flip-open] .content {\n  z-index: 10;\n  transition: transform 0.2s, background 0.2s;\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=flip-open].state-loading .content {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=flip-open].radius .progress {\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  overflow: hidden;\n}\n.progress-button[data-style=flip-open].radius.state-loading .progress {\n  opacity: 1;\n}\n.progress-button[data-style=slide-down] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=slide-down] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10px;\n  transition: transform 0.2s, opacity 0.2s;\n}\n.progress-button[data-style=slide-down] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n.progress-button[data-style=slide-down].state-loading .progress {\n  transform: translateY(10px);\n}\n.progress-button[data-style=slide-down].radius .progress, .progress-button[data-style=slide-down].radius .progress-inner {\n  height: 100%;\n  opacity: 0;\n  overflow: hidden;\n}\n.progress-button[data-style=slide-down].radius.state-loading .progress {\n  transform: translateY(5px);\n}\n.progress-button[data-style=slide-down].radius.state-loading .progress, .progress-button[data-style=slide-down].radius.state-loading .progress-inner {\n  opacity: 1;\n}\n.progress-button[data-style=move-up] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=move-up] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 15px;\n  transition: opacity 0.2s;\n}\n.progress-button[data-style=move-up] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n  transition: transform 0.2s, opacity 0.2s;\n}\n.progress-button[data-style=move-up].state-loading .content {\n  transform: translateY(-15px);\n}\n.progress-button[data-style=move-up].radius .progress, .progress-button[data-style=move-up].radius .progress-inner {\n  height: 100%;\n  opacity: 0;\n  overflow: hidden;\n}\n.progress-button[data-style=move-up].radius.state-loading .content {\n  transform: translateY(-5px);\n}\n.progress-button[data-style=move-up].radius.state-loading .progress, .progress-button[data-style=move-up].radius.state-loading .progress-inner {\n  opacity: 1;\n}\n.progress-button[data-style=top-line] {\n  transition: background 0.2s;\n  overflow: hidden;\n}\n.progress-button[data-style=top-line] .progress-inner {\n  height: 10px;\n}\n.progress-button[data-style=lateral-lines] {\n  overflow: hidden;\n}\n.progress-button[data-style=lateral-lines] .progress-inner {\n  width: 100%;\n  border-right-style: solid;\n  border-left-style: solid;\n  border-right-width: 10px;\n  border-left-width: 10px;\n  border-color: \"#555555\";\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLDJCQUFBO0VBQ0EsNkRBQUE7RUE2QkEsK0RBQUE7RUFxRUEseUVBQUE7RUF1QkEsc0VBQUE7RUF1QkEsdUVBQUE7RUF1QkEsd0VBQUE7RUF1QkEsNEVBQUE7RUF3QkEsMEVBQUE7RUF3QkEsNEVBQUE7RUEyQkEsNkVBQUE7RUEyQkEsdUVBQUE7RUFrQ0EscUVBQUE7RUEyQ0EsbUVBQUE7RUFtREEsZ0VBQUE7RUFxREEsaUVBQUE7RUFnQkEsc0VBQUE7QUEzZEY7QUFaSTtFQUNFLGdCQUFBO0FBY047QUFaTTtFQUNFLFdBQUE7RUFFQSwwQkFBQTtBQWNSO0FBWlE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSx3QkFBQTtFQUVBLDJCQUFBO0FBY1Y7QUFWTTtFQUdFLDRCQUFBO0FBV1I7QUFMRTtFQUNFLGdCQUFBO0VBRUEscURBQUE7QUFPSjtBQUpNO0VBRUUsd0ZBQUE7QUFNUjtBQUpRO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsbURBQUE7RUFFQSwyQkFBQTtBQU1WO0FBRk07RUFFRSxzQkFBQTtBQUlSO0FBRlE7RUFDRSxVQUFBO0FBSVY7QUFBTTtFQUdFLDRCQUFBO0FBQ1I7QUFJTTtFQUVFLHNCQUFBO0FBRlI7QUFPTTtFQUVFLCtCQUFBO0FBTFI7QUFPUTtFQUNFLG1CQUFBO0FBTFY7QUFVUTtFQUVFLDhDQUFBO0FBUlY7QUFVVTtFQUNFLGtCQUFBO0FBUlo7QUFrQkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUF3Qyx5Q0FBQTtFQUV4QywwQkFBQTtFQUVBLHVCQUFBO0FBZk47QUFtQk07RUFFRSx5QkFBQTtBQWpCUjtBQXdCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQXdDLHlDQUFBO0VBRXhDLHlCQUFBO0VBRUEsMEJBQUE7QUFyQk47QUF5Qk07RUFFRSwwQkFBQTtBQXZCUjtBQThCSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQXVDLHlDQUFBO0VBRXZDLDBCQUFBO0VBRUEsMEJBQUE7QUEzQk47QUErQk07RUFFRSx5QkFBQTtBQTdCUjtBQW9DSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQXdDLHlDQUFBO0VBRXhDLHlCQUFBO0VBRUEsdUJBQUE7QUFqQ047QUFxQ007RUFFRSwwQkFBQTtBQW5DUjtBQTBDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDBCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBeENOO0FBNENNO0VBRUUsMENBQUE7QUExQ1I7QUFpREk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUVBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQS9DTjtBQW1ETTtFQUVFLDJDQUFBO0FBakRSO0FBd0RJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFFQSx1QkFBQTtBQXRETjtBQXlESTtFQUVFLHVCQUFBO0FBdkROO0FBMkRNO0VBRUUsMERBQUE7QUF6RFI7QUFnRUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUVBLHVCQUFBO0FBOUROO0FBaUVJO0VBRUUsMEJBQUE7QUEvRE47QUFtRU07RUFFRSw0REFBQTtBQWpFUjtBQXdFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBdEVOO0FBeUVJO0VBRUUsb0NBQUE7QUF2RU47QUEwRUk7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0FBeEVOO0FBNEVNO0VBRUUsa0RBQUE7QUExRVI7QUFpRkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBL0VOO0FBa0ZJO0VBQ0UsV0FBQTtFQUVBLDJDQUFBO0VBRUEsdUJBQUE7QUFoRk47QUFvRk07RUFFRSx5QkFBQTtBQWxGUjtBQXVGTTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBRUEsNkJBQUE7RUFDQSxnQkFBQTtBQXJGUjtBQXlGUTtFQUNFLFVBQUE7QUF2RlY7QUE4RkU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBNUZKO0FBOEZJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUN6WG1CO0VEMlhuQix3Q0FBQTtBQTVGTjtBQStGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQzNZYztBRDhTcEI7QUFpR007RUFFRSwyQkFBQTtBQS9GUjtBQW9HTTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFsR1I7QUFzR1E7RUFFRSwwQkFBQTtBQXBHVjtBQXVHUTtFQUNFLFVBQUE7QUFyR1Y7QUE0R0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBMUdKO0FBNEdJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUMxYWdCO0VENGFoQix3QkFBQTtBQTFHTjtBQTZHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQzliYztFRGdjZCx3Q0FBQTtBQTNHTjtBQStHTTtFQUVFLDRCQUFBO0FBN0dSO0FBa0hNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWhIUjtBQW9IUTtFQUVFLDJCQUFBO0FBbEhWO0FBcUhRO0VBQ0UsVUFBQTtBQW5IVjtBQTBIRTtFQUVFLDJCQUFBO0VBQ0EsZ0JBQUE7QUF4SEo7QUF5SEk7RUFDRSxZQzNkTTtBRG9XWjtBQWtJRTtFQUNFLGdCQUFBO0FBaElKO0FBaUlJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkM1ZU07RUQ2ZU4sdUJDN2VNO0VEOGVOLHVCQ2hmcUI7RURpZnJCLHVCQUFBO0FBL0hOIiwiZmlsZSI6InByb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnZhcnNcIjtcblxuLnByb2dyZXNzLWJ1dHRvbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGaWxsICovXG4gICZbZGF0YS1zdHlsZT1cImZpbGxcIl0ge1xuICAgICZbZGF0YS1ob3Jpem9udGFsXSwgJltkYXRhLXZlcnRpY2FsXSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuXG4gICAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xuICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsXG4gICAgICAmLnN0YXRlLWVycm9yIC5jb250ZW50IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTaHJpbmsgKi9cbiAgJltkYXRhLXN0eWxlPVwic2hyaW5rXCJdIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycywgYm9yZGVyLXJhZGl1cyAwLjJzIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm9yZGVyLXJhZGl1cyAwLjJzIGxpbmVhcjtcblxuICAgICZbZGF0YS1ob3Jpem9udGFsXSwgJltkYXRhLXZlcnRpY2FsXSB7XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBib3JkZXItcmFkaXVzIDAuM3MgbGluZWFyLCBwYWRkaW5nIDAuM3MgbGluZWFyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjNzLCBib3JkZXItcmFkaXVzIDAuM3MgbGluZWFyLCBwYWRkaW5nIDAuM3MgbGluZWFyO1xuXG4gICAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xuICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGJvcmRlci1yYWRpdXMgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBib3JkZXItcmFkaXVzIDAuM3MgbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuMyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMyk7XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50LFxuICAgICAgJi5zdGF0ZS1lcnJvciAuY29udGVudCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmW2RhdGEtdmVydGljYWxdIHtcbiAgICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJhZGl1cyB7XG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMSk7XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJltkYXRhLXZlcnRpY2FsXSB7XG4gICAgICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDEpIHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMSkgcm90YXRlKC05MGRlZyk7XG5cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIEJvdHRvbSAzRCAqL1xuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtYW5nbGUtYm90dG9tXCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFRvcCAzRCAqL1xuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtYW5nbGUtdG9wXCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICB9XG5cbiAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgLnByb2dyZXNzLXdyYXAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIExlZnQgM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLWxlZnRcIl0ge1xuICAgIC5wcm9ncmVzcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDAgMCAkcm90YXRlQmx1cnJpbmVzczsgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgUmlnaHQgM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLXJpZ2h0XCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMTAwJTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm94LXNoYWRvdzogLTFweCAwIDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgICB9XG5cbiAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgLnByb2dyZXNzLXdyYXAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgRG93biAzRCAqL1xuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtc2lkZS1kb3duXCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgVXAgM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLXNpZGUtdXBcIl0ge1xuICAgIC5wcm9ncmVzcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgU2lkZSBMZWZ0IDNEICovXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1zaWRlLWxlZnRcIl0ge1xuICAgIC5wcm9ncmVzcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgICB9XG5cbiAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgLnByb2dyZXNzLXdyYXAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIFJpZ2h0IDNEICovXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1zaWRlLXJpZ2h0XCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMTAwJTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIEJhY2sgM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWJhY2tcIl0ge1xuICAgIC5wcm9ncmVzcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgc2NhbGVYKDAuNikgc2NhbGVZKDAuMyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGbGlwIE9wZW4gM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwiZmxpcC1vcGVuXCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMsIGJhY2tncm91bmQgMC4ycztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYucmFkaXVzIHtcbiAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZSBEb3duICovXG4gICZbZGF0YS1zdHlsZT1cInNsaWRlLWRvd25cIl0ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnM7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcGFkZGluZzogMjBweCA2MHB4O1xuICAgICAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRzbGlkZURvd25Qcm9ncmVzc0hlaWdodCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYucmFkaXVzIHtcbiAgICAgIC5wcm9ncmVzcywgLnByb2dyZXNzLWlubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRzbGlkZURvd25Qcm9ncmVzc0hlaWdodFJhZGl1cyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRzbGlkZURvd25Qcm9ncmVzc0hlaWdodFJhZGl1cyk7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1pbm5lciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBNb3ZlIFVwICovXG4gICZbZGF0YS1zdHlsZT1cIm1vdmUtdXBcIl0ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogJG1vdmVVcFByb2dyZXNzSGVpZ2h0O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkYnV0dG9uQmFja2dyb3VuZDtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbiAgICB9XG5cbiAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgLmNvbnRlbnQge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJG1vdmVVcFByb2dyZXNzSGVpZ2h0KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kbW92ZVVwUHJvZ3Jlc3NIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYucmFkaXVzIHtcbiAgICAgIC5wcm9ncmVzcywgLnByb2dyZXNzLWlubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRtb3ZlVXBQcm9ncmVzc0hlaWdodFJhZGl1cyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kbW92ZVVwUHJvZ3Jlc3NIZWlnaHRSYWRpdXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLCAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogVG9wIExpbmUgKi9cbiAgJltkYXRhLXN0eWxlPVwidG9wLWxpbmVcIl0ge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5wcm9ncmVzcy1pbm5lciB7XG4gICAgICBoZWlnaHQ6ICRsaW5lc1NpemU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgLnN1Y2Nlc3MsIC5lcnJvciB7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTGF0ZXJhbCBMaW5lcyAqL1xuICAmW2RhdGEtc3R5bGU9XCJsYXRlcmFsLWxpbmVzXCJdIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5wcm9ncmVzcy1pbm5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6ICRsaW5lc1NpemU7XG4gICAgICBib3JkZXItbGVmdC13aWR0aDogJGxpbmVzU2l6ZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgLnN1Y2Nlc3MsIC5lcnJvciB7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRidXR0b25CYWNrZ3JvdW5kIDogJyMyMjIyMjInO1xuJGJ1dHRvblRleHRDb2xvciA6ICcjRkZGRkZGJztcbiRidXR0b25TdWNjZXNzQmFja2dyb3VuZCA6ICcjMDBlMTc1JztcbiRidXR0b25FcnJvckJhY2tncm91bmQgOiAnI2ZmMGMwMCc7XG4kc3VjY2Vzc0ljb25Db2xvciA6ICcjZmZmZmZmJztcbiRlcnJvckljb25Db2xvciA6ICcjZmZmZmZmJztcbiRwcm9ncmVzc0JhY2tncm91bmQgOiAnIzAwMDAwMCc7XG4kcHJvZ3Jlc3NJbm5lckJhY2tncm91bmQgOiAnIzU1NTU1NSc7XG4kcm90YXRlQmx1cnJpbmVzczogcmdiYSgwLCAwLCAwLCAwLjMpO1xuJGxpbmVzU2l6ZTogMTBweDtcbiRzbGlkZURvd25Qcm9ncmVzc0hlaWdodDoxMHB4O1xuJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcbiRtb3ZlVXBQcm9ncmVzc0hlaWdodDoxNXB4O1xuJG1vdmVVcFByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcbiJdfQ== */";
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


      __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"icomoon\";\n  src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAPYAA0AAAAABbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABoAAAAcadpakEdERUYAAAFMAAAAHwAAACAAMwAGT1MvMgAAAWwAAAA8AAAAYA6xAoFjbWFwAAABqAAAAEoAAAFKy/Ug/2dhc3AAAAH0AAAACAAAAAgAAAAQZ2x5ZgAAAfwAAABaAAAAfGYDQ4loZWFkAAACWAAAAC0AAAA2Fk6lo2hoZWEAAAKIAAAAHAAAACQHwgPGaG10eAAAAqQAAAAWAAAAFgeVAABsb2NhAAACvAAAAA4AAAAOAEYAHG1heHAAAALMAAAAGAAAACAACAAObmFtZQAAAuQAAADNAAABifyQVWlwb3N0AAADtAAAACMAAAA+PkKaWnicY2BgYGQAgjO2i86D6HPnoh/AaABS9wgqAAB4nGNgZGBg4ANiCQYQYGJgZGBmYAWSLGAeAwAEmwA6AHicY2BmDmWcwMDKwMA0k+kMAwNDP4RmfM1gzMjJgAoYBdAEGBwYFJ4xMh/4D4TMB4A8VKDAwAgAYB4MOXicY2BgYGaAYBkGRgYQcAHyGMF8FgYNIM0GpBkZmBgUnjH+/w/kKzxj+P///2MpFqh6IGBkY4BzGJmABBMDKmCEWDGcAQC49wjcAAAAAQAB//8AD3icVYqxDYAwEAPtfxCKolQUTICYgS6jZacs8Dulf/EKosDFyZYPxBcBbsHcC7RiBfYt8aIZmzTzKtX8bQgvoKYNGThDSwz5SFTzwdJ9+OgsEzEn/gcekeAiHQAAeJxjYGRgYADimev2psfz23xl4GZhAIGbMwwmI9MsDMwNQIqDgQnEAwAiqwkVAAAAeJxjYGRgYD7w/wADAwsDCABJRgZUwAoATFcCkgAAAAAAAAAAAVUAAAIAAAAEAAAAAEAAAAAAAAAAAAAAAAgAHAA+AAB4nGNgZGBgYGPgYQDRDAxMDGgAAAJGABd4nHXOMQ6CMBgF4IeARk2MgzGOjE6GI7ghg4sDcRShISTQJlUS2T2Co2fwGJ7LB/kdadL264PXFMACHzjohoMJluIRvRW79F7s0Wexjzke4jHzl3iGFb5sOd6UyaK/ofOI3ohdOhR79EHsY42LeMz8KZ7xNW+UyGBQcxpooMxMbQxxgkKBBhVSWB5V0VQpMfT/UJ7wHosbv3d5wBfuOJEoeyuNDsJdONyN2NV9P8Wde87+FS3XuG8c/41IaWXTu8qDaxvEmTl29R+0pjoZAAAAeJxjYGLAD9iAmJGBiYGZkYmRmb00L9PVzMAAShsCACiABHMA) format(\"woff\");\n}\n\n/* General styles for all types of buttons */\n\n.progress-button {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  outline: none;\n  border: none;\n  background: \"#222222\";\n  color: \"#FFFFFF\";\n  letter-spacing: 1px;\n  font-size: 1em;\n  line-height: 1.4;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.progress-button[disabled], .progress-button[disabled].state-loading {\n  cursor: default;\n}\n\n.progress-button .content {\n  position: relative;\n  display: block;\n  padding: 20px 60px;\n  transition: background-color 0.2s ease;\n}\n\n.progress-button .content .success, .progress-button .content .error {\n  position: absolute;\n  right: 20px;\n  font-family: \"icomoon\", sans-serif;\n  opacity: 0;\n  transition: opacity 0.3s 0.3s;\n  line-height: 1;\n  top: 0;\n  height: 100%;\n  align-items: center;\n  display: flex;\n}\n\n.progress-button .content .success {\n  color: \"#ffffff\";\n}\n\n.progress-button .content .error {\n  color: \"#ffffff\";\n}\n\n.progress-button.state-success .content .success, .progress-button.state-error .content .error {\n  opacity: 1;\n}\n\n.progress-button .progress {\n  background: \"#000000\";\n}\n\n.progress-button .progress-inner {\n  position: absolute;\n  left: 0;\n  background: \"#555555\";\n}\n\n.progress-button .progress-inner.notransition {\n  transition: none !important;\n}\n\n.progress-button[data-horizontal] .progress-inner {\n  top: 0;\n  width: 0;\n  height: 100%;\n  transition: width 0.3s, opacity 0.3s;\n}\n\n.progress-button[data-vertical] .progress-inner {\n  bottom: 0;\n  width: 100%;\n  height: 0;\n  transition: height 0.3s, opacity 0.3s;\n}\n\n.progress-button[data-perspective] {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  background: transparent;\n  perspective: 900px;\n  /* Necessary 3d styles for buttons with perspective */\n}\n\n.progress-button[data-perspective] .content {\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n\n.progress-button[data-perspective] .progress-wrap {\n  display: block;\n  transition: transform 0.2s;\n  transform-style: preserve-3d;\n}\n\n.progress-button[data-perspective] .content, .progress-button[data-perspective] .progress {\n  outline: 1px solid rgba(0, 0, 0, 0);\n  /* Smoothen jagged edges in FF */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQudmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBR0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDIyQ0FBQTtBQURGOztBQUlBLDRDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQ3RCa0I7RUR1QmxCLGdCQ3RCaUI7RUR1QmpCLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBSUU7RUFDRSxlQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBSEo7O0FBS0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhOOztBQU1JO0VBQ0UsZ0JDbERjO0FEOENwQjs7QUFPSTtFQUNFLGdCQ3JEWTtBRGdEbEI7O0FBU0U7RUFFRSxVQUFBO0FBUko7O0FBV0U7RUFDRSxxQkM5RGtCO0FEcUR0Qjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQ25FdUI7QUR5RDNCOztBQVlJO0VBRUUsMkJBQUE7QUFWTjs7QUFlSTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUVBLG9DQUFBO0FBYk47O0FBa0JJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEscUNBQUE7QUFoQk47O0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBZUEscURBQUE7QUFoQ0o7O0FBbUJJO0VBQ0Usa0JBQUE7RUFDQSxxQkNoSGM7QUQrRnBCOztBQW9CSTtFQUNFLGNBQUE7RUFFQSwwQkFBQTtFQUVBLDRCQUFBO0FBbEJOOztBQXNCSTtFQUNFLG1DQUFBO0VBQXFDLGdDQUFBO0FBbkIzQyIsImZpbGUiOiJwcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC52YXJzXCI7XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcbiAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBQVBZQUEwQUFBQUFCYmdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBQk1BQUFBQm9BQUFBY2FkcGFrRWRFUlVZQUFBRk1BQUFBSHdBQUFDQUFNd0FHVDFNdk1nQUFBV3dBQUFBOEFBQUFZQTZ4QW9GamJXRndBQUFCcUFBQUFFb0FBQUZLeS9VZy8yZGhjM0FBQUFIMEFBQUFDQUFBQUFnQUFBQVFaMng1WmdBQUFmd0FBQUJhQUFBQWZHWURRNGxvWldGa0FBQUNXQUFBQUMwQUFBQTJGazZsbzJob1pXRUFBQUtJQUFBQUhBQUFBQ1FId2dQR2FHMTBlQUFBQXFRQUFBQVdBQUFBRmdlVkFBQnNiMk5oQUFBQ3ZBQUFBQTRBQUFBT0FFWUFIRzFoZUhBQUFBTE1BQUFBR0FBQUFDQUFDQUFPYm1GdFpRQUFBdVFBQUFETkFBQUJpZnlRVldsd2IzTjBBQUFEdEFBQUFDTUFBQUErUGtLYVduaWNZMkJnWUdRQWdqTzJpODZENkhQbm9oL0FhQUJTOXdncUFBQjRuR05nWkdCZzRBTmlDUVlRWUdKZ1pHQm1ZQVdTTEdBZUF3QUVtd0E2QUhpY1kyQm1EbVdjd01ES3dNQTBrK2tNQXdORFA0Um1mTTFnek1qSmdBb1lCZEFFR0J3WUZKNHhNaC80RDRUTUI0QThWS0RBd0FnQVlCNE1PWGljWTJCZ1lHYUFZQmtHUmdZUWNBSHlHTUY4RmdZTklNMEdwQmtabUJnVW5qSCsvdy9rS3p4aitQLy8vMk1wRnFoNklHQmtZNEJ6R0ptQUJCTURLbUNFV0RHY0FRQzQ5d2pjQUFBQUFRQUIvLzhBRDNpY1ZZcXhEWUF3RUFQdGZ4Q0tvbFFVVElDWWdTNmpaYWNzOER1bGYvRUtvc0RGeVpZUHhCY0Jic0hjQzdSaUJmWXQ4YUlabXpUekt0WDhiUWd2b0tZTkdUaERTd3o1U0ZUendkSjkrT2dzRXpFbi9nY2VrZUFpSFFBQWVKeGpZR1JnWUFEaW1ldjJwc2Z6MjN4bDRHWmhBSUdiTXd3bUk5TXNETXdOUUlxRGdRbkVBd0FpcXdrVkFBQUFlSnhqWUdSZ1lEN3cvd0FEQXdzRENBQkpSZ1pVd0FvQVRGY0NrZ0FBQUFBQUFBQUFBVlVBQUFJQUFBQUVBQUFBQUVBQUFBQUFBQUFBQUFBQUFBZ0FIQUErQUFCNG5HTmdaR0JnWUdQZ1lRRFJEQXhNREdnQUFBSkdBQmQ0bkhYT01RNkNNQmdGNEllQVJrMk1nekdPakU2R0k3Z2hnNHNEY1JTaElTVFFKbFVTMlQyQ28yZndHSjdMQi9rZGFkTDI2NFBYRk1BQ0h6am9ob01KbHVJUnZSVzc5RjdzMFdleGp6a2U0akh6bDNpR0ZiNXNPZDZVeWFLL29mT0kzb2hkT2hSNzlFSHNZNDJMZU16OEtaN3hOVytVeUdCUWN4cG9vTXhNYlF4eGdrS0JCaFZTV0I1VjBWUXBNZlQvVUo3d0hvc2J2M2Q1d0JmdU9KRW9leXVORHNKZE9OeU4yTlY5UDhXZGU4NytGUzNYdUc4Yy80MUlhV1hUdThxRGF4dkVtVGwyOVIrMHBqb1pBQUFBZUp4allHTEFEOWlBbUpHQmlZR1prWW1SbWIwMEw5UFZ6TUFBU2hzQ0FDaUFCSE1BKSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuLyogR2VuZXJhbCBzdHlsZXMgZm9yIGFsbCB0eXBlcyBvZiBidXR0b25zICovXG4ucHJvZ3Jlc3MtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmQ7XG4gIGNvbG9yOiAkYnV0dG9uVGV4dENvbG9yO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAmW2Rpc2FibGVkXSwgJltkaXNhYmxlZF0uc3RhdGUtbG9hZGluZyB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAuc3VjY2VzcywgLmVycm9yIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiLCBzYW5zLXNlcmlmO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwLjNzO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuc3VjY2VzcyB7XG4gICAgICBjb2xvcjogJHN1Y2Nlc3NJY29uQ29sb3I7XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiAkZXJyb3JJY29uQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50IC5zdWNjZXNzLFxuICAmLnN0YXRlLWVycm9yIC5jb250ZW50IC5lcnJvciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzQmFja2dyb3VuZDtcbiAgfVxuXG4gIC5wcm9ncmVzcy1pbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kO1xuXG4gICAgJi5ub3RyYW5zaXRpb24ge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJltkYXRhLWhvcml6b250YWxdIHtcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICB9XG4gIH1cblxuICAmW2RhdGEtdmVydGljYWxdIHtcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgfVxuXG4gICZbZGF0YS1wZXJzcGVjdGl2ZV0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA5MDBweDtcbiAgICBwZXJzcGVjdGl2ZTogOTAwcHg7XG5cbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkYnV0dG9uQmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB9XG5cbiAgICAvKiBOZWNlc3NhcnkgM2Qgc3R5bGVzIGZvciBidXR0b25zIHdpdGggcGVyc3BlY3RpdmUgKi9cbiAgICAuY29udGVudCwgLnByb2dyZXNzIHtcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApOyAvKiBTbW9vdGhlbiBqYWdnZWQgZWRnZXMgaW4gRkYgKi9cbiAgICB9XG4gIH1cbn1cbiIsIiRidXR0b25CYWNrZ3JvdW5kIDogJyMyMjIyMjInO1xuJGJ1dHRvblRleHRDb2xvciA6ICcjRkZGRkZGJztcbiRidXR0b25TdWNjZXNzQmFja2dyb3VuZCA6ICcjMDBlMTc1JztcbiRidXR0b25FcnJvckJhY2tncm91bmQgOiAnI2ZmMGMwMCc7XG4kc3VjY2Vzc0ljb25Db2xvciA6ICcjZmZmZmZmJztcbiRlcnJvckljb25Db2xvciA6ICcjZmZmZmZmJztcbiRwcm9ncmVzc0JhY2tncm91bmQgOiAnIzAwMDAwMCc7XG4kcHJvZ3Jlc3NJbm5lckJhY2tncm91bmQgOiAnIzU1NTU1NSc7XG4kcm90YXRlQmx1cnJpbmVzczogcmdiYSgwLCAwLCAwLCAwLjMpO1xuJGxpbmVzU2l6ZTogMTBweDtcbiRzbGlkZURvd25Qcm9ncmVzc0hlaWdodDoxMHB4O1xuJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcbiRtb3ZlVXBQcm9ncmVzc0hlaWdodDoxNXB4O1xuJG1vdmVVcFByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcbiJdfQ== */";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map