

document.addEventListener("DOMContentLoaded", function() {
    var tip_buttons = document.querySelectorAll(".tip-button");

    tip_buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        var bill = parseFloat(document.querySelector("input[name='bill']").value);
        var tipPercentage;

        if (this.id === "custom") {
          tipPercentage = parseFloat(document.querySelector("input[name='custom']").value) || 0; // Provide default value for custom tip
        } else {
          tipPercentage = parseFloat(this.textContent);
        }

        var no_of_people = parseInt(document.querySelector("input[name='people']").value);

        if (!isNaN(bill) && !isNaN(tipPercentage) && !isNaN(no_of_people) && no_of_people > 0) {
          var tip_amt_per_person = (tipPercentage / 100) * bill / no_of_people;
          var total_per_person = (bill / no_of_people) + tip_amt_per_person;

          var tipAmountText = document.querySelector(".disp_tip_amount");
          tipAmountText.textContent = "$" + tip_amt_per_person.toFixed(2);

          var totalText = document.querySelector(".disp_total_amount");
          totalText.textContent = "$" + total_per_person.toFixed(2);
        } else {
          // If any of the inputs are invalid or number of people is zero, clear the displayed values
          var tipAmountText = document.querySelector(".disp_tip_amount");
          tipAmountText.textContent = "";

          var totalText = document.querySelector(".disp_total_amount");
          totalText.textContent = "";
        }
      });
    });
});
