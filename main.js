let input = document.querySelector(".inputEmail");
let boutonValidation = document.querySelector(".button");
let textError = document.querySelector(".errorEvent");
let validationAnimation = false;
let div = $(".thanksMessage");
let container = document.querySelector(".container");
let boutonSucess = document.querySelector(".buttonSucess");
div.hide();

function disableScroll() {
  document.body.style.overflow = "hidden";
}

input.addEventListener("click", () => {
  $(input).removeClass("errorInputEmail");
  $(input).addClass("inputEmail");
  if (validationAnimation == true) {
    validationAnimation = false;
    $(textError).animate({ left: "935px" });
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
    $(textError).animate({ left: "675px" });
    validationAnimation = true;
  }
});

boutonSucess.addEventListener("click", () => {
  $(div).animate({ left: "-500px" }, 2000).css("display", "relative");
  $(container).animate({ top: "0px" }, 3500);
  input.value = ""; 
  setTimeout(() => {
    location.reload();
  }, 3800);
});

function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function emailThanks(inputValue) {
  $(div).show();
  $(container).animate({ bottom: "850px" }, 2000);
  $(div).animate({ top: "250px" }, 2000).css("display", "relative");
  $(".userEmail").text(inputValue);
  $(".userEmail").css("fontWeight", "bold");
}
