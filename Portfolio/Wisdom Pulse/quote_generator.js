const englishQuotes = [
    "Success is never permanent, and failure is never final. -Mike Ditka",
    "We become what we think about. -Earl Nigthingale",
    "Success is a journey not a destination. -Ben Sweetland",
    "The expert was once the beginner, -Elen Hayes",
    "Music can change the world. -Beethoven",
    "we cannot adjust the wind, but we can direct the sails. -Dolly Parton",
    "Success is having to worry about every damm thing in the world, except money. -Johnny Cash",
    "I won't be a rockstar, I will be a legend. -Freddy Mercury",
    "Live for each second without hesitation. -Elton John",
    "It's going to be Legend... wait for it... DARY. -Barney Stinson",

];

const spanishQuotes = [
    "No estudio para saber más, sino para ignorar menos. -Sor Juana Ines de la Cruz",
    "La libertad no necesita alas, lo que necesita es echar raíces. -Octavio Paz",
    "Aquel que no espera vencer, ya está vencido. -Benito Juarez",
    "Si nadie te garantiza el mañana, el hoy se vuelve inmenso. -Carlos Monsivais",
    "La primer obligación de todo ser humano es ser feliz, la segunda es hacer feliz a los demás. -Cantinflas",
    "Es que no me tienen paciencia. -El Chavo",
    "Aprende a reirte de tus errores. -Pedro Infante",
    "Lo importante no es llegar primero, sino saber llegar. -Vicente Fernandez",
    "Creo que el cambio depende de cada uno de nosostros. -Chabelo",
    "Soy el protector de los inocentes, soy la luz en la oscuridad, soy la verdad. -Goku",
    "Mientras el enemigo siga en pie yo seguiré peleando. -Vegeta",
];

const quoteDisplay = document.getElementById("quoteDisplay");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", function(){
    const selectedLanguage = window.location.href.includes("quote_generator_es.html") ? "Spanish" : "English";

    if (selectedLanguage === "English") {
        const randomIndex = Math.floor(Math.random() * englishQuotes.length);
        quoteDisplay.textContent = englishQuotes[randomIndex];
    } else if (selectedLanguage === "Spanish") {
        const randomIndex = Math.floor(Math.random() * spanishQuotes.length);
        quoteDisplay.textContent = spanishQuotes[randomIndex];
    }
})