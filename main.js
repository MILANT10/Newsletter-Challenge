let input = document.querySelector(".inputEmail");
let boutonValidation = document.querySelector(".button");


input.addEventListener("keypress", (event) =>{
    const inputValue = event.target.value;
    const caracterOnly =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!inputValue.match(caracterOnly)) {
    event.target.value = inputValue.replace(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, " ");
  }
});

boutonValidation.addEventListener("click", () =>{

});
