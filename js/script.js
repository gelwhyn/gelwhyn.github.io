console.log("good")
//do not let the viewer to scroll
// document.body.style.overflow = "hidden";

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