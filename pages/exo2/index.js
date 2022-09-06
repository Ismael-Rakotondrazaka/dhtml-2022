/**
 * Fonction qui résout l"équation du second degré
 */
function resoudre() {
    // Prise des valeurs des constantes
    const A11 = +document.getElementById("A11").value;
    const A12 = +document.getElementById("A12").value;
    const A13 = +document.getElementById("A13").value;
    const A21 = +document.getElementById("A21").value;
    const A22 = +document.getElementById("A22").value;
    const A23 = +document.getElementById("A23").value;
    const A31 = +document.getElementById("A31").value;
    const A32 = +document.getElementById("A32").value;
    const A33 = +document.getElementById("A33").value;

    const B1 = +document.getElementById("B1").value;
    const B2 = +document.getElementById("B2").value;
    const B3 = +document.getElementById("B3").value;

    // Prise des solutions au DOM
    const solution1 = document.getElementById("solution1");
    const solution2 = document.getElementById("solution2");
    const solution3 = document.getElementById("solution3");

    // Calcul de determinant
    const det = A11 * (A22 * A33 - A32 * A23) - A12 * (A21 * A33 - A31 * A23) + A13 * (A21 * A32 - A31 * A22);

    if (det === 0) {
        // Pas de solution réelles
        solution1.innerHTML = "Pas de solutions réelles";
        solution2.innerHTML = "Pas de solutions réelles";
        solution3.innerHTML = "Pas de solutions réelles";
    } else {
        // Solution unique

        // Calcul des déterminants
        const detX1 = B1 * (A22 * A33 - A32 * A23) - A12 * (B2 * A33 - B3 * A23) + A13 * (B2 * A32 - B3 * A22);
        const detX2 = A11 * (B2 * A33 - B3 * A23) - B1 * (A21 * A33 - A31 * A23) + A13 * (A21 * B3 - A31 * B2);
        const detX3 = A11 * (A22 * B3 - B2 * A32) - A12 * (A21 * B3 - A31 * B2) + B1 * (A21 * A32 - A31 * A22);

        const X1 = detX1 / det;
        const X2 = detX2 / det;
        const X3 = detX3 / det;

        solution1.innerHTML = X1;
        solution2.innerHTML = X2;
        solution3.innerHTML = X3;
    }
}

// Ajout d’évènement click au bouton résoudre
const boutonResoudre = document.getElementById("boutonResoudre");
boutonResoudre.addEventListener("click", resoudre);