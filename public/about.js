document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("show-menu");
    });

    // Close the menu when a link is clicked
    const menuItems = document.querySelectorAll(".menu a");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("show-menu");
        });
    });
});

