

const languageForm = document.getElementById("languageForm");

//Event listener for form submission

languageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    //select language

    const selectedLanguage = document.getElementById("Language").value;
   
   //Display quote based on selected language
   
    if (selectedLanguage === "English") {
        window.location.href = "quote_generator.html";
    } else if (selectedLanguage === "Spanish") {
        window.location.href = "quote_generator_es.html";
    }

        
    
});