/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n// HTML Files\n // Stylesheets\n\n // Scripts\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("/* Your JS here. */\nconsole.log('Hello World!'); // nav bar smooth scrolling segment\n\nvar sections = document.querySelectorAll('section');\nvar liHeaderElements = document.querySelectorAll('#header ul li');\nvar headerNames = document.querySelectorAll(\"#header ul a\");\nheaderNames.forEach(function (x) {\n  x.addEventListener(\"click\", clickHandler);\n});\n\nfunction clickHandler(e) {\n  e.preventDefault();\n  var offsetTop = document.querySelector(this.getAttribute(\"href\")).offsetTop;\n  scroll({\n    top: offsetTop,\n    behavior: \"smooth\"\n  });\n} // nav bar highlighting as scrolling segment\n\n\nwindow.addEventListener(\"scroll\", function () {\n  var current = \"\";\n  sections.forEach(function (ele) {\n    if (window.pageYOffset >= ele.offsetTop - ele.clientHeight / 3) {\n      current = ele.getAttribute(\"id\");\n    }\n  });\n  liHeaderElements.forEach(function (li) {\n    li.classList.remove(\"move\");\n\n    if (li.classList.contains(current)) {\n      li.classList.add(\"move\");\n    }\n  });\n}); // Nav bar text and bar resizing segment \n\nwindow.onscroll = function () {\n  scrollFunction();\n};\n\nfunction resizeLargeText(headerTextElement) {\n  document.getElementById(headerTextElement).style.fontSize = \"17px\";\n  document.getElementById(headerTextElement).style.height = \"23px\";\n}\n\nfunction resizeSmallText(headerTextElement) {\n  document.getElementById(headerTextElement).style.fontSize = \"20px\";\n  document.getElementById(headerTextElement).style.height = \"45px\";\n}\n\nfunction scrollFunction() {\n  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {\n    document.getElementById(\"header\").style.height = \"60px\";\n    resizeLargeText(\"headerText1\");\n    resizeLargeText(\"headerText2\");\n    resizeLargeText(\"headerText3\");\n    resizeLargeText(\"headerText4\");\n    resizeLargeText(\"headerText5\");\n  } else {\n    document.getElementById(\"header\").style.height = \"110px\";\n    resizeSmallText(\"headerText1\");\n    resizeSmallText(\"headerText2\");\n    resizeSmallText(\"headerText3\");\n    resizeSmallText(\"headerText4\");\n    resizeSmallText(\"headerText5\");\n  }\n} // Modal (clicking button to open up a box) segment\n\n\nfunction setUpModals(modalEl, btnEl, spanEl) {\n  var modal = document.getElementById(modalEl);\n  var btn = document.getElementById(btnEl);\n  var span = document.getElementsByClassName(spanEl)[0];\n\n  btn.onclick = function () {\n    modal.style.display = \"block\";\n  };\n\n  span.onclick = function () {\n    modal.style.display = \"none\";\n  };\n}\n\nsetUpModals(\"firstModal\", \"myBtn\", \"close\");\nsetUpModals(\"secondModal\", \"myBtn2\", \"close2\");\nsetUpModals(\"thirdModal\", \"myBtn3\", \"close3\"); // slideshow or carousel segment\n\nfunction modulo(number, mod) {\n  var result = number % mod;\n\n  if (result < 0) {\n    result += mod;\n  }\n\n  return result;\n}\n\nfunction callSlideShow(obj) {\n  var prev = obj.querySelector('#prevBtn');\n  var next = obj.querySelector('#nextBtn');\n  var slidesContainer = obj.querySelector('#slideContents');\n  var currentSlide = 0;\n  var numSlides = slidesContainer.children.length;\n  prev.addEventListener('click', function () {\n    currentSlide = modulo(currentSlide - 1, numSlides);\n    obj.style.setProperty('--curr', currentSlide);\n  });\n  next.addEventListener('click', function () {\n    currentSlide = modulo(currentSlide + 1, numSlides);\n    obj.style.setProperty('--curr', currentSlide);\n  });\n}\n\nvar allSlides = document.querySelectorAll('#slideshowI');\nallSlides.forEach(callSlideShow);\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/Crossyroad.png */ \"./assets/Crossyroad.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/graph.png */ \"./assets/graph.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/covax.png */ \"./assets/covax.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Pirata+One|Rubik:900);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Signika:700,300,600);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Your SCSS here. */\\n.d1 {\\n  position: relative;\\n  width: 100%;\\n  height: 350px;\\n  background-color: #6101af;\\n  z-index: 1;\\n  -webkit-animation-name: intro_box;\\n          animation-name: intro_box;\\n  -webkit-animation-duration: 5s;\\n          animation-duration: 5s;\\n  -webkit-animation-iteration-count: infinite;\\n          animation-iteration-count: infinite;\\n}\\n\\n.skillsText {\\n  color: #7e5aa7;\\n  font-size: 20px;\\n  line-height: 1.5;\\n}\\n\\n.d2 {\\n  -webkit-animation-name: intro_box;\\n          animation-name: intro_box;\\n  position: absolute;\\n  top: 50px;\\n  opacity: 1;\\n  margin: auto;\\n  left: 10%;\\n  right: 7%;\\n  height: 250px;\\n  background-color: #6101af;\\n  z-index: 1;\\n  -webkit-animation-duration: 5s;\\n          animation-duration: 5s;\\n  -webkit-animation-iteration-count: infinite;\\n          animation-iteration-count: infinite;\\n}\\n\\n@-webkit-keyframes intro_box {\\n  0% {\\n    background-color: #5f00ad;\\n  }\\n  25% {\\n    background-color: #643200;\\n  }\\n}\\n\\n@keyframes intro_box {\\n  0% {\\n    background-color: #5f00ad;\\n  }\\n  25% {\\n    background-color: #643200;\\n  }\\n}\\n.far, .fab {\\n  display: inline-block;\\n  color: #915cbd;\\n  font-size: 25px;\\n  left: 20%;\\n  text-align: center;\\n  width: 100%;\\n}\\n.far:hover, .fab:hover {\\n  color: #d65c0b;\\n}\\n\\n.d {\\n  width: 60%;\\n  margin: auto;\\n  color: #383636;\\n}\\n\\nh1 {\\n  font-size: 2rem;\\n}\\n\\n.expText {\\n  text-align: center;\\n}\\n\\n.companyText {\\n  text-align: center;\\n  font-size: 19px;\\n  color: rgba(146, 107, 190, 0.856);\\n}\\n\\n.toolsContent {\\n  text-align: center;\\n  font-size: 15px;\\n  color: #ad6008;\\n  margin-left: 2em;\\n  margin-right: 2em;\\n}\\n\\nh3 {\\n  font-size: 15rem;\\n  margin-left: 4.2em;\\n}\\n\\nh3 {\\n  font-size: 2rem;\\n}\\n\\n.txt {\\n  text-align: center;\\n  font-family: \\\"eurostile\\\", sans-serif;\\n  color: #383636;\\n}\\n\\n.txt2 {\\n  text-align: center;\\n  font-family: \\\"verdana\\\", sans-serif;\\n  font-size: 18px;\\n  color: #b6aeae;\\n}\\n\\n.txt3 {\\n  text-align: center;\\n  font-family: \\\"eurostile\\\", sans-serif;\\n  letter-spacing: 0.1rem;\\n  font-size: 25px;\\n  font-weight: 1;\\n  color: #ffffffe8;\\n}\\n\\n.txt4 {\\n  letter-spacing: 0.05rem;\\n  font-size: 30px;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  color: #050138;\\n}\\n\\n.i {\\n  width: 100%;\\n  height: 150px;\\n}\\n\\n.hero {\\n  opacity: 0.5;\\n  width: 100%;\\n  height: 150px;\\n}\\n\\n.titl, .textBig, h1, h3 {\\n  margin-bottom: 0.5em;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  color: #E4E5E6;\\n}\\n\\n.titl, .textBig, h1, h3 {\\n  position: relative;\\n  background: linear-gradient(to right, #31243e, #2a1a55, #0f0c29d0);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n}\\n\\n.titl:before, .textBig:before, h1:before, h3:before,\\n.titl:after,\\n.textBig:after,\\nh1:after,\\nh3:after {\\n  content: attr(data-text);\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.titl:before, .textBig:before, h1:before, h3:before {\\n  z-index: -1;\\n  text-shadow: -0.001em -0.001em 1px rgba(240, 236, 236, 0.15);\\n}\\n\\n.titl:after, .textBig:after, h1:after, h3:after {\\n  z-index: -2;\\n  text-shadow: 10px 10px 10px rgba(241, 227, 227, 0.815), 5px 5px 5px rgba(231, 228, 228, 0.4), 10px 10px 10px rgba(83, 81, 81, 0.1);\\n  mix-blend-mode: multiply;\\n}\\n\\n.textBig {\\n  font-size: 2.5rem;\\n  margin-left: 26%;\\n}\\n\\n.fixed-footer {\\n  bottom: 0;\\n  position: fixed;\\n  width: 100%;\\n  height: 50px;\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n  background-color: #f3f1f059;\\n  z-index: 3;\\n}\\n\\n.medium-space-between {\\n  width: 100%;\\n  height: 100px;\\n}\\n\\n.smallest-space-between {\\n  width: 100%;\\n  height: 3px;\\n}\\n\\n.smaller-space-between {\\n  width: 100%;\\n  height: 15px;\\n}\\n\\n.small-space-between {\\n  width: 100%;\\n  height: 30px;\\n}\\n\\n.big-space-between {\\n  width: 100%;\\n  height: 150px;\\n}\\n\\n.e {\\n  margin: auto;\\n  width: 60%;\\n}\\n\\n.large-space-between {\\n  width: 100%;\\n  height: 200px;\\n}\\n\\n.skills {\\n  background-color: #410404;\\n  width: 100% !important;\\n  height: 200px;\\n}\\n\\n#header {\\n  background-color: #0d00c505;\\n  color: black;\\n  text-align: center;\\n  height: 110px;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  overflow: hidden;\\n  transition: 0.2s;\\n  z-index: 3;\\n}\\n\\n#header ul {\\n  list-style-type: none;\\n}\\n\\nli {\\n  float: left;\\n}\\n\\nli {\\n  float: left;\\n}\\nli a {\\n  font-family: \\\"eurostile\\\", sans-serif;\\n  display: block;\\n  color: white;\\n  text-align: center;\\n  padding: 6px 30px 15px 30px;\\n  color: black;\\n  height: 50px;\\n  text-decoration: none;\\n  font-size: 20px;\\n  transition: 0.2s;\\n}\\n\\nli.move {\\n  background-color: rgba(216, 109, 10, 0.288);\\n  transition: 0.3 ease background-color;\\n  border-radius: 15px;\\n}\\n\\n.girl {\\n  width: 170px;\\n  height: 170px;\\n  margin: auto;\\n  display: block;\\n}\\n\\n.icon2 {\\n  display: inline-block;\\n  margin: auto;\\n}\\n\\n.icon1 {\\n  display: inline-block;\\n  margin: auto;\\n  width: 49%;\\n}\\n\\n.icon3 {\\n  display: inline-block;\\n  margin: auto;\\n  width: 45%;\\n}\\n\\n.internIcon1 {\\n  width: 60px;\\n  height: 60px;\\n  margin: auto;\\n  display: block;\\n}\\n\\n.internIcon2 {\\n  width: 70px;\\n  height: 55px;\\n  margin: auto;\\n  display: block;\\n}\\n\\n.internIcon3 {\\n  width: 66px;\\n  height: 66px;\\n  margin: auto;\\n  display: block;\\n}\\n\\n.resume li {\\n  line-height: 2;\\n  margin-right: 1.5em;\\n  margin-left: 1em;\\n  list-style-type: circle;\\n}\\n\\n.skillCol {\\n  background-color: rgba(176, 153, 185, 0.137);\\n  display: inline-block;\\n  border-radius: 10px;\\n  margin: auto;\\n  padding: 10px 500px 10px 30px;\\n  word-spacing: 0.5rem;\\n}\\n\\n.columnl, .columnr, .columnm {\\n  background-color: rgba(230, 196, 243, 0.048);\\n  display: inline-block;\\n  border-radius: 20px;\\n  margin: auto;\\n  min-width: 10px;\\n  overflow: scroll;\\n  padding: 10px;\\n  height: 870px;\\n  width: 30%;\\n}\\n\\n.skillbox, .skillbox5, .skillbox4, .skillbox3, .skillbox2, .skillbox1 {\\n  background-color: rgba(241, 216, 250, 0.589);\\n  font-family: \\\"eurostile\\\", sans-serif;\\n  display: inline-block;\\n  border-radius: 9px;\\n  margin: auto;\\n  text-align: center;\\n  min-width: 10px;\\n  overflow: scroll;\\n  padding: 35px 30px 5px 20px;\\n  height: 50px;\\n  width: 10%;\\n}\\n\\n.skillbox1 {\\n  background-color: rgba(203, 175, 235, 0.342);\\n}\\n\\n.skillbox2 {\\n  background-color: rgba(127, 159, 228, 0.295);\\n}\\n\\n.skillbox3 {\\n  background-color: rgba(54, 109, 73, 0.281);\\n}\\n\\n.skillbox4 {\\n  background-color: rgba(112, 78, 122, 0.151);\\n}\\n\\n.skillbox5 {\\n  background-color: rgba(160, 84, 13, 0.507);\\n}\\n\\n.skillbox:hover, .skillbox1:hover, .skillbox2:hover, .skillbox3:hover, .skillbox4:hover, .skillbox5:hover {\\n  opacity: 0.5;\\n}\\n\\n.modalButtonStyle, .button3, .button2, .button1 {\\n  text-align: center;\\n  background-size: 100%;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  width: 25%;\\n  height: 330px;\\n  display: inline-block;\\n  border-radius: 8px;\\n  border: 1px;\\n}\\n.modalButtonStyle:hover, .button3:hover, .button2:hover, .button1:hover {\\n  opacity: 0.5;\\n}\\n\\n.button1 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  margin-left: 10%;\\n}\\n\\n.button2 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  left: 10%;\\n}\\n\\n.button3 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  left: 10%;\\n}\\n\\n.modalBox, .modalBox2, .modalBox3 {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  padding-top: 100px;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: scroll;\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modalDesign, .modalDesign2, .modalDesign3 {\\n  width: 68%;\\n  background-color: #ecebeb;\\n  margin: auto;\\n  padding: 40px 50px 70px 50px;\\n}\\n\\n.close, .close2, .close3 {\\n  float: right;\\n  font-size: 30px;\\n  font-weight: bold;\\n}\\n.close:hover, .close2:hover, .close3:hover {\\n  color: #6d4005;\\n  cursor: pointer;\\n}\\n.close:focus, .close2:focus, .close3:focus {\\n  color: #000;\\n  cursor: pointer;\\n}\\n\\n.slideText {\\n  color: white;\\n  font-size: 23px;\\n  font-family: Helvetica, sans-serif;\\n}\\n\\n.slideshow {\\n  --curr: 0;\\n  position: relative;\\n  overflow: hidden;\\n  bottom: 0;\\n}\\n\\n.carousel-button {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 1;\\n  border-radius: 70%;\\n  background-color: #703a0500;\\n  border: none;\\n  font-size: 2rem;\\n}\\n.carousel-button:hover {\\n  color: rgba(0, 0, 0, 0.5);\\n}\\n\\n.carousel-button_next {\\n  right: 0;\\n}\\n\\n.slides {\\n  display: flex;\\n  transition: ease-in 0.6s;\\n  transform: translateX(calc(-100% * var(--curr)));\\n}\\n\\n.slide1 {\\n  flex: 0 0 100%;\\n  background-color: #eccca3;\\n  height: 150px;\\n  line-height: 90px;\\n  text-align: center;\\n  background-size: 100%;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n\\n.slide2 {\\n  flex: 0 0 100%;\\n  background-color: rgba(230, 181, 116, 0.479);\\n  text-align: center;\\n  line-height: 90px;\\n  height: 250px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/girl.png */ \"./assets/girl.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/infra.webp */ \"./assets/infra.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/rese.png */ \"./assets/rese.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/software.png */ \"./assets/software.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/graphvid.mp4 */ \"./assets/graphvid.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/TechnologyDeptHeader.jpeg */ \"./assets/TechnologyDeptHeader.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/code.png */ \"./assets/code.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar code = \"<!-- sources:\\n1. https://stackoverflow.com/questions/27671709/position-buttons-next-to-each-other-in-the-center-of-page/37333329 \\n2. https://stackoverflow.com/questions/8865458/how-do-i-vertically-center-text-with-css \\n3. https://www.w3schools.com/howto/howto_css_three_columns.asp \\n4. https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=mail \\n5. https://www.w3schools.com/jsref/prop_win_pagexoffset.asp \\n6. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll\\n7. https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165\\n8. https://www.w3schools.com/howto/howto_css_modals.asp\\n9. https://www.w3schools.com/css/css3_animations.asp -->\\n\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"utf-8\\\" />\\n        <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>NamrataVajralaWebsite</title>\\n        <script src=\\\"https://kit.fontawesome.com/512a69cbe5.js\\\" crossorigin=\\\"anonymous\\\"></script>\\n    </head>\\n\\n    <body>\\n        <nav>\\n        <div id=\\\"header\\\">\\n            <!-- nav bar section -->\\n        <ul>\\n            <li class=\\\"home\\\"><a href=\\\"#home\\\" class = \\\"x\\\" id = \\\"headerText1\\\"><p class=\\\"pp\\\">Home</p></a></li>\\n            <li class=\\\"skillss\\\"><a href=\\\"#skillss\\\"  class = \\\"x\\\" id = \\\"headerText5\\\"><p class=\\\"pp\\\">About</p></a></li>\\n            <li class=\\\"experience\\\"><a href=\\\"#experience\\\"  class = \\\"x\\\" id = \\\"headerText2\\\"><p class=\\\"pp\\\">Skills & Experience</p></a></li>\\n            <li class=\\\"project\\\"><a href=\\\"#project\\\"  class = \\\"x\\\" id = \\\"headerText4\\\"><p class=\\\"pp\\\">Projects</p></a></li>\\n            <li class=\\\"activities\\\"><a href=\\\"#activities\\\"  class = \\\"x\\\" id = \\\"headerText3\\\"><p class=\\\"pp\\\"></p></a></li>\\n        </ul>\\n        </div>\\n    </nav>\\n    </div>\\n\\n    <!-- home page section -->\\n    <section id=\\\"home\\\">\\n        <div class = \\\"big-space-between\\\"></div>\\n        <h1 class=\\\"textBig\\\" data-text=\\\"Back-end & Front-end Developer\\\">Back-end & Front-end Developer </h1>\\n        <div class = \\\"smaller-space-between\\\"></div>\\n        <p class=\\\"txt\\\"> I learn and I code and I love it. <p>\\n            <div class = \\\"small-space-between\\\"></div>\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" class= \\\"girl\\\">\\n        <div class = \\\"small-space-between\\\"></div>\\n        <p class=\\\"txt\\\">Welcome to my website! Scroll to find out more :)</p>\\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"smaller-space-between\\\"></div>\\n    </section>\\n\\n    <!-- experience page section -->\\n    \\n        <div class=\\\"d1\\\">\\n            <div class=\\\"d2\\\">\\n                <div class=\\\"d\\\">\\n\\n                <div class = \\\"large-space-between\\\">\\n                <p class=\\\"txt3\\\">Hi I'm Namrata Vajrala</p>\\n                <p class=\\\"txt2\\\">I’m a Computer Science major at the University of Illinois at Urbana-Champaign minoring in Applied Statistics and I’m eager to delve into the tech industry to apply skills to real-world products and make a meaningful impact while learning new software tools.</p>\\n                <p class=\\\"txt3\\\"> <b>Nice to meet you:)</b></p>\\n                <div class=\\\"small-space-between\\\"></div>\\n                <!-- <div class = \\\"large-space-between\\\"></div>\\n                <div class = \\\"large-space-between\\\"></div> -->\\n                <!-- </div> -->\\n            </div>\\n        </div>\\n        <!-- <div class=\\\"d1\\\"> -->\\n            <!-- <div class=\\\"d2\\\"> -->\\n                <!-- </div> -->\\n                <!-- </div> -->\\n                <!-- <div class = \\\"large-space-between\\\"></div>\\n                <div class = \\\"large-space-between\\\"></div>\\n                <div class=\\\"skills\\\"></div> -->\\n                <!-- <div class = \\\"large-space-between\\\"></div>\\n                <div class = \\\"large-space-between\\\"></div> -->\\n        <div class = \\\"medium-space-between\\\"></div>\\n        \\n        <div class = \\\"small-space-between\\\"></div>\\n        <div class = \\\"medium-space-between\\\"></div>\\n        <div class=\\\"skillCol\\\"><p class=\\\"txt4\\\"><B> Here's a little about me:</B></p></div>\\n        <div class = \\\"medium-space-between\\\"></div>\\n        <section id=\\\"skillss\\\">\\n        <h1>Skills</h1>\\n        <div class=\\\"skillbox1\\\">C++</div>\\n        <div class=\\\"skillbox2\\\">Python</div>\\n        <div class=\\\"skillbox3\\\">Java</div>\\n        <div class=\\\"skillbox5\\\">Docker</div>\\n        <div class=\\\"skillbox3\\\">Kubernetes</div>\\n        <div class=\\\"skillbox2\\\">HTML</div>\\n        <div class=\\\"skillbox5\\\">CSS</div>\\n        <div class=\\\"skillbox1\\\">Selenium</div>\\n        <div class=\\\"skillbox2\\\">Rest Assured</div>\\n        <div class=\\\"skillbox1\\\">API</div>\\n        <div class=\\\"skillbox4\\\">Swagger</div>\\n        <div class=\\\"skillbox5\\\">Android</div>\\n        <div class=\\\"skillbox2\\\">SQLite</div>\\n        <div class=\\\"skillbox4\\\">Git</div>\\n        <div class=\\\"skillbox3\\\">Verilog</div>\\n        <div class=\\\"skillbox4\\\">MIPS</div>\\n        </section>\\n        <!-- <div class = \\\"small-space-between\\\"></div> -->\\n        <div class = \\\"medium-space-between\\\"></div>\\n        <!-- <div class=\\\"skillCol\\\">\\n        <p class=\\\"skillsText\\\">C++, Python, Java, Docker, Kubernetes, HTML, CSS, Selenium, Rest Assured, API, Swagger, Android, SQLite, Git, Verilog, MIPS </p>\\n    </div> -->\\n    <div class = \\\"small-space-between\\\"></div>\\n    <div class = \\\"small-space-between\\\"></div>\\n    <section id=\\\"experience\\\">\\n    \\n                <!-- <div class=\\\"small-space-between\\\"></div> -->\\n                <h1>Recent Experience</h1>\\n                <section id=\\\"experience\\\">\\n             <div class=\\\"smaller-space-between\\\"></div>\\n                <div class=\\\"row\\\">\\n                    <span>\\n                    <div class=\\\"columnl\\\">\\n                        <div class=\\\"smaller-space-between\\\"></div>\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" class= \\\"internIcon1\\\">\\n                      <h2 class = \\\"expText\\\">Infrastructure SWE Intern</h2>\\n                      <h2 class = \\\"companyText\\\">Applovin</h2>\\n                      <div class=\\\"small-space-between\\\"></div>\\n                      <div>\\n                      <ul class=\\\"resume\\\">\\n                          <li>Generated a sampling profiler tool, flame graphs, in a Kubernetes environment and debugged through methods to implement C/C++\\n                            support for existing flame graph codebases.</li>\\n                            <li>Replicated deployments and flame graph processes from minikube to the Google Kubernetes Engine to allow for access on the cloud</li>\\n                            <li> Integrated a HTTP library, llhttp, to Applovin’s front-end server code as it provided for a 156% speed increase than the previous\\n                                http_parser library</li>\\n                                <li>Minimized memory allocations for server code and optimized functions by editing C++ code and creating python scripts<br></li>\\n                      </ul>\\n                      </div>\\n                      <div class=\\\"small-space-between\\\"></div>\\n                      <p class=\\\"companyText\\\"> .</p>\\n                      <p class=\\\"companyText\\\">Tools</p> \\n                      <p class=\\\"toolsContent\\\">C++, Python, Kubernetes, Docker, Google Kubernetes Engine (GKE)</p> \\n                      \\n                    </div>\\n                    \\n                    <div class=\\\"columnm\\\" >\\n                        <div class=\\\"smaller-space-between\\\"></div>\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" class= \\\"internIcon2\\\">\\n                      <h2 class = \\\"expText\\\">Researcher</h2>\\n                      <h2 class = \\\"companyText\\\">Univeristy of Illinois at Urbana-Champaign</h2>\\n                      <div class=\\\"small-space-between\\\"></div>\\n                      <ul class=\\\"resume\\\">\\n                          <li>Developed and optimized code in ConText, an open-source tool for the integrated analysis of text and network data</li>\\n                          <li>Read documentation for 3rd part libraries and applied it to the ConText codebase</li>\\n                          <li> Used software to find the impact of language use on social networks through natural language processing & network analysis libraries</li>\\n                      </ul>\\n                      <p class=\\\"companyText\\\"> .</p>\\n                      <p class=\\\"companyText\\\">Tools</p> \\n                      <p class=\\\"toolsContent\\\">Java, Natural Language Processing Libraries</p> \\n                    </div>\\n                    <div class=\\\"columnr\\\">\\n                        <div class=\\\"smallest-space-between\\\"></div>\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class= \\\"internIcon3\\\">\\n                        <h2 class = \\\"expText\\\">Software Engineer Intern</h2>\\n                        <h2 class = \\\"companyText\\\">CDK Global</h2>\\n                        <div class=\\\"small-space-between\\\"></div>\\n                        <ul class=\\\"resume\\\">\\n                            <li> Integrated API Automation with the REST Assured library, Swagger, and Java to prevent and troubleshoot API errors in-app workflow</li>\\n                            <li>Programmed using Java and Selenium in TestNG framework to automate & debug 20+ scripts for testing CDK's Drive flex app</li>\\n                            <li>Maximized efficiency and speed for each test by greater than 20% by optimizing previously written Java code</li>\\n                            <li>Identified and troubleshot three defects in application workflow to create ease of use for end-user</li>\\n                        </ul>\\n                        <p class=\\\"companyText\\\"> .</p>\\n                      <p class=\\\"companyText\\\">Tools</p> \\n                      <p class=\\\"toolsContent\\\">Java, Selinium, TestNG framework, REST Assured Library</p> \\n                      </div>\\n                </span>\\n                  </div>\\n                </div>\\n            </div> \\n        </div>\\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"large-space-between\\\"></div> \\n        <div class = \\\"large-space-between\\\"></div> \\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"large-space-between\\\"></div>\\n        <div class = \\\"medium-space-between\\\"></div>\\n    </section>\\n        <section id=\\\"project\\\">\\n        <div class = \\\"medium-space-between\\\"></div>\\n    </div>\\n        \\n        \\n        <!-- projects section -->\\n    \\n\\n        \\n        <h3>My Recent Work</h3>\\n        <button id=\\\"myBtn\\\" class=button1 > </button>\\n\\n        <div id=\\\"firstModal\\\" class=\\\"modalBox\\\">\\n\\n        <div class=\\\"modalDesign\\\">\\n            <span class=\\\"close\\\">&times;</span>\\n            <ul class=\\\"resume\\\">\\n                <li>Developed backend architecture, UI, and test suite of a multiplayer game from ground-up using C++, Cinder, SQLite3, GFlags, Catch-2</li>\\n                <li>Features of the game: Database storage for leaderboard scores, multiple players and levels with obstacles, pleasant GUI and sound</li>\\n            </ul>\\n            <div class = \\\"medium-space-between\\\"></div>\\n        </div>\\n\\n        </div>\\n        <button id=\\\"myBtn2\\\" class=button2 > </button>\\n\\n        <div id=\\\"secondModal\\\" class=\\\"modalBox2\\\">\\n\\n        <div class=\\\"modalDesign2\\\">\\n            <span class=\\\"close2\\\">&times;</span>\\n            <ul class=\\\"resume\\\"> \\n                <li>Implemented algorithms (BFS, Dijkstra’s algorithm, Graph Coloring) to connect a large database of subreddit links together in C++</li>\\n                <li>Designed a directed and weighted graph based on subreddit properties to find the minimum path between two links</li>\\n            </ul>\\n            <div class = \\\"medium-space-between\\\"></div>\\n            \\n            <video width=\\\"320\\\" height=\\\"320\\\" controls> <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" type=\\\"video/mp4\\\"> </video>\\n        </div>\\n\\n        </div>\\n\\n        <button id=\\\"myBtn3\\\" class=button3 > </button>\\n\\n        <div id=\\\"thirdModal\\\" class=\\\"modalBox3\\\">\\n\\n        <div class=\\\"modalDesign3\\\">\\n            <span class=\\\"close3\\\">&times;</span>\\n            <ul class=\\\"resume\\\">\\n                <li>Implemented a vaccine tracker to track the statistics of vaccines taken by people around America.</li>\\n                <li>The application is a user-interface that allows for people to input their vaccine experiences to communicate about side-effects and other factors. The app organizes all the data collected in a database, makes calculations based off of it, and presents the user with specified categories of the data.</li>\\n            </ul>\\n            <div class = \\\"medium-space-between\\\"></div>\\n        </div>\\n\\n        </div>\\n\\n    </section>\\n\\n\\n\\n\\n    <!-- activities section -->\\n    <section id=\\\"activities\\\">\\n        <div class = \\\"medium-space-between\\\"></div>\\n        <div class = \\\"small-space-between\\\"></div>\\n        <div class = \\\"small-space-between\\\"></div>\\n         <h3>Other</h3>\\n\\n\\n              <div class=\\\"slideshow\\\" id=\\\"slideshowI\\\">\\n\\n                <div class=\\\"carousel-buttons\\\">\\n                  <button id=\\\"prevBtn\\\" class=\\\"carousel-button carousel-button_previous\\\">\\n                    <span class=\\\"fas fa-chevron-circle-left\\\"></span>\\n                  </button>\\n\\n                  <button id=\\\"nextBtn\\\" class=\\\"carousel-button carousel-button_next\\\">\\n                    <span class=\\\"fas fa-chevron-circle-right\\\"></span>\\n                  </button>\\n                </div>\\n\\n                <div id=\\\"slideContents\\\" class=\\\"slides\\\">\\n\\n                  <div class=\\\"slide1\\\">\\n                      <p class=\\\"slideText\\\">Worked as a robotics mentor  and tutored students in Math and Computer Science</p>\\n                    <div class=\\\"hero\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" class= \\\"i\\\">\\n                      </div>\\n                  </div>\\n\\n                  <div class=\\\"slide2\\\">\\n                    <p class=\\\"slideText\\\">Enjoy going to hackathons and collaborating with a team to produce an impactful project</p>\\n                    <div class=\\\"hero\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" class= \\\"i\\\">\\n                      </div>\\n                    \\n                  </div>\\n\\n                </div>\\n\\n              </div> \\n\\n          <!-- <div class = \\\"medium-space-between\\\"></div>\\n\\n        <div class = \\\"medium-space-between\\\"></div> -->\\n        <!-- <div class=\\\"hero\\\">\\n            <img src=\\\"assets/endimg2.png\\\" class= \\\"i\\\">\\n          </div> -->\\n          <!-- footer section -->\\n        <div class=\\\"fixed-footer\\\">\\n\\n              <div class=\\\"smaller-space-between\\\"></div>\\n\\n              <div class=\\\"icon1\\\">\\n              <a href=\\\"https://www.linkedin.com/in/namratavajrala/\\\"> <span>\\n              <i class=\\\"fab fa-linkedin\\\"></i>\\n              </span></a>\\n              </div>\\n\\n            <div class=\\\"icon2\\\">\\n            <a href=\\\"https://github.com/NamrataVajrala\\\"> <i class=\\\"fab fa-github\\\"></i></a>\\n            </div>\\n\\n            <div class=\\\"icon3\\\">\\n                <a href=\\\"mailto:namrata.v.26@gmail.com\\\"><i class=\\\"far fa-paper-plane\\\"></i></a>\\n            </div>\\n\\n            <div class=\\\"small-space-between\\\"></div>\\n        </div>\\n\\n\\n        \\n    </section>\\n\\n\\n    </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/TechnologyDeptHeader.jpeg":
/*!******************************************!*\
  !*** ./assets/TechnologyDeptHeader.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fa5a81d06da2dce12c6e.jpeg\";\n\n//# sourceURL=webpack:///./assets/TechnologyDeptHeader.jpeg?");

/***/ }),

