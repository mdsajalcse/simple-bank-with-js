document.getElementById('btn-withdraw').addEventListener('click',function(e){
    e.preventDefault();
   
    const withDrawField=document.getElementById('withdraw-field');
    const newWithDrawFieldValueString=withDrawField.value;
    const newWithDrawFieldValue= parseFloat(newWithDrawFieldValueString);



    const withDrawFieldElement=document.getElementById('withdraw-total');
    const previousWithDrawFieldValueString=withDrawFieldElement.innerText;
    const previousWithDrawFieldValue=parseFloat(previousWithDrawFieldValueString);

    
    const currentWithDrawTotal=previousWithDrawFieldValue + newWithDrawFieldValue;

    withDrawFieldElement.innerText=currentWithDrawTotal;

    // balance total

    // const balanceFieldElement=document.getElementById('balance-total');
    // const previousTotalBalanceString=balanceFieldElement.innerText;
    // const previousTotalBalance=parseFloat(previousTotalBalanceString);

    // const currentBalanceTotal=previousTotalBalance+currentDepositTotal;
    // balanceFieldElement.innerText=currentBalanceTotal;




    
    depositField.value="";

