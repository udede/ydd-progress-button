(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../progress-button/src/lib/progress-button.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/Crio/WebstormProjects/ydd-progress-button/node_modules/raw-loader/dist/cjs.js!../progress-button/src/lib/progress-button.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"progress-button\"\n        [attr.autofocus]=\"autofocus\"\n        [attr.disabled]=\"disabled\"\n\n        [attr.form]=\"form?.id\"\n        [attr.formaction]=\"form?.action\"\n        [attr.formmethod]=\"form?.method\"\n        [attr.formnovalidate]=\"form?.noValidate\"\n        [attr.formtarget]=\"form?.target\"\n        [attr.formenctype]=\"form?.enctype\"\n\n        [attr.name]=\"name\"\n        [attr.type]=\"type\"\n        [attr.value]=\"value\"\n\n        [attr.data-style]=\"progress.animation\"\n        [attr.data-vertical]=\"(!isHorizontal())?'':null\"\n        [attr.data-horizontal]=\"(isHorizontal())?'':null\"\n        [attr.data-perspective]=\"perspective\"\n        (click)=\"click()\"\n        [ngClass]=\"[(loading)?'state-loading':'',statusClass]\"\n        [ngStyle]=\"buttonStyle\"\n>\n  <!-- perspective -->\n  <ng-container *ngIf=\"perspective === ''\">\n      <span class=\"progress-wrap\">\n        <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n      </span>\n  </ng-container>\n  <!-- not perspective -->\n  <ng-container *ngIf=\"perspective === null\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </ng-container>\n</button>\n<ng-template #content>\n  <span class=\"content\" [ngStyle]=\"this.contentStyle\">\n    <div class=\"success\" [style.color]=\"design.successIconColor\"></div>\n    <ng-content></ng-content>\n    <div class=\"error\" [style.color]=\"design.errorIconColor\"></div>\n  </span>\n  <span class=\"progress\" [style.background]=\"design.progressBackground\">\n    <span class=\"progress-inner\"\n          [ngStyle]=\"progressInnerStyle\"\n          [ngClass]=\"{'notransition':noTransition}\"\n    ></span>\n  </span>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Crio/WebstormProjects/ydd-progress-button/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ydd-main-container\">\n  <div class=\"ydd-main-content\">\n    <div class=\"ydd-page-content\">\n      <div class=\"ydd-page-preview\">\n        <div class=\"item\">\n          <div class=\"ydd-page-preview-item-description\">\n            <h1>Progress Button</h1>\n            <p>This represents a component where the button itself serves as a progress indicator. You can choose from 16 types of animations.\n              3D animation styles are used for showing the progress indication on one side of the button while rotating the button in perspective.</p>\n            <h2>Selector</h2>\n            <div class=\"ydd-table\">\n              <section class=\"ydd-row\">\n                <div class=\"ydd-cell ydd-cell-selector\">\n                  &#x3C;ydd-progress-button&#x3E;\n                </div>\n              </section>\n            </div>\n            <h2>Inputs</h2>\n            <div class=\"ydd-table\">\n              <section class=\"ydd-row ydd-row-header\">\n                <div class=\"ydd-cell ydd-cell-name\">Name</div>\n                <div class=\"ydd-cell ydd-cell-type\">Type</div>\n                <div class=\"ydd-cell ydd-cell-description\">Description</div>\n              </section>\n              <div class=\"ydd-table-body\">\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">name</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies a name for the button</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">value</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies an initial value for the button</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">type</div>\n                  <div class=\"ydd-cell ydd-cell-type\"><a class=\"ydd-internal-link\" routerLink=\".\" fragment=\"ProgressButtonType\">ProgressButtonType</a>\n                  </div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies the type of button</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">autofocus</div>\n                  <div class=\"ydd-cell ydd-cell-type\">true<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies that a button should automatically get focus when the page loads</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">disabled</div>\n                  <div class=\"ydd-cell ydd-cell-type\">true<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies that a button should be disabled</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">form</div>\n                  <div class=\"ydd-cell ydd-cell-type\"><a class=\"ydd-internal-link\" routerLink=\".\" fragment=\"ProgressButtonForm\">ProgressButtonForm</a>\n                  </div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies form parameters for the button</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">progress</div>\n                  <div class=\"ydd-cell ydd-cell-type\"><a class=\"ydd-internal-link\" routerLink=\".\" fragment=\"ProgressButtonData\">ProgressButtonData</a>\n                  </div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies progress parameters like animation and direction</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">design</div>\n                  <div class=\"ydd-cell ydd-cell-type\"><a class=\"ydd-internal-link\" routerLink=\".\"\n                                                         fragment=\"ProgressButtonDesign\">ProgressButtonDesign</a>\n                  </div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies button and progress design</div>\n                </section>\n              </div>\n            </div>\n            <h2>Outputs</h2>\n            <div class=\"ydd-table big-type\">\n              <section class=\"ydd-row ydd-row-header\">\n                <div class=\"ydd-cell ydd-cell-name\">Name</div>\n                <div class=\"ydd-cell ydd-cell-type\">Parameters</div>\n                <div class=\"ydd-cell ydd-cell-description\">Description</div>\n              </section>\n              <div class=\"ydd-table-body\">\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">action</div>\n                  <div class=\"ydd-cell ydd-cell-type\">ProgressButtonComponent</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Fires on a mouse click on the element</div>\n                </section>\n              </div>\n            </div>\n            <h2>Methods</h2>\n            <div class=\"ydd-table\">\n              <section class=\"ydd-row ydd-row-header\">\n                <div class=\"ydd-cell ydd-cell-name\">Name</div>\n                <div class=\"ydd-cell ydd-cell-type\">Parameters</div>\n                <div class=\"ydd-cell ydd-cell-description\">Description</div>\n              </section>\n              <div class=\"ydd-table-body\">\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">progressInit</div>\n                  <div class=\"ydd-cell ydd-cell-type\"></div>\n                  <div class=\"ydd-cell ydd-cell-description\"><code>ProgressButtonComponent</code> method that initialize the progress component. You\n                    can\n                    use it inside\n                    the <code>action</code> Output\n                  </div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">progressStop</div>\n                  <div class=\"ydd-cell ydd-cell-type\">status</div>\n                  <div class=\"ydd-cell ydd-cell-description\"><code>ProgressButtonComponent</code> method that stop the progress component. You can use\n                    it\n                    inside\n                    the <code>action</code> Output specifing the <code>status</code>. The <code>status</code> can be <code>success</code> or\n                    <code>error</code>\n                  </div>\n                </section>\n              </div>\n            </div>\n            <h2>Properties</h2>\n            <div class=\"ydd-table\">\n              <section class=\"ydd-row ydd-row-header\">\n                <div class=\"ydd-cell ydd-cell-name\">Name</div>\n                <div class=\"ydd-cell ydd-cell-description\">Description</div>\n              </section>\n              <div class=\"ydd-table-body\">\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">progressValue</div>\n                  <div class=\"ydd-cell ydd-cell-description\"><code>ProgressButtonComponent</code> property useful to change the value of the progress.\n                    You can use it inside the <code>action</code> Output\n                  </div>\n                </section>\n              </div>\n            </div>\n            <h2>Types</h2>\n            <div class=\"ydd-table big-name big-type\">\n              <section class=\"ydd-row ydd-row-header\">\n                <div class=\"ydd-cell ydd-cell-name\">Name</div>\n                <div class=\"ydd-cell ydd-cell-type\">Type</div>\n                <div class=\"ydd-cell ydd-cell-description\">Description</div>\n              </section>\n              <div class=\"ydd-table-body\">\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\" id=\"ProgressButtonType\">ProgressButtonType</div>\n                  <div class=\"ydd-cell ydd-cell-type\">button<br/>reset<br/>submit</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies the type of button</div>\n                </section>\n                <section class=\"ydd-row\" id=\"ProgressButtonForm\">\n                  <div class=\"ydd-cell ydd-cell-title\">ProgressButtonForm</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">id</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies one or more forms the button belongs to</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">action</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies where to send the form-data when a form is submitted. Only for type=\"submit\"\n                  </div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">noValidate</div>\n                  <div class=\"ydd-cell ydd-cell-type\">boolean<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies that the form-data should not be validated on submission. Only for\n                    type=\"submit\"\n                  </div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">enctype</div>\n                  <div class=\"ydd-cell ydd-cell-type\">application/x-www-form-urlencoded<br/>multipart/form-data<br/>text/plain<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies how form-data should be encoded before sending it to a server. Only for\n                    type=\"submit\"\n                  </div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">method</div>\n                  <div class=\"ydd-cell ydd-cell-type\">get<br/>post<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies how to send the form-data (which HTTP method to use). Only for type=\"submit\"\n                  </div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">target</div>\n                  <div class=\"ydd-cell ydd-cell-type\">_blank<br/>_self<br/>_parent<br/>_top<br/>null</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Specifies where to display the response after submitting the form. Only for type=\"submit\"\n                  </div>\n                </section>\n                <section class=\"ydd-row\" id=\"ProgressButtonData\">\n                  <div class=\"ydd-cell ydd-cell-title\">ProgressButtonData</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">animation</div>\n                  <div class=\"ydd-cell ydd-cell-type\">\n                    fill\n                    <br/>shrink\n                    <br/>rotate-angle-bottom\n                    <br/>rotate-angle-top\n                    <br/>rotate-angle-left\n                    <br/>rotate-angle-right\n                    <br/>rotate-side-down\n                    <br/>rotate-side-up\n                    <br/>rotate-side-left\n                    <br/>rotate-side-right\n                    <br/>rotate-back\n                    <br/>flip-open\n                    <br/>slide-down\n                    <br/>move-up\n                    <br/>top-line\n                    <br/>lateral-lines\n                  </div>\n                  <div class=\"ydd-cell ydd-cell-description\">Defines the progress animation style</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">direction</div>\n                  <div class=\"ydd-cell ydd-cell-type\">horizontal<br/>vertical</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Defines the progress animation direction</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">statusTime</div>\n                  <div class=\"ydd-cell ydd-cell-type\">number</div>\n                  <div class=\"ydd-cell ydd-cell-description\">Time in ms that the status (<code>success</code> or <code>error</code>) will be displayed\n                  </div>\n                </section>\n                <section class=\"ydd-row\" id=\"ProgressButtonDesign\">\n                  <div class=\"ydd-cell ydd-cell-title\">ProgressButtonDesign</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">background</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #222222]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The background of the button</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">color</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #FFFFFF]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The text color of the button</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">successBackground</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #00E175]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The background of the button when status is success</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">errorBackground</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #FF0C00]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The background of the button when status is error</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">successIconColor</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #FFFFFF]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The color of the icon when status is success</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">errorIconColor</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #FFFFFF]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The color of the icon when status is error</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">progressBackground</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #000000]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The background of the progress element</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">progressInnerBackground</div>\n                  <div class=\"ydd-cell ydd-cell-type\">string [def: #555555]</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The background of the progress inner element</div>\n                </section>\n                <section class=\"ydd-row\">\n                  <div class=\"ydd-cell ydd-cell-name\">linesSize</div>\n                  <div class=\"ydd-cell ydd-cell-type\">number</div>\n                  <div class=\"ydd-cell ydd-cell-description\">The size in px of the progress lines.\n                    This value is used in the animation styles <code>top-line</code> and <code>lateral-lines</code>\n                  </div>\n                </section>\n              </div>\n            </div>\n          </div>\n          <div class=\"ydd-page-preview-item-content\" style=\"height: 100px\">\n            <ydd-progress-button (action)=\"run($event)\" [progress]=\"progressData\" [design]=\"designData\">\n              Submit\n            </ydd-progress-button>\n          </div>\n        </div>\n        <div class=\"settings\">\n          <form [formGroup]=\"settingsForm\" novalidate>\n            <h2>Settings</h2>\n            <h3>Data</h3>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Animation</label>\n              <div class=\"field\">\n                <ng-select class=\"ydd-select\" formControlName=\"animation\" [clearable]=\"false\">\n                  <ng-option value=\"fill\">Fill</ng-option>\n                  <ng-option value=\"shrink\">Shrink</ng-option>\n                  <ng-option value=\"rotate-angle-bottom\">Rotate Angle Bottom</ng-option>\n                  <ng-option value=\"rotate-angle-top\">Rotate Angle Top</ng-option>\n                  <ng-option value=\"rotate-angle-left\">Rotate Angle Left</ng-option>\n                  <ng-option value=\"rotate-angle-right\">Rotate Angle Right</ng-option>\n                  <ng-option value=\"rotate-side-down\">Rotate Side Down</ng-option>\n                  <ng-option value=\"rotate-side-up\">Rotate Side Up</ng-option>\n                  <ng-option value=\"rotate-side-left\">Rotate Side Left</ng-option>\n                  <ng-option value=\"rotate-side-right\">Rotate Side Right</ng-option>\n                  <ng-option value=\"rotate-back\">Rotate Back</ng-option>\n                  <ng-option value=\"flip-open\">Flip Open</ng-option>\n                  <ng-option value=\"slide-down\">Slide Down</ng-option>\n                  <ng-option value=\"move-up\">Move Up</ng-option>\n                  <ng-option value=\"top-line\">Top Line</ng-option>\n                  <ng-option value=\"lateral-lines\">Lateral Lines</ng-option>\n                </ng-select>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Direction</label>\n              <div class=\"field\">\n                <ng-select class=\"ydd-select\" formControlName=\"direction\" [clearable]=\"false\">\n                  <ng-option value=\"horizontal\">Horizontal</ng-option>\n                  <ng-option value=\"vertical\">Vertical</ng-option>\n                </ng-select>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Status</label>\n              <div class=\"field\">\n                <ng-select class=\"ydd-select\" formControlName=\"status\" [clearable]=\"false\">\n                  <ng-option value=\"success\">Success</ng-option>\n                  <ng-option value=\"error\">Error</ng-option>\n                </ng-select>\n              </div>\n            </div>\n            <h3>Design</h3>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Background</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"background\" name=\"background\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.background\"></span>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Text Color</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"color\" name=\"color\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.color\"></span>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Success Background</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"successBackground\" name=\"successBackground\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.successBackground\"></span>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Error Background</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"errorBackground\" name=\"errorBackground\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.errorBackground\"></span>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Success Icon</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"successIconColor\" name=\"successIconColor\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.successIconColor\"></span>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Error Icon</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"errorIconColor\" name=\"errorIconColor\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.errorIconColor\"></span>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Progress Background</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"progressBackground\" name=\"progressBackground\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.progressBackground\"></span>\n              </div>\n            </div>\n            <div class=\"ydd-page-preview-settings-field\">\n              <label>Progress Inner Background</label>\n              <div class=\"field ydd-color-preview\">\n                <input class=\"ydd-input-text\" formControlName=\"progressInnerBackground\" name=\"progressInnerBackground\" type=\"text\"/>\n                <span [style.backgroundColor]=\"settingsForm.value.progressInnerBackground\"></span>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!******************************************************************************************!*\
  !*** C:/Users/Crio/WebstormProjects/ydd-progress-button/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../progress-button/src/lib/progress-button.component.scss":
/*!*****************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n}\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"icomoon\";\n  src: url('icomoon.eot');\n  src: url('icomoon.eot?#iefix') format(\"embedded-opentype\"), url('icomoon.ttf') format(\"truetype\"), url('icomoon.woff') format(\"woff\"), url('icomoon.svg#icomoon') format(\"svg\");\n}\n/* General styles for all types of buttons */\n.progress-button {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  outline: none;\n  border: none;\n  background: \"#222222\";\n  color: \"#FFFFFF\";\n  letter-spacing: 1px;\n  font-size: 1em;\n  line-height: 1.4;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.progress-button[disabled], .progress-button[disabled].state-loading {\n  cursor: default;\n}\n.progress-button .content {\n  position: relative;\n  display: block;\n  padding: 20px 60px;\n  transition: background-color 0.2s ease;\n}\n.progress-button .content .success, .progress-button .content .error {\n  position: absolute;\n  right: 20px;\n  font-family: \"icomoon\", sans-serif;\n  opacity: 0;\n  transition: opacity 0.3s 0.3s;\n  line-height: 1;\n  top: 0;\n  height: 100%;\n  align-items: center;\n  display: flex;\n}\n.progress-button .content .success {\n  content: \"\";\n  /* Checkmark for success */\n  color: \"#ffffff\";\n}\n.progress-button .content .error {\n  content: \"\";\n  /* Cross for error */\n  color: \"#ffffff\";\n}\n.progress-button.state-success .content .success, .progress-button.state-error .content .error {\n  opacity: 1;\n}\n.progress-button .progress {\n  background: \"#000000\";\n}\n.progress-button .progress-inner {\n  position: absolute;\n  left: 0;\n  background: \"#555555\";\n}\n.progress-button .progress-inner.notransition {\n  transition: none !important;\n}\n.progress-button[data-horizontal] .progress-inner {\n  top: 0;\n  width: 0;\n  height: 100%;\n  transition: width 0.3s, opacity 0.3s;\n}\n.progress-button[data-vertical] .progress-inner {\n  bottom: 0;\n  width: 100%;\n  height: 0;\n  transition: height 0.3s, opacity 0.3s;\n}\n.progress-button[data-perspective] {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  background: transparent;\n  perspective: 900px;\n  /* Necessary 3d styles for buttons with perspective */\n}\n.progress-button[data-perspective] .content {\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n.progress-button[data-perspective] .progress-wrap {\n  display: block;\n  transition: transform 0.2s;\n  transform-style: preserve-3d;\n}\n.progress-button[data-perspective] .content, .progress-button[data-perspective] .progress {\n  outline: 1px solid rgba(0, 0, 0, 0);\n  /* Smoothen jagged edges in FF */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL0M6XFxVc2Vyc1xcQ3Jpb1xcV2Vic3Rvcm1Qcm9qZWN0c1xceWRkLXByb2dyZXNzLWJ1dHRvbi9wcm9qZWN0c1xccHJvZ3Jlc3MtYnV0dG9uXFxzcmNcXGxpYlxccHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvcHJvZ3Jlc3MtYnV0dG9uL3NyYy9saWIvQzpcXFVzZXJzXFxDcmlvXFxXZWJzdG9ybVByb2plY3RzXFx5ZGQtcHJvZ3Jlc3MtYnV0dG9uL3Byb2plY3RzXFxwcm9ncmVzcy1idXR0b25cXHNyY1xcbGliXFxwcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFHRSxzQkFBQTtBREFGO0FDR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtLQUFBO0FEQUY7QUNNQSw0Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQzFCa0I7RUQyQmxCLGdCQzFCaUI7RUQyQmpCLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FESkY7QUNNRTtFQUNFLGVBQUE7QURKSjtBQ09FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBRExKO0FDT0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBRExOO0FDUUk7RUFDRSxZQUFBO0VBQWtCLDBCQUFBO0VBQ2xCLGdCQ3ZEYztBRmtEcEI7QUNRSTtFQUNFLFlBQUE7RUFBa0Isb0JBQUE7RUFDbEIsZ0JDM0RZO0FGc0RsQjtBQ1NFO0VBRUUsVUFBQTtBRFJKO0FDV0U7RUFDRSxxQkNwRWtCO0FGMkR0QjtBQ1lFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EscUJDekV1QjtBRitEM0I7QUNZSTtFQUVFLDJCQUFBO0FEVk47QUNlSTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUVBLG9DQUFBO0FEYk47QUNrQkk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxxQ0FBQTtBRGhCTjtBQ29CRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQkFBQTtFQWVBLHFEQUFBO0FEaENKO0FDbUJJO0VBQ0Usa0JBQUE7RUFDQSxxQkN0SGM7QUZxR3BCO0FDb0JJO0VBQ0UsY0FBQTtFQUVBLDBCQUFBO0VBRUEsNEJBQUE7QURsQk47QUNzQkk7RUFDRSxtQ0FBQTtFQUFxQyxnQ0FBQTtBRG5CM0MiLCJmaWxlIjoicHJvamVjdHMvcHJvZ3Jlc3MtYnV0dG9uL3NyYy9saWIvcHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJpY29tb29uXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9pY29tb29uL2ljb21vb24uZW90XCIpO1xuICBzcmM6IHVybChcIi4vZm9udHMvaWNvbW9vbi9pY29tb29uLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4vZm9udHMvaWNvbW9vbi9pY29tb29uLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi9mb250cy9pY29tb29uL2ljb21vb24ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuL2ZvbnRzL2ljb21vb24vaWNvbW9vbi5zdmcjaWNvbW9vblwiKSBmb3JtYXQoXCJzdmdcIik7XG59XG4vKiBHZW5lcmFsIHN0eWxlcyBmb3IgYWxsIHR5cGVzIG9mIGJ1dHRvbnMgKi9cbi5wcm9ncmVzcy1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBcIiMyMjIyMjJcIjtcbiAgY29sb3I6IFwiI0ZGRkZGRlwiO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGlzYWJsZWRdLCAucHJvZ3Jlc3MtYnV0dG9uW2Rpc2FibGVkXS5zdGF0ZS1sb2FkaW5nIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnByb2dyZXNzLWJ1dHRvbiAuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggNjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uIC5jb250ZW50IC5zdWNjZXNzLCAucHJvZ3Jlc3MtYnV0dG9uIC5jb250ZW50IC5lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIiwgc2Fucy1zZXJpZjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIDAuM3M7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9ncmVzcy1idXR0b24gLmNvbnRlbnQgLnN1Y2Nlc3Mge1xuICBjb250ZW50OiBcIu6YgFwiO1xuICAvKiBDaGVja21hcmsgZm9yIHN1Y2Nlc3MgKi9cbiAgY29sb3I6IFwiI2ZmZmZmZlwiO1xufVxuLnByb2dyZXNzLWJ1dHRvbiAuY29udGVudCAuZXJyb3Ige1xuICBjb250ZW50OiBcIu6YgVwiO1xuICAvKiBDcm9zcyBmb3IgZXJyb3IgKi9cbiAgY29sb3I6IFwiI2ZmZmZmZlwiO1xufVxuLnByb2dyZXNzLWJ1dHRvbi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50IC5zdWNjZXNzLCAucHJvZ3Jlc3MtYnV0dG9uLnN0YXRlLWVycm9yIC5jb250ZW50IC5lcnJvciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uIC5wcm9ncmVzcyB7XG4gIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiO1xufVxuLnByb2dyZXNzLWJ1dHRvbiAucHJvZ3Jlc3MtaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IFwiIzU1NTU1NVwiO1xufVxuLnByb2dyZXNzLWJ1dHRvbiAucHJvZ3Jlc3MtaW5uZXIubm90cmFuc2l0aW9uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1ob3Jpem9udGFsXSAucHJvZ3Jlc3MtaW5uZXIge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcywgb3BhY2l0eSAwLjNzO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzLCBvcGFjaXR5IDAuM3M7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtdmVydGljYWxdIC5wcm9ncmVzcy1pbm5lciB7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXBlcnNwZWN0aXZlXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogOTAwcHg7XG4gIHBlcnNwZWN0aXZlOiA5MDBweDtcbiAgLyogTmVjZXNzYXJ5IDNkIHN0eWxlcyBmb3IgYnV0dG9ucyB3aXRoIHBlcnNwZWN0aXZlICovXG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtcGVyc3BlY3RpdmVdIC5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCA2MHB4O1xuICBiYWNrZ3JvdW5kOiBcIiMyMjIyMjJcIjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1wZXJzcGVjdGl2ZV0gLnByb2dyZXNzLXdyYXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXBlcnNwZWN0aXZlXSAuY29udGVudCwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXBlcnNwZWN0aXZlXSAucHJvZ3Jlc3Mge1xuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgLyogU21vb3RoZW4gamFnZ2VkIGVkZ2VzIGluIEZGICovXG59IiwiQGltcG9ydCBcInByb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQudmFyc1wiO1xyXG5cclxuKiB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LWZhbWlseTogJ2ljb21vb24nO1xyXG4gIHNyYzogdXJsKCcuL2ZvbnRzL2ljb21vb24vaWNvbW9vbi5lb3QnKTtcclxuICBzcmM6IHVybCgnLi9mb250cy9pY29tb29uL2ljb21vb24uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICB1cmwoJy4vZm9udHMvaWNvbW9vbi9pY29tb29uLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcclxuICB1cmwoJy4vZm9udHMvaWNvbW9vbi9pY29tb29uLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICB1cmwoJy4vZm9udHMvaWNvbW9vbi9pY29tb29uLnN2ZyNpY29tb29uJykgZm9ybWF0KCdzdmcnKTtcclxufVxyXG5cclxuLyogR2VuZXJhbCBzdHlsZXMgZm9yIGFsbCB0eXBlcyBvZiBidXR0b25zICovXHJcbi5wcm9ncmVzcy1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAkYnV0dG9uQmFja2dyb3VuZDtcclxuICBjb2xvcjogJGJ1dHRvblRleHRDb2xvcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAmW2Rpc2FibGVkXSwgJltkaXNhYmxlZF0uc3RhdGUtbG9hZGluZyB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJpY29tb29uXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwLjNzO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Y2Nlc3Mge1xyXG4gICAgICBjb250ZW50OiBcIlxcZTYwMFwiOyAvKiBDaGVja21hcmsgZm9yIHN1Y2Nlc3MgKi9cclxuICAgICAgY29sb3I6ICRzdWNjZXNzSWNvbkNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxlNjAxXCI7IC8qIENyb3NzIGZvciBlcnJvciAqL1xyXG4gICAgICBjb2xvcjogJGVycm9ySWNvbkNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50IC5zdWNjZXNzLFxyXG4gICYuc3RhdGUtZXJyb3IgLmNvbnRlbnQgLmVycm9yIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzQmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kO1xyXG5cclxuICAgICYubm90cmFuc2l0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZbZGF0YS1ob3Jpem9udGFsXSB7XHJcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcywgb3BhY2l0eSAwLjNzO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzLCBvcGFjaXR5IDAuM3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2RhdGEtdmVydGljYWxdIHtcclxuICAgIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJltkYXRhLXBlcnNwZWN0aXZlXSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA5MDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA5MDBweDtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgICAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE5lY2Vzc2FyeSAzZCBzdHlsZXMgZm9yIGJ1dHRvbnMgd2l0aCBwZXJzcGVjdGl2ZSAqL1xyXG4gICAgLmNvbnRlbnQsIC5wcm9ncmVzcyB7XHJcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApOyAvKiBTbW9vdGhlbiBqYWdnZWQgZWRnZXMgaW4gRkYgKi9cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJ1dHRvbkJhY2tncm91bmQgOiAnIzIyMjIyMic7XHJcbiRidXR0b25UZXh0Q29sb3IgOiAnI0ZGRkZGRic7XHJcbiRidXR0b25TdWNjZXNzQmFja2dyb3VuZCA6ICcjMDBlMTc1JztcclxuJGJ1dHRvbkVycm9yQmFja2dyb3VuZCA6ICcjZmYwYzAwJztcclxuJHN1Y2Nlc3NJY29uQ29sb3IgOiAnI2ZmZmZmZic7XHJcbiRlcnJvckljb25Db2xvciA6ICcjZmZmZmZmJztcclxuJHByb2dyZXNzQmFja2dyb3VuZCA6ICcjMDAwMDAwJztcclxuJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kIDogJyM1NTU1NTUnO1xyXG4kcm90YXRlQmx1cnJpbmVzczogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4kbGluZXNTaXplOiAxMHB4O1xyXG4kc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHQ6MTBweDtcclxuJG1vdmVVcFByb2dyZXNzSGVpZ2h0OjE1cHg7XHJcbiJdfQ== */");

/***/ }),

