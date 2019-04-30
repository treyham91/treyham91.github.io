var categoryItems = [
    { 'key': 'languages', 'items': ['Python', 'JavaScript', 'C#', 'SQL', 'R'] },
    {
        'key': 'technologies', 'items': ['SQL Server', 'Visual Studio', '.NET Framework', 'SharePoint (Admin/Development)', 'React.js',
            'Node.js',
            'jQuery',
            'Django',
            'Angular 2',
            'REST APIs',
            'HTML',
            'CSS',
            'Machine Learning',
            'SQL Server Reporting Services',
            'Windows Forms Applications',]
    },
    { 'key': 'databases', 'items': ['SQL Server', 'Oracle', 'MongoDB', 'SQLite',] },
    { 'key': 'os', 'items': ['Windows', 'OSX'] },
];

// Set our current skill section when the DOM loads
document.getElementById("languages").setAttribute("name", "current");
var skillsSection = document.getElementById("skill-list-container");
var skillsListItem = document.createElement("li");
var skillsContainer = document.createElement("div");
skillsContainer.setAttribute("id", "skills-container");
skillsSection.style.opacity = 1;

for (var j = 0; j < categoryItems[0].items.length; j++) {
    let skillsListItem = document.createElement("li");
    skillsListItem.setAttribute("class", "skill-group-item");
    skillsListItem.innerHTML = categoryItems[0].items[j];
    skillsContainer.append(skillsListItem);
}
skillsSection.appendChild(skillsContainer);


function showSkillDetails(section) {
    let sectionId = section.getAttribute("id");
    let skillsContainer = document.createElement("div");
    skillsContainer.setAttribute("id", "skills-container");
    let skillsSection = document.getElementById("skill-list-container");

    for (var i = 0; i < categoryItems.length; i++) {
        if (sectionId === categoryItems[i].key) {
            for (var j = 0; j < categoryItems[i].items.length; j++) {
                let skillsListItem = document.createElement("li");
                skillsListItem.setAttribute("class", "skill-group-item");
                skillsListItem.innerHTML = categoryItems[i].items[j]
                skillsContainer.append(skillsListItem);
            }
            skillsSection.style.opacity = 1;
            skillsSection.appendChild(skillsContainer);
        }
    }
}


function toggleSkillSection(section) {
    let skillGroups = document.getElementsByClassName("skill-group-header-container");

    for (var i = 0; i < skillGroups.length; i++) {
        if (skillGroups[i].getAttribute("id") === section.getAttribute("id")) {
            section.setAttribute("name", "current");

            // Remove any skills container currently connected to the DOM
            let skillsContainer = document.getElementById("skills-container");
            if (skillsContainer.isConnected) skillsContainer.remove();

            // Show the new section details
            showSkillDetails(section);
        } else {
            skillGroups[i].setAttribute("name", "");
        }
    }
}