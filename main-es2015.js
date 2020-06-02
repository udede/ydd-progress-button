(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../progress-button/src/lib/progress-button.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/raw-loader/dist/cjs.js!../progress-button/src/lib/progress-button.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"progress-button\"\n        [attr.autofocus]=\"autofocus\"\n        [attr.disabled]=\"disabled\"\n\n        [attr.form]=\"form?.id\"\n        [attr.formaction]=\"form?.action\"\n        [attr.formmethod]=\"form?.method\"\n        [attr.formnovalidate]=\"form?.noValidate\"\n        [attr.formtarget]=\"form?.target\"\n        [attr.formenctype]=\"form?.enctype\"\n\n        [attr.name]=\"name\"\n        [attr.type]=\"type\"\n        [attr.value]=\"value\"\n\n        [attr.data-style]=\"progress.animation\"\n        [attr.data-vertical]=\"(progress.direction === 'vertical')?'':null\"\n        [attr.data-horizontal]=\"(progress.direction === 'horizontal')?'':null\"\n        [attr.data-perspective]=\"status.perspective\"\n        (click)=\"click()\"\n        [ngClass]=\"[(loading)?'state-loading':'',statusClass,(status.isBorderRadius)?'radius':'']\"\n        [ngStyle]=\"styles.button\">\n  <!-- perspective -->\n  <ng-container *ngIf=\"status.perspective === ''\">\n      <span class=\"progress-wrap\">\n        <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n      </span>\n  </ng-container>\n  <!-- not perspective -->\n  <ng-container *ngIf=\"status.perspective === null\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </ng-container>\n</button>\n<!-- template -->\n<ng-template #content>\n  <span class=\"content\" [ngStyle]=\"styles.content\">\n    <div class=\"success\" [style.color]=\"design.successIconColor\" [innerHTML]=\"'&#xe600;'\"></div>\n    <ng-content></ng-content>\n    <div class=\"error\" [style.color]=\"design.errorIconColor\" [innerHTML]=\"'&#xe601;'\"></div>\n  </span>\n  <span class=\"progress\"\n        [style.background]=\"design.progressBackground\"\n        [style.borderRadius]=\"(status.isBorderRadius)?design.radius+'px':null\">\n    <span class=\"progress-inner\"\n          [ngStyle]=\"styles.progressInner\"\n          [ngClass]=\"{'notransition':noTransition}\"\n    ></span>\n  </span>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!*********************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ydd-main-container\">\n  <div class=\"ydd-main-content\">\n    <div class=\"ydd-page-content\">\n      <div class=\"ydd-page-preview\">\n        <div class=\"item\">\n          <ng-scrollbar visibility=\"hover\">\n            <div class=\"ydd-page-preview-item-description\">\n              <markdown [src]=\"'https://raw.githubusercontent.com/udede/ydd-progress-button/master/README.md'\"></markdown>\n            </div>\n          </ng-scrollbar>\n          <div class=\"ydd-page-preview-item-content\">\n            <div class=\"open-settings-icon\" (click)=\"isSidebarSettingsOpen=true\"></div>\n            <ydd-progress-button (action)=\"run($event)\" [progress]=\"progressData\" [design]=\"designData\">\n              Submit\n            </ydd-progress-button>\n          </div>\n        </div>\n        <div class=\"settings\" [ngClass]=\"{'open':(isSidebarSettingsOpen)}\">\n          <div class=\"close-settings-icon\" (click)=\"isSidebarSettingsOpen=false\"></div>\n          <div class=\"settings-header\">\n            <a href=\"https://www.npmjs.com/package/progress-button\" target=\"_blank\" class=\"repo-link\">\n              <img [src]=\"'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAABACAYAAACgGR3JAAABAUlEQVR4nO3dQQqDQBAAwTHk/19O7vGigsKmq17gLM2eBnebmc+sbTvw9avPOKE5b/X649lgR/CkCJ4UwZMieFIET4rgSRE8KYInRfCkCJ4UwZPyfmDYI0tPv1Zcgjo756qLXmfmvDLjrefohidF8KQInhTBkyJ4UgRPiuBJETwpgidF8KQInhTBkyJ4UgRPiuBJETwpgidF8KQInhTBkyJ4UgRPiuBJETwpT/yIqcILegtww5MieFIET4rgSRE8KYInRfCkCJ4UwZMieFIET4rgSbnywt6Knljsqpzl0tzwpAieFMGTInhSBE+K4EkRPCmCJ0XwpAieFMGTIng6ZuYLDFMJgUMNpzgAAAAASUVORK5CYII='\" alt=\"Npm Logo\"/>\n            </a>\n            <a href=\"https://github.com/udede/ydd-progress-button\" target=\"_blank\" class=\"repo-link\">\n              <img [src]=\"'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABACAYAAACunKHjAAAFg0lEQVR4nNWba4hVVRTHfx4lnRTLBtMmLMoeZE+HRi2i0qKsPlSCRfS0Mix6qH00DKIHhF96QEWGQfSiYqAR+lImNZHVKFZOZSghlkXaaNPDpsSJPbOuHs9ee9997jn33HN/8P+yz95rr73uuft9RlAMxwMzgNOBk4EpwGTgSGCMeDAA7AF+AbYDW4Be4HPgh4L8rAuXAM8C3wODGbUVeA64DCjqx8vEscATwM4cGu9SH7ACOK6MATCv/jsOx+upLuAky5sGMAp4oQEBSOrlWF9TOHOBfsWpRulv4Jqig7CyRAFI6jXL2zowOadRoN7aJv1WXTgH+KsJglDRf8B5eQfCTIb2KZU1g2ZbramRdmC/0uBumTd0ALcALwG7lXz1Up/Ueav4cAzwoaOuC7IGYYqncXOt3MNcL1NkrUweMtPt+Vatw8x22N8LnGLlTsFGxajR5gATjynlsuphqxabrx11GJ8Ps3ILo6yUg7wCnG2lDtNjpdgsA9YA78uT/eLkeuA74Ffgd1lsIU6OBybKbHG61N8iZS+Sv2M1PgPOUPKYN+INYJ71xMONSkTjetxd1ML8hZbKSjMtY6QPuDBFuYcUf+O6yyrhYAKwSzEQ13K9aClYovgb159AW9LRSPH8UaDVSj2U8VZKeWip4snYkDf6LCWCmjqtkuUhdBHonWy9rhTQ9JOvB24wXyj+aupyuRn6NlQU3OkUSLvip0+zKq7F+4g7Uvr7rZXSeDbK8BnKwmQ+M0z97IlcUoWv+1Nghukdis+azDzmqLjpeUoml54ucRAqXOfwXdPN8YKhPe0fwCSr2nKyTvFf06tx7zcrGTStaJIgGG5T/NdkFogjTYFpykOXXGuPMjJB+gBXW+LqiGTnKQTTI3/ZRIEw2wcfW6k60yN5I0JIMyyVhfWBfkwzgZhqJev0qqnlJmTfxDA1kl2oELY1YSB2WCk6bZFs0Yewu8AG5EV/oJ3WKMWSep+VUn5CfR4bpTgzLOtq08doz7M4oyMZS0M4ulGtycDEwKKDkZxehZBpO7xBhPq8N5KDkhA6mjAQM6wUnf5I7iyFYLbTjyiwEVkZneK4b1eUYn5g1vnXWqnl5eoUU4PtkRzzh3J/EwXiASvFzVAMrlRWYz7d5zRXHu70+K9p6CzVnCIPKA99ai9xEE4D/vX4runAeutT5aFPPwYcAjWCcXIn0+d7Ul8R28X+IKXT5l7EBnmbykKr+HRiSn8OaftMJVIh+ge4yjJdPJfKfmotbZiT9LZHyRSqd1NMZ/PEbMe9ncHvbzRfFisZB+WiuLlO+Lzca9DyVLSqnrfZYrSJP5oPabTMsiwHHXsUI8monR+w6/0JcC9wqlVL7ZiefRGwVqmvFg1IX6ey3GGwW7no0aXk0/Qb8GbAcb2LFz33uLLoSUd9Q7TISbdWwU7lgsUmJZ+mdVZN4XQq9rKqL3nUp7HQU0nyDtMsJY8mb/Sr8KBiL6sW+6s8yEeeihYl8l6u5ElqqVVDOLcr9rIo5CLcAc70VLTFyj28e7VKrv1qZW6ySoRT7WJbWs1M64DvL5J8KyocLvsWCyTPDTmMHHkGYollPZCnFGOVziZ0rZ+VvAKxMqsjqxWjg3IOWsTOdh6BWGNZrYHIM/3eKsveMgeiN8/PnEZUGUk65XbsSKvk8NxknJUaTpZA9KQ420hFtS/5+uXUfLWoW9LvsSzVPxDvWZZy5hGl0mpyjTL1CkRhN3sulq/qNCc03W1ZCCdNIMw85opaKtHuYoewVnaE3grMP2il5E+XrB/q/pdwca5skWm/UEULHGVDmK/Yi2tTPT5iy8Icx5U+czR/Qga7k+TTgqTdDZ7PqUqBmVI/I5s8Zk/TnDhlxTTYBMPsS5qdqdB7X2EA/wO4WSD7SJrI9AAAAABJRU5ErkJggg=='\" alt=\"Github Logo\"/>\n            </a>\n            <code (click)=\"copyClipboard('npm i progress-button')\" [ngClass]=\"{'copied':clipboardCopied}\">npm i progress-button</code>\n          </div>\n          <ng-scrollbar visibility=\"hover\">\n            <div class=\"settings-content\">\n              <form [formGroup]=\"settingsForm\" novalidate>\n                <h2>Settings</h2>\n                <h3>Data</h3>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Animation</label>\n                  <div class=\"field\">\n                    <ng-select class=\"ydd-select\" formControlName=\"animation\" [clearable]=\"false\">\n                      <ng-option value=\"fill\">Fill</ng-option>\n                      <ng-option value=\"shrink\">Shrink</ng-option>\n                      <ng-option value=\"rotate-angle-bottom\">Rotate Angle Bottom</ng-option>\n                      <ng-option value=\"rotate-angle-top\">Rotate Angle Top</ng-option>\n                      <ng-option value=\"rotate-angle-left\">Rotate Angle Left</ng-option>\n                      <ng-option value=\"rotate-angle-right\">Rotate Angle Right</ng-option>\n                      <ng-option value=\"rotate-side-down\">Rotate Side Down</ng-option>\n                      <ng-option value=\"rotate-side-up\">Rotate Side Up</ng-option>\n                      <ng-option value=\"rotate-side-left\">Rotate Side Left</ng-option>\n                      <ng-option value=\"rotate-side-right\">Rotate Side Right</ng-option>\n                      <ng-option value=\"rotate-back\">Rotate Back</ng-option>\n                      <ng-option value=\"flip-open\">Flip Open</ng-option>\n                      <ng-option value=\"slide-down\">Slide Down</ng-option>\n                      <ng-option value=\"move-up\">Move Up</ng-option>\n                      <ng-option value=\"top-line\">Top Line</ng-option>\n                      <ng-option value=\"lateral-lines\">Lateral Lines</ng-option>\n                    </ng-select>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Direction</label>\n                  <div class=\"field\" [ngClass]=\"[(progressData.animation === 'lateral-lines')?'disabled':'']\">\n                    <ng-select class=\"ydd-select\" formControlName=\"direction\" [clearable]=\"false\">\n                      <ng-option value=\"horizontal\">Horizontal</ng-option>\n                      <ng-option value=\"vertical\">Vertical</ng-option>\n                    </ng-select>\n                    <small *ngIf=\"(progressData.animation === 'lateral-lines')\">\n                      This property is always vertical when Lateral Lines animation is selected\n                    </small>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Status</label>\n                  <div class=\"field\">\n                    <ng-select class=\"ydd-select\" formControlName=\"status\" [clearable]=\"false\">\n                      <ng-option value=\"success\">Success</ng-option>\n                      <ng-option value=\"error\">Error</ng-option>\n                    </ng-select>\n                  </div>\n                </div>\n                <h3>Design</h3>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"background\" name=\"background\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.background}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Text Color</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"color\" name=\"color\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.color}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Success Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"successBackground\" name=\"successBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.successBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Error Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"errorBackground\" name=\"errorBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.errorBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Success Icon</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"successIconColor\" name=\"successIconColor\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.successIconColor}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Error Icon</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"errorIconColor\" name=\"errorIconColor\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.errorIconColor}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Progress Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"progressBackground\" name=\"progressBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.progressBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Progress Inner Background</label>\n                  <div class=\"field ydd-color-preview\">\n                    <input class=\"ydd-input-text\" formControlName=\"progressInnerBackground\" name=\"progressInnerBackground\" type=\"text\"/>\n                    <span [ngStyle]=\"{background:settingsForm.value.progressInnerBackground}\"></span>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Line Sizes</label>\n                  <div class=\"field\" [ngClass]=\"[(!isLinesSize())?'disabled':'']\">\n                    <ng-select class=\"ydd-select\" formControlName=\"linesSize\" [clearable]=\"false\">\n                      <ng-option value=\"5\">5px</ng-option>\n                      <ng-option value=\"10\">10px</ng-option>\n                      <ng-option value=\"20\">20px</ng-option>\n                    </ng-select>\n                    <small *ngIf=\"!isLinesSize()\">\n                      This property is disabled with the current animation\n                    </small>\n                  </div>\n                </div>\n                <div class=\"ydd-page-preview-settings-field\">\n                  <label>Border Radius</label>\n                  <div class=\"field\" [ngClass]=\"[(isRotateAnimation())?'disabled':'']\">\n                    <ng-select class=\"ydd-select\" formControlName=\"radius\" [clearable]=\"false\">\n                      <ng-option value=\"0\">None</ng-option>\n                      <ng-option value=\"10\">10px</ng-option>\n                      <ng-option value=\"20\">20px</ng-option>\n                      <ng-option value=\"50\">50px</ng-option>\n                    </ng-select>\n                    <small *ngIf=\"isRotateAnimation()\">This property is disabled with the current animation</small>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </ng-scrollbar>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "../progress-button/src/lib/progress-button.component.scss":
/*!*****************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"icomoon\";\n  src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAPYAA0AAAAABbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABoAAAAcadpakEdERUYAAAFMAAAAHwAAACAAMwAGT1MvMgAAAWwAAAA8AAAAYA6xAoFjbWFwAAABqAAAAEoAAAFKy/Ug/2dhc3AAAAH0AAAACAAAAAgAAAAQZ2x5ZgAAAfwAAABaAAAAfGYDQ4loZWFkAAACWAAAAC0AAAA2Fk6lo2hoZWEAAAKIAAAAHAAAACQHwgPGaG10eAAAAqQAAAAWAAAAFgeVAABsb2NhAAACvAAAAA4AAAAOAEYAHG1heHAAAALMAAAAGAAAACAACAAObmFtZQAAAuQAAADNAAABifyQVWlwb3N0AAADtAAAACMAAAA+PkKaWnicY2BgYGQAgjO2i86D6HPnoh/AaABS9wgqAAB4nGNgZGBg4ANiCQYQYGJgZGBmYAWSLGAeAwAEmwA6AHicY2BmDmWcwMDKwMA0k+kMAwNDP4RmfM1gzMjJgAoYBdAEGBwYFJ4xMh/4D4TMB4A8VKDAwAgAYB4MOXicY2BgYGaAYBkGRgYQcAHyGMF8FgYNIM0GpBkZmBgUnjH+/w/kKzxj+P///2MpFqh6IGBkY4BzGJmABBMDKmCEWDGcAQC49wjcAAAAAQAB//8AD3icVYqxDYAwEAPtfxCKolQUTICYgS6jZacs8Dulf/EKosDFyZYPxBcBbsHcC7RiBfYt8aIZmzTzKtX8bQgvoKYNGThDSwz5SFTzwdJ9+OgsEzEn/gcekeAiHQAAeJxjYGRgYADimev2psfz23xl4GZhAIGbMwwmI9MsDMwNQIqDgQnEAwAiqwkVAAAAeJxjYGRgYD7w/wADAwsDCABJRgZUwAoATFcCkgAAAAAAAAAAAVUAAAIAAAAEAAAAAEAAAAAAAAAAAAAAAAgAHAA+AAB4nGNgZGBgYGPgYQDRDAxMDGgAAAJGABd4nHXOMQ6CMBgF4IeARk2MgzGOjE6GI7ghg4sDcRShISTQJlUS2T2Co2fwGJ7LB/kdadL264PXFMACHzjohoMJluIRvRW79F7s0Wexjzke4jHzl3iGFb5sOd6UyaK/ofOI3ohdOhR79EHsY42LeMz8KZ7xNW+UyGBQcxpooMxMbQxxgkKBBhVSWB5V0VQpMfT/UJ7wHosbv3d5wBfuOJEoeyuNDsJdONyN2NV9P8Wde87+FS3XuG8c/41IaWXTu8qDaxvEmTl29R+0pjoZAAAAeJxjYGLAD9iAmJGBiYGZkYmRmb00L9PVzMAAShsCACiABHMA) format(\"woff\");\n}\n\n/* General styles for all types of buttons */\n\n.progress-button {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  outline: none;\n  border: none;\n  background: \"#222222\";\n  color: \"#FFFFFF\";\n  letter-spacing: 1px;\n  font-size: 1em;\n  line-height: 1.4;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.progress-button[disabled], .progress-button[disabled].state-loading {\n  cursor: default;\n}\n\n.progress-button .content {\n  position: relative;\n  display: block;\n  padding: 20px 60px;\n  transition: background-color 0.2s ease;\n}\n\n.progress-button .content .success, .progress-button .content .error {\n  position: absolute;\n  right: 20px;\n  font-family: \"icomoon\", sans-serif;\n  opacity: 0;\n  transition: opacity 0.3s 0.3s;\n  line-height: 1;\n  top: 0;\n  height: 100%;\n  align-items: center;\n  display: flex;\n}\n\n.progress-button .content .success {\n  color: \"#ffffff\";\n}\n\n.progress-button .content .error {\n  color: \"#ffffff\";\n}\n\n.progress-button.state-success .content .success, .progress-button.state-error .content .error {\n  opacity: 1;\n}\n\n.progress-button .progress {\n  background: \"#000000\";\n}\n\n.progress-button .progress-inner {\n  position: absolute;\n  left: 0;\n  background: \"#555555\";\n}\n\n.progress-button .progress-inner.notransition {\n  transition: none !important;\n}\n\n.progress-button[data-horizontal] .progress-inner {\n  top: 0;\n  width: 0;\n  height: 100%;\n  transition: width 0.3s, opacity 0.3s;\n}\n\n.progress-button[data-vertical] .progress-inner {\n  bottom: 0;\n  width: 100%;\n  height: 0;\n  transition: height 0.3s, opacity 0.3s;\n}\n\n.progress-button[data-perspective] {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  background: transparent;\n  perspective: 900px;\n  /* Necessary 3d styles for buttons with perspective */\n}\n\n.progress-button[data-perspective] .content {\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n\n.progress-button[data-perspective] .progress-wrap {\n  display: block;\n  transition: transform 0.2s;\n  transform-style: preserve-3d;\n}\n\n.progress-button[data-perspective] .content, .progress-button[data-perspective] .progress {\n  outline: 1px solid rgba(0, 0, 0, 0);\n  /* Smoothen jagged edges in FF */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC91ZGVkZS95ZGQtcHJvZ3Jlc3MtYnV0dG9uL3Byb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC91ZGVkZS95ZGQtcHJvZ3Jlc3MtYnV0dG9uL3Byb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQudmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBR0Usc0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDIyQ0FBQTtBQ0RGOztBRElBLDRDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCRXRCa0I7RUZ1QmxCLGdCRXRCaUI7RUZ1QmpCLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FDRkY7O0FESUU7RUFDRSxlQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FDSEo7O0FES0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0hOOztBRE1JO0VBQ0UsZ0JFbERjO0FEOENwQjs7QURPSTtFQUNFLGdCRXJEWTtBRGdEbEI7O0FEU0U7RUFFRSxVQUFBO0FDUko7O0FEV0U7RUFDRSxxQkU5RGtCO0FEcUR0Qjs7QURZRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHFCRW5FdUI7QUR5RDNCOztBRFlJO0VBRUUsMkJBQUE7QUNWTjs7QURlSTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUVBLG9DQUFBO0FDYk47O0FEa0JJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEscUNBQUE7QUNoQk47O0FEb0JFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBZUEscURBQUE7QUNoQ0o7O0FEbUJJO0VBQ0Usa0JBQUE7RUFDQSxxQkVoSGM7QUQrRnBCOztBRG9CSTtFQUNFLGNBQUE7RUFFQSwwQkFBQTtFQUVBLDRCQUFBO0FDbEJOOztBRHNCSTtFQUNFLG1DQUFBO0VBQXFDLGdDQUFBO0FDbkIzQyIsImZpbGUiOiJwcm9qZWN0cy9wcm9ncmVzcy1idXR0b24vc3JjL2xpYi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC52YXJzXCI7XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcbiAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBQVBZQUEwQUFBQUFCYmdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBQk1BQUFBQm9BQUFBY2FkcGFrRWRFUlVZQUFBRk1BQUFBSHdBQUFDQUFNd0FHVDFNdk1nQUFBV3dBQUFBOEFBQUFZQTZ4QW9GamJXRndBQUFCcUFBQUFFb0FBQUZLeS9VZy8yZGhjM0FBQUFIMEFBQUFDQUFBQUFnQUFBQVFaMng1WmdBQUFmd0FBQUJhQUFBQWZHWURRNGxvWldGa0FBQUNXQUFBQUMwQUFBQTJGazZsbzJob1pXRUFBQUtJQUFBQUhBQUFBQ1FId2dQR2FHMTBlQUFBQXFRQUFBQVdBQUFBRmdlVkFBQnNiMk5oQUFBQ3ZBQUFBQTRBQUFBT0FFWUFIRzFoZUhBQUFBTE1BQUFBR0FBQUFDQUFDQUFPYm1GdFpRQUFBdVFBQUFETkFBQUJpZnlRVldsd2IzTjBBQUFEdEFBQUFDTUFBQUErUGtLYVduaWNZMkJnWUdRQWdqTzJpODZENkhQbm9oL0FhQUJTOXdncUFBQjRuR05nWkdCZzRBTmlDUVlRWUdKZ1pHQm1ZQVdTTEdBZUF3QUVtd0E2QUhpY1kyQm1EbVdjd01ES3dNQTBrK2tNQXdORFA0Um1mTTFnek1qSmdBb1lCZEFFR0J3WUZKNHhNaC80RDRUTUI0QThWS0RBd0FnQVlCNE1PWGljWTJCZ1lHYUFZQmtHUmdZUWNBSHlHTUY4RmdZTklNMEdwQmtabUJnVW5qSCsvdy9rS3p4aitQLy8vMk1wRnFoNklHQmtZNEJ6R0ptQUJCTURLbUNFV0RHY0FRQzQ5d2pjQUFBQUFRQUIvLzhBRDNpY1ZZcXhEWUF3RUFQdGZ4Q0tvbFFVVElDWWdTNmpaYWNzOER1bGYvRUtvc0RGeVpZUHhCY0Jic0hjQzdSaUJmWXQ4YUlabXpUekt0WDhiUWd2b0tZTkdUaERTd3o1U0ZUendkSjkrT2dzRXpFbi9nY2VrZUFpSFFBQWVKeGpZR1JnWUFEaW1ldjJwc2Z6MjN4bDRHWmhBSUdiTXd3bUk5TXNETXdOUUlxRGdRbkVBd0FpcXdrVkFBQUFlSnhqWUdSZ1lEN3cvd0FEQXdzRENBQkpSZ1pVd0FvQVRGY0NrZ0FBQUFBQUFBQUFBVlVBQUFJQUFBQUVBQUFBQUVBQUFBQUFBQUFBQUFBQUFBZ0FIQUErQUFCNG5HTmdaR0JnWUdQZ1lRRFJEQXhNREdnQUFBSkdBQmQ0bkhYT01RNkNNQmdGNEllQVJrMk1nekdPakU2R0k3Z2hnNHNEY1JTaElTVFFKbFVTMlQyQ28yZndHSjdMQi9rZGFkTDI2NFBYRk1BQ0h6am9ob01KbHVJUnZSVzc5RjdzMFdleGp6a2U0akh6bDNpR0ZiNXNPZDZVeWFLL29mT0kzb2hkT2hSNzlFSHNZNDJMZU16OEtaN3hOVytVeUdCUWN4cG9vTXhNYlF4eGdrS0JCaFZTV0I1VjBWUXBNZlQvVUo3d0hvc2J2M2Q1d0JmdU9KRW9leXVORHNKZE9OeU4yTlY5UDhXZGU4NytGUzNYdUc4Yy80MUlhV1hUdThxRGF4dkVtVGwyOVIrMHBqb1pBQUFBZUp4allHTEFEOWlBbUpHQmlZR1prWW1SbWIwMEw5UFZ6TUFBU2hzQ0FDaUFCSE1BKSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuLyogR2VuZXJhbCBzdHlsZXMgZm9yIGFsbCB0eXBlcyBvZiBidXR0b25zICovXG4ucHJvZ3Jlc3MtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmQ7XG4gIGNvbG9yOiAkYnV0dG9uVGV4dENvbG9yO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAmW2Rpc2FibGVkXSwgJltkaXNhYmxlZF0uc3RhdGUtbG9hZGluZyB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAuc3VjY2VzcywgLmVycm9yIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiLCBzYW5zLXNlcmlmO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwLjNzO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuc3VjY2VzcyB7XG4gICAgICBjb2xvcjogJHN1Y2Nlc3NJY29uQ29sb3I7XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiAkZXJyb3JJY29uQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50IC5zdWNjZXNzLFxuICAmLnN0YXRlLWVycm9yIC5jb250ZW50IC5lcnJvciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzQmFja2dyb3VuZDtcbiAgfVxuXG4gIC5wcm9ncmVzcy1pbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzSW5uZXJCYWNrZ3JvdW5kO1xuXG4gICAgJi5ub3RyYW5zaXRpb24ge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJltkYXRhLWhvcml6b250YWxdIHtcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICB9XG4gIH1cblxuICAmW2RhdGEtdmVydGljYWxdIHtcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgfVxuXG4gICZbZGF0YS1wZXJzcGVjdGl2ZV0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA5MDBweDtcbiAgICBwZXJzcGVjdGl2ZTogOTAwcHg7XG5cbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkYnV0dG9uQmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB9XG5cbiAgICAvKiBOZWNlc3NhcnkgM2Qgc3R5bGVzIGZvciBidXR0b25zIHdpdGggcGVyc3BlY3RpdmUgKi9cbiAgICAuY29udGVudCwgLnByb2dyZXNzIHtcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApOyAvKiBTbW9vdGhlbiBqYWdnZWQgZWRnZXMgaW4gRkYgKi9cbiAgICB9XG4gIH1cbn1cbiIsIioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiO1xuICBzcmM6IHVybChkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBUFlBQTBBQUFBQUJiZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFCTUFBQUFCb0FBQUFjYWRwYWtFZEVSVVlBQUFGTUFBQUFId0FBQUNBQU13QUdUMU12TWdBQUFXd0FBQUE4QUFBQVlBNnhBb0ZqYldGd0FBQUJxQUFBQUVvQUFBRkt5L1VnLzJkaGMzQUFBQUgwQUFBQUNBQUFBQWdBQUFBUVoyeDVaZ0FBQWZ3QUFBQmFBQUFBZkdZRFE0bG9aV0ZrQUFBQ1dBQUFBQzBBQUFBMkZrNmxvMmhvWldFQUFBS0lBQUFBSEFBQUFDUUh3Z1BHYUcxMGVBQUFBcVFBQUFBV0FBQUFGZ2VWQUFCc2IyTmhBQUFDdkFBQUFBNEFBQUFPQUVZQUhHMWhlSEFBQUFMTUFBQUFHQUFBQUNBQUNBQU9ibUZ0WlFBQUF1UUFBQUROQUFBQmlmeVFWV2x3YjNOMEFBQUR0QUFBQUNNQUFBQStQa0thV25pY1kyQmdZR1FBZ2pPMmk4NkQ2SFBub2gvQWFBQlM5d2dxQUFCNG5HTmdaR0JnNEFOaUNRWVFZR0pnWkdCbVlBV1NMR0FlQXdBRW13QTZBSGljWTJCbURtV2N3TURLd01BMGsra01Bd05EUDRSbWZNMWd6TWpKZ0FvWUJkQUVHQndZRko0eE1oLzRENFRNQjRBOFZLREF3QWdBWUI0TU9YaWNZMkJnWUdhQVlCa0dSZ1lRY0FIeUdNRjhGZ1lOSU0wR3BCa1ptQmdVbmpIKy93L2tLenhqK1AvLy8yTXBGcWg2SUdCa1k0QnpHSm1BQkJNREttQ0VXREdjQVFDNDl3amNBQUFBQVFBQi8vOEFEM2ljVllxeERZQXdFQVB0ZnhDS29sUVVUSUNZZ1M2alphY3M4RHVsZi9FS29zREZ5WllQeEJjQmJzSGNDN1JpQmZZdDhhSVptelR6S3RYOGJRZ3ZvS1lOR1RoRFN3ejVTRlR6d2RKOStPZ3NFekVuL2djZWtlQWlIUUFBZUp4allHUmdZQURpbWV2MnBzZnoyM3hsNEdaaEFJR2JNd3dtSTlNc0RNd05RSXFEZ1FuRUF3QWlxd2tWQUFBQWVKeGpZR1JnWUQ3dy93QURBd3NEQ0FCSlJnWlV3QW9BVEZjQ2tnQUFBQUFBQUFBQUFWVUFBQUlBQUFBRUFBQUFBRUFBQUFBQUFBQUFBQUFBQUFnQUhBQStBQUI0bkdOZ1pHQmdZR1BnWVFEUkRBeE1ER2dBQUFKR0FCZDRuSFhPTVE2Q01CZ0Y0SWVBUmsyTWd6R09qRTZHSTdnaGc0c0RjUlNoSVNUUUpsVVMyVDJDbzJmd0dKN0xCL2tkYWRMMjY0UFhGTUFDSHpqb2hvTUpsdUlSdlJXNzlGN3MwV2V4anprZTRqSHpsM2lHRmI1c09kNlV5YUsvb2ZPSTNvaGRPaFI3OUVIc1k0MkxlTXo4S1o3eE5XK1V5R0JRY3hwb29NeE1iUXh4Z2tLQkJoVlNXQjVWMFZRcE1mVC9VSjd3SG9zYnYzZDV3QmZ1T0pFb2V5dU5Ec0pkT055TjJOVjlQOFdkZTg3K0ZTM1h1RzhjLzQxSWFXWFR1OHFEYXh2RW1UbDI5UiswcGpvWkFBQUFlSnhqWUdMQUQ5aUFtSkdCaVlHWmtZbVJtYjAwTDlQVnpNQUFTaHNDQUNpQUJITUEpIGZvcm1hdChcIndvZmZcIik7XG59XG4vKiBHZW5lcmFsIHN0eWxlcyBmb3IgYWxsIHR5cGVzIG9mIGJ1dHRvbnMgKi9cbi5wcm9ncmVzcy1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBcIiMyMjIyMjJcIjtcbiAgY29sb3I6IFwiI0ZGRkZGRlwiO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGlzYWJsZWRdLCAucHJvZ3Jlc3MtYnV0dG9uW2Rpc2FibGVkXS5zdGF0ZS1sb2FkaW5nIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnByb2dyZXNzLWJ1dHRvbiAuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggNjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uIC5jb250ZW50IC5zdWNjZXNzLCAucHJvZ3Jlc3MtYnV0dG9uIC5jb250ZW50IC5lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIiwgc2Fucy1zZXJpZjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIDAuM3M7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9ncmVzcy1idXR0b24gLmNvbnRlbnQgLnN1Y2Nlc3Mge1xuICBjb2xvcjogXCIjZmZmZmZmXCI7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uIC5jb250ZW50IC5lcnJvciB7XG4gIGNvbG9yOiBcIiNmZmZmZmZcIjtcbn1cbi5wcm9ncmVzcy1idXR0b24uc3RhdGUtc3VjY2VzcyAuY29udGVudCAuc3VjY2VzcywgLnByb2dyZXNzLWJ1dHRvbi5zdGF0ZS1lcnJvciAuY29udGVudCAuZXJyb3Ige1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2dyZXNzLWJ1dHRvbiAucHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIjtcbn1cbi5wcm9ncmVzcy1idXR0b24gLnByb2dyZXNzLWlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBcIiM1NTU1NTVcIjtcbn1cbi5wcm9ncmVzcy1idXR0b24gLnByb2dyZXNzLWlubmVyLm5vdHJhbnNpdGlvbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtaG9yaXpvbnRhbF0gLnByb2dyZXNzLWlubmVyIHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcywgb3BhY2l0eSAwLjNzO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXZlcnRpY2FsXSAucHJvZ3Jlc3MtaW5uZXIge1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MsIG9wYWNpdHkgMC4zcztcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1wZXJzcGVjdGl2ZV0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDkwMHB4O1xuICBwZXJzcGVjdGl2ZTogOTAwcHg7XG4gIC8qIE5lY2Vzc2FyeSAzZCBzdHlsZXMgZm9yIGJ1dHRvbnMgd2l0aCBwZXJzcGVjdGl2ZSAqL1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXBlcnNwZWN0aXZlXSAuY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggNjBweDtcbiAgYmFja2dyb3VuZDogXCIjMjIyMjIyXCI7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtcGVyc3BlY3RpdmVdIC5wcm9ncmVzcy13cmFwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1wZXJzcGVjdGl2ZV0gLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1wZXJzcGVjdGl2ZV0gLnByb2dyZXNzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIC8qIFNtb290aGVuIGphZ2dlZCBlZGdlcyBpbiBGRiAqL1xufSIsIiRidXR0b25CYWNrZ3JvdW5kIDogJyMyMjIyMjInO1xuJGJ1dHRvblRleHRDb2xvciA6ICcjRkZGRkZGJztcbiRidXR0b25TdWNjZXNzQmFja2dyb3VuZCA6ICcjMDBlMTc1JztcbiRidXR0b25FcnJvckJhY2tncm91bmQgOiAnI2ZmMGMwMCc7XG4kc3VjY2Vzc0ljb25Db2xvciA6ICcjZmZmZmZmJztcbiRlcnJvckljb25Db2xvciA6ICcjZmZmZmZmJztcbiRwcm9ncmVzc0JhY2tncm91bmQgOiAnIzAwMDAwMCc7XG4kcHJvZ3Jlc3NJbm5lckJhY2tncm91bmQgOiAnIzU1NTU1NSc7XG4kcm90YXRlQmx1cnJpbmVzczogcmdiYSgwLCAwLCAwLCAwLjMpO1xuJGxpbmVzU2l6ZTogMTBweDtcbiRzbGlkZURvd25Qcm9ncmVzc0hlaWdodDoxMHB4O1xuJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcbiRtb3ZlVXBQcm9ncmVzc0hlaWdodDoxNXB4O1xuJG1vdmVVcFByb2dyZXNzSGVpZ2h0UmFkaXVzOjVweDtcbiJdfQ== */");

/***/ }),

