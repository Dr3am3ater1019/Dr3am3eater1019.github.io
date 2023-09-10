document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    const typingCursor = document.querySelector(".typing-cursor");
    const welcomeScreen = document.querySelector(".welcome-screen");

    const textToType = "WELCOME";
    const typingSpeed = 130;

    let currentIndex = 0;

    function typeText () {
        welcomeText.textContent = textToType.slice(0, currentIndex);
        currentIndex++;

        if (currentIndex <= textToType.length) {
            setTimeout(typeText, typingSpeed);
        } else {
            welcomeScreen.style.animation = "fade-out 1s forwards";
            setTimeout(function() {
                localStorage.setItem("hasSeenWelcome", "true"); // Set the local storage value
                window.location.href = "index.html";
            }, 1000);
        }
    }

    typeText();
});
