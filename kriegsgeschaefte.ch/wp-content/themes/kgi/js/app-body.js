var elementselected = document.getElementsByClassName("nav-grid-item");
if (elementselected['length'] != 0) {
    elementwidth = elementselected[0].clientWidth;
    document.documentElement.style.setProperty('--nav-height', `${elementwidth}px`);
}


var gridItems = document.getElementsByClassName("grid-item-container");
if (gridItems['length'] != 0) {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.height = elementwidth;    
    }
}

var footerItem = document.getElementsByClassName("et-l--footer");
if (footerItem) {
    var footerheight = document.getElementsByClassName("et-l--footer")[0].clientHeight;
    document.documentElement.style.setProperty('--footer-height', `${footerheight}px`);
}

let e999 = document.getElementById("komitee-beitreten");
if (e999) {
    e999.onclick = function() {
        document.getElementById("overlay-komitee-beitreten").classList.add("show");
        let e888 = document.getElementById("beitreten-schliessen-desk");
        let e898 = document.getElementsByTagName("html")[0];
        let e989 = document.getElementById("container-komitee-beitreten");
        e989height = e989.clientHeight;
        document.getElementById("main-head-menu").style.top = "-100px";
        document.documentElement.style.setProperty('--komiteecontainer', `${e989height}px`);
        
        e898.classList.add("noscroll");
        e888.onclick = function() {
            document.getElementById("overlay-komitee-beitreten").classList.remove("show");
            e898.classList.remove("noscroll");
        }
        let e889 = document.getElementById("beitreten-schliessen-mob");
        e889.onclick = function() {
            document.getElementById("overlay-komitee-beitreten").classList.remove("show");
            e898.classList.remove("noscroll");
        }
    }
};


function showExample(id) {
    document.getElementsByTagName("html")[0].classList.toggle("noscroll");
    document.getElementById("example_overlay_" + id).classList.toggle("show");
    document.getElementById("main-head-menu").style.top = "-100px";
}

function showReason(id) {
    document.getElementsByTagName("html")[0].classList.toggle("noscroll");
    document.getElementById("reason_overlay_" + id).classList.toggle("show");
    document.getElementById("main-head-menu").style.top = "-100px";
}

if (window.innerWidth > 980) {
    var previousScroll = 0;
    var currScroll = window.pageYOffset;
    if (currScroll == 0) {
        document.getElementById("main-head-menu").style.top = "0";
        /*console.log("case 1")*/
    } else {
        document.getElementById("main-head-menu").style.top = "-100px";
        /*console.log("case 2")*/
    }

    window.onscroll = function() {
        if (window.pageYOffset >= 0) {
            var currScroll = window.pageYOffset;
            if (currScroll > previousScroll) {
                document.getElementById("main-head-menu").style.top = "-100px";
                /*console.log("case 3");*/
            } else {
                document.getElementById("main-head-menu").style.top = "0";
                /*console.log("case 4");*/
            }

            if (currScroll > 10) {
                document.getElementById("main-head-menu").classList.add("menu-bg");
                /*console.log("case 5");*/
            } else {
                document.getElementById("main-head-menu").classList.remove("menu-bg");
                /*console.log("case 6");*/
            }
            
            previousScroll = window.pageYOffset;
            /*console.log("Current Scroll position " + previousScroll)*/
        } else {
            console.log("fuck u safari");
        }
    }
} else {
    var previousScroll = 0;
    var currScroll = window.pageYOffset;
    if (currScroll == 0) {
        document.getElementById("mobile-head-menu").style.top = "0";
        /*console.log("case 1")*/
    } else {
        document.getElementById("mobile-head-menu").style.top = "-100px";
        /*console.log("case 2")*/
    }

    window.onscroll = function() {
        if (window.pageYOffset >= 0) {
            var currScroll = window.pageYOffset;
            if (currScroll > previousScroll) {
                document.getElementById("mobile-head-menu").style.top = "-100px";
                /*console.log("case 3");*/
            } else {
                document.getElementById("mobile-head-menu").style.top = "0";
                /*onsole.log("case 4");*/
            }

            if (currScroll > 10) {
                document.getElementById("mobile-head-menu").classList.add("menu-bg");
                /*console.log("case 5");*/
            } else {
                document.getElementById("mobile-head-menu").classList.remove("menu-bg");
                /*console.log("case 6");*/
            }
            
            previousScroll = window.pageYOffset;
            /*console.log("Current Scroll position " + previousScroll)*/
        } else {
            console.log("fuck u safari");
        }
    }
}