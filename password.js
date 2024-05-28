/*
document.getElementById("bt").onclick = function() {
   
    let password = document.getElementById("user").value;
    correctPassword=/Abel@254./
    let messageElement = document.getElementById("p");
    let number=/0123456789/

  

    // Regular expression to check for at least one special character
    let specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    if (password === "") {
        messageElement.innerHTML = "User name is required";
    } 
    else if (!specialCharacter.test(password)) {
        messageElement.innerHTML ="Password must contain at least one special character"
    } 
    else if (!number.test(password)){
        messageElement.innerHTML = "Password must contain at least one number";
    }
    else if (password===correctPassword){
        messageElement.innerHTML = alert("welcome");
    }

    else if (!password==correctPassword){
        messageElement.innerHTML = alert("incorrect password");
    }
    
    else {
        messageElement.innerHTML = ""; 
    }
}; */
 
{
    let special = "~!@#$%^&*()_+/?*-:<.,/;'[]\\->'";
    let num = "0123456789";
    let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

    function containsCharacters(pass, chars) { 
        for (let i = 0; i < chars.length; i++) {
            if (pass.includes(chars[i])) {
                return true;
            }
        }
        return false;
    }

    let button = document.getElementById("bt");

    function check() {
        let pass = document.getElementById("user").value;

        if (pass === "") {
            document.getElementById("p").innerHTML = "Password must be filled out";
            input.style.borderColor = "red"
            document.getElementById("p").innerHTML = "Password must be at least 8 characters long";
        } else if (!containsCharacters(pass, special)) {
            document.getElementById("p").innerHTML = "Password must contain at least one special character";
            Input.style.color="red"
        } else if (!containsCharacters(pass, upper)) {
            document.getElementById("p").innerHTML = "Password must contain at least one uppercase letter";
            Input.style.color="red"
        } else if (!containsCharacters(pass, num)) {
            document.getElementById("p").innerHTML = "Password must contain at least one number";
            Input.style.color="red"
        } else {
            document.getElementById("p").innerHTML = "Password is valid";
            Input.style.color="orange"
        }
    }

    button.addEventListener("click", check);
}
