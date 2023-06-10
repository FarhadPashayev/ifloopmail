"use strict"

const form = document.getElementById("formID");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let myEmail = "askmammad@gmail.com";
let myPassword = "123456789";
let modalText = document.getElementById("modal_text");

form.addEventListener("submit", (e) => checkValue(e));

function checkValue(e){
    let emailVal = email.value;
    let passwordVal = password.value;
    modalText.innerText="";
    if(emailVal==myEmail && passwordVal==myPassword){
        modalText.innerText = "Password and email are correct. Success!!!";
        form.reset();
    }
    else{
        modalText.innerText = "Password and email are incorrect. Please try again.";
        form.reset();
    }
    e.preventDefault();
}