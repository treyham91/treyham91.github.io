document.addEventListener('scroll', function () {
    var about = document.getElementById("about-container");
    var projects = document.getElementById("projects-container");
    var skills = document.getElementById("skills-container");

    var aboutBody = about.getBoundingClientRect();
    var projectsBody = projects.getBoundingClientRect();
    var skillsBody = skills.getBoundingClientRect();

    if (window.scrollY > aboutBody.top) {
        about.style.visibility = 'visible';
        about.style.animation = 'fadein 3s';
    }

    if (window.scrollY > projectsBody.top) {
        projects.style.visibility = 'visible';
        projects.style.animation = 'fadein 3s';
    }

    if (window.scrollY > skillsBody.top) {
        skills.style.visibility = 'visible';
        skills.style.animation = 'fadein 3s';
    }
})

document.getElementById("side-nav-bar").addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "250px";
})

document.getElementById("closebtn").addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "0";
})