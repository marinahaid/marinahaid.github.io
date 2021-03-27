"use strict";
var navMain = document.querySelector(".main-nav"),
  navToggle = document.querySelector(".main-nav__toggle"),
  formMain = document.querySelector(".form__appointment"),
  requireEls = document.querySelectorAll(".require");
navMain.classList.remove("main-nav--nojs"),
  navToggle.addEventListener("click", function () {
    navMain.classList.contains("main-nav--closed")
      ? (navMain.classList.remove("main-nav--closed"),
        navMain.classList.add("main-nav--opened"))
      : (navMain.classList.add("main-nav--closed"),
        navMain.classList.remove("main-nav--opened"));
  });
var slider = document.querySelectorAll(".more__link");
slider &&
  slider.forEach(function (e, n) {
    e.addEventListener("click", function (e) {
      e.preventDefault(),
        document
          .querySelector(".more__item--active")
          .classList.remove("more__item--active");
      var n = this.dataset.slide;
      document.querySelector("." + n).classList.add("more__item--active"),
        document
          .querySelector(".more__link--active")
          .classList.remove("more__link--active"),
        this.classList.add("more__link--active");
    });
  });
var link = document.querySelector(".more__button"),
  popup = document.querySelector(".form-popup"),
  close = popup.querySelector(".close-popup");
link.addEventListener("click", function (e) {
  e.preventDefault(), popup.classList.add("modal-show");
}),
  close.addEventListener("click", function (e) {
    e.preventDefault(), popup.classList.remove("modal-show");
  });
