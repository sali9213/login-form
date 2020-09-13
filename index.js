SubmitForm = function(e) {
    e.preventDefault();
    console.log("The form has been submitted");
}

OnClick = function(){
    var elem = document.getElementById("submit-button");
    if(elem.innerHTML == "Login"){
        elem.innerHTML = "Logging In..";
        elem.classList.add("loading");
    } else {
        elem.innerHTML = "Login";
        elem.classList.remove("loading");
    }
}
