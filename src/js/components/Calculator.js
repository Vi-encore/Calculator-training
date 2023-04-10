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

let checker = false;

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
    checker = false;

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
  if (checker === false) {
    if (/\.$/.test(fieldTotal.innerHTML)) {
      let modifiedTotal = fieldTotal.innerHTML.replace(
        /\.$/,
        e.target.innerHTML
      );

      fieldTotal.innerHTML = modifiedTotal;
    } else if (/[-+*/]$/.test(fieldTotal.innerHTML)) {
      fieldTotal.innerHTML += `0${e.target.innerHTML}`;
    } else {
      fieldTotal.innerHTML += pointBtn.innerHTML;
    }
    console.log("can point");

    checker = true;
  } else {
    fieldTotal.innerHTML += "";
    console.log("cannot point");
  }
});

//percent btn

btnPercent.addEventListener("click", (e) => {
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
  checker = false;
  fieldTotal.innerHTML = localStorage.getItem("initialVal");
  localStorage.setItem("math-operation", 0);
  fieldHistory.classList.add("hidden");
  localStorage.setItem("equasion", 0);
});

//delete one char btn

btnDelOne.addEventListener("click", (e) => {
  let modifiedTotal;

  if (fieldTotal.innerHTML.length === 1) {
    checker = false;
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
    let result;

    if (localStorage.getItem("equasion").length > 6) {
      result = Number(stringToNum).toFixed(4);
    } else {
      result = Number(stringToNum);
    }

    localStorage.setItem("math-operation", fieldTotal.innerHTML);

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
