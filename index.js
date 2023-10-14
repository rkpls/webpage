

function googleSearch(gSearch) {
    getlementById.g_search()
    let gSearchLink = 'https://www.google.com/search?q=' ;
    googleSearchInput = null;
}

function bingSearch(bSearch) {
    getElementById.b_search()
    let bSearchLink = 'https://www.bing.com/search?q=' ;
    bingSearchInput = null;
}



function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'hidden';
}

if (!localStorage.getItem('cookiesAccepted')) {
    document.getlementById('cookie-banner').style.display = 'block';
}


