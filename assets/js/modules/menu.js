/* Menu mobile acessível: botão, clique em link e tecla Esc */
(function () {
  const btn = document.querySelector(".burger");
  const menu = document.getElementById("menu");
  const set = open => {
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  btn.addEventListener("click", () => set(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("open")) { set(false); btn.focus(); }
  });
})();