/***/ "../progress-button/src/lib/progress-button.component.styles.scss":
/*!************************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.component.styles.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-button {\n  transition: background 0.2s;\n  /***************************************************** Fill */\n  /***************************************************** Shrink */\n  /***************************************************** Rotate Bottom 3D */\n  /***************************************************** Rotate Top 3D */\n  /***************************************************** Rotate Left 3D */\n  /***************************************************** Rotate Right 3D */\n  /***************************************************** Rotate Side Down 3D */\n  /***************************************************** Rotate Side Up 3D */\n  /***************************************************** Rotate Side Left 3D */\n  /***************************************************** Rotate Side Right 3D */\n  /***************************************************** Rotate Back 3D */\n  /***************************************************** Flip Open 3D */\n  /***************************************************** Slide Down */\n  /***************************************************** Move Up */\n  /***************************************************** Top Line */\n  /***************************************************** Lateral Lines */\n}\n.progress-button[data-style=fill][data-horizontal], .progress-button[data-style=fill][data-vertical] {\n  overflow: hidden;\n}\n.progress-button[data-style=fill][data-horizontal] .content, .progress-button[data-style=fill][data-vertical] .content {\n  z-index: 10;\n  transition: transform 0.3s;\n}\n.progress-button[data-style=fill][data-horizontal] .content .success, .progress-button[data-style=fill][data-horizontal] .content .error, .progress-button[data-style=fill][data-vertical] .content .success, .progress-button[data-style=fill][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=fill][data-horizontal].state-success .content, .progress-button[data-style=fill][data-horizontal].state-error .content, .progress-button[data-style=fill][data-vertical].state-success .content, .progress-button[data-style=fill][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink] {\n  overflow: hidden;\n  transition: transform 0.2s, border-radius 0.2s linear;\n}\n.progress-button[data-style=shrink][data-horizontal] .content, .progress-button[data-style=shrink][data-vertical] .content {\n  transition: opacity 0.3s, transform 0.3s, border-radius 0.3s linear, padding 0.3s linear;\n}\n.progress-button[data-style=shrink][data-horizontal] .content .success, .progress-button[data-style=shrink][data-horizontal] .content .error, .progress-button[data-style=shrink][data-vertical] .content .success, .progress-button[data-style=shrink][data-vertical] .content .error {\n  top: 100%;\n  right: auto;\n  left: 50%;\n  transition: opacity 0.3s, border-radius 0.3s linear;\n  transform: translateX(-50%);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading, .progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleY(0.3);\n}\n.progress-button[data-style=shrink][data-horizontal].state-loading .content, .progress-button[data-style=shrink][data-vertical].state-loading .content {\n  opacity: 0;\n}\n.progress-button[data-style=shrink][data-horizontal].state-success .content, .progress-button[data-style=shrink][data-horizontal].state-error .content, .progress-button[data-style=shrink][data-vertical].state-success .content, .progress-button[data-style=shrink][data-vertical].state-error .content {\n  transform: translateY(-100%);\n}\n.progress-button[data-style=shrink][data-vertical].state-loading {\n  transform: scaleX(0.1);\n}\n.progress-button[data-style=shrink].radius.state-loading {\n  transform: scale3d(0.3, 0.3, 1);\n}\n.progress-button[data-style=shrink].radius.state-loading .content {\n  padding: 20px 120px;\n}\n.progress-button[data-style=shrink].radius[data-vertical].state-loading {\n  transform: scale3d(0.3, 0.3, 1) rotate(-90deg);\n}\n.progress-button[data-style=shrink].radius[data-vertical].state-loading .content {\n  padding: 20px 60px;\n}\n.progress-button[data-style=rotate-angle-bottom] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=rotate-angle-bottom].state-loading .progress-wrap {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=rotate-angle-top] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n}\n.progress-button[data-style=rotate-angle-top].state-loading .progress-wrap {\n  transform: rotateX(-45deg);\n}\n.progress-button[data-style=rotate-angle-left] .progress {\n  position: absolute;\n  top: 0;\n  right: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(-90deg);\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-angle-left].state-loading .progress-wrap {\n  transform: rotateY(45deg);\n}\n.progress-button[data-style=rotate-angle-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  box-shadow: -1px 0 0 rgba(0, 0, 0, 0.3);\n  /* fix the blurriness that causes a gap */\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-angle-right].state-loading .progress-wrap {\n  transform: rotateY(-45deg);\n}\n.progress-button[data-style=rotate-side-down] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-down].state-loading .progress-wrap {\n  transform: rotateX(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-up] .progress {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  transform: rotateX(90deg);\n  transform-origin: 50% 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-side-up].state-loading .progress-wrap {\n  transform: rotateX(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-left] .progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left] .progress-wrap {\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-left].state-loading .progress-wrap {\n  transform: translateX(50%) rotateY(90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-side-right] .progress {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 20px;\n  height: 100%;\n  transform: rotateY(90deg);\n  transform-origin: 0 50%;\n}\n.progress-button[data-style=rotate-side-right] .progress-wrap {\n  transform-origin: 100% 50%;\n}\n.progress-button[data-style=rotate-side-right].state-loading .progress-wrap {\n  transform: translateX(-50%) rotateY(-90deg) translateZ(10px);\n}\n.progress-button[data-style=rotate-back] .progress {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotateX(-180deg);\n  transform-origin: 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back] .progress-wrap {\n  transition-timing-function: ease-out;\n}\n.progress-button[data-style=rotate-back] .content {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=rotate-back].state-loading .progress-wrap {\n  transform: rotateX(180deg) scaleX(0.6) scaleY(0.3);\n}\n.progress-button[data-style=flip-open] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 30%;\n}\n.progress-button[data-style=flip-open] .content {\n  z-index: 10;\n  transition: transform 0.2s, background 0.2s;\n  transform-origin: 50% 0;\n}\n.progress-button[data-style=flip-open].state-loading .content {\n  transform: rotateX(45deg);\n}\n.progress-button[data-style=flip-open].radius .progress {\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  overflow: hidden;\n}\n.progress-button[data-style=flip-open].radius.state-loading .progress {\n  opacity: 1;\n}\n.progress-button[data-style=slide-down] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=slide-down] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10px;\n  transition: transform 0.2s, opacity 0.2s;\n}\n.progress-button[data-style=slide-down] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n}\n.progress-button[data-style=slide-down].state-loading .progress {\n  transform: translateY(10px);\n}\n.progress-button[data-style=slide-down].radius .progress, .progress-button[data-style=slide-down].radius .progress-inner {\n  height: 100%;\n  opacity: 0;\n  overflow: hidden;\n}\n.progress-button[data-style=slide-down].radius.state-loading .progress {\n  transform: translateY(5px);\n}\n.progress-button[data-style=slide-down].radius.state-loading .progress, .progress-button[data-style=slide-down].radius.state-loading .progress-inner {\n  opacity: 1;\n}\n.progress-button[data-style=move-up] {\n  padding: 0;\n  overflow: visible;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.progress-button[data-style=move-up] .progress {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 15px;\n  transition: opacity 0.2s;\n}\n.progress-button[data-style=move-up] .content {\n  z-index: 10;\n  padding: 20px 60px;\n  background: \"#222222\";\n  transition: transform 0.2s, opacity 0.2s;\n}\n.progress-button[data-style=move-up].state-loading .content {\n  transform: translateY(-15px);\n}\n.progress-button[data-style=move-up].radius .progress, .progress-button[data-style=move-up].radius .progress-inner {\n  height: 100%;\n  opacity: 0;\n  overflow: hidden;\n}\n.progress-button[data-style=move-up].radius.state-loading .content {\n  transform: translateY(-5px);\n}\n.progress-button[data-style=move-up].radius.state-loading .progress, .progress-button[data-style=move-up].radius.state-loading .progress-inner {\n  opacity: 1;\n}\n.progress-button[data-style=top-line] {\n  transition: background 0.2s;\n  overflow: hidden;\n}\n.progress-button[data-style=top-line] .progress-inner {\n  height: 10px;\n}\n.progress-button[data-style=lateral-lines] {\n  overflow: hidden;\n}\n.progress-button[data-style=lateral-lines] .progress-inner {\n  width: 100%;\n  border-right-style: solid;\n  border-left-style: solid;\n  border-right-width: 10px;\n  border-left-width: 10px;\n  border-color: \"#555555\";\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC91ZGVkZS95ZGQtcHJvZ3Jlc3MtYnV0dG9uL3Byb2plY3RzL3Byb2dyZXNzLWJ1dHRvbi9zcmMvbGliL3Byb2dyZXNzLWJ1dHRvbi5jb21wb25lbnQuc3R5bGVzLnNjc3MiLCJwcm9qZWN0cy9wcm9ncmVzcy1idXR0b24vc3JjL2xpYi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnN0eWxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3VkZWRlL3lkZC1wcm9ncmVzcy1idXR0b24vcHJvamVjdHMvcHJvZ3Jlc3MtYnV0dG9uL3NyYy9saWIvcHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC52YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSwyQkFBQTtFQUNBLDZEQUFBO0VBNkJBLCtEQUFBO0VBcUVBLHlFQUFBO0VBdUJBLHNFQUFBO0VBdUJBLHVFQUFBO0VBdUJBLHdFQUFBO0VBdUJBLDRFQUFBO0VBd0JBLDBFQUFBO0VBd0JBLDRFQUFBO0VBMkJBLDZFQUFBO0VBMkJBLHVFQUFBO0VBa0NBLHFFQUFBO0VBMkNBLG1FQUFBO0VBbURBLGdFQUFBO0VBcURBLGlFQUFBO0VBZ0JBLHNFQUFBO0FDM2RGO0FEWkk7RUFDRSxnQkFBQTtBQ2NOO0FEWk07RUFDRSxXQUFBO0VBRUEsMEJBQUE7QUNjUjtBRFpRO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsd0JBQUE7RUFFQSwyQkFBQTtBQ2NWO0FEVk07RUFHRSw0QkFBQTtBQ1dSO0FETEU7RUFDRSxnQkFBQTtFQUVBLHFEQUFBO0FDT0o7QURKTTtFQUVFLHdGQUFBO0FDTVI7QURKUTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG1EQUFBO0VBRUEsMkJBQUE7QUNNVjtBREZNO0VBRUUsc0JBQUE7QUNJUjtBREZRO0VBQ0UsVUFBQTtBQ0lWO0FEQU07RUFHRSw0QkFBQTtBQ0NSO0FESU07RUFFRSxzQkFBQTtBQ0ZSO0FET007RUFFRSwrQkFBQTtBQ0xSO0FET1E7RUFDRSxtQkFBQTtBQ0xWO0FEVVE7RUFFRSw4Q0FBQTtBQ1JWO0FEVVU7RUFDRSxrQkFBQTtBQ1JaO0FEa0JJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFBd0MseUNBQUE7RUFFeEMsMEJBQUE7RUFFQSx1QkFBQTtBQ2ZOO0FEbUJNO0VBRUUseUJBQUE7QUNqQlI7QUR3Qkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUF3Qyx5Q0FBQTtFQUV4Qyx5QkFBQTtFQUVBLDBCQUFBO0FDckJOO0FEeUJNO0VBRUUsMEJBQUE7QUN2QlI7QUQ4Qkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUF1Qyx5Q0FBQTtFQUV2QywwQkFBQTtFQUVBLDBCQUFBO0FDM0JOO0FEK0JNO0VBRUUseUJBQUE7QUM3QlI7QURvQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUF3Qyx5Q0FBQTtFQUV4Qyx5QkFBQTtFQUVBLHVCQUFBO0FDakNOO0FEcUNNO0VBRUUsMEJBQUE7QUNuQ1I7QUQwQ0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSwwQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ3hDTjtBRDRDTTtFQUVFLDBDQUFBO0FDMUNSO0FEaURJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFFQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUMvQ047QURtRE07RUFFRSwyQ0FBQTtBQ2pEUjtBRHdESTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBRUEsdUJBQUE7QUN0RE47QUR5REk7RUFFRSx1QkFBQTtBQ3ZETjtBRDJETTtFQUVFLDBEQUFBO0FDekRSO0FEZ0VJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFFQSx1QkFBQTtBQzlETjtBRGlFSTtFQUVFLDBCQUFBO0FDL0ROO0FEbUVNO0VBRUUsNERBQUE7QUNqRVI7QUR3RUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSwyQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ3RFTjtBRHlFSTtFQUVFLG9DQUFBO0FDdkVOO0FEMEVJO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtBQ3hFTjtBRDRFTTtFQUVFLGtEQUFBO0FDMUVSO0FEaUZJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQy9FTjtBRGtGSTtFQUNFLFdBQUE7RUFFQSwyQ0FBQTtFQUVBLHVCQUFBO0FDaEZOO0FEb0ZNO0VBRUUseUJBQUE7QUNsRlI7QUR1Rk07RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUVBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNyRlI7QUR5RlE7RUFDRSxVQUFBO0FDdkZWO0FEOEZFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQzVGSjtBRDhGSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlFelhtQjtFRjJYbkIsd0NBQUE7QUM1Rk47QUQrRkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkUzWWM7QUQ4U3BCO0FEaUdNO0VBRUUsMkJBQUE7QUMvRlI7QURvR007RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDbEdSO0FEc0dRO0VBRUUsMEJBQUE7QUNwR1Y7QUR1R1E7RUFDRSxVQUFBO0FDckdWO0FENEdFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQzFHSjtBRDRHSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlFMWFnQjtFRjRhaEIsd0JBQUE7QUMxR047QUQ2R0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkU5YmM7RUZnY2Qsd0NBQUE7QUMzR047QUQrR007RUFFRSw0QkFBQTtBQzdHUjtBRGtITTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNoSFI7QURvSFE7RUFFRSwyQkFBQTtBQ2xIVjtBRHFIUTtFQUNFLFVBQUE7QUNuSFY7QUQwSEU7RUFFRSwyQkFBQTtFQUNBLGdCQUFBO0FDeEhKO0FEeUhJO0VBQ0UsWUUzZE07QURvV1o7QURrSUU7RUFDRSxnQkFBQTtBQ2hJSjtBRGlJSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JFNWVNO0VGNmVOLHVCRTdlTTtFRjhlTix1QkVoZnFCO0VGaWZyQix1QkFBQTtBQy9ITiIsImZpbGUiOiJwcm9qZWN0cy9wcm9ncmVzcy1idXR0b24vc3JjL2xpYi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vcHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC52YXJzXCI7XG5cbi5wcm9ncmVzcy1idXR0b24ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRmlsbCAqL1xuICAmW2RhdGEtc3R5bGU9XCJmaWxsXCJdIHtcbiAgICAmW2RhdGEtaG9yaXpvbnRhbF0sICZbZGF0YS12ZXJ0aWNhbF0ge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcblxuICAgICAgICAuc3VjY2VzcywgLmVycm9yIHtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zdGF0ZS1zdWNjZXNzIC5jb250ZW50LFxuICAgICAgJi5zdGF0ZS1lcnJvciAuY29udGVudCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogU2hyaW5rICovXG4gICZbZGF0YS1zdHlsZT1cInNocmlua1wiXSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMsIGJvcmRlci1yYWRpdXMgMC4ycyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGJvcmRlci1yYWRpdXMgMC4ycyBsaW5lYXI7XG5cbiAgICAmW2RhdGEtaG9yaXpvbnRhbF0sICZbZGF0YS12ZXJ0aWNhbF0ge1xuICAgICAgLmNvbnRlbnQge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzIGxpbmVhciwgcGFkZGluZyAwLjNzIGxpbmVhcjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzIGxpbmVhciwgcGFkZGluZyAwLjNzIGxpbmVhcjtcblxuICAgICAgICAuc3VjY2VzcywgLmVycm9yIHtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBib3JkZXItcmFkaXVzIDAuM3MgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjMpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjMpO1xuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc3RhdGUtc3VjY2VzcyAuY29udGVudCxcbiAgICAgICYuc3RhdGUtZXJyb3IgLmNvbnRlbnQge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJltkYXRhLXZlcnRpY2FsXSB7XG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5yYWRpdXMge1xuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDEpO1xuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZbZGF0YS12ZXJ0aWNhbF0ge1xuICAgICAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAxKSByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDEpIHJvdGF0ZSgtOTBkZWcpO1xuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBCb3R0b20gM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLWJvdHRvbVwiXSB7XG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAwICRyb3RhdGVCbHVycmluZXNzOyAvKiBmaXggdGhlIGJsdXJyaW5lc3MgdGhhdCBjYXVzZXMgYSBnYXAgKi9cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICB9XG5cbiAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgLnByb2dyZXNzLXdyYXAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBUb3AgM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLWFuZ2xlLXRvcFwiXSB7XG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAwICRyb3RhdGVCbHVycmluZXNzOyAvKiBmaXggdGhlIGJsdXJyaW5lc3MgdGhhdCBjYXVzZXMgYSBnYXAgKi9cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBMZWZ0IDNEICovXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1hbmdsZS1sZWZ0XCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAwIDAgJHJvdGF0ZUJsdXJyaW5lc3M7IC8qIGZpeCB0aGUgYmx1cnJpbmVzcyB0aGF0IGNhdXNlcyBhIGdhcCAqL1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFJpZ2h0IDNEICovXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1hbmdsZS1yaWdodFwiXSB7XG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJveC1zaGFkb3c6IC0xcHggMCAwICRyb3RhdGVCbHVycmluZXNzOyAvKiBmaXggdGhlIGJsdXJyaW5lc3MgdGhhdCBjYXVzZXMgYSBnYXAgKi9cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIERvd24gM0QgKi9cbiAgJltkYXRhLXN0eWxlPVwicm90YXRlLXNpZGUtZG93blwiXSB7XG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIFVwIDNEICovXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1zaWRlLXVwXCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgTGVmdCAzRCAqL1xuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtc2lkZS1sZWZ0XCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5wcm9ncmVzcy13cmFwIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgU2lkZSBSaWdodCAzRCAqL1xuICAmW2RhdGEtc3R5bGU9XCJyb3RhdGUtc2lkZS1yaWdodFwiXSB7XG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLXdyYXAge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBCYWNrIDNEICovXG4gICZbZGF0YS1zdHlsZT1cInJvdGF0ZS1iYWNrXCJdIHtcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3Mtd3JhcCB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgLnByb2dyZXNzLXdyYXAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSBzY2FsZVgoMC42KSBzY2FsZVkoMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRmxpcCBPcGVuIDNEICovXG4gICZbZGF0YS1zdHlsZT1cImZsaXAtb3BlblwiXSB7XG4gICAgLnByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMzAlO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzLCBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYmFja2dyb3VuZCAwLjJzO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJhZGl1cyB7XG4gICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAmLnN0YXRlLWxvYWRpbmcge1xuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogU2xpZGUgRG93biAqL1xuICAmW2RhdGEtc3R5bGU9XCJzbGlkZS1kb3duXCJdIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgIC5wcm9ncmVzcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6ICRzbGlkZURvd25Qcm9ncmVzc0hlaWdodDtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBhZGRpbmc6IDIwcHggNjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICRidXR0b25CYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYuc3RhdGUtbG9hZGluZyB7XG4gICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHQpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJhZGl1cyB7XG4gICAgICAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1pbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHRSYWRpdXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHRSYWRpdXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLCAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTW92ZSBVcCAqL1xuICAmW2RhdGEtc3R5bGU9XCJtb3ZlLXVwXCJdIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgIC5wcm9ncmVzcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6ICRtb3ZlVXBQcm9ncmVzc0hlaWdodDtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcGFkZGluZzogMjBweCA2MHB4O1xuICAgICAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmQ7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnM7XG4gICAgfVxuXG4gICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRtb3ZlVXBQcm9ncmVzc0hlaWdodCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJG1vdmVVcFByb2dyZXNzSGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJhZGl1cyB7XG4gICAgICAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1pbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgJi5zdGF0ZS1sb2FkaW5nIHtcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kbW92ZVVwUHJvZ3Jlc3NIZWlnaHRSYWRpdXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJG1vdmVVcFByb2dyZXNzSGVpZ2h0UmFkaXVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcywgLnByb2dyZXNzLWlubmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFRvcCBMaW5lICovXG4gICZbZGF0YS1zdHlsZT1cInRvcC1saW5lXCJdIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgaGVpZ2h0OiAkbGluZXNTaXplO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExhdGVyYWwgTGluZXMgKi9cbiAgJltkYXRhLXN0eWxlPVwibGF0ZXJhbC1saW5lc1wiXSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkbGluZXNTaXplO1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICRsaW5lc1NpemU7XG4gICAgICBib3JkZXItY29sb3I6ICRwcm9ncmVzc0lubmVyQmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIC5zdWNjZXNzLCAuZXJyb3Ige1xuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIucHJvZ3Jlc3MtYnV0dG9uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZpbGwgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNocmluayAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIEJvdHRvbSAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFRvcCAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIExlZnQgM0QgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBSaWdodCAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgRG93biAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUm90YXRlIFNpZGUgVXAgM0QgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIExlZnQgM0QgKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJvdGF0ZSBTaWRlIFJpZ2h0IDNEICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBSb3RhdGUgQmFjayAzRCAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRmxpcCBPcGVuIDNEICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZSBEb3duICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBNb3ZlIFVwICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBUb3AgTGluZSAqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTGF0ZXJhbCBMaW5lcyAqL1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtaG9yaXpvbnRhbF0sIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1maWxsXVtkYXRhLXZlcnRpY2FsXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXSAuY29udGVudCwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtdmVydGljYWxdIC5jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXSAuY29udGVudCAuc3VjY2VzcywgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtaG9yaXpvbnRhbF0gLmNvbnRlbnQgLmVycm9yLCAucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS12ZXJ0aWNhbF0gLmNvbnRlbnQgLnN1Y2Nlc3MsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1maWxsXVtkYXRhLXZlcnRpY2FsXSAuY29udGVudCAuZXJyb3Ige1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXS5zdGF0ZS1zdWNjZXNzIC5jb250ZW50LCAucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmlsbF1bZGF0YS1ob3Jpem9udGFsXS5zdGF0ZS1lcnJvciAuY29udGVudCwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPWZpbGxdW2RhdGEtdmVydGljYWxdLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1maWxsXVtkYXRhLXZlcnRpY2FsXS5zdGF0ZS1lcnJvciAuY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzLCBib3JkZXItcmFkaXVzIDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm9yZGVyLXJhZGl1cyAwLjJzIGxpbmVhcjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0gLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdIC5jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIGJvcmRlci1yYWRpdXMgMC4zcyBsaW5lYXIsIHBhZGRpbmcgMC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3MsIGJvcmRlci1yYWRpdXMgMC4zcyBsaW5lYXIsIHBhZGRpbmcgMC4zcyBsaW5lYXI7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2hyaW5rXVtkYXRhLWhvcml6b250YWxdIC5jb250ZW50IC5zdWNjZXNzLCAucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2hyaW5rXVtkYXRhLWhvcml6b250YWxdIC5jb250ZW50IC5lcnJvciwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0gLmNvbnRlbnQgLnN1Y2Nlc3MsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdIC5jb250ZW50IC5lcnJvciB7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGJvcmRlci1yYWRpdXMgMC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzIGxpbmVhcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0uc3RhdGUtbG9hZGluZywgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0uc3RhdGUtbG9hZGluZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0uc3RhdGUtbG9hZGluZyAuY29udGVudCwgLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0uc3RhdGUtbG9hZGluZyAuY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2hyaW5rXVtkYXRhLWhvcml6b250YWxdLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtaG9yaXpvbnRhbF0uc3RhdGUtZXJyb3IgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdLnN0YXRlLXN1Y2Nlc3MgLmNvbnRlbnQsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdW2RhdGEtdmVydGljYWxdLnN0YXRlLWVycm9yIC5jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua11bZGF0YS12ZXJ0aWNhbF0uc3RhdGUtbG9hZGluZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zaHJpbmtdLnJhZGl1cy5zdGF0ZS1sb2FkaW5nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDEpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua10ucmFkaXVzLnN0YXRlLWxvYWRpbmcgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4IDEyMHB4O1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNocmlua10ucmFkaXVzW2RhdGEtdmVydGljYWxdLnN0YXRlLWxvYWRpbmcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMSkgcm90YXRlKC05MGRlZyk7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMSkgcm90YXRlKC05MGRlZyk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2hyaW5rXS5yYWRpdXNbZGF0YS12ZXJ0aWNhbF0uc3RhdGUtbG9hZGluZyAuY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggNjBweDtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtYW5nbGUtYm90dG9tXSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiBmaXggdGhlIGJsdXJyaW5lc3MgdGhhdCBjYXVzZXMgYSBnYXAgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1ib3R0b21dLnN0YXRlLWxvYWRpbmcgLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWFuZ2xlLXRvcF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWFuZ2xlLXRvcF0uc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3Mtd3JhcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1sZWZ0XSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiBmaXggdGhlIGJsdXJyaW5lc3MgdGhhdCBjYXVzZXMgYSBnYXAgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1sZWZ0XS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1hbmdsZS1yaWdodF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLyogZml4IHRoZSBibHVycmluZXNzIHRoYXQgY2F1c2VzIGEgZ2FwICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWFuZ2xlLXJpZ2h0XS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC00NWRlZyk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtZG93bl0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1kb3duXS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS11cF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtdXBdLnN0YXRlLWxvYWRpbmcgLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtbGVmdF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLXNpZGUtbGVmdF0gLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1sZWZ0XS5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcy13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1zaWRlLXJpZ2h0XSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1yaWdodF0gLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtc2lkZS1yaWdodF0uc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3Mtd3JhcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTBweCk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWJhY2tdIC5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1yb3RhdGUtYmFja10gLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXJvdGF0ZS1iYWNrXSAuY29udGVudCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9cm90YXRlLWJhY2tdLnN0YXRlLWxvYWRpbmcgLnByb2dyZXNzLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHNjYWxlWCgwLjYpIHNjYWxlWSgwLjMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSBzY2FsZVgoMC42KSBzY2FsZVkoMC4zKTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1mbGlwLW9wZW5dIC5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1mbGlwLW9wZW5dIC5jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycywgYmFja2dyb3VuZCAwLjJzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYmFja2dyb3VuZCAwLjJzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1mbGlwLW9wZW5dLnN0YXRlLWxvYWRpbmcgLmNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZyk7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9ZmxpcC1vcGVuXS5yYWRpdXMgLnByb2dyZXNzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1mbGlwLW9wZW5dLnJhZGl1cy5zdGF0ZS1sb2FkaW5nIC5wcm9ncmVzcyB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2xpZGUtZG93bl0ge1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXSAucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXSAuY29udGVudCB7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gIGJhY2tncm91bmQ6IFwiIzIyMjIyMlwiO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXNsaWRlLWRvd25dLnN0YXRlLWxvYWRpbmcgLnByb2dyZXNzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXS5yYWRpdXMgLnByb2dyZXNzLCAucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9c2xpZGUtZG93bl0ucmFkaXVzIC5wcm9ncmVzcy1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXS5yYWRpdXMuc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3Mge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXS5yYWRpdXMuc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1zbGlkZS1kb3duXS5yYWRpdXMuc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3MtaW5uZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPW1vdmUtdXBdIHtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9bW92ZS11cF0gLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1tb3ZlLXVwXSAuY29udGVudCB7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gIGJhY2tncm91bmQ6IFwiIzIyMjIyMlwiO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1tb3ZlLXVwXS5zdGF0ZS1sb2FkaW5nIC5jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPW1vdmUtdXBdLnJhZGl1cyAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1tb3ZlLXVwXS5yYWRpdXMgLnByb2dyZXNzLWlubmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPW1vdmUtdXBdLnJhZGl1cy5zdGF0ZS1sb2FkaW5nIC5jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1tb3ZlLXVwXS5yYWRpdXMuc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3MsIC5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1tb3ZlLXVwXS5yYWRpdXMuc3RhdGUtbG9hZGluZyAucHJvZ3Jlc3MtaW5uZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2dyZXNzLWJ1dHRvbltkYXRhLXN0eWxlPXRvcC1saW5lXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9dG9wLWxpbmVdIC5wcm9ncmVzcy1pbm5lciB7XG4gIGhlaWdodDogMTBweDtcbn1cbi5wcm9ncmVzcy1idXR0b25bZGF0YS1zdHlsZT1sYXRlcmFsLWxpbmVzXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtYnV0dG9uW2RhdGEtc3R5bGU9bGF0ZXJhbC1saW5lc10gLnByb2dyZXNzLWlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxMHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMTBweDtcbiAgYm9yZGVyLWNvbG9yOiBcIiM1NTU1NTVcIjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59IiwiJGJ1dHRvbkJhY2tncm91bmQgOiAnIzIyMjIyMic7XG4kYnV0dG9uVGV4dENvbG9yIDogJyNGRkZGRkYnO1xuJGJ1dHRvblN1Y2Nlc3NCYWNrZ3JvdW5kIDogJyMwMGUxNzUnO1xuJGJ1dHRvbkVycm9yQmFja2dyb3VuZCA6ICcjZmYwYzAwJztcbiRzdWNjZXNzSWNvbkNvbG9yIDogJyNmZmZmZmYnO1xuJGVycm9ySWNvbkNvbG9yIDogJyNmZmZmZmYnO1xuJHByb2dyZXNzQmFja2dyb3VuZCA6ICcjMDAwMDAwJztcbiRwcm9ncmVzc0lubmVyQmFja2dyb3VuZCA6ICcjNTU1NTU1JztcbiRyb3RhdGVCbHVycmluZXNzOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4kbGluZXNTaXplOiAxMHB4O1xuJHNsaWRlRG93blByb2dyZXNzSGVpZ2h0OjEwcHg7XG4kc2xpZGVEb3duUHJvZ3Jlc3NIZWlnaHRSYWRpdXM6NXB4O1xuJG1vdmVVcFByb2dyZXNzSGVpZ2h0OjE1cHg7XG4kbW92ZVVwUHJvZ3Jlc3NIZWlnaHRSYWRpdXM6NXB4O1xuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _progress_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-button.service */ "../progress-button/src/lib/progress-button.service.ts");




let ProgressButtonComponent = class ProgressButtonComponent {
    constructor(service) {
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
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Execute click action
         */
        this.click = () => {
            this.action.emit(this);
        };
        /**
         * Init the progress component
         */
        this.progressInit = () => {
            this.disabled = true;
            this.loading = true;
            this.noTransition = false;
            this.progressValue = 0;
        };
        /**
         * Stop the progress animation
         * @param status ProgressButtonStatus State of stop (error, success)
         * @return Observable An observable with after-init and complete steps
         */
        this.progressStop = (status) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                observer.next('before-init');
                const tim1 = setTimeout(() => {
                    this.noTransition = true;
                    this.progressValue = 0;
                    this.loading = false;
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
        };
        this.progress = this.service.progress;
        this.design = this.service.design;
    }
    /**
     * Return the status of the progress data
     */
    get status() {
        return this.service.status;
    }
    /**
     * Return styles of the button and its components
     */
    get styles() {
        return this.service.styles(this.progressValue, this.statusClass);
    }
    /**
     * Progress Button Data
     * @param progress ProgressButtonData The Progress Button Data
     */
    set progress(progress) {
        this.service.progress = progress;
    }
    /**
     * The Progress Button Data
     */
    get progress() {
        return this.service.progress;
    }
    /**
     * Progress Button Design
     * @param design ProgressButtonDesign The Progress Button Design
     */
    set design(design) {
        this.service.design = design;
    }
    /**
     * The Progress Button Design
     */
    get design() {
        return this.service.design;
    }
};
ProgressButtonComponent.ctorParameters = () => [
    { type: _progress_button_service__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "autofocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "form", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProgressButtonComponent.prototype, "action", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "progress", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressButtonComponent.prototype, "design", null);
ProgressButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ydd-progress-button',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./progress-button.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../progress-button/src/lib/progress-button.component.html")).default,
        providers: [_progress_button_service__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./progress-button.component.vars.scss */ "../progress-button/src/lib/progress-button.component.vars.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./progress-button.component.scss */ "../progress-button/src/lib/progress-button.component.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./progress-button.component.styles.scss */ "../progress-button/src/lib/progress-button.component.styles.scss")).default]
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
/*! exports provided: ProgressButtonService, ProgressButtonConfig, ProgressButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonModule", function() { return ProgressButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-button.component */ "../progress-button/src/lib/progress-button.component.ts");
/* harmony import */ var _progress_button_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-button.types */ "../progress-button/src/lib/progress-button.types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonConfig", function() { return _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["ProgressButtonConfig"]; });

/* harmony import */ var _progress_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-button.service */ "../progress-button/src/lib/progress-button.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonService", function() { return _progress_button_service__WEBPACK_IMPORTED_MODULE_5__["ProgressButtonService"]; });