/***/ "./assets/graphvid.mp4":
/*!*****************************!*\
  !*** ./assets/graphvid.mp4 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5e0aa1f54cbe53a8bf59.mp4\";\n\n//# sourceURL=webpack:///./assets/graphvid.mp4?");

/***/ }),

/***/ "./assets/infra.webp":
/*!***************************!*\
  !*** ./assets/infra.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fc3c9445cde7ae123119.webp\";\n\n//# sourceURL=webpack:///./assets/infra.webp?");

/***/ }),

/***/ "./assets/Crossyroad.png":
/*!*******************************!*\
  !*** ./assets/Crossyroad.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7089a03803a2ee8532cb.png\";\n\n//# sourceURL=webpack:///./assets/Crossyroad.png?");

/***/ }),

/***/ "./assets/code.png":
/*!*************************!*\
  !*** ./assets/code.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1b840dd5c7259ed3da5d.png\";\n\n//# sourceURL=webpack:///./assets/code.png?");

/***/ }),

/***/ "./assets/covax.png":
/*!**************************!*\
  !*** ./assets/covax.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"19885268ca1feb886f55.png\";\n\n//# sourceURL=webpack:///./assets/covax.png?");

/***/ }),

/***/ "./assets/girl.png":
/*!*************************!*\
  !*** ./assets/girl.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3dcf8078485f3233892f.png\";\n\n//# sourceURL=webpack:///./assets/girl.png?");

/***/ }),

/***/ "./assets/graph.png":
/*!**************************!*\
  !*** ./assets/graph.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"019eb62a4f1a0bb7bbd3.png\";\n\n//# sourceURL=webpack:///./assets/graph.png?");

/***/ }),

/***/ "./assets/rese.png":
/*!*************************!*\
  !*** ./assets/rese.png ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack:///./assets/rese.png?");

/***/ }),

/***/ "./assets/software.png":
/*!*****************************!*\
  !*** ./assets/software.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2f55a4677e397c07a000.png\";\n\n//# sourceURL=webpack:///./assets/software.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;