const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementById('submit');
const form = document.querySelector('form'); 
const nameErrorElement = document.getElementById('nameErrorMessage');
const subjectErrorElement = document.getElementById('subjectErrorMessage');
const emailErrorElement = document.getElementById('emailErrorMessage');
const messageErrorElement = document.getElementById('messageErrorMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  let isValid = true; 

  if (name.value.length < 6) {
    nameErrorElement.innerHTML = 'Name must be more than 5 characters';
    isValid = false; 
  } else {
    nameErrorElement.innerHTML = '';
  }

  if (subject.value.length < 15) {
    subjectErrorElement.innerHTML = 'Subject should be more than 15 characters long';
    isValid = false; 
  } else {
    subjectErrorElement.innerHTML = '';
  }
    
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email.value)) {
    emailErrorElement.innerHTML = 'Enter a valid email address';
    isValid = false; 
  } else {
    emailErrorElement.innerHTML = '';
  }

  if (message.value.length < 25) {
    messageErrorElement.innerHTML = 'Message should be more than 25 characters long';
    isValid = false; 
  } else {
    messageErrorElement.innerHTML = '';
  }

  if (isValid) {
       form.submit();
  }
});