var ProgressButtonModule_1;








let ProgressButtonModule = ProgressButtonModule_1 = class ProgressButtonModule {
    static forRoot(config) {
        return {
            ngModule: ProgressButtonModule_1,
            providers: [
                {
                    provide: _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["FOR_ROOT_CONFIG_TOKEN"],
                    useValue: config
                },
                {
                    provide: _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["ProgressButtonConfig"],
                    useFactory: _progress_button_types__WEBPACK_IMPORTED_MODULE_4__["progressButtonConfigFactory"],
                    deps: [_progress_button_types__WEBPACK_IMPORTED_MODULE_4__["FOR_ROOT_CONFIG_TOKEN"]]
                }
            ]
        };
    }
};
ProgressButtonModule = ProgressButtonModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_progress_button_component__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_progress_button_component__WEBPACK_IMPORTED_MODULE_3__["ProgressButtonComponent"]]
    })
], ProgressButtonModule);



/***/ }),

/***/ "../progress-button/src/lib/progress-button.service.ts":
/*!*************************************************************!*\
  !*** ../progress-button/src/lib/progress-button.service.ts ***!
  \*************************************************************/
/*! exports provided: ProgressButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonService", function() { return ProgressButtonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _progress_button_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-button.types */ "../progress-button/src/lib/progress-button.types.ts");



