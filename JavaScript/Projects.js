async function getProjects() {
    const request = await fetch("https://api.github.com/users/treyham91/repos?sort=created", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    })
    return request.json();
}

let projectsContainer = document.getElementsByClassName("project-container")[0];
getProjects().then((res) => {
    res.slice(0,3).map(project => {
        let sectionContainer = document.createElement("div");
        let sectionHeader = document.createElement("p");
        let sectionDetails = document.createElement("p");
        let projectUrl = document.createElement("a");
        
        sectionContainer.className = "section-container";
        sectionHeader.className = "section-header";
        sectionDetails.className = "section-details";
        projectUrl.className = "project-link";
        
        projectUrl.href = project.html_url;
        projectUrl.innerText = project.name;
        sectionDetails.innerText = project.description;
        
        sectionHeader.append(projectUrl);
        sectionContainer.append(sectionHeader);
        sectionContainer.append(sectionDetails);
        
        projectsContainer.append(sectionContainer);
    })
})