let userinput = document.getElementById("user")
let emailinput = document.getElementById("email")
let passInput = document.getElementById("password")
let showBtn = document.getElementById("show")
let signbtn = document.getElementById("signbtn")
let form = document.getElementsByTagName("form");
let t = document.querySelector(".massCheck");
let emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.com$/;
//////////////////////////////////////////////
let users = [];
if ( localStorage.information !== null ){
    users = JSON.parse(localStorage.getItem("information")) || []; 
}
function sign (){
    const userInform = {
        userName:userinput.value,
        email:emailinput.value,
        pass:passInput.value
    };
    users.push(userInform);
    localStorage.setItem("information", JSON.stringify(users))
    emailinput.value = "";
    passInput.value = "";
    userinput.value ="";
};
t.innerText = "";
signbtn.onclick = function() {
    event.preventDefault();
    if ( userinput.value && emailinput.value && passInput.value !== "") {
        if(emailRegex.test(emailinput.value)){
            if (JSON.parse(localStorage.getItem("information")) !== null) {
                let exist = false;
                JSON.parse(localStorage.getItem("information")).forEach(user => {
                    if(user.email === emailinput.value){
                        exist = true;
                    }
                });
                if (exist) {
                    t.innerText = "email is already exixts";
                    t.style.color = "red";
                } else {
                    t.innerText = "successful sing";
                    t.style.color = "green"
                    sign();
                }
            }else{
                sign();
            }            
        }else{
            alert("email invalid")
        }
    }else{
        alert("All inputs required")
    }
}
////////////////////////passShow button/////////////////////
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
};


      