let ProgressButtonService = class ProgressButtonService {
    constructor(config = new _progress_button_types__WEBPACK_IMPORTED_MODULE_2__["ProgressButtonConfig"]()) {
        /**
         * Check if animation is active
         * @param name ProgressButtonAnimation Animation name
         */
        this.isAnimation = (name) => {
            return (this.progress.animation === name);
        };
        /**
         * Return some progress styles
         * @param progressValue The progress value
         * @param statusClass The status (state-success | state-error)
         */
        this.styles = (progressValue, statusClass) => {
            return {
                progressInner: this.progressInnerStyle(progressValue),
                button: this.buttonStyle(statusClass),
                content: this.contentStyle(statusClass)
            };
        };
        /**
         * Get the Progress Inner Style
         * @param progressValue The progress value
         */
        this.progressInnerStyle = (progressValue) => {
            const style = {
                background: this.design.progressInnerBackground,
                borderColor: null,
                borderLeftWidth: null,
                borderRightWidth: null,
                height: null,
                width: null,
            };
            // Reset LinesSize
            if ((this.design.linesSize === null) || (typeof this.design.linesSize === 'undefined')) {
                this.design.linesSize = 10;
            }
            // Lateral Lines
            if (this.isAnimation('lateral-lines')) {
                style.background = null;
                style.borderColor = this.design.progressInnerBackground;
                style.borderLeftWidth = this.design.linesSize + 'px';
                style.borderRightWidth = this.design.linesSize + 'px';
            }
            // Set Size
            style.height = this.progressInnerHeight(progressValue);
            style.width = this.progressInnerWidth(progressValue);
            return style;
        };
        /**
         * Get Calculated Progress Inner Width
         */
        this.progressInnerWidth = (progressValue) => {
            if (this.progress.direction === 'horizontal') {
                return progressValue + '%';
            }
            else {
                if (this.isAnimation('shrink') && this.design.radius) {
                    return progressValue + '%';
                }
            }
            if (this.isAnimation('top-line')) {
                return this.design.linesSize + 'px';
            }
            return null;
        };
        /**
         * Get Calculated Progress Inner Height
         */
        this.progressInnerHeight = (progressValue) => {
            if (this.progress.direction === 'vertical') {
                if (this.isAnimation('shrink') && this.design.radius) {
                    return '100%';
                }
                return progressValue + '%';
            }
            if (this.isAnimation('top-line')) {
                return this.design.linesSize + 'px';
            }
            return null;
        };
        /**
         * Get the background color of the button according to the status
         */
        this.mainBackgroundColor = (statusClass) => {
            let bg = this.design.background;
            switch (statusClass) {
                case 'state-success':
                    bg = this.design.successBackground;
                    break;
                case 'state-error':
                    bg = this.design.errorBackground;
                    break;
            }
            return bg;
        };
        /**
         * Get css style of the button
         */
        this.buttonStyle = (statusClass) => {
            return {
                background: (!this.status.isPerspective) ? this.mainBackgroundColor(statusClass) : null,
                color: this.design.color,
                borderRadius: (this.status.isBorderRadius) ? this.design.radius + 'px' : null,
            };
        };
        /**
         * Get the content style according to the status
         */
        this.contentStyle = (statusClass) => {
            return {
                background: (this.status.isContentBackground) ? this.mainBackgroundColor(statusClass) : null,
                color: this.design.color,
                borderRadius: (this.status.isBorderRadius) ? this.design.radius + 'px' : null,
            };
        };
        const defConfig = new _progress_button_types__WEBPACK_IMPORTED_MODULE_2__["ProgressButtonConfig"]();
        this.progressP = (config.progress) ? Object.assign({}, config.progress) : Object.assign({}, defConfig.progress);
        this.designP = (config.design) ? Object.assign({}, config.design) : Object.assign({}, defConfig.design);
    }
    /**
     * Return the status of the data
     */
    get status() {
        const status = {
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
        status.isHorizontal = (this.progress.direction === 'horizontal');
        status.isRotateAnimation = (this.progress.animation.includes('rotate-'));
        status.isFlipAnimation = (this.progress.animation.includes('flip-'));
        status.isSlideDownAnimation = (this.progress.animation.includes('slide-down'));
        status.isMoveUpAnimation = (this.progress.animation.includes('move-up'));
        status.perspective = (status.isRotateAnimation || status.isFlipAnimation) ? '' : null; // Have progress animation 3D perspective
        status.isPerspective = (status.perspective !== null);
        status.isBorderRadius = (!status.isRotateAnimation && this.design.radius !== null);
        status.isContentBackground = (status.isPerspective || status.isSlideDownAnimation || status.isMoveUpAnimation);
        return status;
    }
    get design() {
        return this.designP;
    }
    set design(value) {
        this.designP = Object(_progress_button_types__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"])(value, this.designP);
    }
    get progress() {
        return this.progressP;
    }
    set progress(value) {
        this.progressP = Object(_progress_button_types__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"])(value, this.progressP);
    }
};
ProgressButtonService.ctorParameters = () => [
    { type: _progress_button_types__WEBPACK_IMPORTED_MODULE_2__["ProgressButtonConfig"] }
];
ProgressButtonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProgressButtonService);



/***/ }),

