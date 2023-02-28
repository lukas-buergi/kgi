// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', );


/*if (window.innerWidth > 980) {

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos + 10 > currentScrollPos && prevScrollpos != currentScrollPos ) {
        document.getElementById("main-head-menu").style.top = "0";
    } else {
        document.getElementById("main-head-menu").style.top = "-100px";
    }
    if (window.pageYOffset > 10) {
        document.getElementById("main-head-menu").classList.add("menu-bg")
    }
    else {
        document.getElementById("main-head-menu").classList.remove("menu-bg")
    }
    setTimeout(function(){
        prevScrollpos = currentScrollPos;
        }, 800)
}
} else {
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos + 10 > currentScrollPos && prevScrollpos != currentScrollPos ) {
        document.getElementById("mobile-head-menu").style.top = "0";
    } else {
        document.getElementById("mobile-head-menu").style.top = "-100px";
    }
    if (window.pageYOffset > 10) {
        document.getElementById("mobile-head-menu").classList.add("menu-bg")
    }
    else {
        document.getElementById("mobile-head-menu").classList.remove("menu-bg")
    }
    setTimeout(function(){
        prevScrollpos = currentScrollPos;
        }, 800)
}
}*/

setTimeout(function(){
    let overlyget = document.getElementById("hero-overlay");
    if (overlyget) {
        overlyget.classList.add("show");
    }
}, 1500);