const numBtns = document.querySelectorAll(".js-btn-num");
const operantBtns = document.querySelectorAll(".js-btn-operant");
// const funcBtns = document.querySelectorAll(".js-btn-func");

const fieldTotal = document.querySelector(".calc__total");
const fieldHistory = document.querySelector(".calc__history");

const btnDelOne = document.querySelector(".js-btn-del-last");
const btnPercent = document.querySelector(".js-btn-percent");
const btnDeleteAll = document.querySelector(".js-btn-delete");

const equalBtn = document.querySelector("#js-equal");

class Calculator {
  constructor(fieldTotal, fieldHistory) {
    this.fieldHistory = fieldHistory;
    this.fieldTotal = fieldTotal;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}

// numBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     fieldTotal.innerHTML += btn.innerHTML;
//   });
// });

// operantBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     fieldTotal.innerHTML !== "" && (fieldTotal.innerHTML += btn.innerHTML);
//   });
// });

// btnDeleteAll.addEventListener("click", () => {
//   fieldTotal.innerHTML = "";
// });

// equalBtn.addEventListener("click", () => {});
