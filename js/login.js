////////////////////////passShow button/////////////////////
let showBtn = document.getElementById("show")
let passInput = document.getElementById("password")
let emailinput = document.getElementById("email")
let loginbtn = document.getElementById("loginbtn")
let form = document.getElementsByTagName("form")
function show () {
  if (showBtn.classList.contains("fa-eye")) {
    passInput.setAttribute("type", "text")
    showBtn.classList.toggle("fa-eye")
    showBtn.classList.toggle("fa-eye-slash")
  }else{
    passInput.setAttribute("type", "password");
    showBtn.classList.toggle("fa-eye")
    showBtn.classList.toggle("fa-eye-slash")
  }     
}
let users = JSON.parse(localStorage.getItem("information"));
function login (){
  if (emailinput.value && passInput.value !== "") {
    if (JSON.parse(localStorage.getItem("information")) !== null) {
      if(users.find((user) => user.email === emailinput.value && user.pass === passInput.value)){
        localStorage.setItem("logedemail", emailinput.value)
        window.location.href = 'welcom.html';
        passInput.value = "";
        emailinput.value = "";
      }else{
        alert("mail or pass invalid")
      }
    } else {
      alert("email not exixts")
    }
  }else{
    if(emailinput.value == ""){
      emailinput.focus();
    }else if(passInput.value == ""){
      passInput.focus();
    }
  }
}
loginbtn.onclick = function(event) {
  event.preventDefault();
  login();
}