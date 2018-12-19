function check() {
    document.getElementById('f1').innerHTML = document.userform.firstname.value;
    document.getElementById('f2').innerHTML = document.userform.lastname.value;
    document.getElementById('f3').innerHTML = document.userform.address.value;
    document.getElementById('f4').innerHTML = document.userform.city.value;
    document.getElementById('f5').innerHTML = document.userform.state.value;
    document.getElementById('f6').innerHTML = document.userform.zipcode.value;
    document.getElementById('f7').innerHTML = document.userform.phone.value;
    document.getElementById('f8').innerHTML = document.userform.EMail.value;


}



//         function allLetter(firstname)
//   {
//    var letters = /^[A-Za-z]+$/;
//    if(firstname.value.match(letters))
//      {
//       return true;
//      }
//    else
//      {
//      alert("message");
//      return false;
//      }
//   }


var verifyPswd = function () {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'MATCHING';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'NOT MATCHING';
    }
}

function validateEmail() {
    var emailID = document.userform.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.userform.EMail.focus();
        return false;
    }
    return (true);
}

// I need to verify lenght of zipcode and that it's numbers only. verify phone number, require all fields
// put requirements on password. make State abbreivations in a dropdown. 