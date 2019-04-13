// Your code goes here

const alertMessage = document.createElement('div');
alertMessage.classList.add('alert');
alertMessage.textContent = "Welcome to our web site. I hope you enjoy it!";

const closeAlert = document.createElement('span');
closeAlert.textContent = 'X';
closeAlert.classList.add('close');
alertMessage.append(closeAlert);


window.addEventListener('load', (event) => {
  console.log('Page is loaded');
  document.body.prepend(alertMessage);
})

closeAlert.addEventListener('click', (event) => {
  alertMessage.classList.add('hidden');
})