/***/ "../progress-button/src/lib/progress-button.component.styles.scss":
/*!************************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.component.styles.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-button {\n  /***************************************************** Fill */\n  /***************************************************** Shrink */\n  /***************************************************** Rotate Bottom 3D */\n  /***************************************************** Rotate Top 3D */\n  /***************************************************** Rotate Left 3D */\n  /***************************************************** Rotate Right 3D */\n  /***************************************************** Rotate Side Down 3D */\n  /***************************************************** Rotate Side Up 3D */\n  /***************************************************** Rotate Side Left 3D */\n  /***************************************************** Rotate Side Right 3D */\n  /***************************************************** Rotate Back 3D */\n  /***************************************************** Flip Open 3D */\n  /***************************************************** Slide Down */\n  /***************************************************** Move Up */\n  /***************************************************** Top Line */\n  /***************************************************** Lateral Lines */\n}\n.progress-button[data-style=fill][data-horizontal], .progress-button[data-style=fill][data-vertical] {\n  overflow: hidden;\n}\n.progress-button[data-style=fill][data-horizontal] .content, .progress-button[data-style=fill][data-vertical] .content {\n  z-index: 10;\n  transition: transform 0.3s;\n}\n.progress-button[data-style=fill][data-horizontal] .content .success, .progress-button[data-style=fill][data-horizontal] .content .error, .progress-button[data-style=fill][data-vertical] .content .success, .progress-button[data-style=fill][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=fill][data-horizontal].state-success .content, .progress-button[data-style=fill][data-horizontal].state-error .content, .progress-button[data-style=fill][data-vertical].state-success .content, .progress-button[data-style=fill][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink] {\n  overflow: hidden;\n  transition: transform 0.2s;\n}\n.progress-button[data-style=shrink][data-horizontal] .content, .progress-button[data-style=shrink][data-vertical] .content {\n  transition: opacity 0.3s, transform 0.3s;\n}\n.progress-button[data-style=shrink][data-horizontal] .content .success, .progress-button[data-style=shrink][data-horizontal] .content .error, .progress-button[data-style=shrink][data-vertical] .content .success, .progress-button[data-style=shrink][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading, .progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleY(0.3);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading .content, .progress-button[data-style=shrink][data-vertical].state-loading .content {\n  opacity: 0;\n}\n.progress-button[data-style=shrink][data-horizontal].state-success .content, .progress-button[data-style=shrink][data-horizontal].state-error .content, .progress-button[data-style=shrink][data-vertical].state-success .content, .progress-button[data-style=shrink][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleX(0.1);\n}\n.progress-button[data-style=rotate-angle-bottom] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=rotate-angle-bottom].state-loading .progress-wrap {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=rotate-angle-top] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n}\n.progress-button[data-style=rotate-angle-top].state-loading .progress-wrap {\n  transform: rotateX(-45deg);\n}\n.progress-button[data-style=rotate-angle-left] .progress {\n  position: absolute;\n  top: 0;\n  right: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(-90deg);\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-angle-left].state-loading .progress-wrap {\n  transform: rotateY(45deg);\n}\n.progress-button[data-style=rotate-angle-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: -1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-angle-right].state-loading .progress-wrap {\n  transform: rotateY(-45deg);\n}\n.progress-button[data-style=rotate-side-down] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-down].state-loading .progress-wrap {\n  transform: rotateX(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-up] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-up].state-loading .progress-wrap {\n  transform: rotateX(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-left] .progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left] .progress-wrap {\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left].state-loading .progress-wrap {\n  transform: translateX(50%) rotateY(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-right] .progress-wrap {\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-side-right].state-loading .progress-wrap {\n  transform: translateX(-50%) rotateY(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-back] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotateX(-180deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back] .progress-wrap {\n  transition-timing-function: ease-out;\n}\n.progress-button[data-style=rotate-back] .content {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back].state-loading .progress-wrap {\n  transform: rotateX(180deg) scaleX(0.6) scaleY(0.3);\n}\n.progress-button[data-style=flip-open] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 30%;\n}\n.progress-button[data-style=flip-open] .content {\n  z-index: 10;\n  transition: transform 0.2s;\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=flip-open].state-loading .content {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=slide-down] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=slide-down] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10px;\n  transition: transform 0.2s;\n}\n.progress-button[data-style=slide-down] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n.progress-button[data-style=slide-down].state-loading .progress {\n  transform: translateY(10px);\n}\n.progress-button[data-style=move-up] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=move-up] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 15px;\n}\n.progress-button[data-style=move-up] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n  transition: transform 0.2s;\n}\n.progress-button[data-style=move-up].state-loading .content {\n  transform: translateY(-15px);\n}\n.progress-button[data-style=top-line] .progress-inner {\n  height: 10px;\n}\n.progress-button[data-style=lateral-lines] .progress-inner {\n  width: 100%;\n  border-right-style: solid;\n  border-left-style: solid;\n  border-right-width: 10px;\n  border-left-width: 10px;\n  border-color: \"#555555\";\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL0M6XFxVc2Vyc1xcQ3Jpb1xcV2Vic3Rvcm1Qcm9qZWN0c1xceWRkLXByb2dyZXNzLWJ1dHRvbi9wcm9qZWN0c1xccHJvZ3Jlc3MtYnV0dG9uXFxzcmNcXGxpYlxccHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC5zdHlsZXMuc2NzcyIsInByb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc3R5bGVzLnNjc3MiLCJwcm9qZWN0cy9wcm9ncmVzcy1idXR0b24vc3JjL2xpYi9DOlxcVXNlcnNcXENyaW9cXFdlYnN0b3JtUHJvamVjdHNcXHlkZC1wcm9ncmVzcy1idXR0b24vcHJvamVjdHNcXHByb2dyZXNzLWJ1dHRvblxcc3JjXFxsaWJcXHByb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQudmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsNkRBQUE7RUE2QkEsK0RBQUE7RUE4Q0EseUVBQUE7RUF1QkEsc0VBQUE7RUF1QkEsdUVBQUE7RUF1QkEsd0VBQUE7RUF1QkEsNEVBQUE7RUF3QkEsMEVBQUE7RUF3QkEsNEVBQUE7RUEyQkEsNkVBQUE7RUEyQkEsdUVBQUE7RUFrQ0EscUVBQUE7RUEyQkEsbUVBQUE7RUFnQ0EsZ0VBQUE7RUFnQ0EsaUVBQUE7RUFhQSxzRUFBQTtBQzFZRjtBRFhJO0VBQ0UsZ0JBQUE7QUNhTjtBRFhNO0VBQ0UsV0FBQTtFQUVBLDBCQUFBO0FDYVI7QURYUTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLHdCQUFBO0VBRUEsMkJBQUE7QUNhVjtBRFRNO0VBR0UsNEJBQUE7QUNVUjtBREpFO0VBQ0UsZ0JBQUE7RUFFQSwwQkFBQTtBQ01KO0FESE07RUFFRSx3Q0FBQTtBQ0tSO0FESFE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSx3QkFBQTtFQUVBLDJCQUFBO0FDS1Y7QURETTtFQUVFLHNCQUFBO0FDR1I7QUREUTtFQUNFLFVBQUE7QUNHVjtBRENNO0VBR0UsNEJBQUE7QUNBUjtBREtNO0VBRUUsc0JBQUE7QUNIUjtBRFVJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFBd0MseUNBQUE7RUFFeEMsMEJBQUE7RUFFQSx1QkFBQTtBQ1BOO0FEV007RUFFRSx5QkFBQTtBQ1RSO0FEZ0JJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFBd0MseUNBQUE7RUFFeEMseUJBQUE7RUFFQSwwQkFBQTtBQ2JOO0FEaUJNO0VBRUUsMEJBQUE7QUNmUjtBRHNCSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQXVDLHlDQUFBO0VBRXZDLDBCQUFBO0VBRUEsMEJBQUE7QUNuQk47QUR1Qk07RUFFRSx5QkFBQTtBQ3JCUjtBRDRCSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQXdDLHlDQUFBO0VBRXhDLHlCQUFBO0VBRUEsdUJBQUE7QUN6Qk47QUQ2Qk07RUFFRSwwQkFBQTtBQzNCUjtBRGtDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDBCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDaENOO0FEb0NNO0VBRUUsMENBQUE7QUNsQ1I7QUR5Q0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUVBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ3ZDTjtBRDJDTTtFQUVFLDJDQUFBO0FDekNSO0FEZ0RJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFFQSx1QkFBQTtBQzlDTjtBRGlESTtFQUVFLHVCQUFBO0FDL0NOO0FEbURNO0VBRUUsMERBQUE7QUNqRFI7QUR3REk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUVBLHVCQUFBO0FDdEROO0FEeURJO0VBRUUsMEJBQUE7QUN2RE47QUQyRE07RUFFRSw0REFBQTtBQ3pEUjtBRGdFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDOUROO0FEaUVJO0VBRUUsb0NBQUE7QUMvRE47QURrRUk7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0FDaEVOO0FEb0VNO0VBRUUsa0RBQUE7QUNsRVI7QUR5RUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDdkVOO0FEMEVJO0VBQ0UsV0FBQTtFQUVBLDBCQUFBO0VBRUEsdUJBQUE7QUN4RU47QUQ0RU07RUFFRSx5QkFBQTtBQzFFUjtBRGdGRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUM5RUo7QURnRkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZRWpWbUI7RUZtVm5CLDBCQUFBO0FDOUVOO0FEaUZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJFbldjO0FEb1JwQjtBRG1GTTtFQUVFLDJCQUFBO0FDakZSO0FEdUZFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ3JGSjtBRHVGSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlFaFhnQjtBRDJSdEI7QUR3Rkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkVqWWM7RUZtWWQsMEJBQUE7QUN0Rk47QUQwRk07RUFFRSw0QkFBQTtBQ3hGUjtBRCtGSTtFQUNFLFlFeFlNO0FEMlNaO0FEeUdJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkV4Wk07RUZ5Wk4sdUJFelpNO0VGMFpOLHVCRTVacUI7RUY2WnJCLHVCQUFBO0FDdkdOIiwiZmlsZSI6InByb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnZhcnNcIjtcclxuXHJcbi5wcm9ncmVzcy1idXR0b24ge1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRmlsbCAqL1xyXG4gICZbZGF0YS1zdHlsZT1cImZpbGxcIl0ge1xyXG4gICAgJltkYXRhLWhvcml6b250YWxdLCAmW2RhdGEtdmVydGljYWxdIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xyXG4gICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50LFxyXG4gICAgICAmLnN0YXRlLWVycm9yIC5jb250ZW50IHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNocmluayAqL1xyXG4gICZbZGF0YS1zdHlsZT1cInNocmlua1wiXSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcblxyXG4gICAgJltkYXRhLWhvcml6b250YWxdLCAmW2RhdGEtdmVydGljYWxdIHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xyXG4gICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuMyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc3RhdGUtc3VjY2VzcyAuY29udGVudCxcclxuICAgICAgJi5zdGF0ZS1lcnJvciAuY29udGVudCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmW2RhdGEtdmVydGljYWxdIHtcclxuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBCb3R0b20gM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtYW5nbGUtYm90dG9tXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0xcHggMCAkcm90YXRlQmx1cnJpbmVzczsgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnN0YXRlLWxvYWRpbmcge1xyXG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgVG9wIDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLXRvcFwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIExlZnQgM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtYW5nbGUtbGVmdFwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAwIDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDQ1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFJpZ2h0IDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLXJpZ2h0XCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3gtc2hhZG93OiAtMXB4IDAgMCAkcm90YXRlQmx1cnJpbmVzczsgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC00NWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC00NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgU2lkZSBEb3duIDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLXNpZGUtZG93blwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgU2lkZSBVcCAzRCAqL1xyXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1zaWRlLXVwXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIExlZnQgM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtc2lkZS1sZWZ0XCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcclxuICAgICAgLnByb2dyZXNzLXdyYXAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgUmlnaHQgM0QgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtc2lkZS1yaWdodFwiXSB7XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgQmFjayAzRCAqL1xyXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1iYWNrXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRmxpcCBPcGVuIDNEICovXHJcbiAgJltkYXRhLXN0eWxlPVwiZmxpcC1vcGVuXCJdIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnN0YXRlLWxvYWRpbmcge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZSBEb3duICovXHJcbiAgJltkYXRhLXN0eWxlPVwic2xpZGUtZG93blwiXSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogYXV0bztcclxuICAgICAgYm90dG9tOjA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6ICRzbGlkZURvd25Qcm9ncmVzc0hlaWdodDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRidXR0b25CYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIE1vdmUgVXAgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJtb3ZlLXVwXCJdIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6ICRtb3ZlVXBQcm9ncmVzc0hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRidXR0b25CYWNrZ3JvdW5kO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdGUtbG9hZGluZyB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJG1vdmVVcFByb2dyZXNzSGVpZ2h0KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRtb3ZlVXBQcm9ncmVzc0hlaWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBUb3AgTGluZSAqL1xyXG4gICZbZGF0YS1zdHlsZT1cInRvcC1saW5lXCJdIHtcclxuICAgIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgIGhlaWdodDogJGxpbmVzU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExhdGVyYWwgTGluZXMgKi9cclxuICAmW2RhdGEtc3R5bGU9XCJsYXRlcmFsLWxpbmVzXCJdIHtcclxuICAgIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJGxpbmVzU2l6ZTtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICRsaW5lc1NpemU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucHJvZ3Jlc3MtYnV0dG9uIHtcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZpbGwgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNocmluayAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIEJvdHRvbSAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFRvcCAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIExlZnQgM0QgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBSaWdodCAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgRG93biAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgVXAgM0QgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIExlZnQgM0QgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIFJpZ2h0IDNEICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgQmFjayAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRmxpcCBPcGVuIDNEICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZSBEb3duICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBNb3ZlIFVwICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBUb3AgTGluZSAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTGF0ZXJhbCBMaW5lcyAqL1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtaG9yaXpvbnRhbF0sIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1maWxsXVtkYXRhLXZlcnRpY2FsXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXSAuY29udGVudCwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtdmVydGljYWxdIC5jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXSAuY29udGVudCAuc3VjY2VzcywgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtaG9yaXpvbnRhbF0gLmNvbnRlbnQgLmVycm9yLCAucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS12ZXJ0aWNhbF0gLmNvbnRlbnQgLnN1Y2Nlc3MsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1maWxsXVtkYXRhLXZlcnRpY2FsXSAuY29udGVudCAuZXJyb3Ige1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXS5zdGF0ZS1zdWNjZXNzIC5jb250ZW50LCAucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXS5zdGF0ZS1lcnJvciAuY29udGVudCwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtdmVydGljYWxdLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1maWxsXVtkYXRhLXZlcnRpY2FsXS5zdGF0ZS1lcnJvciAuY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0gLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdIC5jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3M7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2hyaW5rXVtkYXRhLWhvcml6b250YWxdIC5jb250ZW50IC5zdWNjZXNzLCAucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2hyaW5rXVtkYXRhLWhvcml6b250YWxdIC5jb250ZW50IC5lcnJvciwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0gLmNvbnRlbnQgLnN1Y2Nlc3MsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdIC5jb250ZW50IC5lcnJvciB7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0uc3RhdGUtbG9hZGluZywgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0uc3RhdGUtbG9hZGluZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0uc3RhdGUtbG9hZGluZyAuY29udGVudCwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0uc3RhdGUtbG9hZGluZyAuY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2hyaW5rXVtkYXRhLWhvcml6b250YWxdLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0uc3RhdGUtZXJyb3IgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdLnN0YXRlLWVycm9yIC5jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0uc3RhdGUtbG9hZGluZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtYW5nbGUtYm90dG9tXSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiBmaXggdGhlIGJsdXJyaW5lc3MgdGhhdCBjYXVzZXMgYSBnYXAgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1ib3R0b21dLnN0YXRlLWxvYWRpbmcgLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWFuZ2xlLXRvcF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWFuZ2xlLXRvcF0uc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3Mtd3JhcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1sZWZ0XSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiBmaXggdGhlIGJsdXJyaW5lc3MgdGhhdCBjYXVzZXMgYSBnYXAgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1sZWZ0XS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1yaWdodF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWFuZ2xlLXJpZ2h0XS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC00NWRlZyk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtZG93bl0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1kb3duXS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS11cF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtdXBdLnN0YXRlLWxvYWRpbmcgLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtbGVmdF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtbGVmdF0gLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1sZWZ0XS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1zaWRlLXJpZ2h0XSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1yaWdodF0gLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1yaWdodF0uc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3Mtd3JhcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWJhY2tdIC5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtYmFja10gLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1iYWNrXSAuY29udGVudCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWJhY2tdLnN0YXRlLWxvYWRpbmcgLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSBzY2FsZVgoMC42KSBzY2FsZVkoMC4zKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1mbGlwLW9wZW5dIC5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1mbGlwLW9wZW5dIC5jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZsaXAtb3Blbl0uc3RhdGUtbG9hZGluZyAuY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXSB7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNsaWRlLWRvd25dIC5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2xpZGUtZG93bl0gLmNvbnRlbnQge1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMjBweCA2MHB4O1xuICBiYWNrZ3JvdW5kOiBcIiMyMjIyMjJcIjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9bW92ZS11cF0ge1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1tb3ZlLXVwXSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPW1vdmUtdXBdIC5jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDIwcHggNjBweDtcbiAgYmFja2dyb3VuZDogXCIjMjIyMjIyXCI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9bW92ZS11cF0uc3RhdGUtbG9hZGluZyAuY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT10b3AtbGluZV0gLnByb2dyZXNzLWlubmVyIHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWxhdGVyYWwtbGluZXNdIC5wcm9ncmVzcy1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMTBweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogXCIjNTU1NTU1XCI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSIsIiRidXR0b25CYWNrZ3JvdW5kIDogJyMyMjIyMjInO1xyXG4kYnV0dG9uVGV4dENvbG9yIDogJyNGRkZGRkYnO1xyXG4kYnV0dG9uU3VjY2Vzc0JhY2tncm91bmQgOiAnIzAwZTE3NSc7XHJcbiRidXR0b25FcnJvckJhY2tncm91bmQgOiAnI2ZmMGMwMCc7XHJcbiRzdWNjZXNzSWNvbkNvbG9yIDogJyNmZmZmZmYnO1xyXG4kZXJyb3JJY29uQ29sb3IgOiAnI2ZmZmZmZic7XHJcbiRwcm9ncmVzc0JhY2tncm91bmQgOiAnIzAwMDAwMCc7XHJcbiRwcm9ncmVzc0lubmVyQmFja2dyb3VuZCA6ICcjNTU1NTU1JztcclxuJHJvdGF0ZUJsdXJyaW5lc3M6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJGxpbmVzU2l6ZTogMTBweDtcclxuJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0OjEwcHg7XHJcbiRtb3ZlVXBQcm9ncmVzc0hlaWdodDoxNXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "../progress-button/src/lib/progress-button.component.ts":
/*!***************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.component.ts ***!
  \***************************************************************/
/*! exports provided: ProgressButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonComponent", function() { return ProgressButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



let ProgressButtonComponent = class ProgressButtonComponent {
    constructor() {
        /** PRIVATE */
        this.progressDefault = {
            animation: 'fill',
            direction: 'horizontal',
            statusTime: 1500,
        };
        this.designDefault = {
            background: '#222222',
            color: '#FFFFFF',
            successBackground: '#00e175',
            errorBackground: '#ff0c00',
            successIconColor: '#ffffff',
            errorIconColor: '#ffffff',
            progressBackground: '#000000',
            progressInnerBackground: '#555555',
            linesSize: 10
        };
        this.progressValueP = 0;
        this.statusClassP = '';
        this.progressP = this.progressDefault;
        this.designP = this.designDefault;
        this.loadingP = false;
        this.noTransitionP = false;
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
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    click() {
        this.action.emit(this);
    }
    /**
     * Init the progress component
     */
    progressInit() {
        this.disabled = true;
        this.loadingP = true;
        this.noTransitionP = false;
        this.progressValue = 0;
    }
    /**
     * Stop the progress animation
     * @param status ProgressButtonStatus State of stop (error, success)
     * @return Observable An observable with after-init and complete steps
     */
    progressStop(status) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            observer.next('before-init');
            const tim1 = setTimeout(() => {
                this.noTransitionP = true;
                this.progressValue = 0;
                this.loadingP = false;
                this.statusClass = ('state-' + status);
                observer.next('after-init');
                const tim2 = setTimeout(() => {
                    this.statusClass = '';
                    this.disabled = null;
                    observer.complete();
                    clearTimeout(tim1);
                    clearTimeout(tim2);
                }, this.progress.statusTime);
            }, 300);
        });
    }
    /**
     * Tell if the progress is 3d perspective
     * @return mix The attribute data-perspective value
     */
    get perspective() {
        return (this.progress.animation.includes('rotate-') || this.progress.animation.includes('flip-')) ? '' : null;
    }
    get buttonStyle() {
        return {
            background: (this.perspective === null) ? this.mainBackgroundColor : null,
            color: this.design.color
        };
    }
    get mainBackgroundColor() {
        let bg = this.design.background;
        switch (this.statusClass) {
            case 'state-success':
                bg = this.design.successBackground;
                break;
            case 'state-error':
                bg = this.design.errorBackground;
                break;
        }
        return bg;
    }
    get contentStyle() {
        return {
            background: (this.perspective === '' || this.isAnimation('slide-down') || this.isAnimation('move-up')) ?
                this.mainBackgroundColor : null,
            color: this.design.color
        };
    }
    /**
     * The Progress Inner Style
     */
    get progressInnerStyle() {
        return {
            background: (!this.isAnimation('lateral-lines')) ? this.design.progressInnerBackground : null,
            borderColor: (this.isAnimation('lateral-lines')) ? this.design.progressInnerBackground : null,
            borderLeftWidth: (this.isAnimation('lateral-lines') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
            borderRightWidth: (this.isAnimation('lateral-lines') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
            height: (!this.isHorizontal()) ? this.progressValueP + '%' :
                (this.isAnimation('top-line') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
            width: (this.isHorizontal()) ? this.progressValueP + '%' :
                (this.isAnimation('top-line') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
        };
    }
    /**
     * Check if animation is active
     * @param name ProgressButtonAnimation Animation name
     */
    isAnimation(name) {
        return (this.progress.animation === name);
    }
    /**
     * Check if progress direction is horizontal
     */
    isHorizontal() {
        return (this.progress.direction === 'horizontal');
    }
    /**
     * Check if vertical direction is forced
     */
    isForcedVerticalDirection() {
        return (this.progress.animation === 'lateral-lines');
    }
    /**
     * Progress Button Data
     * @param progress ProgressButtonData The Progress Button Data
     */
    set progress(progress) {
        this.progressP = Object.assign({}, this.progressDefault, progress);
        this.progressP.direction = (this.isForcedVerticalDirection()) ? 'vertical' : this.progressP.direction;
    }
    /**
     * The Progress Button Data
     */
    get progress() {
        return this.progressP;
    }
    /**
     * Progress Button Design
     * @param design ProgressButtonDesign The Progress Button Design
     */
    set design(design) {
        this.designP = Object.assign({}, this.designDefault, design);
    }
    /**
     * The Progress Button Design
     */
    get design() {
        return this.designP;
    }
    /**
     * Get the status class
     */
    get statusClass() {
        return this.statusClassP;
    }
    /**
     * Set the status class
     * @param value The status class
     */
    set statusClass(value) {
        this.statusClassP = value;
    }
    get progressValue() {
        return this.progressValueP;
    }
    set progressValue(value) {
        this.progressValueP = value;
    }
    get noTransition() {
        return this.noTransitionP;
    }
    get loading() {
        return this.loadingP;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "autofocus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProgressButtonComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "progress", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "design", null);
ProgressButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ydd-progress-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-button.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../progress-button/src/lib/progress-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-button.component.vars.scss */ "../progress-button/src/lib/progress-button.component.vars.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-button.component.scss */ "../progress-button/src/lib/progress-button.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-button.component.styles.scss */ "../progress-button/src/lib/progress-button.component.styles.scss")).default]
    })
], ProgressButtonComponent);



