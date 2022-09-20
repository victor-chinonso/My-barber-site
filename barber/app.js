var menuBtn = document.getElementById("menu-btn");
var sideNav = document.getElementById("side-nav");
var menu = document.getElementById("menu");

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/close.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";

    }
};
