
document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();

const emailField=document.getElementById('email-field');
const email=emailField.value;
const passwordField=document.getElementById('password-field');
const password=passwordField.value;


  if(email==='test@sajal.com' && password==='sajal'){
    
    window.location.href ='bank.html';
    
  }
  else{
     alert("invalid password or email !!");
  }

})