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
    } else if (/\.$/.test(fieldTotal.innerHTML)) {
      let modifiedTotal = fieldTotal.innerHTML.replace(/\.$/, "");
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

//delete all btn

btnDeleteAll.addEventListener("click", () => {
  fieldTotal.innerHTML = localStorage.getItem("initialVal");
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
