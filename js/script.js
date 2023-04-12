console.log("good")
//do not let the viewer to scroll
// document.body.style.overflow = "hidden";
document.getElementById("modal").style.visibility = "hidden"

//Navigation - Setting "Active" or "Selected" button
var menuContainer = document.getElementById("menu");
var menuItems = menuContainer.getElementsByTagName("a");
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu__item--active");
    current[0].classList.remove(...["menu__item--active", "fa-beat", "fa-2xs"])
    this.firstElementChild.classList.add(...["menu__item--active", "fa-beat", "fa-sm"])
  });
}

//Animation for shaking interest icons
var interestIconContainer = document.getElementById("interests-container__icons");
var icons = interestIconContainer.getElementsByTagName("i");

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseover", function(){
        this.classList.add("fa-shake")
    })
}

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseleave", function(){
        this.classList.remove("fa-shake")
    })
}

//Animation for skills icon
var skillIconContainer = document.getElementsByClassName("container-skills__skill")
var skillIcons = document.getElementsByClassName("skill__icon");

for (let i = 0; i < skillIconContainer.length; i++) {
  skillIconContainer[i].addEventListener("mouseover", function(){
        this.classList.add("fa-bounce")
    })
}

for (let i = 0; i < skillIconContainer.length; i++) {
  skillIconContainer[i].addEventListener("mouseleave", function(){
    this.classList.remove("fa-bounce")
    })
}

var modal = document.getElementById("modal");
var modalCloseButton = document.getElementById("modalClose");
var projects = document.getElementsByClassName("container-projects__project")
var modalContent = {
  cmon:{
    name: "Certification Management ONline (CMON) - Team Project",
    images: ["../img/cmon/cmon1.png", "../img/cmon/cmon2.png"],
    details: [
      "A web application that helps barangays and their constituents in requesting barangay clearances and certifications online. CMON is a SAAS application meaning, any interested barangay can avail the services offered by the application.",
      "Participated in the development of CMON as the project team lead and support frontend/backend developer",
      "Utilized the following programming languages/framework: React, Firebase (Cloud Functions, Firestore), and MaterialUI",
    ]
  },
  trace:{
    name: "Trace - Solo Project",
    images: ["../img/cmon/cmon1.png", "../img/cmon/cmon2.png"], //to be updated
    details: [
      "A solo project given during my first internship at Infor PSSC Inc.",
      "Automates the comparison of JIRA Ticket List excel sheets needed by the Quality Assurance Team to track the tickets needed for the current sprint.",
      "Developed using: C# (Windows Form)",
    ]
  },
  modernfix:{
    name: "ModernFix - Team Project",
    images: ["../img/cmon/cmon1.png", "../img/cmon/cmon2.png"], //to be updated
    details: [
      "A local web-based application that helps small business owners in digitally managing their business. The application is a combination of a POS system and Inventory system catered to the owner and business employees.",
      "Participated in the development of ModernFix through backend programming and base frontend styling",
      "Utilized the following programming languages/framework: PHP, Laravel, and MySQL",
    ]
  }
}

//element div containers
const projectName = document.getElementById("projectName");
const projectImages = document.getElementById("projectImages")
const projectDescription = document.getElementById("projectDescription")

var imageIndexCounter = 0;


//close the modal
modalCloseButton.addEventListener("click", function(){
  modal.style.visibility = "hidden"
  projectName.removeChild(projectName.firstElementChild);
  while (projectImages.firstChild) {
    projectImages.removeChild(projectImages.firstChild);
  }
  while (projectDescription.firstChild) {
    projectDescription.removeChild(projectDescription.firstChild);
  }
  imageIndexCounter = 0;
})

//iterate through the projects
for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", function(event){
        if(modal.style.visibility != "visible"){
          const projectNameElement = document.createElement("h4");
          projectNameElement.innerText = modalContent[this.id].name;
          projectNameElement.classList.add("project__name")
          projectName.appendChild(projectNameElement);

          for (let loop = 0; loop < modalContent[this.id].images.length; loop++){
            const projectImagesElement = document.createElement("img")
            projectImagesElement.src = modalContent[this.id].images[loop];
            projectImagesElement.classList.add("project__image")
            projectImages.appendChild(projectImagesElement);
          }

          for (let loop = 0; loop < modalContent[this.id].details.length; loop++){
            const projectDescriptionElement = document.createElement("li")
            projectDescriptionElement.innerText = modalContent[this.id].details[loop];
            // projectDescriptionElement.classList.add("")
            projectDescription.appendChild(projectDescriptionElement);
          }
          modal.style.visibility = "visible"
        }
    })
}

//WIP
// var imageArrowKeys = document.getElementsByClassName("images__btn")

// for (let i = 0; i < imageArrowKeys.length; i++) {
//   imageArrowKeys[i].addEventListener("click", function(){
//     if(this.id === "next"){
//       alert("next")
//       projectImages.removeChild(projectImages.firstChild);
//       imageIndexCounter++;
//       const projectImagesElement = document.createElement("img")
//       projectImagesElement.src = modalContent[this.id].images[imageIndexCounter];
//       projectImagesElement.classList.add("project__image")
//       projectImages.appendChild(projectImagesElement);
//     }
//     if(this.id === "previous"){
//       alert(previous)
//     }
//   })
// }
