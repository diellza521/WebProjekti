var userName = document.getElementById("username");
var password = document.getElementById("pass");
var userNameLogin = document.getElementById("usernamelogin");
var passwordLogin = document.getElementById("passLogin");
var emailId = document.getElementById("emaili");
var registerForm = document.getElementById("registerForm");
var loginForm = document.getElementById("loginForm");

const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
var text;

function validateRegister() {
    if (validateNameRegister() == false || validatePassRegister() == false || validateMail() == false) {
        alert(" register failed!")
    }
    else {
        alert("register success");
    }
}
function validateLogin() {
    if (validateName() == false || validatePass() == false) {
        alert("login failed!")
    }
    else {
        alert("login success");
    }
}
function validateName() {
    if (userNameLogin.value == "" || userNameLogin.value.length < 4) {
        alert("username is incorrect!");
        return false;
    } else {
        return true;
    }
}
function validatePass() {
    if (passwordLogin.value == "" || passwordLogin.value.length < 5) {
        alert("passi is incorrect!");
        return false;
    }
    else {
        return true;
    }
}
function validateNameRegister() {
    if (userName.value == "" || userName.value.length < 4) {
        alert("username is incorrect!");
        return false;
    } else {
        return true;
    }
}
function validatePassRegister() {
    if (password.value == "" || password.value.length < 5) {
        alert("passi is incorrect!");
        return false;
    }
    else {
        return true;
    }
}
function validateMail() {
    if (emailId.value == "" || !emailId.value.match(emailRegex)) {
        alert("email is incorrect!");
        return false;
    }
    else {
        return true;
    }
}
function showRegister() {
    registerForm.style.display = "inline";
    loginForm.style.display = "none";
}
function showLogin() {
    loginForm.style.display = "inline";
    registerForm.style.display = "none";
}