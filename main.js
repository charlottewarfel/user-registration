"use strict"
function check(event) {
    event.preventDefault();
    // validateForm(event);
            // if (formIsValid) {

            //     renderUserInfo() 
            // }



    
    var firstNameIsValid = validateFirstName(event);
    if ( !firstNameIsValid) { 

        return false;
    }

    var lastNameIsValid = validateLastName(event);
    if ( !lastNameIsValid) { 

        return false;
    }

    var addressIsValid = validateAddress(event);

    if(!addressIsValid) {

        return false;
}


var cityIsValid = validateCity(event);
if (!cityIsValid) {

    return false;
}

    
var stateIsValid = validateState(event);
    if (!stateIsValid)  {

        return false;
    }

    var zipcodeIsValid = validateZipcode(event);
    if (!zipcodeIsValid) {

        return false;
    }

    var emailIsValid = validateEmail(event);
    if (!emailIsValid) {

        return false;
    }

    var phoneIsValid = validatePhoneNumber(event);
    if (!phoneIsValid) {

        return false;
    }


    var passwordIsValid = verifyPswd(event);
    if (!passwordIsValid) {

        return false;

    }

  



    var userFirstName = document.createElement('div');
                        userFirstName.textContent = event.target.firstname.value;
                     


                       
    var printParent = document.getElementById("print");
                        printParent.appendChild(userFirstName);



    var userLastName = document.createElement('div');
                        userLastName.textContent = event.target.lastname.value;
                        printParent.appendChild(userLastName);

    var userAddress = document.createElement('div');
                        userAddress.textContent = event.target.address.value;
                        printParent.appendChild(userAddress);

    var userCity = document.createElement('div');
                        userCity.textContent = event.target.city.value;
                        printParent.appendChild(userCity);

    var userState = document.createElement('div');
                        userState.textContent = event.target.state.value;
                        printParent.appendChild(userState);

    var userZipcode = document.createElement('div');
                        userZipcode.textContent = event.target.zipcode.value;
                        printParent.appendChild(userZipcode);

    var userPhone= document.createElement('div');
                    userPhone.textContent = event.target.phone.value;
                    printParent.appendChild(userPhone);

    var userEmail = document.createElement('div');
                        userEmail.textContent = event.target.email.value;
                        printParent.appendChild(userEmail);

}


var userform = document.querySelector("form")
        userform.addEventListener('submit', check);

     
function validateFirstName(event) {
    var first = event.target.firstname.value;
   
        if (!first.match(/^[a-zA-Z]+$/)) 

    {
        alert('Only letters are allowed for first name.');
        return false;
    }
    
    return true;
}

function validateLastName(event) 
{
    var last = event.target.lastname.value;
   
        if (!last.match(/^[a-zA-Z]+$/)) 

    {
        alert('Only letters are allowed for last name.');
        return false;
    }
    
    return true;
}



function validateAddress(event) {

    var address = event.target.address.value;
     
    if(address.length == 0) 
    {
        alert("Address is required");
        return false;
    
    }
    else{
        return true;
        
    }


}

function validateCity(event) {

    var city = event.target.city.value;
     
    if(city!== null && city !== "")
    {

        return true;
    }
    else{
        alert("City is required");
        return false;
    }


}

function validateState(event) {

    var state = event.target.state.value;

    if(state.length === 2 && state.match(/^[a-zA-Z]+$/))

    {

        return true;
    }

        else{
        alert("2 letters required for state");
        return false;
    }
}



function validateZipcode(event) {
    var zipcode = event.target.zipcode.value;

    if(zipcode.length === 5 && zipcode.match(/^\d+/)) 
    {
            return true; 
}
        else { 
        alert("5 numeric characters required for zipcode");
        return false;

    }

}

function validatePhoneNumber(event) {
    var phone = event.target.phone.value;

    if(phone.match(/^[0-9]{10}$/)) {
      return true;
    }
    else {
      alert("10 numeric characters required for phone number");
      return false;
    }
  }


function validateEmail(event) {
    var emailID = event.target.email.value;
     var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        return false;
    }
    return true;
}


var verifyPswd = function() {

    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {


        return true;
    } else {
       
            alert("Please verify Password and Confirm Password match")
        return false;
    }
}


// // charlotte this is where you're working. 

// function userPrintInfo() {


// }

// var string1 = "Thank you for registering. You are registered as: ";
// var stringFirstName = document.userform.firstname.value;
// var stringLastName = document.userform.lastname.value;
// var string2 = "Your information is as follows: ";
// var stringStreet = "Street Address ";
// var stringAddress = userform.address.value;
// var stringCity = userform.city.value;
// var stringState = userform.state.value;
// var stringZipcode = userform.zipcode.value;
// var string3 = "Email ";
// var stringEmail = document.userform.email.value;
// var string4 = "Phone ";
// var stringPhone = document.userform.phone.value;


// console.log(string1.concat(' ', stringFirstName));



// Thanks for registering. You have created an account as <first name> <last name>.
// Your contact information:
//   Address: <street>, <state> <zip>.
//   Email: <email>
//   Phone: <phone></phone>

// // Dan. 
// // I implemented String.concat() without success. I'm only grabbing string1 in the console. 
// // 

// // 





