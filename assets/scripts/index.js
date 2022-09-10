const toggleCode = document.getElementById("toggle-code");
const codeEtape = document.getElementById("code-etape");

let codeVisible = false;

function toggle() {
  codeVisible = !codeVisible;
  codeEtape.classList.toggle("hidden");
  toggleCode.innerHTML = codeVisible
    ? "Masquer le code et les étapes"
    : "Afficher le code et les étapes";
}

toggleCode.addEventListener("click", toggle);
