//I will add input field text, so that users can easily input..

// I will show error message for no input

document.getElementById("save-btn").disabled = true;
//total expense 
function totalExpense() {
const incomeInput = document.getElementById('income-input').value;
const foodInput = document.getElementById('food-input').value;

const rentInput = document.getElementById('rent-input').value;
const clothesInput = document.getElementById('clothes-input').value;
const totalExpense = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);


const balance = incomeInput - totalExpense;  

if (isNaN(totalExpense)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Input Can't be empty!",
       
      });
    
    }

    //if totalExpense > income then show error alert

    else if (totalExpense > incomeInput) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have not enough income to expense!',
           
          });
    }
    else if (foodInput < 0 || rentInput < 0 || clothesInput < 0) {
 
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please input positive value!',
   
  });    
    }else{
        document.getElementById('total-expense').innerText = totalExpense; 

        //updating total balance after spending income money on expenses
        document.getElementById('balance').innerText = balance;
        }
        document.getElementById("save-btn").disabled = false;
        element = document.getElementById('save-btn').classList.add("btn-style");
    }





//clicking on calculate btn
document.getElementById("calculate-btn").addEventListener("click", function() {
    totalExpense();
  });

  //clicking on save button
document.getElementById("save-btn").addEventListener("click", function() {
    //saving amount input value
    
    const saveInput = document.getElementById('save-input').value;
    const incomeInput = document.getElementById('income-input').value;
    const savingAmount = incomeInput * (saveInput/100);

//Update: don't need to show error, I have disabled the button..
    //if income input is NaN show error alert here
    
   
    

    const balance = document.getElementById('balance').innerText;
    remainingBalance = parseFloat(balance) - savingAmount;
    //if balance is zero show error
    if (balance == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please calculate expenses first!',
           
          })
    }
    else if(savingAmount>remainingBalance){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have not enough money for savings!',
           
          })
            
        }    
    else{
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
   
  
    

  });