const nav = document.querySelector("nav");
const toggleNavButton = document.getElementById("toggleNav");
const image = toggleNavButton.children.item(0);

let visible = false;

function showNav() {
  nav.classList.remove("navHidden");
  image.src = "/assets/images/close.svg";
  visible = true;
}

function hideNav() {
  nav.classList.add("navHidden");
  image.src = "/assets/images/hamburger-menu.svg";
  visible = false;
}

function toggleNav() {
  nav.classList.toggle("navHidden");
  if (visible) {
    image.src = "/assets/images/hamburger-menu.svg";
  } else {
    image.src = "/assets/images/close.svg";
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
