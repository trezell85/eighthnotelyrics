const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpass = document.getElementById('confirmpass');

form.addEventListener('signup-btn', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const firstnameValue = firstname.value.trim(); //trim to remove the white space
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpassValue = confirmpass.value.trim();

  if (firstnameValue === '') {
    setErrorFor(firstname, 'First name cannot be blank');
  } else {
    setSuccessFor(firstname);
  }
  if (lastnameValue === '') {
    setErrorFor(lastname, 'Last name cannot be blank');
  } else {
    setSuccessFor(lastname);
  }
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }
  if (confirmpassValue === '') {
    setErrorFor(confirmpass, 'Password cannot be blank');
  } else if (confirmpassValue !== confirmpassValue) {
    setErrorFor(confirmpass, 'Passwords does not match');
  } else {
    setSuccessFor(confirmpass);
  }
}
function setErrorFor(input, message) {
  const inputBox = input.parentElement;
  const small = document.getElementById('small');
  small.innerText = message;
  inputBox.className = 'inputBox error';
}
function setSuccessFor(input) {
  const inputBox = input.parentElement;
  inputBox.className = 'inputBox success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
