function validateForm() {
    let firstName = document.forms["myForm"]["firstname"].value;
    let lastName = document.forms["myForm"]["lastname"].value;
    let email = document.forms["myForm"]["email"].value;
    let message = document.forms["myForm"]["message"].value;


 
    if (firstName == "") {

        document.getElementById("firstname").style.boxShadow = " inset 0px -3px 0px #ff0000";
        document.getElementById("firstname").setAttribute("required", true);

    }

    if (lastName == "") {
        document.getElementById("lastname").style.boxShadow = " inset 0px -3px 0px #ff0000";
        document.getElementById("lastname").setAttribute("required", true);

    }

    if (email == "") {
        document.getElementById("email").style.boxShadow = " inset 0px -3px 0px #ff0000";
        document.getElementById("email").setAttribute("required", true);

    }

    if (message == "") {
        document.getElementById("message").style.boxShadow = " inset 0px -3px 0px #ff0000";
        document.getElementById("message").setAttribute("required", true);
    }

    // else {

    //     document.getElementById('formSubmitted').style.display = 'flex';
    // }

    return false;
   
}
