/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/silkworm.js":
/*!***************************!*\
  !*** ../dist/silkworm.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/DOM/DOM.js\":\n/*!************************!*\\\n  !*** ./src/DOM/DOM.js ***!\n  \\************************/\n/*! exports provided: compare, convert, create, inject, renderDOM */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"compare\\\", function() { return compare; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"convert\\\", function() { return convert; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"create\\\", function() { return create; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"inject\\\", function() { return inject; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"renderDOM\\\", function() { return renderDOM; });\\n/**\\n * @IT must compare nodes of virtual DOM and check them for changes\\n */\\nfunction compare() {\\n\\n}\\n\\n/**\\n * @IT converts js components objects to html objects\\n */\\nfunction convert() {\\n\\n}\\n\\n/**\\n * @It must find and call component by node id, and pass it to converter\\n*/\\nfunction create() {\\n\\n}\\n\\n/**\\n * @IT must inject virtual DOM nodes to real DOM\\n */\\nfunction inject() {\\n\\n}\\n\\n/**\\n * @IT init DOM render cycle\\n */\\nfunction renderDOM() {\\n\\n}\\n\\n\\n\\n//# sourceURL=webpack://silkwormjs/./src/DOM/DOM.js?\");\n\n/***/ }),\n\n/***/ \"./src/engine.js\":\n/*!***********************!*\\\n  !*** ./src/engine.js ***!\n  \\***********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/**\\n * @It must create dom object from componentsMap\\n * @param {object} appMap object with components links\\n * @param {object} componentsMap object with components\\n * @return {object} prepared map of components\\n */\\nfunction engine(appMap = {}, componentsMap = {}) {\\n  /**\\n   * @It must accumulate components and create virtualDOM object\\n   * @return {undefined} nothing\\n   * @param {object} map application map config\\n   * @param {string} nodeId id of root component template\\n  */\\n  function accumulate(map, nodeId) {\\n    const resultObject = createComponent(nodeId)\\n    if(typeof resultObject === 'number'){\\n      return getComponent(map[resultObject])\\n    } else {\\n      resultObject.content.forEach((item, i) => {\\n        if(item === '$CHILDREN$'){\\n          if(typeof map === 'string'){\\n            resultObject.content[i] = createComponent(map)\\n          } else {\\n            resultObject.content[i] = getComponent(map[nodeId])\\n          }\\n        }\\n      })\\n    }\\n    return resultObject\\n  }\\n\\n  /**\\n   * @It must get component by its children type\\n   * @param {object} component object\\n   * @return {undefined} nothing\\n  */\\n  function getComponent(component) {\\n    if(typeof component === 'string'){\\n      return createComponent(component)\\n    } else if (Array.isArray(component)){\\n      return component.map((item) => {\\n        return getComponent(item)\\n      })\\n    } else if (typeof component === 'object') {\\n      for(let key in component){\\n        return accumulate(component[key], key)\\n      }\\n    }\\n  }\\n\\n  function createComponent(id) {\\n    return componentsMap[id]()\\n  }\\n\\n  /**\\n   * @It must start over app map render cycle\\n   * @return {undefined} nothing\\n  */\\n  function render() {\\n    let virtualDOM = {}\\n    virtualDOM.root = accumulate(appMap, 'root')\\n    return virtualDOM\\n  }\\n\\n  if (appMap.root) {\\n    return render();\\n  } else {\\n    throw new Error('There is no root in app map');\\n  }\\n}\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (engine);\\n\\n\\n//# sourceURL=webpack://silkwormjs/./src/engine.js?\");\n\n/***/ }),\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \\\"./src/engine.js\\\");\\n/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/DOM */ \\\"./src/DOM/DOM.js\\\");\\n\\n\\n\\n/**\\n * @IT starts the library\\n * @param {object} appMap object with components links\\n * @param {object} functionsMap object with functions map\\n * @return {object} object with library open functions\\n */\\nfunction silkworm(appMap, functionsMap) {\\n  /**\\n   * @IT init render cycle\\n   */\\n  function render() {\\n    const components = Object(_engine__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])(appMap, functionsMap);\\n    // renderDOM(components);\\n  }\\n\\n  return {\\n    render: render,\\n  };\\n};\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (silkworm);\\n\\n\\n\\n//# sourceURL=webpack://silkwormjs/./src/index.js?\");\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack:///../dist/silkworm.js?");

/***/ }),

