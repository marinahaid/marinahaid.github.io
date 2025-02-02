"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var e = document.getElementById("form");
  function t(e) {
    e.parentElement.classList.add("error"), e.classList.add("error");
  }
  function n(e) {
    e.parentElement.classList.remove("error"), e.classList.remove("error");
  }
  function s(e) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value);
  }
  e.addEventListener("submit", async function (r) {
    r.preventDefault();
    var a = (function (e) {
      let r = 0,
        a = document.querySelectorAll(".req");
      for (let e = 0; e < a.length; e++) {
        const i = a[e];
        n(i),
          i.classList.contains("email")
            ? s(i) && (t(i), r++)
            : (("checkbox" === i.getAttribute("type") && !1 === i.checked) ||
                "" === i.value) &&
              (t(i), r++);
      }
      return r;
    })();
    let i = new FormData(e);
    if (0 === a) {
      e.classList.add("_sending");
      let t = await fetch("sendmail.php", { method: "POST", body: i });
      if (t.ok) {
        let n = await t.json();
        alert(n.message),
          (formPreview.innerHTML = ""),
          e.reset(),
          e.classList.remove("_sending");
      } else alert("Ошибка"), e.classList.remove("_sending");
    } else alert("Заполните обязательные поля");
  });
});

