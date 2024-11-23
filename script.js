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
  
// Select the theme toggle input
const themeToggle = document.getElementById('theme-toggle');

// Function to apply the theme
const applyTheme = (isLightMode) => {
  if (isLightMode) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
};

// Load the saved theme from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const isLightMode = JSON.parse(localStorage.getItem('isLightMode')) || false; // Default to false (dark mode)
  applyTheme(isLightMode);
  themeToggle.checked = isLightMode; // Ensure toggle reflects the current theme
});

// Add event listener to toggle switch
themeToggle.addEventListener('change', () => {
  const isLightMode = themeToggle.checked;
  applyTheme(isLightMode);
  localStorage.setItem('isLightMode', JSON.stringify(isLightMode)); // Save the current theme
});
  