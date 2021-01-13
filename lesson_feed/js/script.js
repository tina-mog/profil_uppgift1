//Function för att hantera login
function login() {

    //Hämtar ut användarnamn ifrån input
    var user = document.querySelector("#inputuser").value;

    //Hämtar ut password från input
    var password = document.querySelector("#inputpassword").value;


   //Ser till att användarnamn och lösenord innehåller text
    if (user.length > 1 && password.length > 1) {

        //Gömmer login knapp genom att lägga till d-none class
        document.querySelector("#login_button").classList.add("d-none")

        //visar flöde och inställnings knapp genom att tabort d-none
        document.querySelector("#feed_button").classList.remove("d-none")
        document.querySelector("#settings_button").classList.remove("d-none")


        //visar logut knapp i höger nedre hörn
        document.querySelector("#userinfo").classList.remove("d-none")
        //Visar användarens loginnamn genom att lägga text inne i label elementet.
        document.querySelector("#labeluser").innerHTML = user;
    }

}


//function för att hantera logut
function logout() {

        // visar login knapp genom att tabort d-none class
        document.querySelector("#login_button").classList.remove("d-none")

        //gömmer flöde och inställnings knapp genom att lägga till d-none
        document.querySelector("#feed_button").classList.add("d-none")
        document.querySelector("#settings_button").classList.add("d-none")

        //gömmer logut knapp genom att lägga till d-none
        document.querySelector("#userinfo").classList.add("d-none")

        //tabort texten inne i label elementet.
        document.querySelector("#labeluser").innerHTML = "";

}



function like(event){
    event.target.setAttribute("fill", "red")
}