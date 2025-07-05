window.addEventListener("load", () => {
  const left = document.querySelector(".page-left");
  const right = document.querySelector(".page-right");
  const intro = document.getElementById("intro-cover");
  const content = document.getElementById("content");

  // Lancement de l’animation
  setTimeout(() => {
    left.style.transform = "translateX(-100%) rotateY(60deg)";
    right.style.transform = "translateX(100%) rotateY(-60deg)";
  }, 100);

  // Affichage du contenu après animation
  setTimeout(() => {
    intro.style.display = "none";
    content.style.display = "block";
  }, 1100);
});

// 🌙 Mode nuit toggle
document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.getElementById("toggle-mode");
  bouton.addEventListener("click", () => {
    document.body.classList.toggle("nuit");
  });
});
