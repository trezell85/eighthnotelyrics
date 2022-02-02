const loginForm = document.querySelector('#linkLogin');
const createAccountForm = document.querySelector('#linkCreateAccount');
const signin = document.querySelector('.signinDiv');
const signup = document.querySelector('.signupDiv');
createAccountForm.addEventListener('click', () => {
  signin.classList.remove('hidden');
  signup.classList.add('hidden');
  console.log('linkCreateAccount');
});
loginForm.addEventListener('click', () => {
  signin.classList.add('hidden');
  signup.classList.remove('hidden');
  console.log('loginForm');
});

const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('signIn-error');
const submit = document.getElementById('signIn-btn');
let emailCheck = localStorage.getItem('email');
let passwordCheck = localStorage.getItem('password');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (email.value === '' || email.value == null) {
    messages.push('Email is required.');
  } else if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters.');
  } else if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(' ');
  } else if (emailCheck == email.value && passwordCheck == password.value) {
    window.location = 'explore.html';
  } else {
    messages.push('Email or Password is Invalid');
  }
  e.preventDefault();
  errorElement.innerText = messages.join(' ');
});

const emailSignUp = document.getElementById('emailSignUp');
const passwordSignUp = document.getElementById('passwordSignUp');
const confirmpass = document.getElementById('confirmpass');
const formSignUp = document.getElementById('formSignUp');
const errorElementSignUp = document.getElementById('signUp-error');

formSignUp.addEventListener('submit', (e) => {
  let messagesSignUp = [];
  if (emailSignUp.value === '' || emailSignUp.value == null) {
    messagesSignUp.push('Email is required.');
  } else if (passwordSignUp.value.length <= 6) {
    messagesSignUp.push('Password must be longer than 6 characters.');
  } else if (passwordSignUp.value !== confirmpass.value) {
    messagesSignUp.push('Passwords do not match.');
  } else {
    localStorage.setItem('email', emailSignUp.value);
    localStorage.setItem('password', passwordSignUp.value);
    window.location = 'explore.html';
  }
  e.preventDefault();
  errorElementSignUp.innerText = messagesSignUp.join(' ');
});
