

document.getElementById('deposit-btn').addEventListener('click',function(e){
    e.preventDefault();
    const depositField=document.getElementById('deposit-field');
    const newDepositFieldValueString=depositField.value;
    const newDepositFieldValue= parseFloat(newDepositFieldValueString);



    const depositFieldElement=document.getElementById('deposit-total');
    const previousDepositFieldValueString=depositFieldElement.innerText;
    const previousDepositFieldValue=parseFloat(previousDepositFieldValueString);

    
    const currentDepositTotal=previousDepositFieldValue + newDepositFieldValue;

    depositFieldElement.innerText=currentDepositTotal;

    
    depositField.value="";


    



});