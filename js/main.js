'use strict';

var utils;
var isDeviceMobile;
//var arrayLanguajes = ["spa", "eng"];
//var currentLanguaje = arrayLanguajes[0];
var loadingAnimInterval;

var crtView = "loading";

window.onload = function() {
    utils = new PabrickUtils();
    utils.setDebug(true);
    BrowserDetect.init();
    isDeviceMobile = window.mobilecheck();

    utils.showDebug("log", "BrowserDetect.browser - " + BrowserDetect.browser);
    utils.showDebug("log", "MobileDevide = " + isDeviceMobile);

    document.getElementById("languajes-spa").onclick = function() { translateWebSite("spa") };
    document.getElementById("languajes-eng").onclick = function() { translateWebSite("eng") };

    loadView(crtView);
};

window.mobilecheck = function() {
    var check = false;
    (function(a, b) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function loadView(crtView) {
    switch (crtView) {
        case "loading":
            document.getElementById("loading-bastaky").innerHTML = '<span id="loading-B" class="loading-on">B</span><span id="loading-A" class="loading-on">A</span><span id="loading-S" class="loading-on">S</span><span id="loading-T" class="loading-on">T</span><span id="loading-A2" class="loading-on">A</span><span id="loading-K" class="loading-on">K</span><span id="loading-Y" class="loading-on">Y</span><span id="loading-P" class="loading-on">.</span><span id="loading-C" class="loading-on">C</span><span id="loading-O" class="loading-on">O</span><span id="loading-M" class="loading-on">M</span>';
            loadingAnimInterval = setInterval(playLoadingAnimation, 10000);
            break;
    }
}

function translateWebSite(lang) {
    if (lang === "spa") {
        document.getElementById("loading-prox").innerHTML = "Próximamente";
    } else {
        document.getElementById("loading-prox").innerHTML = "Coming soon";
    }
}

window.onresize = function() {}

window.onscroll = function() {}

function playLoadingAnimation() {
    console.log("oli");
    setTimeout(function() {
        glowBastaky("off", "off", "off", "off", "off", "off", "off", "off", "off", "off", "off");
    }, 2000);
    setTimeout(function() {
        glowBastaky("on", "on", "on", "on", "on", "off", "off", "off", "off", "off", "off");
    }, 2500);
    setTimeout(function() {
        glowBastaky("off", "off", "off", "off", "off", "off", "off", "off", "off", "off", "off");
    }, 3000);
    setTimeout(function() {
        glowBastaky("off", "on", "on", "on", "on", "off", "off", "off", "off", "off", "off");
    }, 3500);
    setTimeout(function() {
        glowBastaky("off", "off", "off", "off", "off", "off", "off", "off", "off", "off", "off");
    }, 4000);
    setTimeout(function() {
        glowBastaky("off", "off", "off", "off", "on", "on", "on", "off", "off", "off", "off");
    }, 4500);
    setTimeout(function() {
        glowBastaky("off", "off", "off", "off", "off", "off", "off", "off", "off", "off", "off");
    }, 5000);
    setTimeout(function() {
        glowBastaky("on", "on", "on", "on", "on", "on", "on", "on", "on", "on", "on");
    }, 5500);
}

function glowBastaky(l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11) {
    document.getElementById("loading-B").className = "loading-" + l1;
    document.getElementById("loading-A").className = "loading-" + l2;
    document.getElementById("loading-S").className = "loading-" + l3;
    document.getElementById("loading-T").className = "loading-" + l4;
    document.getElementById("loading-A2").className = "loading-" + l5;
    document.getElementById("loading-K").className = "loading-" + l6;
    document.getElementById("loading-Y").className = "loading-" + l7;
    document.getElementById("loading-P").className = "loading-" + l8;
    document.getElementById("loading-C").className = "loading-" + l9;
    document.getElementById("loading-O").className = "loading-" + l10;
    document.getElementById("loading-M").className = "loading-" + l11;
}