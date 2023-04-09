// const { Logger } = require("sass");

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
  fieldTotal.innerHTML = localStorage.getItem("initialVal");
  fieldHistory.classList.add("hidden");
});

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

operantBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (/[-+*/]$/.test(fieldTotal.innerHTML)) {
      let modifiedTotal = fieldTotal.innerHTML.replace(
        /[-+*/]$/,
        e.target.innerHTML
      );
      fieldTotal.innerHTML = modifiedTotal;
    } else {
      fieldTotal.innerHTML += btn.innerHTML;
    }
  });
});

// pointBtn.addEventListener("click", (e) => {
//   if (/\.$/.test(fieldTotal.innerHTML)) {
//     console.log(fieldTotal.innerHTML);
//     let modifiedTotal = fieldTotal.innerHTML.replace(/\.$/, e.target.innerHTML);

//     fieldTotal.innerHTML = modifiedTotal;
//   } else if (/[-+*/]$/.test(fieldTotal.innerHTML)) {
//     fieldTotal.innerHTML += "";
//   } else {
//     fieldTotal.innerHTML += pointBtn.innerHTML;
//   }
// });

btnDeleteAll.addEventListener("click", () => {
  fieldTotal.innerHTML = localStorage.getItem("initialVal");
});
