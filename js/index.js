// Your code goes here

// Alert message on page load
const alertMessage = document.createElement('div');
alertMessage.classList.add('alert');
alertMessage.textContent = "Welcome to our web site. I hope you enjoy it!";

// Close Button for alert message
const closeAlert = document.createElement('span');
closeAlert.textContent = 'X';
closeAlert.classList.add('close');
alertMessage.append(closeAlert);

closeAlert.addEventListener('click', (event) => {
  alertMessage.classList.add('hidden');
})

window.addEventListener('load', (event) => {
  console.log('Page is loaded');
  document.body.prepend(alertMessage);
})


// Info box

const logo = document.querySelector('.logo-heading');
logo.style.position = 'relative';

const infoBox = document.createElement('div');
infoBox.classList.add('info-box');
logo.append(infoBox);


logo.addEventListener('mouseenter', (event) => {
  infoBox.textContent = event.target.dataset.info;
  infoBox.classList.add('visible');
})

logo.addEventListener('mouseleave', (event) => {
  infoBox.textContent = event.target.dataset.info;
  infoBox.classList.remove('visible');
})



// Button sign me up
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'black';
  })
})


// Navigation mouseover
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseover', event => {
    event.target.classList.add('active');
  });

  link.addEventListener('mouseout', event => {
    event.target.classList.remove('active');
  });
})



// Window resize
window.addEventListener('resize', event => {
  alert('You resized the window!');
})


// Form events
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', event => {
  event.preventDefault();
})

const formInputs = document.querySelectorAll('input[type="text"]');

formInputs.forEach(input => {
  input.addEventListener('focus', event => {
    event.target.style.backgroundColor = 'yellow';
  });

  input.addEventListener('blur', event => {
    event.target.style.backgroundColor = 'white';
  }) 
})
