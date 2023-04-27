document.getElementById("modal").style.visibility = "hidden"
console.log(screen.width)

//Navigation - Setting "Active" or "Selected" button
if(screen.width <= 800){
  var menuContainer = document.getElementById("menu");
  var menuItems = menuContainer.getElementsByTagName("a");
  var isMenuManuallyClicked = "false"
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
      isMenuManuallyClicked = true
      var current = document.getElementsByClassName("portfolio__menu__item--active");
      current[0].classList.remove(...["portfolio__menu__item--active", "fa-beat", "fa-sm"])
      this.firstElementChild.classList.add(...["portfolio__menu__item--active", "fa-beat", "fa-sm"])
      isMenuManuallyClicked = false
    });
  }
}

//Navigation - Setting "Active" menu item while scrolling
if(screen.width <= 800){
  const sections = document.getElementsByClassName("portfolio__container");
  const navLi = document.getElementsByClassName("portfolio__menu__item");
  document.addEventListener("scroll", function(){
    var current = "";

    for (let index = 0; index < sections.length; index++) {
      const sectionTop = sections[index].offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = sections[index].getAttribute("id"); 
      }
    }
    for (let index = 0; index < navLi.length; index++) {
      if ((navLi[index].id).includes(current)) {
        navLi[index].firstElementChild.classList.add(...["portfolio__menu__item--active", "fa-beat", "fa-sm"]);
        // // window.location.href = navLi[index].href;
        // console.log(window.location.hash)
        // if(!isMenuManuallyClicked){
        //   window.location.hash = current; //conflicts when menu item is manually clicked
        // }
      }else{
        navLi[index].firstElementChild.classList.remove(...["portfolio__menu__item--active", "fa-beat", "fa-sm"]);
      }
    }
  });
}

//Animation for shaking interest icons
var interestIconContainer = document.getElementById("interests-container__icons");
var icons = interestIconContainer.getElementsByTagName("i");
const label = document.getElementById("interestLabel");


for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseover", function(){
        this.classList.add("fa-shake")
        label.innerText = icons[i].getAttribute("interest");
    })
}

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseleave", function(){
        this.classList.remove("fa-shake")
        label.innerText = "";
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

//modal section - initializations
var modal = document.getElementById("modal");
var modalCloseButton = document.getElementById("modalClose");
var projects = document.getElementsByClassName("container-projects__project")
var modalContent = {
  cmon:{
    name: "Certification Management ONline (CMON) - Team Project (Thesis)",
    images: ["../img/cmon/cmon1.PNG", "../img/cmon/cmon2.PNG"],
    details: [
      "A web application that helps barangays and their constituents in requesting barangay clearances and certifications online. CMON is a SAAS application meaning, any interested barangay can avail the services offered by the application.",
      "Participated in the development of CMON as the project team lead and frontend/backend developer",
      "Utilized the following programming languages/framework: React, Firebase (Cloud Functions, Firestore), and MaterialUI",
    ]
  },
  trace:{
    name: "Trace - Solo Project",
    images: ["../img/trace/trace1.png", "../img/trace/trace2.png", "../img/trace/trace3.png", "../img/trace/trace4.png"],
    details: [
      "A solo project given during my first internship at Infor PSSC Inc.",
      "Automates the comparison of JIRA Ticket List excel sheets needed by the Quality Assurance Team to track the tickets needed for the current sprint.",
      "Developed using: C# (Windows Form)",
    ]
  },
  modernfix:{
    name: "ModernFix - Team Project (Mini Thesis)",
    images: ["../img/modernfix/modernfix1.jpg", "../img/modernfix/modernfix2.jpg"],
    details: [
      "A local web-based application that helps small business owners in digitally managing their business. The application is a combination of a POS system and Inventory system catered to the owner and business employees.",
      "Participated in the development of ModernFix through backend programming and base frontend styling",
      "Utilized the following programming languages/framework: PHP, Laravel, and MySQL",
    ]
  }
}

//modal element div containers
const projectName = document.getElementById("projectName");
const projectImages = document.getElementById("projectImages")
const imageButtons = document.getElementById("imageButtons")
const projectDescription = document.getElementById("projectDescription")

var imageIndexCounter = 0;
var selectModalID = "";

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

  for(let i = 0; i< imageButtons.children.length; i++){
    imageButtons.children[i].removeAttribute("disabled");
  }

  imageIndexCounter = 0;
})

