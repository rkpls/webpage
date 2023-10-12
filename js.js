
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

function closedNav() {
    document.getElementById("sidebar").style.dispay = "none";
  }

function openedNav() {
    document.getElementById("sidebar").style.display = "block";
  }

