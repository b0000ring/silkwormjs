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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/engine.js\":\n/*!***********************!*\\\n  !*** ./src/engine.js ***!\n  \\***********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/**\\n * @It must create dom object from componentsMap\\n * @param {object} componentsMap object with components links\\n * @param {object} functionsMap object with functions map\\n * @return {object} prepared map of components\\n */\\nfunction engine(componentsMap = {}, functionsMap = {}) {\\n  /**\\n   * @It must get over appMap and creator func\\n   * @return {undefined} nothing\\n   * @param {object} map application map config\\n   * @param {string} nodeId id of root component template\\n  */\\n  function selector(map, nodeId) {\\n    // last component in branch\\n    if (typeof map === 'string') {\\n      creator(map, nodeId);\\n    // not last component in branch\\n    } else {\\n      for (let node in map) {\\n        if (typeof parseInt(node) === 'number' && !isNaN(parseInt(node))) {\\n          selector(map[node], nodeId);\\n        } else {\\n          let templateId = creator(node, nodeId);\\n          // controller logic\\n          if (typeof templateId === 'number') {\\n            selector(map[node][templateId], nodeId);\\n            return;\\n           // component logic\\n          } else {\\n            selector(map[node], templateId);\\n          }\\n        }\\n      }\\n    }\\n  }\\n\\n  /**\\n   * @It must create root component and start over app map render cycle\\n   * @return {undefined} nothing\\n  */\\n  function render() {\\n    let currentId = null;\\n    let rootComponent = functionsMap['root']();\\n    const appDiv = document.getElementById('app');\\n    let template = rootComponent.querySelector('.template');\\n    currentId = generateId();\\n    template.id = currentId;\\n    appDiv.appendChild(rootComponent);\\n\\n    selector(componentsMap.root, currentId);\\n  }\\n\\n  if (componentsMap.root) {\\n    return render();\\n  } else {\\n    throw new Error('There is no root components map');\\n  }\\n}\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (engine);\\n\\n\\n//# sourceURL=webpack://silkwormjs/./src/engine.js?\");\n\n/***/ }),\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \\\"./src/engine.js\\\");\\n\\n\\n\\n/**\\n * @IT starts the library\\n * @param {object} appMap object with components links\\n * @param {object} functionsMap object with functions map\\n * @return {object} object with library open functions\\n */\\nfunction silkworm(appMap, functionsMap) {\\n  /**\\n   * @IT init render cycle\\n   */\\n  function render() {\\n    const components = Object(_engine__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])(appMap, functionsMap);\\n    Object(_engine__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])(components);\\n  }\\n  return {\\n    render: render,\\n  };\\n};\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (silkworm);\\n\\n\\n\\n//# sourceURL=webpack://silkwormjs/./src/index.js?\");\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack:///../dist/silkworm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_silkworm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/silkworm */ \"../dist/silkworm.js\");\n/* harmony import */ var _dist_silkworm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_silkworm__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('privet');\nconsole.log(_dist_silkworm__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });