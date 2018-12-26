"use strict"
function check(event) {
    
    event.preventDefault();
    
    var firstNameIsValid = validateFirstName();
    if ( !firstNameIsValid) { 

        return false;
    }

    var lastNameIsValid = validateLastName();
    if ( !lastNameIsValid) { 

        return false;
    }

    var addressIsValid = validateAddress();

    if(!addressIsValid) {

        return false;
}


var cityIsValid = validateCity();
if (!cityIsValid) {

    return false;
}

    
var stateIsValid = validateState();
    if (!stateIsValid)  {

        return false;
    }

    var zipcodeIsValid = validateZipcode();
    if (!zipcodeIsValid) {

        return false;
    }

    var emailIsValid = validateEmail();
    if (!emailIsValid) {

        return false;
    }

    var phoneIsValid = validatePhoneNumber();
    if (!phoneIsValid) {

        return false;
    }


    var passwordIsValid = verifyPswd();
    if (!passwordIsValid) {

        return false;

    }

  



    var userFirstName = document.createElement('div');
                        userFirstName.textContent = document.userform.firstname.value;


    var printParent = document.getElementById('print');
                        printParent.appendChild(userFirstName);

    var userLastName = document.createElement('div');
                        userLastName.textContent = document.userform.lastname.value;
                        document.getElementById('print');
                        printParent.appendChild(userLastName);

    var userAddress = document.createElement('div');
                        userAddress.textContent = document.userform.address.value;
                        document.getElementById('print');
                        printParent.appendChild(userAddress);

    
    var userCity = document.createElement('div');
                        userCity.textContent = document.userform.city.value;
                        document.getElementById('print');
                        printParent.appendChild(userCity);



    var userState = document.createElement('div');
                        userState.textContent = document.userform.state.value;
                        document.getElementById('print');
                        printParent.appendChild(userState);



    var userZipcode = document.createElement('div');
                        userZipcode.textContent = document.userform.zipcode.value;
                        document.getElementById('print');
                        printParent.appendChild(userZipcode);



    var userPhone= document.createElement('div');
                    userPhone.textContent = document.userform.phone.value;
                    document.getElementById('print');
                    printParent.appendChild(userPhone);

    var userEmail = document.createElement('div');
                        userEmail.textContent = document.userform.email.value;
                        document.getElementById('print');
                        printParent.appendChild(userEmail);


}

var userform = document.querySelector("form")
        userform.addEventListener('submit', check);



function validateFirstName() 
{
    var first = document.getElementById('firstname').value;
   
        if (!first.match(/^[a-zA-Z]+$/)) 

    {
        alert('Only letters are allowed for first name.');
        return false;
    }
    
    return true;
}

function validateLastName() 
{
    var last = document.getElementById('lastname').value;
   
        if (!last.match(/^[a-zA-Z]+$/)) 

    {
        alert('Only letters are allowed for last name.');
        return false;
    }
    
    return true;
}



function validateAddress() {

    var address = document.userform.address.value;
     
    if(address !== null && address !== "")
    {

        return true;
    }
    else{
        alert("Address is required");
        return false;
    }


}

function validateCity() {

    var city = document.userform.city.value;
     
    if(city!== null && city !== "")
    {

        return true;
    }
    else{
        alert("City is required");
        return false;
    }


}

function validateState() {

    var state = document.userform.state.value;
    var lettersOnly = document.userform.state.value;

    if(state.length === 2 && lettersOnly.match(/^[a-zA-Z]+$/))

    {

        return true;
    }

        else{
        alert("2 letters required for state");
        return false;
    }
}



function validateZipcode() {
    var zipcode = document.userform.zipcode.value;
    var numbersOnly = document.userform.zipcode.value;

    if(zipcode.length === 5 && numbersOnly.match(/^\d+/)) 
    {
            return true; 
}
        else { 
        alert("5 numeric characters required for zipcode");
        return false;

    }

}

function validatePhoneNumber() {
    var phonenum= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(phonenum)) {
      return true;
    }
    else {
      alert("10 numeric characters required for phone number");
      return false;
    }
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