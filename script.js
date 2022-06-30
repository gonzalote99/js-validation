import './style.css';


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cnfpassword = document.getElementById('cnfpassword');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cnfpasswordValue = cnfpassword.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'username blan');
  } else {
    setSuccessFor(username);
  }
  
  if (emailValue === '') {
    setErrorFor(email, 'email blank');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'mail invalid');
  }
  
  else {
    setSuccessFor(email);
  }

  if(passwordValue === '') {
    setErrorFor(password, 'password blank');
  } else {
    setSuccessFor(password);
  }

  if(cnfpasswordValue === '') {
    setErrorFor(cnfpassword, 'cnf blank');
  } else if (passwordValue!=cnfpassword) {
   setErrorFor(cnfpassword, 'no match');
  } else {
    setSuccessFor(cnfpassword);
  }

}

function setErrorFor(input,message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

