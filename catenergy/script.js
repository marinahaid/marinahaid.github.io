var navMain = document.querySelector(".main-nav"),
    navToggle = document.querySelector(".main-nav__toggle"),
    formMain = document.querySelector(".main-form__appointment-form"),
    requireEls = document.querySelectorAll(".require");
navMain.classList.remove("main-nav--nojs"), navToggle.addEventListener("click", function() {
    navMain.classList.contains("main-nav--closed") ? (navMain.classList.remove("main-nav--closed"), navMain.classList.add("main-nav--opened")) : (navMain.classList.add("main-nav--closed"), navMain.classList.remove("main-nav--opened"))
}), formMain.addEventListener("submit", function(a) {
    requireEls && requireEls.forEach(function(n) {
        n.value || (a.preventDefault(), n.classList.add("error"))
    })
});