/***/ }),

/***/ "../progress-button/src/lib/progress-button.component.vars.scss":
/*!**********************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.component.vars.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9wcm9ncmVzcy1idXR0b24vc3JjL2xpYi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnZhcnMuc2NzcyJ9 */");

/***/ }),

/***/ "../progress-button/src/lib/progress-button.module.ts":
/*!************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.module.ts ***!
  \************************************************************/
/*! exports provided: ProgressButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonModule", function() { return ProgressButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _progress_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-button.component */ "../progress-button/src/lib/progress-button.component.ts");




let ProgressButtonModule = class ProgressButtonModule {
};
ProgressButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_progress_button_component__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_progress_button_component__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonComponent"]]
    })
], ProgressButtonModule);



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9wcm9ncmVzcy1idXR0b24tc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");



let AppComponent = class AppComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.settingsForm = this.fb.group({
            animation: 'fill',
            direction: 'horizontal',
            status: 'success',
            background: '#222222',
            color: '#FFFFFF',
            successBackground: '#00e175',
            errorBackground: '#ff0c00',
            successIconColor: '#ffffff',
            errorIconColor: '#ffffff',
            progressBackground: '#000000',
            progressInnerBackground: '#555555'
        });
    }
    get progressData() {
        return {
            animation: this.settingsForm.value.animation,
            direction: this.settingsForm.value.direction,
        };
    }
    get designData() {
        return {
            background: this.settingsForm.value.background,
            color: this.settingsForm.value.color,
            successBackground: this.settingsForm.value.successBackground,
            errorBackground: this.settingsForm.value.errorBackground,
            successIconColor: this.settingsForm.value.successIconColor,
            errorIconColor: this.settingsForm.value.errorIconColor,
            progressBackground: this.settingsForm.value.progressBackground,
            progressInnerBackground: this.settingsForm.value.progressInnerBackground
        };
    }
    run(instance) {
        let progress = 0;
        instance.progressInit();
        const interval = setInterval(() => {
            progress += 5;
            instance.progressValue = progress;
            if (progress === 100) {
                const sub = instance.progressStop(this.settingsForm.value.status).subscribe({
                    complete() {
                        sub.unsubscribe();
                    }
                });
                clearInterval(interval);
            }
        }, 200);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_button_src_lib_progress_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../progress-button/src/lib/progress-button.module */ "../progress-button/src/lib/progress-button.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "../../node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _progress_button_src_lib_progress_button_module__WEBPACK_IMPORTED_MODULE_5__["ProgressButtonModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Crio\WebstormProjects\ydd-progress-button\projects\progress-button-showcase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map