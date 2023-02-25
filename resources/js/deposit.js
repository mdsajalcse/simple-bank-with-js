

document.getElementById('deposit-btn').addEventListener('click',function(event){
    event.preventDefault();
    const depositField = document.getElementById('deposit-field');
    const firstDeposit=depositField.value;
    
    const secondDeposit=doucment.getElementById('getdeposit');
    secondDeposit.innerText=firstDeposit;
    
    depositField.value="";



});