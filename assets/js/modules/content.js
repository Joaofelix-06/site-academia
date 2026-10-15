/* Aplica o CONFIG ao conteúdo: marca, cor, textos, imagens e seções ocultas */
(function () {
  document.documentElement.style.setProperty("--accent", CONFIG.accent);
  $$("[data-brand]").forEach(e => (e.textContent = CONFIG.brand));
  $$("[data-cfg]").forEach(e => (e.textContent = CONFIG[e.dataset.cfg] || e.textContent));
  document.title = CONFIG.brand + " | Academia e treinamento personalizado";
  document.getElementById("topbar").textContent = CONFIG.topbar;

  const hide = [...CONFIG.hide];
  if (!CONFIG.topbar) hide.push("topbar");
  hide.forEach(k => $$('[data-section="' + k + '"]').forEach(e => (e.hidden = true)));

  $$("[data-img]").forEach(e => {
    const url = CONFIG.images[e.dataset.img];
    if (url) { e.style.backgroundImage = "url('" + url + "')"; e.classList.add("has-img"); }
  });

  document.getElementById("yr").textContent = new Date().getFullYear();

  const link = (id, url, text) => {
    if (!url) return;
    document.getElementById(id).outerHTML = '<a href="' + url + '" target="_blank" rel="noopener">' + text + "</a>";
  };
  link("ig", CONFIG.instagram, "Abrir Instagram");
  link("em", CONFIG.email && "mailto:" + CONFIG.email, CONFIG.email);
  link("mp", CONFIG.mapUrl, "Abrir no mapa");
})();
