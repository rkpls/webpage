
const updateDateTime = () => {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' };
  const date = new Intl.DateTimeFormat(navigator.language, options).format(now);
  const time = now.toLocaleTimeString(navigator.language, { hour12: false, timeZone: 'Europe/Berlin' });
  document.getElementById('datetime').innerText = `${date}, ${time}`;
};

setInterval(updateDateTime, 1000);
updateDateTime();



const themeToggle = document.getElementById('theme-toggle');

const applyTheme = (isLightMode) => {
  if (isLightMode) {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }
};

const detectOSThemePreference = () => {
  const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
  const savedTheme = localStorage.getItem('isLightMode');

  if (savedTheme !== null) {
    applyTheme(JSON.parse(savedTheme));
    themeToggle.checked = JSON.parse(savedTheme);
  } else {
    applyTheme(prefersLightMode);
    themeToggle.checked = prefersLightMode;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  detectOSThemePreference();
});

themeToggle.addEventListener('change', () => {
  const isLightMode = themeToggle.checked;
  applyTheme(isLightMode);
  localStorage.setItem('isLightMode', JSON.stringify(isLightMode));
});



document.addEventListener('DOMContentLoaded', () => {
  const isLightMode = JSON.parse(localStorage.getItem('isLightMode')) || false;
  themeToggle.checked = isLightMode;
});

themeToggle.addEventListener('change', () => {
  const isLightMode = themeToggle.checked;
  applyTheme(isLightMode);
  localStorage.setItem('isLightMode', JSON.stringify(isLightMode)); 
});


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



setTimeout(() => {
  const privacyNotice = document.getElementById('privacy-notice');
  if (privacyNotice) {
    privacyNotice.style.opacity = '0';
    setTimeout(() => {
      privacyNotice.remove();
    }, 1000);
  }
}, 5000);
