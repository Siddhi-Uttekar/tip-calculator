document.addEventListener("DOMContentLoaded", function() {
  let tip_buttons = document.querySelectorAll(".tip-button");
  let errorLabel = document.querySelector(".error");
  let inputField = document.querySelector("input[name='people']");


  tip_buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          let bill = parseFloat(document.querySelector("input[name='bill']").value);


          let tipPercentage;

          if (this.id === "custom-tip") {
              tipPercentage = parseFloat(document.querySelector("input[placeholder='CUSTOM']").value); // Provide default value for custom tip
          } else {
              tipPercentage = parseFloat(this.textContent);
          }

          let no_of_people = parseInt(inputField.value);

          if (no_of_people < 1) {
              // Show the error label and highlight the input field
              errorLabel.style.display = 'flex';
              inputField.style.border = '2px solid red';
          } else {
              // Hide the error label and reset the input field style
              errorLabel.style.display = 'none';
              inputField.style.border = 'none';

              if (!isNaN(bill) && !isNaN(tipPercentage) && !isNaN(no_of_people) && no_of_people > 0) {
                  let tip_amt_per_person = (tipPercentage / 100) * bill / no_of_people;
                  let total_per_person = (bill / no_of_people) + tip_amt_per_person;

                  let tipAmountText = document.querySelector(".disp_tip_amount");
                  tipAmountText.textContent = "$" + tip_amt_per_person.toFixed(2);

                  let totalText = document.querySelector(".disp_total_amount");
                  totalText.textContent = "$" + total_per_person.toFixed(2);
              }
          }
      });
  });

  let buttons = document.querySelectorAll('.tip-button');

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Reset styles for all buttons
        buttons.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
            btn.style.fontFamily = "";
        });

        // Apply styles for the clicked button
        this.style.backgroundColor = "hsl(185, 41%, 84%)";
        this.style.color = "hsl(183, 100%, 15%)";
        this.style.fontFamily = "Space Mono, monospace";
    });

  





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