//iterate through the projects
for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", function(event){
        if(modal.style.visibility != "visible"){
          //check how many images does the data have, disables the arrow buttons if one image is provided
          if(modalContent[this.id].images.length <=1){
            for(let i = 0; i< imageButtons.children.length; i++){
              imageButtons.children[i].disabled = "true";
            }
          }

          const projectNameElement = document.createElement("h4");
          projectNameElement.innerText = modalContent[this.id].name;
          projectNameElement.classList.add("project__name")
          projectName.appendChild(projectNameElement);

          const projectImagesElement = document.createElement("img")
          projectImagesElement.src = modalContent[this.id].images[imageIndexCounter];
          projectImagesElement.classList.add("project__image")
          projectImages.appendChild(projectImagesElement);
          //disables previous button by default (modal displays the first image by default)
          document.getElementById("previous").disabled = "true";

          for (let loop = 0; loop < modalContent[this.id].details.length; loop++){
            const projectDescriptionElement = document.createElement("li")
            projectDescriptionElement.innerText = modalContent[this.id].details[loop];
            // projectDescriptionElement.classList.add("")
            projectDescription.appendChild(projectDescriptionElement);
          }
          selectModalID = this.id;
          modal.style.visibility = "visible"
        }
    })
}

var imageArrowKeys = document.getElementsByClassName("images__btn")

for (let i = 0; i < imageArrowKeys.length; i++) {
  imageArrowKeys[i].addEventListener("click", function(){
    if(modal.style.visibility === "visible"){
      let projectDisplayedImage = projectImages.firstElementChild;
      if(this.id === "next"){
        if(imageIndexCounter !== modalContent[selectModalID].images.length-1){
          imageIndexCounter +=1;
          projectDisplayedImage.src = modalContent[selectModalID].images[imageIndexCounter];
          document.getElementById("previous").removeAttribute("disabled");
          if(imageIndexCounter === modalContent[selectModalID].images.length-1){
          document.getElementById("next").disabled = "true";
          }
        }
      }
      if(this.id === "previous"){
        if(imageIndexCounter !== 0){
          imageIndexCounter -=1;
          projectDisplayedImage.src = modalContent[selectModalID].images[imageIndexCounter];
          document.getElementById("next").removeAttribute("disabled");
          if(imageIndexCounter === 0){
            document.getElementById("previous").disabled = "true";
          }
        }
      }
    }
  })
}

//sample
document.addEventListener("DOMContentLoaded", function() {
  var fps = new FullPageScroll('sectionsContainer', { 
          mediaQuery: 'screen and (min-width: 801px)',
            // animation speed in ms
            transitionTime: 1000,
            // auto goto the first section
            goToTopOnLast: true,
            // selector of slides
            slideSelector: "section",
  });
  var menuContainer = document.getElementById("menu");
  var menuItems = menuContainer.getElementsByTagName("a");
  const navLi = document.getElementsByClassName("portfolio__menu__item");
  if(screen.width > 800){
    console.log(screen.width)
    fps.onslide = function(e) {
      console.log("sioiiiWS")
      // console.log("Slide "+(e.target.currentSlide+1)+" of "+e.target.slides.length);
      // console.log(typeof(document.getElementById("sectionsContainer").style.transform), "hefre")
      if(e.target.currentSlide === e.target.slides.length-1){
        fps.goToFirstSlide();
        console.log("heh")
      }
      for (let index = 0; index < navLi.length; index++) {
        if (index === e.target.currentSlide) {
          // console.log(navLi[index].id, "heere")
          navLi[index].firstElementChild.classList.add(...["portfolio__menu__item--active", "fa-beat", "fa-sm"]);
        }else{
          navLi[index].firstElementChild.classList.remove(...["portfolio__menu__item--active", "fa-beat", "fa-sm"]);
        }
      }
    }

    menuItems[0].addEventListener("click", function(){
      console.log("hahhasdd")
      fps.goToSlide(0)
    });
    menuItems[1].addEventListener("click", function(){
      fps.goToSlide(1)
    });
    menuItems[2].addEventListener("click", function(){
      fps.goToSlide(2)
    });
    menuItems[3].addEventListener("click", function(){
      fps.goToSlide(3)
    });
    menuItems[4].addEventListener("click", function(){
      fps.goToSlide(4)
    });
}


  //STILL NOT WORKING KAINIS
  // for (let i = 0; i < menuItems.length; i++) {
  //   menuItems[i].addEventListener("click", function() {
  //     // menuItems[i].click();
  //     // document.getElementById(menuItems[i].id).click();
  //     // const position = 100*i === 0 ? "0px" : (100*i)*-1 +"vh"
  //     // document.getElementById("sectionsContainer").style.transform = `translateY(${position}`
  //     fps.goToSlide(i)
      
  //     // var current = document.getElementsByClassName("portfolio__menu__item--active");
  //     // current[0].classList.remove(...["portfolio__menu__item--active", "fa-beat", "fa-sm"])
  //     // this.firstElementChild.classList.add(...["portfolio__menu__item--active", "fa-beat", "fa-sm"])
  //   });
  // }
}, {passive: true});