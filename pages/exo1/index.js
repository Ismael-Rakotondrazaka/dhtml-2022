/**
 * Fonction qui résout l"équation du second degré
 */
function resoudre() {
  // Prise des valeurs de A, B et C
  const A = +document.getElementById("A").value;
  const B = +document.getElementById("B").value;
  const C = +document.getElementById("C").value;

  // Calcul de delta
  const delta = Math.pow(B, 2) - 4 * A * C || 1;

  // Prise des solutions dans le DOM
  const solution1 = document.getElementById("solution1");
  const solution2 = document.getElementById("solution2");

  if (delta > 0) {
    // On a deux solutions réelles
    const racineDelta = Math.sqrt(delta);
    const x1 = (-B - racineDelta) / (2 * A);
    const x2 = (-B + racineDelta) / (2 * A);

    solution1.innerHTML = x1;
    solution2.innerHTML = x2;
  } else if (delta === 0) {
    // On a une solution réelle unique
    const x = -B / (2 * A);
    solution1.innerHTML = x;
    solution2.innerHTML = x;
  } else {
    // On a pas de solutions réelles
    solution1.innerHTML = "Pas de solutions réelles";
    solution2.innerHTML = "Pas de solutions réelles";
  }
}

// Ajout d’évènement click au bouton résoudre
const boutonResoudre = document.getElementById("boutonResoudre");
boutonResoudre.addEventListener("click", resoudre);

/* 
  =================================================

  Le reste du code permet de rendre le header dynamique et responsive

  =================================================
*/

const nav = document.querySelector("nav");
const toggleNavButton = document.getElementById("toggleNav");
const image = toggleNavButton.children.item(0);

let visible = false;

const lienRelatifMenu = "../../assets/images/hamburger-menu.svg";
const lienRelatifClose = "../../assets/images/close.svg";

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
