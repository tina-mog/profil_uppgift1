function login() {
    var user = document.querySelector("#inputuser").value;
    var password = document.querySelector("#inputpassword").value;


    if (user.length > 1 && password.length > 1) {

        document.querySelector("#login_button").classList.add("d-none")
        document.querySelector("#feed_button").classList.remove("d-none")
        document.querySelector("#settings_button").classList.remove("d-none")

        document.querySelector("#userinfo").classList.remove("d-none")
        document.querySelector("#labeluser").innerHTML = user;
    }

}



function logout() {


        document.querySelector("#login_button").classList.remove("d-none")
        document.querySelector("#feed_button").classList.add("d-none")
        document.querySelector("#settings_button").classList.add("d-none")

        document.querySelector("#userinfo").classList.add("d-none")
        document.querySelector("#labeluser").innerHTML = "";

}