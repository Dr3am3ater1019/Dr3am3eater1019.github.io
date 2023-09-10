document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const mainText = document.getElementById("main-text");
  const pongText = document.getElementById("pong-text");
  const arrow = document.querySelector(".down-arrow");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("show-menu");
  });

  const menuItems = document.querySelectorAll(".menu a");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menu.classList.remove("show-menu");
    });
  });

  // Faster fade-in and fade-out effect
  const fadeElements = document.querySelectorAll(".fade-in");
  window.addEventListener("scroll", function () {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        const opacity = (windowHeight - rect.top) / windowHeight * 2; // Faster fade-in
        element.style.opacity = opacity.toFixed(2);
      }
    });

    // Check if the user has reached the bottom of the page using visible content's height
    if (window.innerHeight + window.scrollY >= document.body.clientHeight) {
      arrow.classList.add("hide"); // Hide the arrow
    } else {
      arrow.classList.remove("hide"); // Show the arrow
    }
  });
});
