function resoudre() {
  const R1 = +document.getElementById("R1").value;
  const R2 = +document.getElementById("R2").value;
  const R3 = +document.getElementById("R3").value;
  const R4 = +document.getElementById("R4").value;
  const UDA = +document.getElementById("UDA").value;

  /** Accès des solutions venant du DOM */
  const element_I1 = document.getElementById("I1");
  const element_I2 = document.getElementById("I2");
  const element_I3 = document.getElementById("I3");
  const element_U1 = document.getElementById("U1");
  const element_U2 = document.getElementById("U2");
  const element_U3 = document.getElementById("U3");

  const I2 = UDA / ((R1 + R4) * (R2 / R3) + R1 + R2 + R4);
  const I3 = (R2 * I2) / R3;
  const I1 = I2 + I3;

  const U1 = R1 * I1;
  const U2 = R2 * I2;
  const U3 = R4 * I1;

  // mise à jour des solutions
  element_I1.innerHTML = I1;
  element_I2.innerHTML = I2;
  element_I3.innerHTML = I3;
  element_U1.innerHTML = U1;
  element_U2.innerHTML = U2;
  element_U3.innerHTML = U3;
}

// Ajout d’évènement click au bouton résoudre
const boutonResoudre = document.getElementById("boutonResoudre");
boutonResoudre.addEventListener("click", resoudre);
