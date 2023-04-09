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
