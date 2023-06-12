let input = document.querySelector(".inputEmail");
let boutonValidation = document.querySelector(".button");
let textError = document.querySelector(".errorEvent");
let validationAnimation = false;
let div = $(".thanksMessage");
let container = document.querySelector(".container");
div.hide();


input.addEventListener("click", () => {
  $(input).removeClass("errorInputEmail");
  $(input).addClass("inputEmail");
  if (validationAnimation == true) {
    validationAnimation = false;
    $(textError).animate({left: "935px"});
  }
});

boutonValidation.addEventListener("click", (event) => {
  event.preventDefault();

  var inputValue = input.value;
  if (isValidEmail(inputValue)) {
    emailThanks(inputValue);
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

function emailThanks(inputValue) {
  $(div).show();
  $(container).animate({bottom: "850px", }, 2000);
  $(div).animate({top: "290px"}, 2000).css("display", "relative");
  $(".userEmail").text(inputValue);
  $(".userEmail").css("fontWeight", "bold");
}
