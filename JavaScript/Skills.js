var skillItemsGroup = document.getElementById("skill-group-item-container");
var skillListItems = document.getElementsByClassName("skill-group-item");

document.getElementById("skill-group-header-container")
    .addEventListener("mouseover", function () {
        let i;
        skillItemsGroup.style.height = "100%";
        skillItemsGroup.style.visibility = "visible";

        for (i = 0; skillListItems.length; i++) {
            skillListItems[i].style.opacity = 1;
        }
    });

document.getElementById("skill-group-header-container")
    .addEventListener("mouseout", function () {
        skillItemsGroup.style.height = "0px";

        for (i = 0; skillListItems.length; i++) {
            skillListItems[i].style.opacity = 0;
        }

        skillItemsGroup.style.visibility = "hidden";
    });