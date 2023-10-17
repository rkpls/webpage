if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    darkMode();
}
else{
    lightMode();
}
function lightMode() {
    var element = document.body;
    var element = document.div;
    element.classList.toggle("lightMode");
}
function darkMode() {
    var element = document.body;
    var element = document.div;
    element.classList.set("darkMode");
}