document.getElementById('btn-withdraw').addEventListener('click',function(event){
    event.preventDefault();
// input field value
   const withDrawField=document.getElementById('withdraw-field');
   const withDrawFieldValueString=withDrawField.value;
   const withDrawFieldValue=parseFloat(withDrawFieldValueString);

 //value receieve
 const wField=document.getElementById('withdraw-field');
 const newWithDrawFieldValueString=wField.value;
 const newWithDrawFieldValue= parseFloat(newWithDrawFieldValueString);



 const withDrawFieldElement=document.getElementById('withdraw-total');
 const previousWithDrawFieldValueString=withDrawFieldElement.innerText;
 const previousWithDrawFieldValue=parseFloat(previousWithDrawFieldValueString);

 
 const currentWithDrawTotal=previousWithDrawFieldValue + newWithDrawFieldValue;

 withDrawFieldElement.innerText=currentWithDrawTotal;

 // balance total

 const balanceFieldElement=document.getElementById('balance-total');
 const previousTotalBalanceString=balanceFieldElement.innerText;
 const previousTotalBalance=parseFloat(previousTotalBalanceString);

 const currentBalanceTotal=previousTotalBalance-currentWithDrawTotal;
 balanceFieldElement.innerText=currentBalanceTotal;




 
 

   
//  input field refresh
   withDrawField.value="";

})