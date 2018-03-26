
// Look for .hamburger , .navigation-menu , .hamburger-label
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".navigation-menu");
  var changeMenuLabel = document.querySelector(".hamburger-label");
  
  // On click event
  hamburger.addEventListener("click", menuChanger, false);

  function menuChanger(e) {
    // Toggle class "is-active" on .hamburger
    hamburger.classList.toggle("is-active");
    // Show / hide menu and change label name Menu/Close
    if (menu.style.display === "block"){
      menu.style.display = "none";
      changeMenuLabel.textContent = "Menu";

    }else {
      menu.style.display = "block";
      changeMenuLabel.textContent = "Close";

    }
  };

// when menu is open and we click on list item, then close menu.
// let menuListElement = querySelectorAll()

// When menu is open and we click on logo, then close menu and change classList on hamburger.

var menuClick = document.querySelector(".page-logo");
menuClick.addEventListener("click", menuClickChanger , false);
function menuClickChanger (e){
  if(menu.style.display === "block"){
    menu.style.display = "none";
    changeMenuLabel.textContent = "Menu";
    hamburger.classList.toggle("is-active");
  }
}

