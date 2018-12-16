function check()
        {
            document.getElementById('f1').innerHTML = document.userform.firstname.value;
            document.getElementById('f2').innerHTML = document.userform.lastname.value;
            document.getElementById('f3').innerHTML = document.userform.address.value;
            document.getElementById('f4').innerHTML = document.userform.city.value;
            document.getElementById('f5').innerHTML = document.userform.state.value;
            document.getElementById('f6').innerHTML = document.userform.zipcode.value;
            document.getElementById('f7').innerHTML = document.userform.phone.value;
            document.getElementById('f8').innerHTML = document.userform.email.value;

            
        }

        var verifyPswd = function() {
            if (document.getElementById('password').value ==
                    document.getElementById('confirm_password').value) {
                    document.getElementById('message').style.color = 'green';
                    document.getElementById('message').innerHTML = 'MATCHING';
        } else {
                    document.getElementById('message').style.color = 'red';
                    document.getElementById('message').innerHTML = 'NOT MATCHING';
  }}    