/***/ "./src/appMap.js":
/*!***********************!*\
  !*** ./src/appMap.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst appMap = {\n  root: [\n    {\n      controller: [\n        {\n          test1: 'test3',\n        },\n        'test2',\n      ],\n    },\n    'test4',\n  ],\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appMap);\n\n\n//# sourceURL=webpack:///./src/appMap.js?");

/***/ }),

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction root() {\r\n  // console.log('root')\r\n  return {\r\n    type: 'div',\r\n    class: 'root',\r\n    content: [\r\n        '$CHILDREN$'\t\r\n    ]\r\n  }\r\n}\r\n  \r\n/* harmony default export */ __webpack_exports__[\"default\"] = (root);\n\n//# sourceURL=webpack:///./src/components/root.js?");

/***/ }),

/***/ "./src/components/test1.js":
/*!*********************************!*\
  !*** ./src/components/test1.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test1() {\n\t// console.log('test1')\n\treturn {\n\t\ttype: 'div',\n\t\tclass: 'test1',\n\t\tcontent: [\n\t\t\t'$CHILDREN$'\n\t\t]\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test1);\n\n//# sourceURL=webpack:///./src/components/test1.js?");

/***/ }),

/***/ "./src/components/test2.js":
/*!*********************************!*\
  !*** ./src/components/test2.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test2() {\n//   console.log('test2')\n\t return {\n\t\t\ttype: 'div',\n\t\t\tclass: 'test2',\n\t\t\tcontent: [\n\t\t\t\t'ТЕСТ2'\t\n\t\t\t]\n\t\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test2);\n\n//# sourceURL=webpack:///./src/components/test2.js?");

/***/ }),

/***/ "./src/components/test3.js":
/*!*********************************!*\
  !*** ./src/components/test3.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test3() {\n\treturn {\n\t\ttype: 'p',\n\t\tclass: 'test3',\n\t\tcontent: [\n\t\t\t'ТЕСТ3'\t\n\t\t]\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test3);\n\n//# sourceURL=webpack:///./src/components/test3.js?");

/***/ }),

/***/ "./src/components/test4.js":
/*!*********************************!*\
  !*** ./src/components/test4.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test4() {\n//   console.log('test4')\n \treturn {\n\t\ttype: 'div',\n\t\tclass: 'test4',\n\t\tcontent: [\n\t\t\t'ТЕСТ4',\n\t\t\t{\n\t\t\t\ttype: 'p',\n\t\t\t\tclass: '',\n\t\t\t\tcontent: [\n\t\t\t\t\t'ВЛОЖЕННЫЙ КОМПОНЕНТ'\n\t\t\t\t]\n\t\t\t}\n\t\t\t\n\t\t]\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test4);\n\n//# sourceURL=webpack:///./src/components/test4.js?");

/***/ }),

/***/ "./src/componentsMap.js":
/*!******************************!*\
  !*** ./src/componentsMap.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_test1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test1 */ \"./src/components/test1.js\");\n/* harmony import */ var _components_test2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/test2 */ \"./src/components/test2.js\");\n/* harmony import */ var _components_test3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test3 */ \"./src/components/test3.js\");\n/* harmony import */ var _components_test4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/test4 */ \"./src/components/test4.js\");\n/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/root */ \"./src/components/root.js\");\n/* harmony import */ var _controllers_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/controller */ \"./src/controllers/controller.js\");\n\n\n\n\n\n\n\n\nconst componentsMap = {\n  root: _components_root__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  test1: _components_test1__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  test2: _components_test2__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  test3: _components_test3__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  controller: _controllers_controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  test4: _components_test4__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (componentsMap);\n\n\n//# sourceURL=webpack:///./src/componentsMap.js?");

/***/ }),

/***/ "./src/controllers/controller.js":
/*!***************************************!*\
  !*** ./src/controllers/controller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction controller() {\n  // console.log('controller')\n  if(window.state){\n    return 0\n  }else{\n    return 1\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/controllers/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_silkworm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/silkworm */ \"../dist/silkworm.js\");\n/* harmony import */ var _dist_silkworm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_silkworm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _appMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appMap */ \"./src/appMap.js\");\n/* harmony import */ var _componentsMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsMap */ \"./src/componentsMap.js\");\n\n\n\nwindow.state = true\n_dist_silkworm__WEBPACK_IMPORTED_MODULE_0___default()(_appMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _componentsMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).render()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });