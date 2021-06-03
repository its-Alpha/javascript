function fnameValidate() {
    let first_name = document.getElementById('fname').value;
    if (first_name == "") {
        //call the function
        displayMsg("firstname is required", "fnameMsg", "red")
        return false;
    }
    else if (first_name.length < 3) {
        displayMsg("firstname must be more than two characters", "fnameMsg", "red")
        return false;
    }
    else if (!first_name.match(/^([a-zA-z])+$/)) {
        //^->it checks from the start
        displayMsg("firstname only contains alphabers", "fnameMsg", "red")
        return false;
    }
    else {
        displayMsg("valid firstname", "fnameMsg", "green")
        return true;
    }
}

function lnameValidate() {
    let last_name = document.getElementById('lname').value;
    if (last_name == "") {
        //call the function
        displayMsg("lastname is required", "lnameMsg", "red")
        return false;
    }
    else if (last_name.length < 3) {
        displayMsg("lastname must be more than two characters", "lnameMsg", "red")
        return false;
    }
    else if (!last_name.match(/^([a-zA-z])+$/)) {
        //^->it checks from the start
        displayMsg("lastname only contains alphabers", "lnameMsg", "red")
        return false;
    }
    else {
        displayMsg("valid lastname", "lnameMsg", "green")
        return true;
    }
}

function emailValidate() {
    let email = document.getElementById('email').value;
    if (email == "") {
        //call the function
        displayMsg("email is required", "emailMsg", "red")
        return false;
    }
    else if (!email.match(/^([a-zA-Z])[a-z0-9\_]+\@+(([a-z])+\.)+([a-z])+$/)) {
        //example@example.com
        displayMsg("invalid email", "emailMsg", "red")
        return false;

    }
    else {
        displayMsg("valid email", "emailMsg", "green")
        return true;
    }
}

function passwordValidate() {
    let password = document.getElementById('password').value;
    if (password == "") {
        //call the function
        displayMsg("password is required", "passMsg", "red")
        return false;
    }
    else if(!password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&]).{8,40}$/)){
        //?= matches the required expression but doesnot depend on their position
        // i.e. matche anywhere in the string position doesnot matter
        //. matched single character
        //* matches preceding character 
        displayMsg("must contain 8 characters,One uppercase,one lowercase,one digit and one special character","passMsg","red")
        return false;
    }
    else {
        displayMsg("valid password", "passMsg", "green")
        return true;
    }
}

function displayMsg(msg, id, color) {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = color
}

function validForm(){
    if(fnameValidate() && lnameValidate() && emailValidate && passwordValidate()){
        return true;
        
    }
    else{
        return false;
    }
}

