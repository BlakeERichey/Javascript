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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mortgage = __webpack_require__(/*! ./mortgage */ "./js/mortgage.js");

var _mortgage2 = _interopRequireDefault(_mortgage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testObject;
var fruits = [];

for (var x = 0; x < 5; x++) {
    fruits.push(x);
}

var testObject = { fruits: fruits };

var reducer = function reducer(acumulator, currentVal) {
    return acumulator + currentVal;
};

console.log(fruits.reduce(reducer));
console.log(testObject.fruits);

fruits.forEach(function (item, index, array) {
    console.log("Fruits " + index + ": " + item);
});

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var mortgage = new _mortgage2.default(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
    var html = "";
    mortgage.amortization.forEach(function (year, index) {
        return html += "\n        <tr>\n            <td>" + (index + 1) + "</td>\n            <td class=\"currency\">" + Math.round(year.principalY) + "</td>\n            <td class=\"stretch\">\n                <div class=\"flex\">\n                    <div class=\"bar principal\"\n                         style=\"flex:" + year.principalY + ";-webkit-flex:" + year.principalY + "\">\n                    </div>\n                    <div class=\"bar interest\"\n                         style=\"flex:" + year.interestY + ";-webkit-flex:" + year.interestY + "\">\n                    </div>\n                </div>\n            </td>\n            <td class=\"currency left\">" + Math.round(year.interestY) + "</td>\n            <td class=\"currency\">" + Math.round(year.balance) + "</td>\n        </tr>\n    ";
    });
    document.getElementById("amortization").innerHTML = html;
});

/***/ }),

/***/ "./js/mortgage.js":
/*!************************!*\
  !*** ./js/mortgage.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mortgage = function () {
    function Mortgage(principal, years, rate) {
        _classCallCheck(this, Mortgage);

        this.principal = principal;
        this.years = years;
        this.rate = rate;
    }

    _createClass(Mortgage, [{
        key: "monthlyPayment",
        get: function get() {
            var monthlyRate = this.rate / 100 / 12;
            return this.principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), this.years * 12));
        }
    }, {
        key: "amortization",
        get: function get() {
            var monthlyPayment = this.monthlyPayment;
            var monthlyRate = this.rate / 100 / 12;
            var balance = this.principal;
            var amortization = [];
            for (var y = 0; y < this.years; y++) {
                var interestY = 0;
                var principalY = 0;
                for (var m = 0; m < 12; m++) {
                    var interestM = balance * monthlyRate;
                    var principalM = monthlyPayment - interestM;
                    interestY = interestY + interestM;
                    principalY = principalY + principalM;
                    balance = balance - principalM;
                }
                amortization.push({ principalY: principalY, interestY: interestY, balance: balance });
            }
            return amortization;
        }
    }]);

    return Mortgage;
}();

exports.default = Mortgage;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map