

document.addEventListener("DOMContentLoaded", function() {
    let tip_buttons = document.querySelectorAll(".tip-button");
    let errorLabel = document.querySelector(".error");
    let inputField = document.querySelector("input[name='people']");
    let billInput = document.querySelector("input[name='bill']");
    let customTipInput = document.querySelector(".tip-custom");

    tip_buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            let tipPercentage;
            let no_of_people = parseInt(inputField.value);

            if (no_of_people < 1) {

                errorLabel.style.display = 'block';
                inputField.style.border = '2px solid red';
                return;
            }

            errorLabel.style.display = 'none';
            inputField.style.border = 'none';

            if (this.id === "custom-tip") {
                tipPercentage = parseFloat(customTipInput.value);
            } else {
                tipPercentage = parseFloat(this.textContent);
            }

            let bill = parseFloat(billInput.value);

            console.log("Bill:", bill);
            console.log("Tip Percentage:", tipPercentage);
            console.log("Number of People:", no_of_people);

            if (!isNaN(bill) && !isNaN(tipPercentage) && !isNaN(no_of_people) && no_of_people > 0) {
                let tip_amt_per_person = (tipPercentage / 100) * bill / no_of_people;
                let total_per_person = (bill / no_of_people) + tip_amt_per_person;

                console.log("Tip Amount per Person:", tip_amt_per_person);
                console.log("Total Amount per Person:", total_per_person);

                let tipAmountText = document.querySelector(".disp_tip_amount");
                tipAmountText.textContent = "$" + tip_amt_per_person.toFixed(2);

                let totalText = document.querySelector(".disp_total_amount");
                totalText.textContent = "$" + total_per_person.toFixed(2);
            }
        });
    });

    let resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function() {


        billInput.value = "";
        customTipInput.value = "";
        inputField.value = "";
        errorLabel.style.display = 'none';
        inputField.style.border = 'none';
        let tipAmountText = document.querySelector(".disp_tip_amount");
        tipAmountText.textContent = "$0.00";
        let totalText = document.querySelector(".disp_total_amount");
        totalText.textContent = "$0.00";
    });
});


let inputs= document.querySelectorAll('input');
let clears= document.querySelector(".reset");
let tipAmountText = document.querySelectorAll(".disp_tip_amount");
let totalText = document.querySelectorAll(".disp_total_amount");


clears.addEventListener('click', ()=>{inputs.forEach( input => input.value = ''); });

clears.addEventListener('click', ()=>{tipAmountText.forEach(element => element.textContent = "");});

clears.addEventListener('click', ()=>{tipAmountText.forEach(element => element.textContent = "$0.00");});

clears.addEventListener('click', ()=>{totalText.forEach(element => element.textContent = "$0.00");});
