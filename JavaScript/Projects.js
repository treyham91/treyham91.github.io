function handleMouseOver(section) {
    section.style.transition = "0.3s";
    section.style.boxShadow = "0px 1px 3px 3px #1C2833";
    section.style.borderRadius = "10px 10px 10px 10px";
    section.style.backgroundColor = "#1C2833";
};

function handleMouseOff(section) {
    section.style.transition = "0.2s";
    section.style.boxShadow = "0px 0px 0px 0px black";
    section.style.backgroundColor = "black";
};

//document.getElementById("this").style.boxShadow = 