/***/ "../progress-button/src/lib/progress-button.types.ts":
/*!***********************************************************!*\
  !*** ../progress-button/src/lib/progress-button.types.ts ***!
  \***********************************************************/
/*! exports provided: ProgressButtonConfig, mergeOptions, FOR_ROOT_CONFIG_TOKEN, progressButtonConfigFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonConfig", function() { return ProgressButtonConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_ROOT_CONFIG_TOKEN", function() { return FOR_ROOT_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressButtonConfigFactory", function() { return progressButtonConfigFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProgressButtonConfig = 
/**
 * Button Config used to initialize button options
 */
class ProgressButtonConfig {
    constructor() {
        this.progress = {
            animation: 'fill',
            direction: 'horizontal',
            statusTime: 1500,
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
    }
};
ProgressButtonConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
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
        Object.keys(source).forEach((k) => {
            if ((data[k] !== null && typeof data[k] !== 'undefined' && data[k] !== '')) {
                source[k] = data[k];
            }
        });
        // Update lateral-lines animation direction to vertical
        if (typeof source !== 'undefined' && source.animation && source.animation === 'lateral-lines') {
            source.direction = 'vertical';
        }
    }
    return source;
}
// Token that makes the raw options available to the following factory function.
let FOR_ROOT_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('forRoot() ProgressButtonService configuration.');
/**
 * Return an instance of ProgressButtonConfig
 * @param config The button config for the module
 * @return ProgressButtonConfig;
 */
