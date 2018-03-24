(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["add"] = factory();
	else
		root["add"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nmodule.export = {\n    Gene: __webpack_require__(/*! ./src/gene */ \"./src/gene.js-exposed\"),\n    Genome: __webpack_require__(/*! ./src/genome */ \"./src/genome.js-exposed\")\n};\n\n// require ('./src/gene');\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://add/./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack://add/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack://add/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/gene.js":
/*!*********************!*\
  !*** ./src/gene.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Genome = __webpack_require__(/*! ./genome */ \"./src/genome.js-exposed\");\n\nclass Gene {\n    constructor(data, isEnabledFn = Genome.NeverActivated) {\n        this._data = data;\n        this._isEnabled = isEnabledFn;\n    }\n\n    get data() {\n        return this._data;\n    }\n\n    get type() {\n        return 'generic';\n    }\n\n    isEnabled(genome) {\n        return this._isEnabled(genome);\n    }\n\n    mutate(type, value, location = 0) {\n        throw new Error(\"Please use Gene Impl for mutation support\");\n    }\n\n    get length() {\n        return this._data.toString().length;\n    }\n\n    toString() {\n        return `g:${JSON.stringify(this.data)}`\n    }\n}\n\nclass NumericGene extends Gene {\n    static isInteger(data) {\n        return data.toString().includes('.');\n    }\n\n    static numerify(numberString) {\n        return NumericGene.isInteger(numberString) ? parseInt(numberString) : parseFloat(numberString)\n    }\n\n    get type() {\n        return 'numeric';\n    }\n\n    mutate(type, value, location = 0) {\n        switch (type) {\n            case \"base switch\":\n                this._data = -this._data;\n                break;\n            case \"insert\":\n                this._data = this._data + value;\n                break;\n            case \"delete\":\n                this._data = this._data - value;\n                break;\n            case \"recombine\":\n                this._data = NumericGene.numerify(TextGene.randomizeString(this._data.toString()));\n                break;\n        }\n    }\n\n    toString() {\n        return `n:${JSON.stringify(this.data)}`\n    }\n}\n\nclass BinaryGene extends Gene {\n    get type() {\n        return \"binary\";\n    }\n\n    get length() {\n        return 1;\n    }\n\n    mutate(type, value, location = 0) {\n        switch (type) {\n            case \"base switch\":\n                this._data = !this._data;\n                break;\n            case \"insert\":\n                this._data = true;\n                break;\n            case \"delete\":\n                this._data = false;\n                break;\n            case \"recombine\":\n                // Random chance of being 1 or 0\n                this._data = (Math.random() > .5)\n                break;\n        }\n    }\n\n    toString() {\n        return `b:${JSON.stringify(this.data)}`\n    }\n}\n\nclass TextGene extends Gene {\n    get type() {\n        return 'text'\n    }\n\n    mutate(type, value, location = 0) {\n        switch (type) {\n            case \"base switch\":\n                this._data = TextGene.splice(this.data, location, value.length, value);\n                break;\n            case \"insert\":\n                this._data = TextGene.splice(this.data, location, 0, value);\n                break;\n            case \"delete\":\n                this._data = TextGene.splice(this.data, location, value, \"\");\n                break;\n            case \"recombine\":\n                this._data = TextGene.randomizeString(TextGene.splice(this.data, 0, value.length, value));\n                break;\n        }\n    }\n\n    static randomizeString(string) {\n        return string.split('').sort(() => {\n            return 0.5 - Math.random()\n        }).join('')\n    }\n\n    static splice(orig, start, delCount, newSubStr) {\n        return orig.slice(0, start) + newSubStr + orig.slice(start + Math.abs(delCount));\n    }\n\n    toString() {\n        return `t:${JSON.stringify(this.data)}`\n    }\n}\n\nGene.TextGene = TextGene;\nGene.NumericGene = NumericGene;\nGene.BinaryGene = BinaryGene;\n\nmodule.exports = Gene;\n\n//# sourceURL=webpack://add/./src/gene.js?");

/***/ }),

/***/ "./src/gene.js-exposed":
/*!*****************************!*\
  !*** ./src/gene.js-exposed ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nmodule.exports = global[\"Gene\"] = __webpack_require__(/*! -!./gene.js */ \"./src/gene.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://add/./src/gene.js-exposed?");

/***/ }),

/***/ "./src/genome.js":
/*!***********************!*\
  !*** ./src/genome.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Genome {\n    constructor() {\n        this._genes = [];\n        this._recalculate = true;\n    }\n\n    get genes() {\n        return this._genes;\n    }\n\n    add(gene) {\n        this._genes.push(gene);\n        return this;\n    }\n\n    get enabledGenes() {\n        if(this._recalculate) { // No need to recalculate\n            this._recalculate = false;\n            this._enabledGenes = this._genes.map(gene=>{return gene.isEnabled(this)})\n        }\n        return this._enabledGenes;\n    }\n\n    reset() {\n        this._recalculate = true;\n    }\n\n    static NeverActivated(genome) {\n        return false;\n    }\n\n    static AlwaysActivated(genome) {\n        return true;\n    }\n\n    static RandomActivation(genome) {\n        return Math.random() > .5;\n    }\n\n    static HasGeneIndex(genome, index) {\n        return genome.genes.length > index;\n    }\n\n    static HasGene(genome, gene) {\n        return genome.genes.includes(gene);\n    }\n\n    static DelegateToGeneValue(gene, valueCompare = (gene)=>{return false}) {\n        return (genome) => {\n            return Genome.HasGene(genome, gene) && valueCompare(gene);\n        }\n    }\n\n    static DelegateToGeneIndexActivatedFactory(geneIndex) {\n        return (genome) => {\n            return Genome.HasGeneIndex(genome, geneIndex) && genome.genes[geneIndex].isEnabled(genome);\n        }\n    }\n\n    static DelegateToGeneActivatedFactory(gene) {\n        return (genome) => {\n            return Genome.HasGene(genome, gene) && gene.isEnabled(genome);\n        }\n    }\n\n    enabledString() {\n        return `G:[${this.enabledGenes.map(it=>{return it.toString()})}]`\n    }\n\n    toString() {\n        return `G:[${this.genes.map(it => {\n            return it.toString()\n        }).join(',')}]`\n    }\n}\n\nmodule.exports = Genome;\n\n//# sourceURL=webpack://add/./src/genome.js?");

/***/ }),

/***/ "./src/genome.js-exposed":
/*!*******************************!*\
  !*** ./src/genome.js-exposed ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nmodule.exports = global[\"Genome\"] = __webpack_require__(/*! -!./genome.js */ \"./src/genome.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://add/./src/genome.js-exposed?");

/***/ })

/******/ });
});