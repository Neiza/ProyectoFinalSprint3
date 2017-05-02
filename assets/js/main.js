var inputPhone = document.getElementById("phone");
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputCity = document.getElementById("city");
var signup = document.getElementById("signup");

var onlyLettersFirstCapital = /^([A-Z]{1}[a-z]+[\s]*)+$/;
var onlyNumbers = /^[0-9_]$/;
var emaailReg = /\w+@+\w+\.+[a-z]/;

function nameValidation(){
   if(!onlyLettersFirstCapital.test(inputName.value)){
      alert("only letters for Names, Firts Capital letter")
   }
}

function cityValidation(){
   if(!onlyLettersFirstCapital.test(inputCity.value)){
      alert("only letters for Citys, Firts Capital letter")
   }
}

function phoneValidation(){
  if(!onlyNumbers.test(inputPhone.value)){
     alert("only numbers");
  }
}

function emailValidation(){
  if(!emailReg.test(imputEmail.value)){
     alert("the email is not correct");
  }
}


window.addEventListener("load", function(){
  // al hacer click en Sign up
  signup.addEventListener("click", function(event){
    event.preventDefault();
    nameValidation();
    cityValidation();
    phoneValidation();
    emailValidation();
  });

});