function progressButtonConfigFactory(config) {
    const options = new ProgressButtonConfig();
    if (config) {
        options.progress = mergeOptions(config.progress, options.progress);
        options.design = mergeOptions(config.design, options.design);
    }
    return (options);
}


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

/***/ "./src/app/app.component.models.ts":
/*!*****************************************!*\
  !*** ./src/app/app.component.models.ts ***!
  \*****************************************/
/*! exports provided: markedOptionsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markedOptionsFactory", function() { return markedOptionsFactory; });
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");

function markedOptionsFactory() {
    const renderer = new ngx_markdown__WEBPACK_IMPORTED_MODULE_0__["MarkedRenderer"]();
    let headers = [];
    let cellIndex = 0;
    renderer.table = (header, body) => {
        headers = [];
        return '<div class="table"><div class="header">' + header + '</div><div class="table-body">' + body + '</div></div>';
    };
    renderer.tablerow = (content) => {
        cellIndex = 0;
        return '<div class="row">' + content + '</div>';
    };
    renderer.tablecell = (content, flags) => {
        let title = null;
        if (flags.header) {
            headers.push(content);
        }
        else {
            title = headers[cellIndex];
            cellIndex++;
        }
        return '<div class="cell" ' + ((title !== null) ? 'data-title="' + title + '"' : '') + '>' + content.replace(/,/g, '') + '</div>';
    };
    return { renderer };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let AppComponent = class AppComponent {
    constructor(fb) {
        this.fb = fb;
        this.isSidebarSettingsOpen = false;
        this.clipboardCopied = false;
        this.isLinesSize = () => {
            return ((this.progressData.animation === 'top-line') || (this.progressData.animation === 'lateral-lines'));
        };
        this.isRotateAnimation = () => {
            return (this.progressData.animation.includes('rotate-'));
        };
        this.copyClipboard = (val) => {
            if (!this.clipboardCopied) {
                const selBox = document.createElement('textarea');
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
                this.clipboardCopied = true;
                const t = setTimeout(() => {
                    this.clipboardCopied = false;
                    clearTimeout(t);
                }, 1000);
            }
        };
    }
    ngOnInit() {
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
            progressInnerBackground: this.settingsForm.value.progressInnerBackground,
            radius: parseInt(this.settingsForm.value.radius, 10),
            linesSize: parseInt(this.settingsForm.value.linesSize, 10)
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
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_button_src_lib_progress_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../progress-button/src/lib/progress-button.module */ "../progress-button/src/lib/progress-button.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "../../node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component.models */ "./src/app/app.component.models.ts");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollbar */ "../../node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkedOptions"],
                    useFactory: _app_component_models__WEBPACK_IMPORTED_MODULE_9__["markedOptionsFactory"],
                }
            })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/udede/ydd-progress-button/projects/progress-button-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map