function checkForm(){
    var firstName = document.getElementById("name1").value;
    // var maskName = /[^a-z]/i;
    // var maskName = /^[A-Z][a-z]*$/;
    var maskName = /^[A-Z][a-z]*(-[A-Z][a-z])*$/;
    if (!maskName.test(firstName)){
        alert("First Name incorrect");
        return false;
    }
    var lastName = document.getElementById("name2").value;
    var maskName2 = /^[A-Za-z]?'?[A-Z][a-z]*$/;
    if (!maskName2.test(lastName)){
        alert("Last Name incorrect");
        return false;
    }

    var pass1 = document.getElementById("pas1").value;
    if (pass1.length < 8){
        alert("Less than 8 symbol");
        return false;
    }
    if (!/\d/.test(pass1)){
        alert("Password has no digit");
        return false;
    }
    if (!/[A-Z]/.test(pass1)){
        alert("Password has no upper letter");
        return false;
    }
    if (!/[a-z]/.test(pass1)){
        alert("Password has no lower letter");
        return false;
    }

    var pass2 = document.getElementById("pas2").value;
    if (pass1 != pass2){
        alert("Password eyni deyil");
        return false;
    }

    var maskMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    var mail = document.getElementById("email").value;
    if (!maskMail.test(mail)){
        alert("Mail incorrect");
        return false;
    }

    var maskAzeriPhone = /^\+994((50)|(55)|(70)|(77)|(99)|(51))\d{7}$/
    var phone = document.getElementById("phone").value;
    if (!maskAzeriPhone.test(phone)){
        alert("Phone incorrect");
        return false;
    }
}
