let input = document.querySelector(".inputEmail");
let boutonValidation = document.querySelector(".button");
let textError = document.querySelector(".errorEvent");
let validationAnimation = false;

// textError.style.display = "none";


input.addEventListener("click", () => {
  $(input).removeClass("errorInputEmail");
  $(input).addClass("inputEmail");
  if(validationAnimation == true){
    validationAnimation = false;
    $(textError).animate({left: "935px"});
  }
});

boutonValidation.addEventListener("click", (event) => {
  event.preventDefault(); 

  var inputValue = input.value; 
  if (isValidEmail(inputValue)) {
    console.log("Votre adresse e-mail est correcte");
  } else {
    $(input).addClass("errorInputEmail");
    $(textError).css("display", "flex");
    $(textError).animate({left: "675px"});
    validationAnimation = true;
  }
});


function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

