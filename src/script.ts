const rightNavMobile = document.querySelector<HTMLDivElement>(".right-nav-mobile")!;
const navbar = document.querySelector<HTMLElement>("nav")!;
const overlay = document.querySelector<HTMLDivElement>(".overlay")!;
const closeOverlay = document.querySelector<HTMLDListElement>(".close-overlay")!;
// const overlayMenuFeaturesSubmenu = document.querySelector<HTMLLIElement>("#overlay-menu-features-submenu")!;
const overlayMenuCompany = document.querySelector<HTMLLIElement>("#overlay-menu-company")!;
const pulldownMenu1 = document.getElementById("pulldown1")!;
const pulldownMenu2 = document.getElementById("pulldown2")!;
const submenu1 = document.getElementById("submenu1")!;
const submenu2 = document.getElementById("submenu2")!;

rightNavMobile.addEventListener("click", ()=> {
    // navbar.style.height = "100vh"
    // navbar.style.position = "absolute"
    // overlay.style.display = "block"
    overlay.classList.toggle("active")
    // alert("chil")
   
})

closeOverlay.addEventListener("click", ()=> {
    overlay.classList.toggle("active");
})

pulldownMenu1.addEventListener("click", ()=> {
    submenu1.classList.toggle("submenuActive");
})

pulldownMenu2.addEventListener("click", ()=> {
    submenu2.classList.toggle("submenuActive")
})