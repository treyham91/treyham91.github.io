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

//<div id="skill-group-item-container">
//<li class="skill-group-item">SQL Server</li>
//</div>

//TODO: Change to toggle function between different skills sections

function showSkillDetails(section) {
    let sectionId = section.getAttribute("id");
    let skillsContainer = document.createElement("div");
    skillsContainer.setAttribute("id", "skills-container");
    let skillsSection = document.getElementById("skill-list-container");

    for (var i = 0; i < categoryItems.length; i++) {
        if (sectionId === categoryItems[i].key) {
            for (var j = 0; j < categoryItems[i].items.length; j++) {
                let skillsListItem = document.createElement("li");
                skillsListItem.setAttribute("class", "skills-list-item");
                skillsListItem.innerHTML = categoryItems[i].items[j]
                skillsContainer.append(skillsListItem);
            }
            skillsSection.appendChild(skillsContainer);
        }
    }
}

function disableSkillShowDetails() {
    let skillsContainer = document.getElementById("skill-list-container");
    if (skillsContainer.isConnected) skillsContainer.style.visibility = 'hidden';
}


function handleMouseOver(section) {
    section.style.transition = "0.3s";
    section.style.backgroundColor = "#1C2833";
    section.style.borderRight = "2px solid white";

    showSkillDetails(section);
};

function handleMouseOff(section) {
    section.style.transition = "0.2s";
    section.style.backgroundColor = "black";
    section.style.borderRight = "none";

    disableSkillShowDetails();
};