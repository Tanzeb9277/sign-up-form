const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const submitButton = document.querySelector("#submit");
const noMatch = document.querySelector("#not-match");


function check(){
    if(password.value != confirm.value){
        password.style.border = "red solid 1px";
        confirm.style.border = "red solid 1px";
        noMatch.style.display = "block";
    }else{
        password.style.border = "grey solid 1px";
        confirm.style.border = "grey solid 1px";
        noMatch.style.display = "none";
    }
}
confirm.addEventListener("keyup", check);
