/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/components/Calculator.js":
/*!*************************************!*\
  !*** ./js/components/Calculator.js ***!
  \*************************************/
/***/ (() => {

const numBtns = document.querySelectorAll(".js-btn-num");
const operantBtns = document.querySelectorAll(".js-btn-operant");
const funcBtns = document.querySelectorAll(".js-btn-func");

const fieldTotal = document.querySelector(".calc__total");
const fieldHistory = document.querySelector(".calc__history");

const btnDelOne = document.querySelector(".js-btn-del-last");
const btnPercent = document.querySelector(".js-btn-percent");
const btnDeleteAll = document.querySelector(".js-btn-delete");

const pointBtn = document.querySelector("#btn-point");

const equalBtn = document.querySelector("#js-equal");

// class Calculator {
//   constructor(fieldTotal, fieldHistory) {
//     this.fieldHistory = fieldHistory;
//     this.fieldTotal = fieldTotal;
//     this.clear();
//   }

//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }

//   delete() {}

//   appendNumber(number) {}

//   chooseOperation(operation) {}

//   compute() {}

//   updateDisplay() {}
// }

window.addEventListener("load", (e) => {
  // localStorage.clear()
  localStorage.setItem("initialVal", 0);
  fieldTotal.innerHTML = localStorage.getItem("initialVal");
  fieldHistory.classList.add("hidden");
});

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (fieldTotal.innerHTML === "0") {
      if (btn === pointBtn) {
        fieldTotal.innerHTML += btn.innerHTML;
      } else {
        fieldTotal.innerHTML = btn.innerHTML;
      }
    } else {
      fieldTotal.innerHTML += btn.innerHTML;
    }
  });
});

operantBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fieldTotal.innerHTML !== "" && (fieldTotal.innerHTML += btn.innerHTML);
  });

  // if (fieldTotal.innerHTML.endsWith(btn)) {
  //   fieldTotal.innerHTML += "";
  //   console.log(1);
  //   console.log(fieldTotal.innerHTML);
  // }
});

// btnDeleteAll.addEventListener("click", () => {
//   fieldTotal.innerHTML = "";
// });

// equalBtn.addEventListener("click", () => {});


/***/ }),

/***/ "./js/components/Change_bg.js":
/*!************************************!*\
  !*** ./js/components/Change_bg.js ***!
  \************************************/
/***/ (() => {

const changeBgBtn = document.querySelector(".calc__change-bg__btn");

changeBgBtn.addEventListener("click", () => {
  const calc = document.querySelector(".calc");

  if (!calc.classList.contains("bg-color")) {
    calc.classList.add("bg-color");
    changeBgBtn.classList.add("change-color");
  } else {
    calc.classList.remove("bg-color");
    changeBgBtn.classList.remove("change-color");
  }
});


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/style */ "./scss/style.scss");
/* harmony import */ var _components_Change_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Change_bg */ "./js/components/Change_bg.js");
/* harmony import */ var _components_Change_bg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Change_bg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Calculator */ "./js/components/Calculator.js");
/* harmony import */ var _components_Calculator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Calculator__WEBPACK_IMPORTED_MODULE_2__);
// import "../scss/style.scss";
//import name from "../img/name.sf" //for imgs



// import "../style.css";

// alert("hello");
// console.log("bbb");

})();

/******/ })()
;