
document.getElementById('login').addEventListener('click',function(){

const emailField=document.getElementById('email-field');
const passwordField=document.getElementById('password-field');
const email=emailField.value;
const password=passwordField.value;


  if(email==='test@gmail.com' && password==='sajal'){
    window.location.href ='bank.html';
  }
  else{
     alert("invalid password or email !!");
  }

})