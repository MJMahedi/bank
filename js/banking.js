// handle deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the input  amount 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // Update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = parseFloat(previousDepositAmount + newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // update balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousbalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;



    // clear the deposit input field
    depositInput.value = '';
})


// handle with draw eventHandeler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;

    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceText);
    const newBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear withdraw input 
    withdrawInput.value = '';

})