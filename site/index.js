/* 
  =================================================

  Le reste du code permet de rendre le header dynamique et responsive

  =================================================
*/

const nav = document.querySelector("nav");
const toggleNavButton = document.getElementById("toggleNav");
const image = toggleNavButton.children.item(0);

let visible = false;

const lienRelatifMenu = "./assets/images/hamburger-menu.svg";
const lienRelatifClose = "./assets/images/close.svg";

function showNav() {
  nav.classList.remove("navHidden");
  image.src = lienRelatifClose;
  visible = true;
}

function hideNav() {
  nav.classList.add("navHidden");
  image.src = lienRelatifMenu;
  visible = false;
}

function toggleNav() {
  nav.classList.toggle("navHidden");
  if (visible) {
    image.src = lienRelatifMenu;
  } else {
    image.src = lienRelatifClose;
  }
  visible = !visible;
}

toggleNavButton.addEventListener("click", toggleNav);

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    hideNav();
  } else {
    showNav();
  }
});

if (window.innerWidth < 768) {
  hideNav();
}
