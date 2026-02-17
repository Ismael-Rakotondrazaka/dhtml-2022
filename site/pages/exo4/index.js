/** Données utilisées */
const data = [
  {
    description: "Ecole Nationale d'Informatique",
    url: "../../assets/images/logo-eni.png",
  },
  {
    description: "Association des Eleves de l'Ecole Nationale d'Informatique",
    url: "../../assets/images/logo-aeeni.png",
  },
  {
    description: "Club d'Entraide de l'ENI",
    url: "../../assets/images/logo-c2e.png",
  },
  {
    description: "Club de Linux et des Logiciels Libres de Fianarantsoa",
    url: "../../assets/images/logo-c3lf.jpg",
  },
  {
    description: "ENI Cybersecurity",
    url: "../../assets/images/logo-cybersecurity.jpg",
  },
  {
    description: "ENI Multimedia",
    url: "../../assets/images/logo-multimedia.jpg",
  },
];

// itérateur pour itérer dans data
let i = 1;

// Prise des elements dans le DOM
const ecran = document.getElementById("ecran");
const images = ecran.children;
const description = document.getElementById("description");

/**
 * Cette fonction change l'image suivant quelques étapes
 * - on crée d'abord l'élément img HTML qui doit être affiché
 * - on l'introduit dans le DOM mais dans derrière l'image qui est affichée
 * - puis, on ajoute une class 'leave' à l'image affichée,
 *   cette classe permet d’ajouter une animation de sortie,
 *   laissant place à l'image suivante à afficher
 * - enfin, on retire cet élément du DOM,
 */
function changerImage() {
  const imageSuivant = document.createElement("img");
  imageSuivant.src = data[i].url;

  ecran.appendChild(imageSuivant);
  description.innerHTML = data[i].description;
  images.item(0).classList.add("leave");

  if (i === data.length - 1) {
    i = 0;
  } else {
    i++;
  }

  setTimeout(function () {
    ecran.removeChild(images.item(0));
    ecran.children.item(0).classList.add("top");
  }, 3000);
}

// On change l'image toutes les 4000 secondes
setInterval(changerImage, 4000);

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
