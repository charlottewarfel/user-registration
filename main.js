"use strict"
function check(event) {
    
    event.preventDefault();
    
    var firstNameIsValid = ValidateFirstName();
    if ( !firstNameIsValid) { 

        return false;
    }

    var lastNameIsValid = ValidateLastName();
    if ( !lastNameIsValid) { 

        return false;
    }

    var emailIsValid = validateEmail();
    if (!emailIsValid) {

        return false;
    }

    var passwordIsValid = verifyPswd();
    if (!passwordIsValid) {

        return false;

    }

  



    var userFirstName = document.createElement('p');
                        userFirstName.textContent = document.userform.firstname.value;


    var printParent = document.getElementById('print');
                        printParent.appendChild(userFirstName);

    var userLastName = document.createElement('p');
                        userLastName.textContent = document.userform.lastname.value;
                        document.getElementById('print');
                        printParent.appendChild(userLastName);

    var userAddress = document.createElement('p');
                        userAddress.textContent = document.userform.address.value;
                        document.getElementById('print');
                        printParent.appendChild(userAddress);

    
    var userCity = document.createElement('p');
                        userCity.textContent = document.userform.city.value;
                        document.getElementById('print');
                        printParent.appendChild(userCity);



    var userState = document.createElement('p');
                        userState.textContent = document.userform.state.value;
                        document.getElementById('print');
                        printParent.appendChild(userState);



    var userZipcode = document.createElement('p');
                        userZipcode.textContent = document.userform.zipcode.value;
                        document.getElementById('print');
                        printParent.appendChild(userZipcode);



    var userPhone= document.createElement('p');
                    userPhone.textContent = document.userform.phone.value;
                    document.getElementById('print');
                    printParent.appendChild(userPhone);

    var userEmail = document.createElement('p');
                        userEmail.textContent = document.userform.email.value;
                        document.getElementById('print');
                        printParent.appendChild(userEmail);


}

var userform = document.querySelector("form")
        userform.addEventListener('submit', check);



function ValidateFirstName() 
{
    var first = document.getElementById('firstname').value;
   
        if (!first.match(/^[a-zA-Z]+$/)) 

    {
        alert('Only letters are allowed for first name.');
        return false;
    }
    
    return true;
}

function ValidateLastName() 
{
    var last = document.getElementById('lastname').value;
   
        if (!last.match(/^[a-zA-Z]+$/)) 

    {
        alert('Only letters are allowed for last name.');
        return false;
    }
    
    return true;
}

function validateEmail() {
    var emailID = document.userform.email.value;
     var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.userform.email.focus();
        return false;
    }
    return true;
}


var verifyPswd = function () {

    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'MATCHING';

        return true;
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'NOT MATCHING';

        return false;
    }
}


// I need to verify lenght of zipcode and that it's numbers only. verify phone number, require all fields
// put requirements on password. make State abbreivations in a dropdown.