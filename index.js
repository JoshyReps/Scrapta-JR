function openBurgerNav() {
    document.querySelector(".hamburger-nav").classList.remove("hidden");
}

function hButton () {
    document.querySelector(".hamburger-nav").classList.add("hidden");
}

const navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-bar-scrolled");
        navbar.classList.remove("nav-bar-top");
    } else {
        navbar.classList.add("nav-bar-top");
        navbar.classList.remove("nav-bar-scrolled");
    }
});

