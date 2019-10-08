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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**************************************************************\n    @AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>\n    @LICENSE: MIT\n    Creation Date: 02.10.2019\n***************************************************************/\n// Identity function takes a number as its only argument and returns that number when called\n// id function definition\nlet id;\n// id function implementation\nid = (n) => {\n    return n;\n};\n// Counter function takes a number and increments it by 1\n// counter function definition\nlet counter = id;\n// id function implementation\ncounter = (n) => {\n    const result = (n = n + 1);\n    return result;\n};\n// Add function take two arguments and returns their product\n// add function definition\nlet add;\n// add function implementation\nadd = (a, b) => {\n    const total = a + b;\n    return total;\n};\n// Sub function take two arguments and returns their difference\n// sub function definition\nlet sub;\n// sub function implementation\nsub = (a, b) => {\n    const diff = a - b;\n    return diff;\n};\n// Highest common divisor function takes an argument of the type number and returns the hcd of that number\n// hcd function definition\nlet hcdivisor;\n// hcd function implementation\nhcdivisor = (a) => {\n    let result = 1;\n    let current = 2;\n    for (current; current < a; current = current + 1) {\n        if (a % current === 0) {\n            result = current;\n        }\n    }\n    return result;\n};\n/* mult function take a argument and returns a function that returns the product as a result by taking an argument */\n// Mult function definition\nlet mult;\n// mult function implemetation\nmult = (a) => {\n    return (b) => {\n        return a * b;\n    };\n};\n// IsPrime function a single argument and return true if a parameter is a prime number and return false otherwise\nlet isPrime;\nisPrime = (a) => {\n    let result = true;\n    let divisor = 2;\n    if (a <= 1) {\n        result = false;\n    }\n    for (divisor; divisor < a; divisor = divisor + 1) {\n        if (a % divisor === 0) {\n            result = false;\n        }\n    }\n    return result;\n};\nexports.default = { id, counter, add, sub, hcdivisor, mult, isPrime };\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });