function check() {
    document.getElementById('f1').textContent = document.userform.firstname.value;
    document.getElementById('f2').textContent = document.userform.lastname.value;
    document.getElementById('f3').textContent = document.userform.address.value;
    document.getElementById('f4').textContent = document.userform.city.value;
    document.getElementById('f5').textContent = document.userform.state.value;
    document.getElementById('f6').textContent = document.userform.zipcode.value;
    document.getElementById('f7').textContent = document.userform.phone.value;
    document.getElementById('f8').textContent = document.userform.EMail.value;
    


// }
//         document.getElementsByClassName('button').target.addEventListener('submit', check());
  

   
    

    





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
        document.getElementById('message').textContent = 'MATCHING';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'NOT MATCHING';
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