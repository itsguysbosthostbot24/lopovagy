setTimeout(function() {
    alert("Jónapot, ez a kód lopott ugy ahogy van (Védelem automatikusan bekapcsolva 2024.03.xx-én)");
}, 2000);

window.onload = function() {
    var celUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    var linkElem = document.getElementById("autoHrefLink");
    linkElem.href = celUrl;
}, 10000;

