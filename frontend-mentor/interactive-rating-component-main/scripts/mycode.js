"use strict";

function toggleSwitchButton() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    /*for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("active");
          buttons.forEach((button) => {});
        }*/
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    this.classList.toggle("active");
  }
}
/*const buttons = document.getElementsByClassName("btn--number");*/
const buttons = document.querySelectorAll(".btn--number");
const submitbtn = document.querySelector(".btn--submit");
const frontCard = document.querySelector(".card-front");
const backCard = document.querySelector(".card-back");
const choiceText = document.querySelector(".rating");
console.log(choiceText.textContent);
let activeIndex = 0;
/*for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      buttons1.forEach((button) => {
        button.classList.remove("active");
      });
      this.classList.toggle("active");
    }
  });
}
*/
/*
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleSwitchButton);
} */

buttons.forEach((button) => {
  button.addEventListener("click", toggleSwitchButton);
});

submitbtn.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("active")) {
      console.log(i + 1);

      choiceText.textContent = i + 1;
      frontCard.classList.add("vanish");
    }
  }
});
