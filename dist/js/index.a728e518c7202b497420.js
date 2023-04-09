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

window.addEventListener("load", (e) => {
  // localStorage.clear()
  localStorage.setItem("initialVal", 0);
  localStorage.setItem("math-operation", 0);
  fieldTotal.innerHTML = localStorage.getItem("initialVal");
  fieldHistory.classList.add("hidden");
  localStorage.setItem("equasion", 0);
});

//number btns

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
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

//mathematical symbols btns

operantBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (/[-+*/]$/.test(fieldTotal.innerHTML)) {
      let modifiedTotal = fieldTotal.innerHTML.replace(
        /[-+*/]$/,
        e.target.innerHTML
      );
      fieldTotal.innerHTML = modifiedTotal;
    } else if (/[%\.]$/.test(fieldTotal.innerHTML)) {
      let modifiedTotal = fieldTotal.innerHTML.replace(/[%\.]$/, "");
      fieldTotal.innerHTML = `${modifiedTotal}${e.target.innerHTML}`;
    } else {
      fieldTotal.innerHTML += btn.innerHTML;
    }
  });
});

//point btn

pointBtn.addEventListener("click", (e) => {
  if (/\.$/.test(fieldTotal.innerHTML)) {
    let modifiedTotal = fieldTotal.innerHTML.replace(/\.$/, e.target.innerHTML);

    fieldTotal.innerHTML = modifiedTotal;
  } else if (/[-+*/]$/.test(fieldTotal.innerHTML)) {
    fieldTotal.innerHTML += `0${e.target.innerHTML}`;
  }
  // else if (/\./.test(fieldTotal.innerHTML)) {
  //   console.log("here");
  // }
  else {
    fieldTotal.innerHTML += pointBtn.innerHTML;
  }

  // ////////////////////// repeating dots issue
  // let splitedTotal = fieldTotal.innerHTML.split(/[-+*/]/);
  // console.log(splitedTotal);

  // for (let i = 0; i < splitedTotal.length; i++) {
  //   if (/(?<=\..*?)\./g.test(splitedTotal[i])) {
  //     let newNum = splitedTotal[i].replace(/(?<=\..*?)\./g, "");
  //     // num.replace(/(?<=\..*?)\./g, "");
  //     // console.log(newNum);
  //     splitedTotal.pop(splitedTotal[i]);
  //     splitedTotal.push(newNum);
  //     console.log(splitedTotal[i]);
  //     // console.log("here");

  //     let result = `${splitedTotal[i]}${/[-+*/]/}`;
  //     result += result;
  //     console.log(result);
  //   }
  // }

  // console.log(splitedTotal);
  // let symbol = '
  // ////////////////
});

//percent btn

btnPercent.addEventListener("click", (e) => {
  // console.log(e);

  // console.log(e.target.innerHTML);
  if (/[%]$/.test(fieldTotal.innerHTML)) {
    let modifiedTotal = fieldTotal.innerHTML.replace(
      /[%]$/,
      e.target.innerHTML
    );
    fieldTotal.innerHTML = modifiedTotal;
  } else if (/(?<=.)[%]/g.test(fieldTotal.innerHTML)) {
    ///////
    console.log(true);
  } else if (/[-+*/]$/.test(fieldTotal.innerHTML)) {
    fieldTotal.innerHTML += `0${e.target.innerHTML}`;
  } else {
    fieldTotal.innerHTML += btnPercent.innerHTML;
  }
});

//delete all btn

btnDeleteAll.addEventListener("click", () => {
  fieldTotal.innerHTML = localStorage.getItem("initialVal");
  localStorage.setItem("math-operation", 0);
  fieldHistory.classList.add("hidden");
  localStorage.setItem("equasion", 0);
});

//delete one char btn

btnDelOne.addEventListener("click", (e) => {
  let modifiedTotal;
  if (fieldTotal.innerHTML.length === 1) {
    modifiedTotal = fieldTotal.innerHTML.replace(/.$/, "0");
    fieldTotal.innerHTML = modifiedTotal;
  } else {
    modifiedTotal = fieldTotal.innerHTML.replace(/.$/, "");
    fieldTotal.innerHTML = modifiedTotal;
  }
});

//equal btn

equalBtn.addEventListener("click", () => {
  let prob;

  if (fieldTotal.innerHTML.includes("%")) {
    let equation = fieldTotal.innerHTML.split("%");
    for (let i = 0; i < equation.length; i++) {
      let oper = (prob = `${equation[i - 1]}*${equation[i]}/100`);
    }
  } else {
    prob = eval(fieldTotal.innerHTML);
  }

  localStorage.setItem("equasion", prob);
  if (localStorage.getItem("equasion").includes("NaN")) {
    localStorage.setItem(`equasion`, 0);
    alert("Operation can`t be done");
    localStorage.setItem("math-operation", 0);
    fieldHistory.classList.add("hidden");
    fieldTotal.innerHTML = localStorage.getItem("initialVal");
  } else {
    let stringToNum = eval(localStorage.getItem("equasion"));

    localStorage.setItem("math-operation", fieldTotal.innerHTML);
    let result = Number(stringToNum);

    fieldHistory.innerHTML = localStorage.getItem("math-operation");
    fieldHistory.classList.remove("hidden");
    fieldTotal.innerHTML = result;
  }
});

////////control mainfild length

// fieldTotal.addEventListener("change", () => {
//   console.log("working");

//   if (fieldTotal.innerHTML.length > 10) {
//     fieldTotal.classList.add("font-min");
//   } else {
//     fieldTotal.classList.remove("font-min");
//   }
// });

// function changeClass() {
//   // if (fieldTotal.innerHTML.length > 10) {
//   //   fieldTotal.classList.add("font-min");
//   // } else {
//   //   fieldTotal.classList.remove("font-min");

//   //   // fieldTotal.textContent = "red";
//   // }
//   fieldTotal.classList.toggle("font-min");
// }

// var config = { attributes: true, childList: true, subtree: true };

// var observer = new MutationObserver((list) => {
//   console.log(list[0].target.textContent);
//   if (list[0].target.textContent.length > 10) {
//     // fieldTotal.classList.add("font-min");
//   }
//   // changeClass();
// });

// observer.observe(fieldTotal, config);


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