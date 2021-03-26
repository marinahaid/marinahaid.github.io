!(function () {
  var e = document.querySelector(".main-nav"),
    n = document.querySelector(".main-nav__toggle");
  e &&
    (e.classList.remove("main-nav--nojs"),
    n.addEventListener("click", function () {
      e.classList.contains("main-nav--closed")
        ? (e.classList.remove("main-nav--closed"),
          e.classList.add("main-nav--opened"))
        : (e.classList.add("main-nav--closed"),
          e.classList.remove("main-nav--opened"));
    }));
})(),
  (function () {
    const e = document.querySelectorAll(".slider .slider-line img"),
      n = document.querySelector(".slider-line");
    let t,
      i = 0;
    function s() {
      (t = document.querySelector(".slider").offsetWidth),
        (n.style.width = t * e.length + "px"),
        e.forEach((e) => {
          (e.style.width = t + "px"), (e.style.height = "auto");
        }),
        c();
    }
    function c() {
      n.style.transform = "translate(-" + i * t + "px)";
    }
    s(),
      window.addEventListener("resize", s),
      document
        .querySelector(".slider-next")
        .addEventListener("click", function () {
          i++, i >= e.length && (i = 0), c();
        }),
      document
        .querySelector(".slider-prev")
        .addEventListener("click", function () {
          i--, i < 0 && (i = e.length - 1), c();
        });
  })();

