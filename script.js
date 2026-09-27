(() => {
  "use strict";

  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const menu = document.querySelector(".menu");
  const links = document.querySelector(".links");

  if (menu && links) {
    menu.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(isOpen));
      menu.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-label", "Open navigation");
      });
    });
  }
})();
