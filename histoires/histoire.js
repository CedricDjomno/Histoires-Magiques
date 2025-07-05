// 🌙 Bascule le mode nuit
document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.getElementById("toggle-mode");
  if (bouton) {
    bouton.addEventListener("click", () => {
      document.body.classList.toggle("nuit");
    });
  }

  // 🎙️ Lecture à la demande
  const btnLecture = document.getElementById("btn-lecture");
  if (btnLecture) {
    btnLecture.addEventListener("click", () => {
      const texte = document.getElementById("histoire").textContent;
      const voix = new SpeechSynthesisUtterance(texte);
      voix.lang = "fr-FR";
      voix.rate = 1.02;
      voix.pitch = 1;
      speechSynthesis.speak(voix);
    });
  }
});