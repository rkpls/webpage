
let googleSearchInput;
let bingSearchInput;

function googleSearch() {
    let gSearch = 'https://www.google.com/search?q=' ;
    googleSearchInput = null;
}

function bingSearch() {
    let bSearch = 'https://www.bing.com/search?q=' ;
    bingSearchInput = null;
}


if (!localStorage.getItem('cookiesAccepted')) {
    document.getlementById('cookie-banner').style.display = 'block';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'hidden';
}

