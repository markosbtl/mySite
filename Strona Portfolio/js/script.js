// This part of code open and close menu.
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".navigation-menu");
var changeMenuLabel = document.querySelector(".hamburger-label");

hamburger.addEventListener("click", menuChanger, false);

function menuChanger(e) {
    hamburger.classList.toggle("is-active");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        changeMenuLabel.textContent = "Menu";

    } else {
        menu.style.display = "block";
        changeMenuLabel.textContent = "Close";
    }
    e.stopPropagation();
};

// when menu is open and we click on list item, then close menu.
// let menuListElement = querySelectorAll()


// When menu is open and we click on logo, then close menu and change classList on hamburger,
// and you go to page header smoothly.

$(".page-logo").click(function (event) {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        changeMenuLabel.textContent = "Menu";
        hamburger.classList.toggle("is-active");
    }
    event.preventDefault();
    var n = $("#page-header").offset().top
    $('html, body').animate({
        scrollTop: n
    }, 1500);
});

// // When you open hamburger menu and pick some item, you go to this part of site smoothly.

$(document).ready(function () {
    $(".goToPageHeader").click(function () {
        $('html, body').animate({
            scrollTop: $("#page-header").offset().top
        }, 1500);
        menu.style.display = "none";
        changeMenuLabel.textContent = "Menu";
        hamburger.classList.toggle("is-active");
    });
});
$(document).ready(function () {
    $(".goToAboutMe").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1500);
        menu.style.display = "none";
        changeMenuLabel.textContent = "Menu";
        hamburger.classList.toggle("is-active");
    });
});
$(document).ready(function () {
    $(".goToPortfolio").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500);
        menu.style.display = "none";
        changeMenuLabel.textContent = "Menu";
        hamburger.classList.toggle("is-active");
    });
});
$(document).ready(function () {
    $(".goToAbility").click(function () {
        $('html, body').animate({
            scrollTop: $("#ability").offset().top
        }, 1500);
        menu.style.display = "none";
        changeMenuLabel.textContent = "Menu";
        hamburger.classList.toggle("is-active");
    });
});
$(document).ready(function () {
    $(".goToContact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
        menu.style.display = "none";
        changeMenuLabel.textContent = "Menu";
        hamburger.classList.toggle("is-active");
    });
});
