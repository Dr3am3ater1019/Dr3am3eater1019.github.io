function typeHeaderText () {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");

    const firstNameText = "SEBASTIAN";
    const lastNameText = "CABALLERO";
    const typingSpeed = 80;

    let currentFirstNameIndex = 0;
    let currentLastNameIndex = 0;

    function typeFirstName () {
        firstName.textContent = firstNameText.slice(0, currentFirstNameIndex);
        currentFirstNameIndex++;

        if (currentFirstNameIndex <= firstNameText.length) {
            setTimeout(typeFirstName, typingSpeed);
        } else {
            typeLastName();
        }
    }

    function typeLastName () {
        lastName.style.display = "block";
        lastName.textContent = lastNameText.slice(0,currentLastNameIndex);
        currentLastNameIndex++;

        if (currentLastNameIndex <= lastNameText.length) {
            setTimeout(typeLastName, typingSpeed);   
        }
    }
    
    typeFirstName ();

}

window.onload =function() {
    typeHeaderText();
}

document.addEventListener("DOMContentLoaded", function() {
    const circleContainer = document.querySelector(".circle-container");

    const numCirlcles = 100;
    for (let i = 0; i < numCirlcles; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circleContainer.appendChild(circle);
    }
})

