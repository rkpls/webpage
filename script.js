
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

document.addEventListener('DOMContentLoaded', () => {
  const isLightMode = JSON.parse(localStorage.getItem('isLightMode')) || false;
  themeToggle.checked = isLightMode;
});

themeToggle.addEventListener('change', () => {
  const isLightMode = themeToggle.checked;
  applyTheme(isLightMode);
  localStorage.setItem('isLightMode', JSON.stringify(isLightMode)); 
});
  