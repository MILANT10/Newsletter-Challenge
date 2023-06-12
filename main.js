let input = document.querySelector(".inputEmail");
let boutonValidation = document.querySelector(".button");
let textError = document.querySelector(".errorEvent");

// textError.style.display = "none";


input.addEventListener("keypress", (event) => {
  
});

boutonValidation.addEventListener("click", (event) => {
  event.preventDefault(); 

  var inputValue = input.value; 
  if (isValidEmail(inputValue)) {
    console.log("Votre adresse e-mail est correcte");
  } else {
    $(textError).css("display", "flex");
    $(textError).animate({left: "675px"}); 
  }
});


function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

