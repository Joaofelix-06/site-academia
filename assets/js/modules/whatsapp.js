/* Monta os links de WhatsApp. Sem número válido, avisa em vez de fingir que funciona */
(function () {
  const num = (CONFIG.whatsapp || "").replace(/\D/g, "");
  const valid = num.length >= 12;
  const toast = document.getElementById("toast");
  let timer;

  $$("[data-wa]").forEach(a => {
    const msg = a.dataset.msg || CONFIG.defaultMessage;
    a.href = valid ? "https://wa.me/" + num + "?text=" + encodeURIComponent(msg) : "#contato";
    if (valid) { a.target = "_blank"; a.rel = "noopener"; return; }
    a.addEventListener("click", () => {
      toast.textContent = "WhatsApp ainda não configurado. Defina whatsapp em assets/js/config.js.";
      toast.classList.add("show");
      clearTimeout(timer);
      timer = setTimeout(() => toast.classList.remove("show"), 3500);
    });
  });
})();
