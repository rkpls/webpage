// Update DateTime
const updateDateTime = () => {
  const now = new Date();
  // Format the date dynamically based on the user's locale
  const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' };
  const date = new Intl.DateTimeFormat(navigator.language, options).format(now);
  // Format the time in 24-hour format dynamically
  const time = now.toLocaleTimeString(navigator.language, { hour12: false, timeZone: 'Europe/Berlin' });
  // Combine formatted date and time
  document.getElementById('datetime').innerText = `${date}, ${time}`;
};

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();
  
// Theme Switcher with Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});
  