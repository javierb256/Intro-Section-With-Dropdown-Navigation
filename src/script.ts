const rightNavMobile = document.querySelector<HTMLDivElement>(".right-nav-mobile")!;
const navbar = document.querySelector<HTMLElement>("nav")!;
const overlay = document.querySelector<HTMLDivElement>(".overlay")!;
const closeOverlay = document.querySelector<HTMLDListElement>(".close-overlay")!;

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