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
