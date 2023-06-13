// Variables
let input = document.querySelector(".inputEmail");
let boutonValidation = document.querySelector(".button");
let textError = document.querySelector(".errorEvent");
let validationAnimation = false;
let div = document.querySelector(".thanksMessage");
let container = document.querySelector(".container");
let boutonSucess = document.querySelector(".buttonSucess");
div.style.display = "none";


// Function for disable scroll
function disableScroll() {
  document.body.style.overflow = "hidden";
}

// Event error email input
input.addEventListener("click", () => {
  input.classList.remove("errorInputEmail");
  input.classList.add("inputEmail");
  if (validationAnimation) {
    validationAnimation = false;
    $(textError).animate({ left: "935px" });
  }
});

// Event check email
boutonValidation.addEventListener("click", (event) => {
  event.preventDefault();

  var inputValue = input.value;
  if (isValidEmail(inputValue)) {
    emailThanks(inputValue);
  } else {
    input.classList.add("errorInputEmail");
    textError.style.display = "flex";
    $(textError).animate({ left: "675px" });
    validationAnimation = true;
  }
});

// Event success box and reload page
boutonSucess.addEventListener("click", () => {
  $(div).animate({ left: "-500px" }, 2000).css("display", "relative");
  $(container).animate({ top: "0px" }, 3500);
  input.value = "";
  setTimeout(() => {
    location.reload();
  }, 3800);
});

// Function to validate email
function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function for email submission thanks
function emailThanks(inputValue) {
  div.style.display = "block";
  $(container).animate({ bottom: "850px" }, 2000);
  $(div).animate({ top: "250px" }, 2000).css("display", "relative");
  $(".userEmail").text(inputValue);
  $(".userEmail").css("fontWeight", "bold");
}

function mobile(){
  if(window.innerWidth <= 426){
    console.log("Bonjour cela fonctionne")
  } else {
    console.log("aller nique ta mère");
  }

  let windowWidth = window.innerWidth;
  console.log(windowWidth);
}

document.addEventListener("DOMContentLoaded", mobile);