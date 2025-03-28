document.addEventListener('DOMContentLoaded', () => {
  // Datum & Uhrzeit initialisieren
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Sidebar öffnen/schließen
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('active');
    content.classList.toggle('shifted');

    // Icon ändern (☰ ↔ ✕)
    menuToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
  });

  // Klick außerhalb schließt Sidebar nur auf mobilen Geräten
  document.addEventListener('click', function (e) {
    const isMobile = window.innerWidth < 957;
    const clickedOutside = !sidebar.contains(e.target) && !menuToggle.contains(e.target);

    if (isMobile && clickedOutside) {
      sidebar.classList.remove('active');
      content.classList.remove('shifted');
      menuToggle.innerHTML = '&#9776;'; // Zurück zu ☰
    }
  });

  // Theme-Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const applyTheme = (isLightMode) => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  const savedTheme = localStorage.getItem('isLightMode');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const isLightMode = savedTheme !== null ? JSON.parse(savedTheme) : prefersLight;

  themeToggle.checked = isLightMode;
  applyTheme(isLightMode);

  themeToggle.addEventListener('change', () => {
    const isLight = themeToggle.checked;
    localStorage.setItem('isLightMode', JSON.stringify(isLight));
    applyTheme(isLight);
  });

  // Link-Übergang mit Fade
  const links = document.querySelectorAll('a');
  const fadeOverlay = document.getElementById('fade-overlay');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.target === "_blank" || link.href.startsWith("mailto:")) return;
      e.preventDefault();
      fadeOverlay.classList.add('active');
      setTimeout(() => {
        window.location.href = link.href;
      }, 100);
    });
  });

  // Datenschutz-Hinweis entfernen
  setTimeout(() => {
    const privacyNotice = document.getElementById('privacy-notice');
    if (privacyNotice) {
      privacyNotice.style.opacity = '0';
      setTimeout(() => {
        privacyNotice.remove();
      }, 1000);
    }
  }, 5000);

  // Collapsibles
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const symbol = header.querySelector(".symbol");
      if (content.classList.contains("open")) {
        content.style.height = "0vh";
        content.style.overflowY = "scroll";
        content.classList.remove("open");
        symbol.textContent = "+";
        header.classList.remove("active");
      } else {
        content.style.height = content.scrollHeight + "px";
        content.style.overflowY = "hidden";
        content.classList.add("open");
        symbol.textContent = "-";
        header.classList.add("active");
      }
    });
  });

  // Dynamisches Padding für #page-title bei kleiner Bildschirmbreite
  function adjustPageTitlePadding() {
    const pageTitle = document.getElementById('page-title');
    if (!pageTitle) return;

    if (window.innerWidth < 957) {
      pageTitle.style.paddingLeft = '64px';
    } else {
      pageTitle.style.paddingLeft = '224px';
    }
  }

  // Initial aufrufen
  adjustPageTitlePadding();

  // Auch bei Fenstergröße-Änderung
  window.addEventListener('resize', adjustPageTitlePadding);
});

// Hilfsfunktion für Datum & Uhrzeit
function updateDateTime() {
  const now = new Date();
  const datetimeElement = document.getElementById('datetime');
  if (datetimeElement) {
    const dateString = now.toLocaleDateString('de-DE');
    const timeString = now.toLocaleTimeString('de-DE');
    datetimeElement.textContent = `${dateString} – ${timeString}`;
  }
}
