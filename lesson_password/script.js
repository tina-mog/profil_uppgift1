const rightPassword = "jagGillarGlass"
var passwordTries = 3;

function testPassword(){

    const password = document.getElementById("password").value;

    console.log(password);


    if(password === rightPassword){
        alert("Korrekt lösenord");
        passwordTries = 3;
    } else{
        passwordTries = passwordTries - 1;
        alert("Fel lösenord! Du har " + passwordTries + " försök kvar");
    }


    if(passwordTries === 0){
       window.location.href = "https://google.se"
    }
}

