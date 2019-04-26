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

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/DOM/DOM.js\":\n/*!************************!*\\\n  !*** ./src/DOM/DOM.js ***!\n  \\************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return renderDOM; });\\n/* harmony import */ var _VirtualDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VirtualDOM */ \\\"./src/DOM/VirtualDOM.js\\\");\\n\\n\\n/**\\n * @It must start real DOM update cycle\\n*/\\nfunction update(updateable) {\\n  updateable.forEach((item) => {\\n    inject(item.parent, convert(item.object))\\n  })\\n}\\n\\n/**\\n * @IT converts js components objects to html objects\\n */\\nfunction convert(object) {\\n  // WRONG LOGIC!!!\\n  console.log(object)\\n  let parent = document.createElement(object.type)\\n  if(Array.isArray(object.content)){\\n    object.content.forEach((item) => {\\n      if(typeof item === 'object'){\\n        parent.innerHTML = convert(item)\\n      } else {\\n        parent.innerHTML = item\\n      }\\n    })\\n  } else {\\n    parent.innerHTML = object.content\\n  }\\n  return parent\\n}\\n\\n/**\\n * @IT must inject virtual DOM nodes to real DOM\\n */\\nfunction inject(nodeId, children) {\\n  let parent = document.getElementById(nodeId)\\n  console.log(children)\\n  parent.innerHTML = children \\n}\\n\\n/**\\n * @IT init DOM render cycle\\n */\\nfunction renderDOM(newVirtualDOM) {\\n  console.log(_VirtualDOM__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])\\n  let differences = _VirtualDOM__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].save(newVirtualDOM)\\n  update(differences)\\n}\\n\\n//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWxrd29ybWpzLy4vc3JjL0RPTS9ET00uanM/OTMyZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZixjQUFjLG1EQUFVO0FBQ3hCLG9CQUFvQixtREFBVTtBQUM5QjtBQUNBIiwiZmlsZSI6Ii4vc3JjL0RPTS9ET00uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmlydHVhbERPTSBmcm9tICcuL1ZpcnR1YWxET00nXG5cbi8qKlxuICogQEl0IG11c3Qgc3RhcnQgcmVhbCBET00gdXBkYXRlIGN5Y2xlXG4qL1xuZnVuY3Rpb24gdXBkYXRlKHVwZGF0ZWFibGUpIHtcbiAgdXBkYXRlYWJsZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaW5qZWN0KGl0ZW0ucGFyZW50LCBjb252ZXJ0KGl0ZW0ub2JqZWN0KSlcbiAgfSlcbn1cblxuLyoqXG4gKiBASVQgY29udmVydHMganMgY29tcG9uZW50cyBvYmplY3RzIHRvIGh0bWwgb2JqZWN0c1xuICovXG5mdW5jdGlvbiBjb252ZXJ0KG9iamVjdCkge1xuICAvLyBXUk9ORyBMT0dJQyEhIVxuICBjb25zb2xlLmxvZyhvYmplY3QpXG4gIGxldCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iamVjdC50eXBlKVxuICBpZihBcnJheS5pc0FycmF5KG9iamVjdC5jb250ZW50KSl7XG4gICAgb2JqZWN0LmNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKXtcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9IGNvbnZlcnQoaXRlbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSBpdGVtXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gb2JqZWN0LmNvbnRlbnRcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbi8qKlxuICogQElUIG11c3QgaW5qZWN0IHZpcnR1YWwgRE9NIG5vZGVzIHRvIHJlYWwgRE9NXG4gKi9cbmZ1bmN0aW9uIGluamVjdChub2RlSWQsIGNoaWxkcmVuKSB7XG4gIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChub2RlSWQpXG4gIGNvbnNvbGUubG9nKGNoaWxkcmVuKVxuICBwYXJlbnQuaW5uZXJIVE1MID0gY2hpbGRyZW4gXG59XG5cbi8qKlxuICogQElUIGluaXQgRE9NIHJlbmRlciBjeWNsZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJET00obmV3VmlydHVhbERPTSkge1xuICBjb25zb2xlLmxvZyh2aXJ0dWFsRE9NKVxuICBsZXQgZGlmZmVyZW5jZXMgPSB2aXJ0dWFsRE9NLnNhdmUobmV3VmlydHVhbERPTSlcbiAgdXBkYXRlKGRpZmZlcmVuY2VzKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\\n//# sourceURL=webpack-internal:///./src/DOM/DOM.js\\n\");\n\n/***/ }),\n\n/***/ \"./src/DOM/VirtualDOM.js\":\n/*!*******************************!*\\\n  !*** ./src/DOM/VirtualDOM.js ***!\n  \\*******************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/**\\n *@IT must store, update and compare virtual dom\\n */\\nclass VirtualDOM {\\n  /**\\n   * @IT constructor for VirtualDOM class\\n   */\\n  costructor() {\\n    this.VDOMobject = {};\\n  }\\n  /**\\n   * @IT must call comparator for current version of virtual DOM and previous\\n   */\\n  compare(newDOM) {\\n    // temporary\\n    return [{ parent: 'root', object: newDOM }]\\n  }\\n  /**\\n   * @IT must save new virtual DOM\\n   * @param {object} newDOM a new map of components\\n   */\\n  save(newDOM) {\\n    let differences = this.compare(newDOM)\\n    this.VDOMobject = newDOM\\n    return differences \\n  }\\n}\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (new VirtualDOM());//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWxrd29ybWpzLy4vc3JjL0RPTS9WaXJ0dWFsRE9NLmpzPzBkNjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlDQUFpQztBQUM5QztBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsK0UiLCJmaWxlIjoiLi9zcmMvRE9NL1ZpcnR1YWxET00uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqQElUIG11c3Qgc3RvcmUsIHVwZGF0ZSBhbmQgY29tcGFyZSB2aXJ0dWFsIGRvbVxuICovXG5jbGFzcyBWaXJ0dWFsRE9NIHtcbiAgLyoqXG4gICAqIEBJVCBjb25zdHJ1Y3RvciBmb3IgVmlydHVhbERPTSBjbGFzc1xuICAgKi9cbiAgY29zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLlZET01vYmplY3QgPSB7fTtcbiAgfVxuICAvKipcbiAgICogQElUIG11c3QgY2FsbCBjb21wYXJhdG9yIGZvciBjdXJyZW50IHZlcnNpb24gb2YgdmlydHVhbCBET00gYW5kIHByZXZpb3VzXG4gICAqL1xuICBjb21wYXJlKG5ld0RPTSkge1xuICAgIC8vIHRlbXBvcmFyeVxuICAgIHJldHVybiBbeyBwYXJlbnQ6ICdyb290Jywgb2JqZWN0OiBuZXdET00gfV1cbiAgfVxuICAvKipcbiAgICogQElUIG11c3Qgc2F2ZSBuZXcgdmlydHVhbCBET01cbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld0RPTSBhIG5ldyBtYXAgb2YgY29tcG9uZW50c1xuICAgKi9cbiAgc2F2ZShuZXdET00pIHtcbiAgICBsZXQgZGlmZmVyZW5jZXMgPSB0aGlzLmNvbXBhcmUobmV3RE9NKVxuICAgIHRoaXMuVkRPTW9iamVjdCA9IG5ld0RPTVxuICAgIHJldHVybiBkaWZmZXJlbmNlcyBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmlydHVhbERPTSgpIl0sInNvdXJjZVJvb3QiOiIifQ==\\n//# sourceURL=webpack-internal:///./src/DOM/VirtualDOM.js\\n\");\n\n/***/ }),\n\n/***/ \"./src/engine.js\":\n/*!***********************!*\\\n  !*** ./src/engine.js ***!\n  \\***********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/**\\n * @It must create dom object from componentsMap\\n * @param {object} appMap object with components links\\n * @param {object} componentsMap object with components\\n * @return {object} prepared map of components\\n */\\nfunction engine(appMap = {}, componentsMap = {}) {\\n  /**\\n   * @It must accumulate components and create virtualDOM object\\n   * @return {undefined} nothing\\n   * @param {object} map application map config\\n   * @param {string} nodeId id of root component template\\n  */\\n  function accumulate(map, nodeId) {\\n    const resultObject = createComponent(nodeId)\\n    // if true, this is controller\\n    if(typeof resultObject === 'number'){\\n      return getComponent(map[resultObject])\\n    } else {\\n      resultObject.content.forEach((item, i) => {\\n        if(item === '$CHILDREN$'){\\n          if(typeof map === 'string'){\\n            resultObject.content[i] = createComponent(map)\\n          } else {\\n            resultObject.content[i] = getComponent(map[nodeId])\\n          }\\n        }\\n      })\\n    }\\n    return resultObject\\n  }\\n\\n  /**\\n   * @It must get component by its children type\\n   * @param {object} component object\\n   * @return {undefined} nothing\\n  */\\n  function getComponent(component) {\\n    if(typeof component === 'string'){\\n      return createComponent(component)\\n    } else if (Array.isArray(component)){\\n      return component.map((item) => {\\n        return getComponent(item)\\n      })\\n    } else if (typeof component === 'object') {\\n      for(let key in component){\\n        return accumulate(component[key], key)\\n      }\\n    }\\n  }\\n\\n  function createComponent(id) {\\n    try{\\n      return componentsMap[id]()\\n    } catch (e) {\\n      throw new Error('Try to call nonexistent component ' + id)\\n    }\\n  }\\n\\n  if (appMap.root) {\\n    return accumulate(appMap, 'root')\\n  } else {\\n    throw new Error('There is no root in app map');\\n  }\\n}\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (engine);\\n//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWxrd29ybWpzLy4vc3JjL2VuZ2luZS5qcz84ZmRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLFVBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlLHFFQUFNLEVBQUMiLCJmaWxlIjoiLi9zcmMvZW5naW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBASXQgbXVzdCBjcmVhdGUgZG9tIG9iamVjdCBmcm9tIGNvbXBvbmVudHNNYXBcbiAqIEBwYXJhbSB7b2JqZWN0fSBhcHBNYXAgb2JqZWN0IHdpdGggY29tcG9uZW50cyBsaW5rc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudHNNYXAgb2JqZWN0IHdpdGggY29tcG9uZW50c1xuICogQHJldHVybiB7b2JqZWN0fSBwcmVwYXJlZCBtYXAgb2YgY29tcG9uZW50c1xuICovXG5mdW5jdGlvbiBlbmdpbmUoYXBwTWFwID0ge30sIGNvbXBvbmVudHNNYXAgPSB7fSkge1xuICAvKipcbiAgICogQEl0IG11c3QgYWNjdW11bGF0ZSBjb21wb25lbnRzIGFuZCBjcmVhdGUgdmlydHVhbERPTSBvYmplY3RcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfSBub3RoaW5nXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtYXAgYXBwbGljYXRpb24gbWFwIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbm9kZUlkIGlkIG9mIHJvb3QgY29tcG9uZW50IHRlbXBsYXRlXG4gICovXG4gIGZ1bmN0aW9uIGFjY3VtdWxhdGUobWFwLCBub2RlSWQpIHtcbiAgICBjb25zdCByZXN1bHRPYmplY3QgPSBjcmVhdGVDb21wb25lbnQobm9kZUlkKVxuICAgIC8vIGlmIHRydWUsIHRoaXMgaXMgY29udHJvbGxlclxuICAgIGlmKHR5cGVvZiByZXN1bHRPYmplY3QgPT09ICdudW1iZXInKXtcbiAgICAgIHJldHVybiBnZXRDb21wb25lbnQobWFwW3Jlc3VsdE9iamVjdF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdE9iamVjdC5jb250ZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYoaXRlbSA9PT0gJyRDSElMRFJFTiQnKXtcbiAgICAgICAgICBpZih0eXBlb2YgbWFwID09PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICByZXN1bHRPYmplY3QuY29udGVudFtpXSA9IGNyZWF0ZUNvbXBvbmVudChtYXApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdE9iamVjdC5jb250ZW50W2ldID0gZ2V0Q29tcG9uZW50KG1hcFtub2RlSWRdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdFxuICB9XG5cbiAgLyoqXG4gICAqIEBJdCBtdXN0IGdldCBjb21wb25lbnQgYnkgaXRzIGNoaWxkcmVuIHR5cGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBvYmplY3RcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfSBub3RoaW5nXG4gICovXG4gIGZ1bmN0aW9uIGdldENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBpZih0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJyl7XG4gICAgICByZXR1cm4gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudClcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29tcG9uZW50KSl7XG4gICAgICByZXR1cm4gY29tcG9uZW50Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50KGl0ZW0pXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvcihsZXQga2V5IGluIGNvbXBvbmVudCl7XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRlKGNvbXBvbmVudFtrZXldLCBrZXkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KGlkKSB7XG4gICAgdHJ5e1xuICAgICAgcmV0dXJuIGNvbXBvbmVudHNNYXBbaWRdKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeSB0byBjYWxsIG5vbmV4aXN0ZW50IGNvbXBvbmVudCAnICsgaWQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGFwcE1hcC5yb290KSB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdGUoYXBwTWFwLCAncm9vdCcpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyByb290IGluIGFwcCBtYXAnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbmdpbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\\n//# sourceURL=webpack-internal:///./src/engine.js\\n\");\n\n/***/ }),\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \\\"./src/engine.js\\\");\\n/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/DOM */ \\\"./src/DOM/DOM.js\\\");\\n\\n\\n\\n/**\\n * @IT starts the library\\n * @param {object} appMap object with components links\\n * @param {object} functionsMap object with functions map\\n * @return {object} object with library open functions\\n */\\nfunction silkworm(appMap, functionsMap) {\\n  /**\\n   * @IT init render cycle\\n   */\\n  function render() {\\n    const components = Object(_engine__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])(appMap, functionsMap);\\n    Object(_DOM_DOM__WEBPACK_IMPORTED_MODULE_1__[\\\"default\\\"])(components);\\n  }\\n\\n  return {\\n    render: render,\\n  };\\n};\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (silkworm);\\n\\n//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWxrd29ybWpzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0k7O0FBRWxDO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQU07QUFDN0IsSUFBSSx3REFBUztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEVBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW5naW5lIGZyb20gJy4vZW5naW5lJztcbmltcG9ydCByZW5kZXJET00gZnJvbSAnLi9ET00vRE9NJztcblxuLyoqXG4gKiBASVQgc3RhcnRzIHRoZSBsaWJyYXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gYXBwTWFwIG9iamVjdCB3aXRoIGNvbXBvbmVudHMgbGlua3NcbiAqIEBwYXJhbSB7b2JqZWN0fSBmdW5jdGlvbnNNYXAgb2JqZWN0IHdpdGggZnVuY3Rpb25zIG1hcFxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgd2l0aCBsaWJyYXJ5IG9wZW4gZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIHNpbGt3b3JtKGFwcE1hcCwgZnVuY3Rpb25zTWFwKSB7XG4gIC8qKlxuICAgKiBASVQgaW5pdCByZW5kZXIgY3ljbGVcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gZW5naW5lKGFwcE1hcCwgZnVuY3Rpb25zTWFwKTtcbiAgICByZW5kZXJET00oY29tcG9uZW50cyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcjogcmVuZGVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2lsa3dvcm07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\\n//# sourceURL=webpack-internal:///./src/index.js\\n\");\n\n/***/ })\n\n/******/ });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQSIsImZpbGUiOiJzaWxrd29ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNpbGt3b3JtanNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2lsa3dvcm1qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n\n//# sourceURL=webpack:///../dist/silkworm.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nfunction root() {\r\n  return {\r\n    type: 'div',\r\n    attributes: {\r\n      class: 'root',\r\n    },\r\n    content: [\r\n      '$CHILDREN$'\t\r\n    ]\r\n  }\r\n}\r\n  \r\n/* harmony default export */ __webpack_exports__[\"default\"] = (root);\n\n//# sourceURL=webpack:///./src/components/root.js?");

