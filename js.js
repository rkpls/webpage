function googleSearch() {
    var cx = '014733843224484844763:tlxdtg2wgag';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }

function bingSearch() {
    id="bcs_js_snippet"
    src="https://ui.customsearch.ai/api/ux/rendering-js?customConfig=12bd9a66-1cb2-4d75-8d0e-a3d623dda59e&market=de-DE&version=latest&q="
}

if (!localStorage.getItem('cookiesAccepted')) {
    document.getlementById('cookie-banner').style.display = 'block';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'hidden';
}

