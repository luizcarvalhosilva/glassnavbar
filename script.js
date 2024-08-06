const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector("#navBar");
const navBg = document.querySelector(".nav-bg");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
    navBg.classList.toggle("active");
});