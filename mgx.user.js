// ==UserScript==
// @name        octopuss
// @description  MGX
// @version      0.1
// @author       zz
// @match        http://agar.io/
// @match        https://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      glitch.me
// @updateURL    http://octooo.glitch.me/index.html?v=
// ==/UserScript==

if (location.host === "agar.io" && location.href !== "https://agar.io/MGx") {
    location.href = "https://agar.io/MGx";
    return;

};

GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://octooo.glitch.me/index.html?v=' + Math.random(),
    onload: function(data) {
        document.open();
        document.write(data.responseText);
        document.close();
window.addEventListener("load", function(event) {
grecaptcha.render("captchaWindowV3", {
        sitekey: "6LcEt74UAAAAAIc_T6dWpsRufGCvvau5Fd7_G1tY",
        badge: "inline",
        size: "invisible"
    });
});
}


});
