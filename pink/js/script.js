var navMain = document.querySelector(".main-nav")
    , navToggle = document.querySelector(".main-nav__toggle")
    , formMain = document.querySelector(".main-form__appointment-form")
    , requireEls = document.querySelectorAll(".require");
navMain.classList.remove("main-nav--nojs"), navToggle.addEventListener("click", function() {
    navMain.classList.contains("main-nav--closed") ? (navMain.classList.remove("main-nav--closed"), navMain.classList.add("main-nav--opened")) : (navMain.classList.add("main-nav--closed"), navMain.classList.remove("main-nav--opened"))
});
var slider_cyrcle = document.querySelectorAll(".slider-cyrcle");
if (slider_cyrcle) {
    slider_cyrcle.forEach(function(e, t) {
        e.addEventListener("click", function(e) {
            e.preventDefault(), document.querySelector(".more__wrap--active").classList.remove("more__wrap--active");
            var t = this.dataset.slide;
            document.querySelector("." + t).classList.add("more__wrap--active"), document.querySelector(".slider-cyrcle--active").classList.remove("slider-cyrcle--active"), this.classList.add("slider-cyrcle--active")
        })
    });
    var more_arrows = document.querySelectorAll(".more__arrow");
    if (more_arrows) {
        var more_wrap = document.querySelectorAll(".more__wrap");
        more_arrows.forEach(function(e, t) {
            e.addEventListener("click", function(e) {
                e.preventDefault();
                var t = document.querySelector(".more__wrap--active")
                    , l = this.dataset.direction
                    , i = 1 * t.dataset.number;
                "r" === l ? i >= more_wrap.length ? i = 1 : i++ : i <= 1 ? i = more_wrap.length : i--, t.classList.remove("more__wrap--active"), document.querySelector(".more-" + i).classList.add("more__wrap--active"), document.querySelector(".slider-cyrcle--active").classList.remove("slider-cyrcle--active"), document.querySelector(".slider-cyrcle-" + i).classList.add("slider-cyrcle--active")
            })
        })
    }
}
var tariff_items = document.querySelectorAll(".tariff-item");
if (bullits = document.querySelectorAll(".bullits__item")) {
    var bullit_list = document.querySelector(".bullits");
    bullits.forEach(function(e, t) {
        e.remove()
    })
}
var bullits;
tariff_items = document.querySelectorAll(".tariff-item");
if (bullits = document.querySelectorAll(".bullits__item")) {
    bullit_list = document.querySelector(".bullits");
    bullits.forEach(function(e, t) {
        e.remove()
    });
    var tariff = document.querySelector(".tariff");
    tariff_items.forEach(function(e, t) {
        var l = '<li class="bullits__item"><a href="#" class="bullits__link" data-tariff="' + t + '"><span class="visually-hidden">страница ' + t + "</span></a></li>";
        bullit_list.insertAdjacentHTML("beforeend", l)
    }), (bullits = document.querySelectorAll(".bullits__item > .bullits__link")) && (bullits.forEach(function(l, e) {
        0 == e && l.classList.add("bullits__link--active"), l.addEventListener("click", function(e) {
            e.preventDefault();
            var t = document.querySelector(".bullits__link--active");
            t && t.classList.remove("bullits__link--active"), l.classList.add("bullits__link--active"), tariff.style.marginLeft = "-" + (l.dataset.tariff * (document.documentElement.clientWidth - 20 - 22) + (document.documentElement.clientWidth - 20 - 22) / 2) + "px"
        })
    }), tariff && window.addEventListener("resize", function() {
        if (document.documentElement.clientWidth < 650) {
            var e = document.querySelector(".bullits__link--active");
            tariff.style.marginLeft = "-" + (e.dataset.tariff * (document.documentElement.clientWidth - 20 - 22) + (document.documentElement.clientWidth - 20 - 22) / 2) + "px"
        } else tariff.style.marginLeft = "0px"
    }))
}
