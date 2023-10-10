const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});



function checkInputs(){
  // get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if(usernameValue === '') {
    // show error
    // add error class
    setErrorFor(username, 'Username cannot be blank');
  } else{
    // add success class
    setSuccessFor(username);
  }


if(emailValue === '') {
    // show error
    // add error class
    setErrorFor(email, 'Email cannot be blank');
} else if(!isEmail(emailValue)) {
  setErrorFor(email, 'Email is not valid');
} else{
  setSuccessFor(email);
}
  
  if(passwordValue === '') {
    // show error
    // add error class
    setErrorFor(password, 'password cannot be blank');
  }else if(!isPassword(passwordValue)) {
  setErrorFor(password, ('password is not valid, it must be at least one letter uppercase or lowercase. At least one digit. At least one special character from the set @$!%*#?& and Minimum length of 8 characters'));
} else{
    // add success class
    setSuccessFor(password);
  }


  if(password2Value === '') {
    // show error
    // add error class
    setErrorFor(password2, 'confirm password cannot be blank');
  } else if(passwordValue !== passwordValue2){
  setErrorFor(password, ('password does not match'));
  }  else{
    // add success class
    setSuccessFor(password2);
  }
// show a success message
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;  // .form-control
  const small = formControl.querySelector('small');
  
  // add error message inside small
  small.innerText = message;
  
  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement; 
  formControl.className = 'form-control success';
}

function isEmail(email){
  return /^(?!\.)(?!.*\.\.)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(email);

}

function isPassword(password){
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)

}


