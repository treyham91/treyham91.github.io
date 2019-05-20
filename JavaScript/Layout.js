document.getElementById("side-nav-bar").addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "250px";
});

document.getElementById("closebtn").addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "0";
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 670) {
        document.getElementById("mySidenav").style.width = "0";
    }
})