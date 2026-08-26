(() => {
  const number = (window.SITE_CONFIG?.whatsapp || "").replace(/\D/g, "");

  document.querySelectorAll(".js-whats").forEach(btn => {
    const pack = btn.dataset.package || "Ensaio corporativo";
    const text = encodeURIComponent(
      `Olá! Vi o orçamento de ensaio corporativo da JL Fotografia e gostaria de informações sobre: ${pack}.`
    );

    btn.addEventListener("click", e => {
      if (!number) {
        e.preventDefault();
        alert("Configure o número do WhatsApp no arquivo config.js para ativar este botão.");
        return;
      }
      window.open(`https://wa.me/${number}?text=${text}`, "_blank", "noopener");
    });
  });

  const video = document.getElementById("gVideo");
  const fallback = document.getElementById("videoFallback");
  const soundToggle = document.getElementById("soundToggle");

  if (video && fallback) {
    const showFallback = () => {
      video.style.display = "none";
      fallback.classList.add("visible");
      if (soundToggle) soundToggle.style.display = "none";
    };

    video.addEventListener("error", showFallback);

    const source = video.querySelector("source");
    if (source) source.addEventListener("error", showFallback);

    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        video.muted = !video.muted;
        soundToggle.textContent = video.muted ? "🔇" : "🔊";
      });
    }
  }
})();
