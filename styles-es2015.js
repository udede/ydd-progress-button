(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/css-loader/dist/cjs.js??ref--12-1!/home/travis/build/udede/ydd-progress-button/node_modules/postcss-loader/src??embedded!/home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "pre[data-line] {\n\tposition: relative;\n\tpadding: 1em 0 1em 3em;\n}\n\n.line-highlight {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tpadding: inherit 0;\n\tmargin-top: 1em; /* Same as .prism’s padding-top */\n\n\tbackground: hsla(24, 20%, 50%,.08);\n\tbackground: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n\n\tpointer-events: none;\n\n\tline-height: inherit;\n\twhite-space: pre;\n}\n\n.line-highlight:before,\n\t.line-highlight[data-end]:after {\n\t\tcontent: attr(data-start);\n\t\tposition: absolute;\n\t\ttop: .4em;\n\t\tleft: .6em;\n\t\tmin-width: 1em;\n\t\tpadding: 0 .5em;\n\t\tbackground-color: hsla(24, 20%, 50%,.4);\n\t\tcolor: hsl(24, 20%, 95%);\n\t\tfont: bold 65%/1.5 sans-serif;\n\t\ttext-align: center;\n\t\tvertical-align: .3em;\n\t\tborder-radius: 999px;\n\t\ttext-shadow: none;\n\t\tbox-shadow: 0 1px white;\n\t}\n\n.line-highlight[data-end]:after {\n\t\tcontent: attr(data-end);\n\t\ttop: auto;\n\t\tbottom: .4em;\n\t}\n\n.line-numbers .line-highlight:before,\n.line-numbers .line-highlight:after {\n\tcontent: none;\n}\n\npre[id].linkable-line-numbers span.line-numbers-rows {\n\tpointer-events: all;\n}\n\npre[id].linkable-line-numbers span.line-numbers-rows > span:before {\n\tcursor: pointer;\n}\n\npre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {\n\tbackground-color: rgba(128, 128, 128, .2);\n}\n", "",{"version":3,"sources":["prism-line-highlight.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,OAAO;CACP,QAAQ;CACR,kBAAkB;CAClB,eAAe,EAAE,iCAAiC;;CAElD,kCAAkC;CAClC,sFAAsF;;CAEtF,oBAAoB;;CAEpB,oBAAoB;CACpB,gBAAgB;AACjB;;AAEC;;EAEC,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,cAAc;EACd,eAAe;EACf,uCAAuC;EACvC,wBAAwB;EACxB,6BAA6B;EAC7B,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;CACxB;;AAEA;EACC,uBAAuB;EACvB,SAAS;EACT,YAAY;CACb;;AAED;;CAEC,aAAa;AACd;;AAEA;CACC,mBAAmB;AACpB;;AACA;CACC,eAAe;AAChB;;AACA;CACC,yCAAyC;AAC1C","file":"prism-line-highlight.css","sourcesContent":["pre[data-line] {\n\tposition: relative;\n\tpadding: 1em 0 1em 3em;\n}\n\n.line-highlight {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tpadding: inherit 0;\n\tmargin-top: 1em; /* Same as .prism’s padding-top */\n\n\tbackground: hsla(24, 20%, 50%,.08);\n\tbackground: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n\n\tpointer-events: none;\n\n\tline-height: inherit;\n\twhite-space: pre;\n}\n\n\t.line-highlight:before,\n\t.line-highlight[data-end]:after {\n\t\tcontent: attr(data-start);\n\t\tposition: absolute;\n\t\ttop: .4em;\n\t\tleft: .6em;\n\t\tmin-width: 1em;\n\t\tpadding: 0 .5em;\n\t\tbackground-color: hsla(24, 20%, 50%,.4);\n\t\tcolor: hsl(24, 20%, 95%);\n\t\tfont: bold 65%/1.5 sans-serif;\n\t\ttext-align: center;\n\t\tvertical-align: .3em;\n\t\tborder-radius: 999px;\n\t\ttext-shadow: none;\n\t\tbox-shadow: 0 1px white;\n\t}\n\n\t.line-highlight[data-end]:after {\n\t\tcontent: attr(data-end);\n\t\ttop: auto;\n\t\tbottom: .4em;\n\t}\n\n.line-numbers .line-highlight:before,\n.line-numbers .line-highlight:after {\n\tcontent: none;\n}\n\npre[id].linkable-line-numbers span.line-numbers-rows {\n\tpointer-events: all;\n}\npre[id].linkable-line-numbers span.line-numbers-rows > span:before {\n\tcursor: pointer;\n}\npre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {\n\tbackground-color: rgba(128, 128, 128, .2);\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/css-loader/dist/cjs.js??ref--12-1!/home/travis/build/udede/ydd-progress-button/node_modules/postcss-loader/src??embedded!/home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n.line-numbers-rows > span {\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", "",{"version":3,"sources":["prism-line-numbers.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,MAAM;CACN,eAAe;CACf,YAAY;CACZ,UAAU,EAAE,4CAA4C;CACxD,oBAAoB;CACpB,4BAA4B;;CAE5B,yBAAyB;CACzB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;;AAElB;;AAEC;EACC,cAAc;EACd,6BAA6B;CAC9B;;AAEC;GACC,4BAA4B;GAC5B,WAAW;GACX,cAAc;GACd,oBAAoB;GACpB,iBAAiB;EAClB","file":"prism-line-numbers.css","sourcesContent":["pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/css-loader/dist/cjs.js??ref--13-1!/home/travis/build/udede/ydd-progress-button/node_modules/postcss-loader/src??embedded!/home/travis/build/udede/ydd-progress-button/node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=\"rtl\"] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#D0021B}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=\"rtl\"] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=\"rtl\"] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=\"rtl\"] .ng-dropdown-panel{direction:rtl;text-align:right}@font-face {\n  font-family: \"Gilroy-Regular\";\n  font-weight: normal;\n  font-style: normal;\n  src: url('Gilroy-Regular.eot');\n  src: url('Gilroy-Regular.eot?#iefix') format(\"embedded-opentype\"), url('Gilroy-Regular.woff2') format(\"woff2\"), url('Gilroy-Regular.woff') format(\"woff\"), url('Gilroy-Regular.ttf') format(\"ttf\"), url('Gilroy-Regular.svg#Gilroy-Regular') format(\"svg\");\n}@font-face {\n  font-family: \"Gilroy-Light\";\n  font-weight: 300;\n  font-style: normal;\n  src: url('Gilroy-Light.eot');\n  src: url('Gilroy-Light.eot?#iefix') format(\"embedded-opentype\"), url('Gilroy-Light.woff2') format(\"woff2\"), url('Gilroy-Light.woff') format(\"woff\"), url('Gilroy-Light.ttf') format(\"ttf\"), url('Gilroy-Light.svg#Gilroy-Light') format(\"svg\");\n}@font-face {\n  font-family: \"Gilroy-Bold\";\n  font-weight: 700;\n  font-style: normal;\n  src: url('Gilroy-Bold.eot');\n  src: url('Gilroy-Bold.eot?#iefix') format(\"embedded-opentype\"), url('Gilroy-Bold.woff2') format(\"woff2\"), url('Gilroy-Bold.woff') format(\"woff\"), url('Gilroy-Bold.ttf') format(\"ttf\"), url('Gilroy-Bold.svg#Gilroy-Bold') format(\"svg\");\n}@font-face {\n  font-family: \"Gilroy-Medium\";\n  font-weight: normal;\n  font-style: normal;\n  src: url('Gilroy-Medium.eot');\n  src: url('Gilroy-Medium.eot?#iefix') format(\"embedded-opentype\"), url('Gilroy-Medium.woff2') format(\"woff2\"), url('Gilroy-Medium.woff') format(\"woff\"), url('Gilroy-Medium.ttf') format(\"ttf\"), url('Gilroy-Medium.svg#Gilroy-Medium') format(\"svg\");\n}@font-face {\n  font-family: \"Gilroy-SemiBold\";\n  font-weight: 700;\n  font-style: normal;\n  src: url('Gilroy-SemiBold.eot');\n  src: url('Gilroy-SemiBold.eot?#iefix') format(\"embedded-opentype\"), url('Gilroy-SemiBold.woff2') format(\"woff2\"), url('Gilroy-SemiBold.woff') format(\"woff\"), url('Gilroy-SemiBold.ttf') format(\"ttf\"), url('Gilroy-SemiBold.svg#Gilroy-SemiBold') format(\"svg\");\n}@font-face {\n  font-family: \"Gilroy-ExtraBold\";\n  font-weight: 800;\n  font-style: normal;\n  src: url('Gilroy-ExtraBold.eot');\n  src: url('Gilroy-ExtraBold.eot?#iefix') format(\"embedded-opentype\"), url('Gilroy-ExtraBold.woff2') format(\"woff2\"), url('Gilroy-ExtraBold.woff') format(\"woff\"), url('Gilroy-ExtraBold.ttf') format(\"ttf\"), url('Gilroy-ExtraBold.svg#Gilroy-ExtraBold') format(\"svg\");\n}*::-moz-selection {\n  background: #000000;\n  /* WebKit/Blink Browsers */\n  color: #ffffff;\n}*::selection {\n  background: #000000;\n  /* WebKit/Blink Browsers */\n  color: #ffffff;\n}*::-moz-selection {\n  background: #000000;\n  /* Gecko Browsers */\n  color: #ffffff;\n}body {\n  font-family: \"Gilroy-Medium\", sans-serif;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  line-height: 1.4;\n  color: #333333;\n}ul {\n  list-style: none;\n  padding-left: 0;\n}ul li {\n  margin-bottom: 10px;\n}body h1:first-child {\n  margin-top: 0;\n}body a {\n  color: #516bf0;\n  text-decoration: none;\n  border-bottom: 1px solid #dce2ff;\n  padding-bottom: 3px;\n}h2, h3, h4, h5, b, strong, button {\n  font-family: \"Gilroy-Bold\", sans-serif;\n}h3 {\n  font-family: Gilroy-Medium, sans-serif;\n  font-weight: 300;\n}h5 {\n  font-size: 14px;\n  text-align: center;\n  background: #fff;\n  padding: 1em;\n  border-radius: 5px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n}h1 {\n  font-family: \"Gilroy-ExtraBold\", sans-serif;\n  font-weight: 800;\n}h2 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}h3 code {\n  font-size: 18px;\n  margin-right: 5px;\n  margin-left: 0;\n}img[alt=preview] {\n  max-width: 100%;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n  border: 1px solid #f0f0f0;\n  display: none;\n}input[type=text].ydd-input-text {\n  padding: 10px;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 2px solid #f0f0f0;\n  color: #333;\n  font-size: 14px;\n  font-family: Gilroy-Medium, sans-serif;\n  outline: none;\n  transition: all 0.2s ease;\n}input[type=text].ydd-input-text:hover, input[type=text].ydd-input-text:focus {\n  border-color: #333333;\n}div#demourl, [alt=\"demo online\"] {\n  display: none;\n}h1#angular-progress-button + p a {\n  border-bottom: none;\n}.ydd-page-content {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n}.ydd-page-preview {\n  display: flex;\n  align-items: stretch;\n  height: 100%;\n  max-width: 1920px;\n  margin: auto;\n  border: 1px solid #f0f0f0;\n  border-top: 0;\n  border-bottom: 0;\n}.ydd-page-preview .item {\n  width: 60%;\n  box-sizing: border-box;\n  overflow: auto;\n  height: 100%;\n  background: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}.ydd-page-preview .item .ng-scrollbar {\n  height: calc(100% - 100px);\n}.ng-scroll-content {\n  width: 100%;\n}.ng-scrollbar-thumb {\n  background-color: #f0f0f0 !important;\n  transition: background-color 0.2s ease-in-out;\n}.ng-scrollbar-wrapper[verticalHovered=true] > .scrollbar-control .ng-scrollbar-thumb {\n  background-color: #d8d8d8 !important;\n}.ydd-page-preview-item-description {\n  padding: 5em;\n  overflow: auto;\n}.ydd-page-preview-item-description code {\n  font-family: monospace;\n  font-weight: bold;\n}.ydd-page-preview-item-content {\n  padding: 3em;\n  height: 100px;\n  flex-grow: 2;\n  background: #ffffff;\n  border-top: 1px solid #f0f0f0;\n  overflow: auto;\n  z-index: 1;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n}.ydd-page-preview-item-content:before {\n  content: \"COMPONENT PREVIEW\";\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  font-size: 10px;\n  color: #ddd;\n  padding: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: right;\n  letter-spacing: 1px;\n}.ydd-page-preview .settings {\n  width: 40%;\n  box-sizing: border-box;\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n  border-left: 1px solid #f0f0f0;\n  z-index: 2;\n}.ydd-page-preview .ng-scrollbar {\n  height: calc(100% - 65px) !important;\n}.ydd-page-preview .settings-content {\n  padding: 2em 3em;\n  box-sizing: border-box;\n}.ydd-page-preview .settings-header {\n  display: flex;\n  align-items: center;\n  padding: 1em 3em;\n  box-sizing: border-box;\n  background: #fff;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n  z-index: 3;\n  border-bottom: 1px solid #f0f0f0;\n  height: 65px;\n}.ydd-page-preview .settings-header .repo-link {\n  border-bottom: none;\n  margin-right: 20px;\n  padding: 0;\n  line-height: 24px;\n  max-height: 24px;\n  opacity: 0.2;\n  transition: opacity 0.2s ease-in-out;\n}.ydd-page-preview .settings-header .repo-link:hover {\n  opacity: 1;\n}.ydd-page-preview .settings-header code {\n  padding: 5px 20px;\n  border-radius: 5px;\n  border: 2px solid #ccc;\n  font-weight: bold;\n  background: #f9f9f9;\n  color: #999;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  position: relative;\n}.ydd-page-preview .settings-header code:hover {\n  border: 2px solid #000;\n  font-weight: bold;\n  background: transparent;\n  color: #000;\n}.ydd-page-preview .settings-header code.copied,\n.ydd-page-preview .settings-header code.copied:hover {\n  border: 2px solid #ccc;\n}.ydd-page-preview .settings-header code:after {\n  content: \"COPIED!\";\n  display: flex;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n  color: #999;\n  font-family: Gilroy-Bold, sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 1px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}.ydd-page-preview .settings-header code.copied:after {\n  opacity: 1;\n}.ydd-page-preview .settings-header .repo-link img {\n  max-height: 24px;\n}.ydd-page-preview .settings h3 {\n  font-family: Gilroy-Bold, sans-serif;\n  font-weight: 700;\n}.ydd-page-preview-settings-field {\n  margin: 1em 0;\n  display: flex;\n  align-items: center;\n}.ydd-page-preview-settings-field label {\n  max-width: 240px;\n  width: 240px;\n  padding-right: 20px;\n}.ydd-page-preview-settings-field .field {\n  flex-grow: 2;\n  width: 55%;\n}.ydd-page-preview-settings-field .field.disabled {\n  position: relative;\n}.ydd-page-preview-settings-field .field.disabled:after {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.3);\n  z-index: 150;\n  content: \" \";\n  cursor: not-allowed;\n}.ydd-page-preview-settings-field .field.disabled small {\n  line-height: 1.3 !important;\n  display: inline-block;\n  margin-top: 10px;\n  font-size: 13px;\n}.ydd-page-preview-settings-field .field.ydd-color-preview {\n  display: flex;\n  align-items: center;\n}.ydd-page-preview-settings-field .field.ydd-color-preview input {\n  flex-grow: 2;\n  margin-right: 10px;\n  font-family: monospace;\n  letter-spacing: 1px;\n  font-size: 12px;\n}.ydd-page-preview-settings-field .field.ydd-color-preview span {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  border: 2px solid #f0f0f0;\n  border-radius: 50%;\n  flex-grow: 2;\n}@media (max-width: 1400px) {\n  .ydd-page-preview .item {\n    width: calc(100% - 420px);\n  }\n\n  .ydd-page-preview .settings {\n    width: 420px;\n  }\n\n  .ydd-page-preview .settings-header .repo-link,\n.ydd-page-preview .settings-header .repo-link img {\n    line-height: 16px;\n    max-height: 16px;\n  }\n\n  .ydd-page-preview-settings-field label {\n    max-width: 100px;\n    width: 100px;\n    font-size: 14px;\n  }\n}@media (max-width: 1200px) {\n  .ydd-page-preview .item {\n    width: 100%;\n  }\n\n  .ydd-page-preview .settings {\n    position: fixed;\n    right: -500px;\n    top: 0;\n    background: #ffffff;\n    transition: right 0.3s ease-in-out;\n  }\n\n  .ydd-page-preview .settings.open {\n    right: 0;\n  }\n}/* SELECT */.ng-select {\n  outline: none;\n  font-size: 14px;\n}.ng-select .ng-select-container {\n  border: 2px solid #f0f0f0;\n  background: #f9f9f9;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}.ng-select .ng-select-container:hover {\n  box-shadow: none;\n  border-color: #cccccc;\n}.ng-select .ng-select-container .ng-value-container .ng-input > input {\n  font-size: 14px;\n  font-family: Gilroy-Medium, sans-serif;\n}.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #333;\n  box-shadow: none;\n}.ng-dropdown-panel {\n  background-color: #fff;\n  border: 2px solid #333;\n  border-top: 0;\n  box-shadow: none;\n  transition: all 0.2s ease;\n}.ng-dropdown-panel.ng-select-top {\n  border-top: 2px solid #333;\n  border-bottom: none;\n}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #f9f9f9;\n}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked {\n  background-color: #f0f0f0;\n}.ng-select.ng-select-opened > .ng-select-container {\n  background: #fff;\n  border-color: #333333 #333333 transparent;\n}.ng-select-top.ng-select-opened > .ng-select-container {\n  border-color: transparent #333333 #333333;\n}.open-settings-icon, .close-settings-icon {\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  opacity: 0.5;\n  display: none;\n  width: 16px;\n  height: 16px;\n  background-size: 16px;\n  cursor: pointer;\n  transition: opacity 0.2s ease-in-out;\n}.open-settings-icon:hover, .close-settings-icon:hover {\n  opacity: 1;\n}.open-settings-icon {\n  background-image: url('open-settings.png');\n  z-index: 2;\n}.close-settings-icon {\n  background-image: url('close-settings.png');\n  z-index: 3;\n}.open-settings-icon.visible, .open .close-settings-icon {\n  display: block;\n}@media (max-width: 1200px) {\n  .open-settings-icon, .close-settings-icon {\n    display: block;\n  }\n}/** TABLE **/.table {\n  display: table;\n  margin: 0;\n  background: #ffffff;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n}.table .table-body {\n  padding: 1em;\n}.table .header {\n  padding: 0 1em;\n  background: #f9f9f957;\n  border-radius: 10px 10px 0 0;\n  border-bottom: 1px solid #f0f0f0;\n}@media screen and (max-width: 768px) {\n  .table {\n    display: block;\n  }\n}.row {\n  display: flex;\n}.cell {\n  padding: 1em;\n  flex-grow: 2;\n  text-align: left;\n}.cell code {\n  background: #f9f9f9;\n  padding: 5px;\n  border-radius: 3px;\n  display: inline-block;\n  margin-right: 3px;\n  margin-bottom: 3px;\n}.row .cell:first-child,\n.row .cell:nth-child(2) {\n  min-width: 150px;\n  max-width: 150px;\n}#properties-progressbuttoncomponent + .table .row .cell:nth-child(2) {\n  max-width: 400px;\n}.row .cell:nth-child(4) {\n  min-width: 70px;\n  max-width: 70px;\n  text-align: center;\n}.row .cell:nth-child(5) {\n  display: none;\n}.header .row {\n  color: #333333;\n  text-align: left;\n}@media screen and (max-width: 768px) {\n  .row {\n    display: block;\n  }\n\n  .header .row {\n    padding: 0;\n    height: 0;\n  }\n\n  .header .row .cell {\n    display: none;\n  }\n\n  .row .cell:before {\n    font-family: Gilroy-Bold, sans-serif;\n    font-size: 12px;\n    color: #808080;\n    line-height: 1.2;\n    text-transform: uppercase;\n    font-weight: unset !important;\n    margin-bottom: 13px;\n    content: attr(data-title);\n    min-width: 98px;\n    display: block;\n  }\n}.cell {\n  display: table-cell;\n}@media screen and (max-width: 768px) {\n  .cell {\n    display: block;\n    text-align: left !important;\n  }\n}.row .cell {\n  font-family: monospace, sans-serif;\n  font-size: 12px;\n  color: #666666;\n  line-height: 1.2;\n  font-weight: unset !important;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f2f2f2;\n}.header .row .cell {\n  border-bottom: none;\n}.table-body .row:last-child .cell {\n  border-bottom: 0;\n}.header .row .cell {\n  font-family: Gilroy-Bold, sans-serif;\n  font-size: 12px;\n  line-height: 1.2;\n  font-weight: unset !important;\n  padding-top: 19px;\n  padding-bottom: 19px;\n}.table, .row {\n  width: 100% !important;\n}@media (max-width: 768px) {\n  .row {\n    border-bottom: 1px solid #f2f2f2;\n    padding-bottom: 18px;\n    padding-top: 30px;\n    padding-right: 15px;\n    margin: 0;\n  }\n\n  .table-body .row:last-child {\n    border-bottom: none;\n  }\n\n  .row .cell {\n    border: none;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100% !important;\n    min-width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box;\n  }\n\n  .row .cell:nth-child(1) {\n    width: 100%;\n  }\n\n  .row .cell {\n    font-size: 16px;\n    color: #555555;\n    line-height: 1.4;\n    font-weight: unset !important;\n  }\n\n  .cell code {\n    padding: 3px 5px;\n    margin-right: 0;\n    margin-bottom: 3px;\n    font-size: 14px;\n  }\n\n  .table, .row, .cell {\n    width: 100% !important;\n    box-sizing: border-box;\n  }\n\n  .ydd-page-preview-item-description {\n    padding: 3em;\n  }\n\n  ul li {\n    margin-bottom: 10px;\n  }\n}@media (max-width: 480px) {\n  body {\n    font-size: 14px;\n  }\n\n  .ydd-page-preview-item-content:before {\n    text-align: center;\n  }\n\n  .ydd-page-preview-item-description {\n    padding: 2em;\n  }\n\n  .ydd-page-preview .settings {\n    width: 100%;\n  }\n\n  .ydd-page-preview .settings-header {\n    padding: 1em 2em;\n    height: 55px;\n  }\n\n  .ydd-page-preview .ng-scrollbar {\n    height: calc(100% - 55px);\n  }\n\n  .ydd-page-preview .settings-header .repo-link {\n    margin-right: 10px;\n  }\n\n  .ydd-page-preview .settings-header code,\n.ydd-page-preview .settings-header code:hover {\n    padding: 3px 5px;\n    font-size: 12px;\n    border: none;\n  }\n\n  .ydd-page-preview .settings-header code.copied,\n.ydd-page-preview .settings-header code.copied:hover {\n    border: none;\n  }\n\n  .ydd-page-preview-settings-field {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .ydd-page-preview-settings-field label {\n    max-width: 100%;\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .ydd-page-preview-settings-field .field {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["../../../node_modules/@ng-select/ng-select/themes/default.theme.css","/home/travis/build/udede/ydd-progress-button/projects/progress-button-showcase/src/styles.scss","styles.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":[".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=\"rtl\"] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#D0021B}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=\"rtl\"] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=\"rtl\"] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=\"rtl\"] .ng-dropdown-panel{direction:rtl;text-align:right}\n","@import \"~@ng-select/ng-select/themes/default.theme.css\";\n\n@font-face {\n  font-family: 'Gilroy-Regular';\n  font-weight: normal;\n  font-style: normal;\n  src: url('./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.eot');\n  src: url('./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),\n  url('./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.woff2') format('woff2'),\n  url('./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.woff') format('woff'),\n  url('./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.ttf') format('ttf'),\n  url('./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.svg#Gilroy-Regular') format('svg');\n}\n\n@font-face {\n  font-family: 'Gilroy-Light';\n  font-weight: 300;\n  font-style: normal;\n  src: url('./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.eot');\n  src: url('./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.eot?#iefix') format('embedded-opentype'),\n  url('./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.woff2') format('woff2'),\n  url('./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.woff') format('woff'),\n  url('./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.ttf') format('ttf'),\n  url('./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.svg#Gilroy-Light') format('svg');\n}\n\n@font-face {\n  font-family: 'Gilroy-Bold';\n  font-weight: 700;\n  font-style: normal;\n  src: url('./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.eot');\n  src: url('./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),\n  url('./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.woff2') format('woff2'),\n  url('./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.woff') format('woff'),\n  url('./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.ttf') format('ttf'),\n  url('./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.svg#Gilroy-Bold') format('svg');\n}\n\n@font-face {\n  font-family: 'Gilroy-Medium';\n  font-weight: normal;\n  font-style: normal;\n  src: url('./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.eot');\n  src: url('./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),\n  url('./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.woff2') format('woff2'),\n  url('./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.woff') format('woff'),\n  url('./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.ttf') format('ttf'),\n  url('./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.svg#Gilroy-Medium') format('svg');\n}\n\n@font-face {\n  font-family: 'Gilroy-SemiBold';\n  font-weight: 700;\n  font-style: normal;\n  src: url('./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.eot');\n  src: url('./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.eot?#iefix') format('embedded-opentype'),\n  url('./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.woff2') format('woff2'),\n  url('./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.woff') format('woff'),\n  url('./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.ttf') format('ttf'),\n  url('./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.svg#Gilroy-SemiBold') format('svg');\n}\n\n@font-face {\n  font-family: 'Gilroy-ExtraBold';\n  font-weight: 800;\n  font-style: normal;\n  src: url('./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.eot');\n  src: url('./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.eot?#iefix') format('embedded-opentype'),\n  url('./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.woff2') format('woff2'),\n  url('./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.woff') format('woff'),\n  url('./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.ttf') format('ttf'),\n  url('./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.svg#Gilroy-ExtraBold') format('svg');\n}\n\n*::selection {\n  background: #000000; /* WebKit/Blink Browsers */\n  color: #ffffff;\n}\n\n*::-moz-selection {\n  background: #000000; /* Gecko Browsers */\n  color: #ffffff;\n}\n\n\nbody {\n  font-family: 'Gilroy-Medium', sans-serif;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  line-height: 1.4;\n  color: #333333;\n}\n\nul {\n  list-style: none;\n  padding-left: 0;\n}\n\nul li {\n  margin-bottom: 10px;\n}\n\nbody h1:first-child {\n  margin-top: 0;\n}\n\nbody a {\n  color: #516bf0;\n  text-decoration: none;\n  border-bottom: 1px solid #dce2ff;\n  padding-bottom: 3px;\n}\n\nh2, h3, h4, h5, b, strong, button {\n  font-family: 'Gilroy-Bold', sans-serif;\n}\n\n\nh3 {\n  font-family: Gilroy-Medium, sans-serif;\n  font-weight: 300;\n}\n\nh5 {\n  font-size: 14px;\n  text-align: center;\n  background: #fff;\n  padding: 1em;\n  border-radius: 5px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n}\n\nh1 {\n  font-family: 'Gilroy-ExtraBold', sans-serif;\n  font-weight: 800;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nh3 code {\n  font-size: 18px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n\nimg[alt='preview'] {\n  max-width: 100%;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n  border: 1px solid #f0f0f0;\n  display: none;\n}\n\ninput[type='text'].ydd-input-text {\n  padding: 10px;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 2px solid #f0f0f0;\n  color: #333;\n  font-size: 14px;\n  font-family: Gilroy-Medium, sans-serif;\n  outline: none;\n  transition: all 0.2s ease;\n}\n\ninput[type='text'].ydd-input-text:hover, input[type='text'].ydd-input-text:focus {\n  border-color: #333333;\n}\n\ndiv#demourl, [alt=\"demo online\"] {\n  display: none;\n}\n\nh1#angular-progress-button + p a {\n  border-bottom: none;\n}\n\n.ydd-page-content {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n\n.ydd-page-preview {\n  display: flex;\n  align-items: stretch;\n  height: 100%;\n  max-width: 1920px;\n  margin: auto;\n  border: 1px solid #f0f0f0;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.ydd-page-preview .item {\n  width: 60%;\n  box-sizing: border-box;\n  overflow: auto;\n  height: 100%;\n  background: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.ydd-page-preview .item .ng-scrollbar {\n  height: calc(100% - 100px);\n}\n\n.ng-scroll-content {\n  width: 100%;\n}\n\n.ng-scrollbar-thumb{\n  background-color: #f0f0f0 !important;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.ng-scrollbar-wrapper[verticalHovered=true]>.scrollbar-control .ng-scrollbar-thumb{\n  background-color: #d8d8d8 !important;\n}\n\n.ydd-page-preview-item-description {\n  padding: 5em;\n  overflow: auto;\n}\n\n.ydd-page-preview-item-description code {\n  font-family: monospace;\n  font-weight: bold;\n}\n\n.ydd-page-preview-item-content {\n  padding: 3em;\n  height: 100px;\n  flex-grow: 2;\n  background: #ffffff;\n  border-top: 1px solid #f0f0f0;\n  overflow: auto;\n  z-index: 1;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n}\n\n.ydd-page-preview-item-content:before {\n  content: 'COMPONENT PREVIEW';\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  font-size: 10px;\n  color: #ddd;\n  padding: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: right;\n  letter-spacing: 1px;\n}\n\n.ydd-page-preview .settings {\n  width: 40%;\n  box-sizing: border-box;\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n  border-left: 1px solid #f0f0f0;\n  z-index: 2;\n}\n\n.ydd-page-preview .ng-scrollbar {\n  height: calc(100% - 65px) !important;\n}\n\n.ydd-page-preview .settings-content {\n  padding: 2em 3em;\n  box-sizing: border-box;\n}\n\n.ydd-page-preview .settings-header {\n  display: flex;\n  align-items: center;\n  padding: 1em 3em;\n  box-sizing: border-box;\n  background: #fff;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n  z-index: 3;\n  border-bottom: 1px solid #f0f0f0;\n  height: 65px;\n}\n\n.ydd-page-preview .settings-header .repo-link {\n  border-bottom: none;\n  margin-right: 20px;\n  padding: 0;\n  line-height: 24px;\n  max-height: 24px;\n  opacity: 0.2;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.ydd-page-preview .settings-header .repo-link:hover {\n  opacity: 1;\n}\n\n.ydd-page-preview .settings-header code {\n  padding: 5px 20px;\n  border-radius: 5px;\n  border: 2px solid #ccc;\n  font-weight: bold;\n  background: #f9f9f9;\n  color: #999;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  position: relative;\n}\n\n.ydd-page-preview .settings-header code:hover {\n  border: 2px solid #000;\n  font-weight: bold;\n  background: transparent;\n  color: #000;\n}\n\n.ydd-page-preview .settings-header code.copied,\n.ydd-page-preview .settings-header code.copied:hover {\n  border: 2px solid #ccc;\n}\n\n.ydd-page-preview .settings-header code:after {\n  content: \"COPIED!\";\n  display: flex;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n  color: #999;\n  font-family: Gilroy-Bold, sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 1px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.ydd-page-preview .settings-header code.copied:after {\n  opacity: 1;\n}\n\n.ydd-page-preview .settings-header .repo-link img {\n  max-height: 24px;\n}\n\n\n.ydd-page-preview .settings h3 {\n  font-family: Gilroy-Bold, sans-serif;\n  font-weight: 700;\n}\n\n.ydd-page-preview-settings-field {\n  margin: 1em 0;\n  display: flex;\n  align-items: center;\n}\n\n.ydd-page-preview-settings-field label {\n  max-width: 240px;\n  width: 240px;\n  padding-right: 20px;\n}\n\n.ydd-page-preview-settings-field .field {\n  flex-grow: 2;\n  width: 55%;\n\n  &.disabled {\n    position: relative;\n\n    &:after {\n      position: absolute;\n      display: block;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(255, 255, 255, 0.3);\n      z-index: 150;\n      content: ' ';\n      cursor: not-allowed;\n    }\n\n    small {\n      line-height: 1.3 !important;\n      display: inline-block;\n      margin-top: 10px;\n      font-size: 13px;\n    }\n  }\n}\n\n.ydd-page-preview-settings-field .field.ydd-color-preview {\n  display: flex;\n  align-items: center;\n}\n\n.ydd-page-preview-settings-field .field.ydd-color-preview input {\n  flex-grow: 2;\n  margin-right: 10px;\n  font-family: monospace;\n  letter-spacing: 1px;\n  font-size: 12px;\n}\n\n.ydd-page-preview-settings-field .field.ydd-color-preview span {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  border: 2px solid #f0f0f0;\n  border-radius: 50%;\n  flex-grow: 2;\n}\n\n@media (max-width: 1400px) {\n  .ydd-page-preview .item {\n    width: calc(100% - 420px);\n  }\n\n  .ydd-page-preview .settings {\n    width: 420px;\n  }\n\n  .ydd-page-preview .settings-header .repo-link,\n  .ydd-page-preview .settings-header .repo-link img {\n    line-height: 16px;\n    max-height: 16px;\n  }\n\n  .ydd-page-preview-settings-field label {\n    max-width: 100px;\n    width: 100px;\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 1200px) {\n  .ydd-page-preview .item {\n    width: 100%\n  }\n\n  .ydd-page-preview .settings {\n    position: fixed;\n    right: -500px;\n    top: 0;\n    background: #ffffff;\n    transition: right 0.3s ease-in-out;\n  }\n\n  .ydd-page-preview .settings.open {\n    right: 0;\n  }\n}\n\n\n/* SELECT */\n\n.ng-select {\n  outline: none;\n  font-size: 14px;\n}\n\n.ng-select .ng-select-container {\n  border: 2px solid #f0f0f0;\n  background: #f9f9f9;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.ng-select .ng-select-container:hover {\n  box-shadow: none;\n  border-color: #cccccc;\n}\n\n.ng-select .ng-select-container .ng-value-container .ng-input > input {\n  font-size: 14px;\n  font-family: Gilroy-Medium, sans-serif;\n}\n\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #333;\n  box-shadow: none;\n}\n\n.ng-dropdown-panel {\n  background-color: #fff;\n  border: 2px solid #333;\n  border-top: 0;\n  box-shadow: none;\n  transition: all 0.2s ease;\n}\n\n.ng-dropdown-panel.ng-select-top {\n  border-top: 2px solid #333;\n  border-bottom: none;\n}\n\n\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #f9f9f9;\n}\n\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked {\n  background-color: #f0f0f0;\n}\n\n\n.ng-select.ng-select-opened > .ng-select-container {\n  background: #fff;\n  border-color: #333333 #333333 transparent;\n}\n\n.ng-select-top.ng-select-opened > .ng-select-container {\n  border-color: transparent #333333 #333333;\n}\n\n.open-settings-icon, .close-settings-icon {\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  opacity: 0.5;\n  display: none;\n  width: 16px;\n  height: 16px;\n  background-size: 16px;\n  cursor: pointer;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.open-settings-icon:hover, .close-settings-icon:hover {\n  opacity: 1;\n}\n\n.open-settings-icon {\n  background-image: url(\"./assets/images/open-settings.png\");\n  z-index: 2;\n}\n\n.close-settings-icon {\n  background-image: url(\"./assets/images/close-settings.png\");\n  z-index: 3;\n}\n\n.open-settings-icon.visible, .open .close-settings-icon {\n  display: block;\n}\n\n@media (max-width: 1200px) {\n  .open-settings-icon, .close-settings-icon {\n    display: block;\n  }\n}\n\n\n/** TABLE **/\n\n.table {\n  display: table;\n  margin: 0;\n  background: #ffffff;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n}\n\n.table .table-body {\n  padding: 1em;\n}\n\n.table .header {\n  padding: 0 1em;\n  background: #f9f9f957;\n  border-radius: 10px 10px 0 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n@media screen and (max-width: 768px) {\n  .table {\n    display: block;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.cell {\n  padding: 1em;\n  flex-grow: 2;\n  text-align: left;\n}\n\n.cell code {\n  background: #f9f9f9;\n  padding: 5px;\n  border-radius: 3px;\n  display: inline-block;\n  margin-right: 3px;\n  margin-bottom: 3px;\n}\n\n.row .cell:first-child,\n.row .cell:nth-child(2) {\n  min-width: 150px;\n  max-width: 150px;\n}\n\n#properties-progressbuttoncomponent + .table .row .cell:nth-child(2) {\n  max-width: 400px;\n}\n\n.row .cell:nth-child(4) {\n  min-width: 70px;\n  max-width: 70px;\n  text-align: center;\n}\n\n.row .cell:nth-child(5) {\n  display: none;\n}\n\n.header .row {\n  color: #333333;\n  text-align: left;\n}\n\n@media screen and (max-width: 768px) {\n  .row {\n    display: block;\n  }\n\n  .header .row {\n    padding: 0;\n    height: 0;\n  }\n\n  .header .row .cell {\n    display: none;\n  }\n\n  .row .cell:before {\n    font-family: Gilroy-Bold, sans-serif;\n    font-size: 12px;\n    color: #808080;\n    line-height: 1.2;\n    text-transform: uppercase;\n    font-weight: unset !important;\n\n    margin-bottom: 13px;\n    content: attr(data-title);\n    min-width: 98px;\n    display: block;\n  }\n}\n\n.cell {\n  display: table-cell;\n}\n\n@media screen and (max-width: 768px) {\n  .cell {\n    display: block;\n    text-align: left !important;\n  }\n}\n\n.row .cell {\n  font-family: monospace, sans-serif;\n  font-size: 12px;\n  color: #666666;\n  line-height: 1.2;\n  font-weight: unset !important;\n\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f2f2f2;\n}\n\n.header .row .cell {\n  border-bottom: none;\n}\n\n.table-body .row:last-child .cell {\n  border-bottom: 0;\n}\n\n.header .row .cell {\n  font-family: Gilroy-Bold, sans-serif;\n  font-size: 12px;\n  line-height: 1.2;\n  font-weight: unset !important;\n\n  padding-top: 19px;\n  padding-bottom: 19px;\n}\n\n\n.table, .row {\n  width: 100% !important;\n}\n\n.row:hover {\n}\n\n@media (max-width: 768px) {\n  .row {\n    border-bottom: 1px solid #f2f2f2;\n    padding-bottom: 18px;\n    padding-top: 30px;\n    padding-right: 15px;\n    margin: 0;\n  }\n\n  .table-body .row:last-child {\n    border-bottom: none;\n  }\n\n  .row .cell {\n    border: none;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100% !important;\n    min-width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box;\n  }\n  .row .cell:nth-child(1) {\n    width: 100%;\n  }\n\n  .row .cell {\n    font-size: 16px;\n    color: #555555;\n    line-height: 1.4;\n    font-weight: unset !important;\n  }\n  .cell code {\n    padding: 3px 5px;\n    margin-right: 0;\n    margin-bottom: 3px;\n    font-size: 14px;\n  }\n\n\n  .table, .row, .cell {\n    width: 100% !important;\n    box-sizing: border-box;\n  }\n\n  .ydd-page-preview-item-description {\n    padding: 3em;\n  }\n\n  ul li {\n    margin-bottom: 10px;\n  }\n}\n\n@media (max-width: 480px) {\n  body {\n    font-size: 14px;\n  }\n\n  .ydd-page-preview-item-content:before {\n    text-align: center;\n  }\n  .ydd-page-preview-item-description {\n    padding: 2em;\n  }\n\n  .ydd-page-preview .settings {\n    width: 100%;\n  }\n  .ydd-page-preview .settings-header {\n    padding: 1em 2em;\n    height: 55px;\n  }\n\n  .ydd-page-preview .ng-scrollbar {\n    height: calc(100% - 55px);\n  }\n\n  .ydd-page-preview .settings-header .repo-link {\n    margin-right: 10px;\n  }\n\n  .ydd-page-preview .settings-header code,\n  .ydd-page-preview .settings-header code:hover {\n    padding: 3px 5px;\n    font-size: 12px;\n    border: none;\n  }\n\n  .ydd-page-preview .settings-header code.copied,\n  .ydd-page-preview .settings-header code.copied:hover {\n    border: none;\n  }\n\n  .ydd-page-preview-settings-field {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .ydd-page-preview-settings-field label {\n    max-width: 100%;\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .ydd-page-preview-settings-field .field {\n    width: 100%;\n  }\n}\n","@import \"~@ng-select/ng-select/themes/default.theme.css\";\n@font-face {\n  font-family: \"Gilroy-Regular\";\n  font-weight: normal;\n  font-style: normal;\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.eot\");\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.woff\") format(\"woff\"), url(\"./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.ttf\") format(\"ttf\"), url(\"./assets/fonts/Gilroy/Gilroy-Regular/Gilroy-Regular.svg#Gilroy-Regular\") format(\"svg\");\n}\n@font-face {\n  font-family: \"Gilroy-Light\";\n  font-weight: 300;\n  font-style: normal;\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.eot\");\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.woff2\") format(\"woff2\"), url(\"./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.woff\") format(\"woff\"), url(\"./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.ttf\") format(\"ttf\"), url(\"./assets/fonts/Gilroy/Gilroy-Light/Gilroy-Light.svg#Gilroy-Light\") format(\"svg\");\n}\n@font-face {\n  font-family: \"Gilroy-Bold\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.eot\");\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.woff\") format(\"woff\"), url(\"./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.ttf\") format(\"ttf\"), url(\"./assets/fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.svg#Gilroy-Bold\") format(\"svg\");\n}\n@font-face {\n  font-family: \"Gilroy-Medium\";\n  font-weight: normal;\n  font-style: normal;\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.eot\");\n  src: url(\"./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.woff\") format(\"woff\"), url(\"./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.ttf\") format(\"ttf\"), url(\"./assets/fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.svg#Gilroy-Medium\") format(\"svg\");\n}\n@font-face {\n  font-family: \"Gilroy-SemiBold\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(\"./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.eot\");\n  src: url(\"./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.woff2\") format(\"woff2\"), url(\"./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.woff\") format(\"woff\"), url(\"./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.ttf\") format(\"ttf\"), url(\"./assets/fonts/Gilroy/Gilroy-SemiBold/Gilroy-SemiBold.svg#Gilroy-SemiBold\") format(\"svg\");\n}\n@font-face {\n  font-family: \"Gilroy-ExtraBold\";\n  font-weight: 800;\n  font-style: normal;\n  src: url(\"./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.eot\");\n  src: url(\"./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.woff2\") format(\"woff2\"), url(\"./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.woff\") format(\"woff\"), url(\"./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.ttf\") format(\"ttf\"), url(\"./assets/fonts/Gilroy/Gilroy-ExtraBold/Gilroy-ExtraBold.svg#Gilroy-ExtraBold\") format(\"svg\");\n}\n*::selection {\n  background: #000000;\n  /* WebKit/Blink Browsers */\n  color: #ffffff;\n}\n\n*::-moz-selection {\n  background: #000000;\n  /* Gecko Browsers */\n  color: #ffffff;\n}\n\nbody {\n  font-family: \"Gilroy-Medium\", sans-serif;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  line-height: 1.4;\n  color: #333333;\n}\n\nul {\n  list-style: none;\n  padding-left: 0;\n}\n\nul li {\n  margin-bottom: 10px;\n}\n\nbody h1:first-child {\n  margin-top: 0;\n}\n\nbody a {\n  color: #516bf0;\n  text-decoration: none;\n  border-bottom: 1px solid #dce2ff;\n  padding-bottom: 3px;\n}\n\nh2, h3, h4, h5, b, strong, button {\n  font-family: \"Gilroy-Bold\", sans-serif;\n}\n\nh3 {\n  font-family: Gilroy-Medium, sans-serif;\n  font-weight: 300;\n}\n\nh5 {\n  font-size: 14px;\n  text-align: center;\n  background: #fff;\n  padding: 1em;\n  border-radius: 5px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n}\n\nh1 {\n  font-family: \"Gilroy-ExtraBold\", sans-serif;\n  font-weight: 800;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nh3 code {\n  font-size: 18px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n\nimg[alt=preview] {\n  max-width: 100%;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n  border: 1px solid #f0f0f0;\n  display: none;\n}\n\ninput[type=text].ydd-input-text {\n  padding: 10px;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 2px solid #f0f0f0;\n  color: #333;\n  font-size: 14px;\n  font-family: Gilroy-Medium, sans-serif;\n  outline: none;\n  transition: all 0.2s ease;\n}\n\ninput[type=text].ydd-input-text:hover, input[type=text].ydd-input-text:focus {\n  border-color: #333333;\n}\n\ndiv#demourl, [alt=\"demo online\"] {\n  display: none;\n}\n\nh1#angular-progress-button + p a {\n  border-bottom: none;\n}\n\n.ydd-page-content {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n\n.ydd-page-preview {\n  display: flex;\n  align-items: stretch;\n  height: 100%;\n  max-width: 1920px;\n  margin: auto;\n  border: 1px solid #f0f0f0;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.ydd-page-preview .item {\n  width: 60%;\n  box-sizing: border-box;\n  overflow: auto;\n  height: 100%;\n  background: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.ydd-page-preview .item .ng-scrollbar {\n  height: calc(100% - 100px);\n}\n\n.ng-scroll-content {\n  width: 100%;\n}\n\n.ng-scrollbar-thumb {\n  background-color: #f0f0f0 !important;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.ng-scrollbar-wrapper[verticalHovered=true] > .scrollbar-control .ng-scrollbar-thumb {\n  background-color: #d8d8d8 !important;\n}\n\n.ydd-page-preview-item-description {\n  padding: 5em;\n  overflow: auto;\n}\n\n.ydd-page-preview-item-description code {\n  font-family: monospace;\n  font-weight: bold;\n}\n\n.ydd-page-preview-item-content {\n  padding: 3em;\n  height: 100px;\n  flex-grow: 2;\n  background: #ffffff;\n  border-top: 1px solid #f0f0f0;\n  overflow: auto;\n  z-index: 1;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n}\n\n.ydd-page-preview-item-content:before {\n  content: \"COMPONENT PREVIEW\";\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  font-size: 10px;\n  color: #ddd;\n  padding: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: right;\n  letter-spacing: 1px;\n}\n\n.ydd-page-preview .settings {\n  width: 40%;\n  box-sizing: border-box;\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n  border-left: 1px solid #f0f0f0;\n  z-index: 2;\n}\n\n.ydd-page-preview .ng-scrollbar {\n  height: calc(100% - 65px) !important;\n}\n\n.ydd-page-preview .settings-content {\n  padding: 2em 3em;\n  box-sizing: border-box;\n}\n\n.ydd-page-preview .settings-header {\n  display: flex;\n  align-items: center;\n  padding: 1em 3em;\n  box-sizing: border-box;\n  background: #fff;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n  z-index: 3;\n  border-bottom: 1px solid #f0f0f0;\n  height: 65px;\n}\n\n.ydd-page-preview .settings-header .repo-link {\n  border-bottom: none;\n  margin-right: 20px;\n  padding: 0;\n  line-height: 24px;\n  max-height: 24px;\n  opacity: 0.2;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.ydd-page-preview .settings-header .repo-link:hover {\n  opacity: 1;\n}\n\n.ydd-page-preview .settings-header code {\n  padding: 5px 20px;\n  border-radius: 5px;\n  border: 2px solid #ccc;\n  font-weight: bold;\n  background: #f9f9f9;\n  color: #999;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  position: relative;\n}\n\n.ydd-page-preview .settings-header code:hover {\n  border: 2px solid #000;\n  font-weight: bold;\n  background: transparent;\n  color: #000;\n}\n\n.ydd-page-preview .settings-header code.copied,\n.ydd-page-preview .settings-header code.copied:hover {\n  border: 2px solid #ccc;\n}\n\n.ydd-page-preview .settings-header code:after {\n  content: \"COPIED!\";\n  display: flex;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n  color: #999;\n  font-family: Gilroy-Bold, sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 1px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.ydd-page-preview .settings-header code.copied:after {\n  opacity: 1;\n}\n\n.ydd-page-preview .settings-header .repo-link img {\n  max-height: 24px;\n}\n\n.ydd-page-preview .settings h3 {\n  font-family: Gilroy-Bold, sans-serif;\n  font-weight: 700;\n}\n\n.ydd-page-preview-settings-field {\n  margin: 1em 0;\n  display: flex;\n  align-items: center;\n}\n\n.ydd-page-preview-settings-field label {\n  max-width: 240px;\n  width: 240px;\n  padding-right: 20px;\n}\n\n.ydd-page-preview-settings-field .field {\n  flex-grow: 2;\n  width: 55%;\n}\n.ydd-page-preview-settings-field .field.disabled {\n  position: relative;\n}\n.ydd-page-preview-settings-field .field.disabled:after {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.3);\n  z-index: 150;\n  content: \" \";\n  cursor: not-allowed;\n}\n.ydd-page-preview-settings-field .field.disabled small {\n  line-height: 1.3 !important;\n  display: inline-block;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.ydd-page-preview-settings-field .field.ydd-color-preview {\n  display: flex;\n  align-items: center;\n}\n\n.ydd-page-preview-settings-field .field.ydd-color-preview input {\n  flex-grow: 2;\n  margin-right: 10px;\n  font-family: monospace;\n  letter-spacing: 1px;\n  font-size: 12px;\n}\n\n.ydd-page-preview-settings-field .field.ydd-color-preview span {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  border: 2px solid #f0f0f0;\n  border-radius: 50%;\n  flex-grow: 2;\n}\n\n@media (max-width: 1400px) {\n  .ydd-page-preview .item {\n    width: calc(100% - 420px);\n  }\n\n  .ydd-page-preview .settings {\n    width: 420px;\n  }\n\n  .ydd-page-preview .settings-header .repo-link,\n.ydd-page-preview .settings-header .repo-link img {\n    line-height: 16px;\n    max-height: 16px;\n  }\n\n  .ydd-page-preview-settings-field label {\n    max-width: 100px;\n    width: 100px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 1200px) {\n  .ydd-page-preview .item {\n    width: 100%;\n  }\n\n  .ydd-page-preview .settings {\n    position: fixed;\n    right: -500px;\n    top: 0;\n    background: #ffffff;\n    transition: right 0.3s ease-in-out;\n  }\n\n  .ydd-page-preview .settings.open {\n    right: 0;\n  }\n}\n/* SELECT */\n.ng-select {\n  outline: none;\n  font-size: 14px;\n}\n\n.ng-select .ng-select-container {\n  border: 2px solid #f0f0f0;\n  background: #f9f9f9;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.ng-select .ng-select-container:hover {\n  box-shadow: none;\n  border-color: #cccccc;\n}\n\n.ng-select .ng-select-container .ng-value-container .ng-input > input {\n  font-size: 14px;\n  font-family: Gilroy-Medium, sans-serif;\n}\n\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #333;\n  box-shadow: none;\n}\n\n.ng-dropdown-panel {\n  background-color: #fff;\n  border: 2px solid #333;\n  border-top: 0;\n  box-shadow: none;\n  transition: all 0.2s ease;\n}\n\n.ng-dropdown-panel.ng-select-top {\n  border-top: 2px solid #333;\n  border-bottom: none;\n}\n\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #f9f9f9;\n}\n\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked {\n  background-color: #f0f0f0;\n}\n\n.ng-select.ng-select-opened > .ng-select-container {\n  background: #fff;\n  border-color: #333333 #333333 transparent;\n}\n\n.ng-select-top.ng-select-opened > .ng-select-container {\n  border-color: transparent #333333 #333333;\n}\n\n.open-settings-icon, .close-settings-icon {\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  opacity: 0.5;\n  display: none;\n  width: 16px;\n  height: 16px;\n  background-size: 16px;\n  cursor: pointer;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.open-settings-icon:hover, .close-settings-icon:hover {\n  opacity: 1;\n}\n\n.open-settings-icon {\n  background-image: url(\"./assets/images/open-settings.png\");\n  z-index: 2;\n}\n\n.close-settings-icon {\n  background-image: url(\"./assets/images/close-settings.png\");\n  z-index: 3;\n}\n\n.open-settings-icon.visible, .open .close-settings-icon {\n  display: block;\n}\n\n@media (max-width: 1200px) {\n  .open-settings-icon, .close-settings-icon {\n    display: block;\n  }\n}\n/** TABLE **/\n.table {\n  display: table;\n  margin: 0;\n  background: #ffffff;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);\n}\n\n.table .table-body {\n  padding: 1em;\n}\n\n.table .header {\n  padding: 0 1em;\n  background: #f9f9f957;\n  border-radius: 10px 10px 0 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n@media screen and (max-width: 768px) {\n  .table {\n    display: block;\n  }\n}\n.row {\n  display: flex;\n}\n\n.cell {\n  padding: 1em;\n  flex-grow: 2;\n  text-align: left;\n}\n\n.cell code {\n  background: #f9f9f9;\n  padding: 5px;\n  border-radius: 3px;\n  display: inline-block;\n  margin-right: 3px;\n  margin-bottom: 3px;\n}\n\n.row .cell:first-child,\n.row .cell:nth-child(2) {\n  min-width: 150px;\n  max-width: 150px;\n}\n\n#properties-progressbuttoncomponent + .table .row .cell:nth-child(2) {\n  max-width: 400px;\n}\n\n.row .cell:nth-child(4) {\n  min-width: 70px;\n  max-width: 70px;\n  text-align: center;\n}\n\n.row .cell:nth-child(5) {\n  display: none;\n}\n\n.header .row {\n  color: #333333;\n  text-align: left;\n}\n\n@media screen and (max-width: 768px) {\n  .row {\n    display: block;\n  }\n\n  .header .row {\n    padding: 0;\n    height: 0;\n  }\n\n  .header .row .cell {\n    display: none;\n  }\n\n  .row .cell:before {\n    font-family: Gilroy-Bold, sans-serif;\n    font-size: 12px;\n    color: #808080;\n    line-height: 1.2;\n    text-transform: uppercase;\n    font-weight: unset !important;\n    margin-bottom: 13px;\n    content: attr(data-title);\n    min-width: 98px;\n    display: block;\n  }\n}\n.cell {\n  display: table-cell;\n}\n\n@media screen and (max-width: 768px) {\n  .cell {\n    display: block;\n    text-align: left !important;\n  }\n}\n.row .cell {\n  font-family: monospace, sans-serif;\n  font-size: 12px;\n  color: #666666;\n  line-height: 1.2;\n  font-weight: unset !important;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f2f2f2;\n}\n\n.header .row .cell {\n  border-bottom: none;\n}\n\n.table-body .row:last-child .cell {\n  border-bottom: 0;\n}\n\n.header .row .cell {\n  font-family: Gilroy-Bold, sans-serif;\n  font-size: 12px;\n  line-height: 1.2;\n  font-weight: unset !important;\n  padding-top: 19px;\n  padding-bottom: 19px;\n}\n\n.table, .row {\n  width: 100% !important;\n}\n\n@media (max-width: 768px) {\n  .row {\n    border-bottom: 1px solid #f2f2f2;\n    padding-bottom: 18px;\n    padding-top: 30px;\n    padding-right: 15px;\n    margin: 0;\n  }\n\n  .table-body .row:last-child {\n    border-bottom: none;\n  }\n\n  .row .cell {\n    border: none;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100% !important;\n    min-width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box;\n  }\n\n  .row .cell:nth-child(1) {\n    width: 100%;\n  }\n\n  .row .cell {\n    font-size: 16px;\n    color: #555555;\n    line-height: 1.4;\n    font-weight: unset !important;\n  }\n\n  .cell code {\n    padding: 3px 5px;\n    margin-right: 0;\n    margin-bottom: 3px;\n    font-size: 14px;\n  }\n\n  .table, .row, .cell {\n    width: 100% !important;\n    box-sizing: border-box;\n  }\n\n  .ydd-page-preview-item-description {\n    padding: 3em;\n  }\n\n  ul li {\n    margin-bottom: 10px;\n  }\n}\n@media (max-width: 480px) {\n  body {\n    font-size: 14px;\n  }\n\n  .ydd-page-preview-item-content:before {\n    text-align: center;\n  }\n\n  .ydd-page-preview-item-description {\n    padding: 2em;\n  }\n\n  .ydd-page-preview .settings {\n    width: 100%;\n  }\n\n  .ydd-page-preview .settings-header {\n    padding: 1em 2em;\n    height: 55px;\n  }\n\n  .ydd-page-preview .ng-scrollbar {\n    height: calc(100% - 55px);\n  }\n\n  .ydd-page-preview .settings-header .repo-link {\n    margin-right: 10px;\n  }\n\n  .ydd-page-preview .settings-header code,\n.ydd-page-preview .settings-header code:hover {\n    padding: 3px 5px;\n    font-size: 12px;\n    border: none;\n  }\n\n  .ydd-page-preview .settings-header code.copied,\n.ydd-page-preview .settings-header code.copied:hover {\n    border: none;\n  }\n\n  .ydd-page-preview-settings-field {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .ydd-page-preview-settings-field label {\n    max-width: 100%;\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .ydd-page-preview-settings-field .field {\n    width: 100%;\n  }\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!./src/assets/css/prism-a11y-dark.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/css-loader/dist/cjs.js??ref--12-1!/home/travis/build/udede/ydd-progress-button/node_modules/postcss-loader/src??embedded!./src/assets/css/prism-a11y-dark.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * a11y-dark theme for JavaScript, CSS, and HTML\n * Based on the okaidia theme: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-okaidia.css\n * @author ericwbailey\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #f8f8f2;\n\tbackground: none;\n\tfont-family: monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n/* Code blocks */\n\npre[class*=\"language-\"] {\n\tpadding: 2em;\n\tmargin: 1em 0;\n\toverflow: auto;\n\tborder-radius: 5px;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #2b2b2b;\n}\n\n/* Inline code */\n\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: 0.1em;\n\tborder-radius: 0.3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #d4d0ab;\n}\n\n.token.punctuation {\n\tcolor: #fefefe;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #ffa07a;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #00e0e0;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #abe338;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #00e0e0;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function {\n\tcolor: #ffd700;\n}\n\n.token.keyword {\n\tcolor: #00e0e0;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #ffd700;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n@media screen and (-ms-high-contrast: active) {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\tcolor: windowText;\n\t\tbackground: window;\n\t}\n\n\t:not(pre) > code[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\tbackground: window;\n\t}\n\n\t.token.important {\n\t\tbackground: highlight;\n\t\tcolor: window;\n\t\tfont-weight: normal;\n\t}\n\n\t.token.atrule,\n\t.token.attr-value,\n\t.token.function,\n\t.token.keyword,\n\t.token.operator,\n\t.token.selector {\n\t\tfont-weight: bold;\n\t}\n\n\t.token.attr-value,\n\t.token.comment,\n\t.token.doctype,\n\t.token.function,\n\t.token.keyword,\n\t.token.operator,\n\t.token.property,\n\t.token.string {\n\t\tcolor: highlight;\n\t}\n\n\t.token.attr-value,\n\t.token.url {\n\t\tfont-weight: normal;\n\t}\n}\n", "",{"version":3,"sources":["prism-a11y-dark.css"],"names":[],"mappings":"AAAA;;;;EAIE;;AAEF;;CAEC,cAAc;CACd,gBAAgB;CAChB,sBAAsB;CACtB,gBAAgB;CAChB,gBAAgB;CAChB,oBAAoB;CACpB,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;;CAEhB,gBAAgB;CAChB,cAAc;CACd,WAAW;;CAEX,qBAAqB;CAErB,iBAAiB;CACjB,aAAa;AACd;;AAEA,gBAAgB;;AAChB;CACC,YAAY;CACZ,aAAa;CACb,cAAc;CACd,kBAAkB;AACnB;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA,gBAAgB;;AAChB;CACC,cAAc;CACd,oBAAoB;CACpB,mBAAmB;AACpB;;AAEA;;;;CAIC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;;;;;CAKC,cAAc;AACf;;AAEA;;CAEC,cAAc;AACf;;AAEA;;;;;;CAMC,cAAc;AACf;;AAEA;;;;;;CAMC,cAAc;AACf;;AAEA;;;CAGC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;;CAEC,cAAc;AACf;;AAEA;;CAEC,iBAAiB;AAClB;;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC;;EAEC,iBAAiB;EACjB,kBAAkB;CACnB;;CAEA;;EAEC,kBAAkB;CACnB;;CAEA;EACC,qBAAqB;EACrB,aAAa;EACb,mBAAmB;CACpB;;CAEA;;;;;;EAMC,iBAAiB;CAClB;;CAEA;;;;;;;;EAQC,gBAAgB;CACjB;;CAEA;;EAEC,mBAAmB;CACpB;AACD","file":"prism-a11y-dark.css","sourcesContent":["/**\n * a11y-dark theme for JavaScript, CSS, and HTML\n * Based on the okaidia theme: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-okaidia.css\n * @author ericwbailey\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #f8f8f2;\n\tbackground: none;\n\tfont-family: monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 2em;\n\tmargin: 1em 0;\n\toverflow: auto;\n\tborder-radius: 5px;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #2b2b2b;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: 0.1em;\n\tborder-radius: 0.3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #d4d0ab;\n}\n\n.token.punctuation {\n\tcolor: #fefefe;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #ffa07a;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #00e0e0;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #abe338;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #00e0e0;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function {\n\tcolor: #ffd700;\n}\n\n.token.keyword {\n\tcolor: #00e0e0;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #ffd700;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n@media screen and (-ms-high-contrast: active) {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\tcolor: windowText;\n\t\tbackground: window;\n\t}\n\n\t:not(pre) > code[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\tbackground: window;\n\t}\n\n\t.token.important {\n\t\tbackground: highlight;\n\t\tcolor: window;\n\t\tfont-weight: normal;\n\t}\n\n\t.token.atrule,\n\t.token.attr-value,\n\t.token.function,\n\t.token.keyword,\n\t.token.operator,\n\t.token.selector {\n\t\tfont-weight: bold;\n\t}\n\n\t.token.attr-value,\n\t.token.comment,\n\t.token.doctype,\n\t.token.function,\n\t.token.keyword,\n\t.token.operator,\n\t.token.property,\n\t.token.string {\n\t\tcolor: highlight;\n\t}\n\n\t.token.attr-value,\n\t.token.url {\n\t\tfont-weight: normal;\n\t}\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css":
/*!*************************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--12-1!../../../postcss-loader/src??embedded!./prism-line-highlight.css */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!*********************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--12-1!../../../postcss-loader/src??embedded!./prism-line-numbers.css */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************************************************!*\
  !*** /home/travis/build/udede/ydd-progress-button/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/css/prism-a11y-dark.css":
/*!********************************************!*\
  !*** ./src/assets/css/prism-a11y-dark.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--12-1!../../../../../node_modules/postcss-loader/src??embedded!./prism-a11y-dark.css */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!./src/assets/css/prism-a11y-dark.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/styles.scss ./src/assets/css/prism-a11y-dark.css /home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css /home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/travis/build/udede/ydd-progress-button/projects/progress-button-showcase/src/styles.scss */"./src/styles.scss");
__webpack_require__(/*! /home/travis/build/udede/ydd-progress-button/projects/progress-button-showcase/src/assets/css/prism-a11y-dark.css */"./src/assets/css/prism-a11y-dark.css");
__webpack_require__(/*! /home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css */"../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");
module.exports = __webpack_require__(/*! /home/travis/build/udede/ydd-progress-button/node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css */"../../node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map