/***/ }),

/***/ "./src/components/test1.js":
/*!*********************************!*\
  !*** ./src/components/test1.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test1() {\n\treturn {\n    type: 'div',\n    attributes: {\n      class: 'test1',\n    },\n\t\tcontent: [\n\t\t\t'$CHILDREN$'\n\t\t]\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test1);\n\n//# sourceURL=webpack:///./src/components/test1.js?");

/***/ }),

/***/ "./src/components/test2.js":
/*!*********************************!*\
  !*** ./src/components/test2.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test2() {\n\treturn {\n    type: 'div',\n    attributes: {\n      class: 'test2',\n    }, \n    content: [\n      'ТЕСТ2'\t\n    ]\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test2);\n\n//# sourceURL=webpack:///./src/components/test2.js?");

/***/ }),

/***/ "./src/components/test3.js":
/*!*********************************!*\
  !*** ./src/components/test3.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test3() {\n\treturn {\n    type: 'p',\n    attributes: {\n      class: 'test3',\n    },\n\t\tcontent: [\n\t\t\t'ТЕСТ3'\t\n\t\t]\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test3);\n\n//# sourceURL=webpack:///./src/components/test3.js?");

/***/ }),

/***/ "./src/components/test4.js":
/*!*********************************!*\
  !*** ./src/components/test4.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test4() {\n \treturn {\n\t\ttype: 'div',\n    attributes: {\n      class: 'test4',\n    },\n\t\tcontent: [\n\t\t\t'ТЕСТ4',\n\t\t\t{\n\t\t\t\ttype: 'p',\n\t\t\t\tclass: '',\n\t\t\t\tcontent: [\n\t\t\t\t\t'ВЛОЖЕННЫЙ КОМПОНЕНТ'\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test4);\n\n//# sourceURL=webpack:///./src/components/test4.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nfunction controller() {\n  if(window.state){\n    return 0\n  }else{\n    return 1\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/controllers/controller.js?");

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