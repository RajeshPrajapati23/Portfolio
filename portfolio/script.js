let close1 = document.querySelector(".close")
let sideNav = document.querySelector(".side1")
let menuIcon = document.querySelector(".menu-sec")

menuIcon.addEventListener("click", function () {
   sideNav.classList.toggle("goside")
   if (sideNav.classList.contains("goside")) {
      close1.getElementsByClassName.display = "none"
   } else {
      menuIcon.style.display = "none"

   };
})
close1.addEventListener("click", function () {
   sideNav.classList.add('goside');
   menuIcon.style.display = "inline"
})


