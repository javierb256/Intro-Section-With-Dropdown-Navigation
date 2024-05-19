var rightNavMobile = document.querySelector(".right-nav-mobile");
var navbar = document.querySelector("nav");
var overlay = document.querySelector(".overlay");
var closeOverlay = document.querySelector(".close-overlay");
var overlayMenuCompany = document.querySelector("#overlay-menu-company");
var pulldownMenu1 = document.getElementById("pulldown1");
var pulldownMenu2 = document.getElementById("pulldown2");
var submenu1 = document.getElementById("submenu1");
var submenu2 = document.getElementById("submenu2");
rightNavMobile.addEventListener("click", function () {
    overlay.classList.toggle("active");
});
closeOverlay.addEventListener("click", function () {
    overlay.classList.toggle("active");
});
pulldownMenu1.addEventListener("click", function () {
    submenu1.classList.toggle("submenuActive");
});
pulldownMenu2.addEventListener("click", function () {
    submenu2.classList.toggle("submenuActive");
});
