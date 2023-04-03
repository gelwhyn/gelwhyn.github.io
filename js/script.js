console.log("good")

//Navigation - Setting "Active" or "Selected" button
    //additional condi to be done for manual scrolling
var menuContainer = document.getElementById("menu");
var menuItems = menuContainer.getElementsByTagName("a");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu__item--active");
    current[0].classList.remove(...["menu__item--active", "fa-beat", "fa-2xs"])
    this.firstElementChild.classList.add(...["menu__item--active", "fa-beat", "fa-sm"])
  });
}