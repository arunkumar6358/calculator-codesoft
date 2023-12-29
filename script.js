document.addEventListener("DOMContentLoaded", function () {
    // Get the necessary elements
    const resultBox = document.querySelector(".resultbox input");
    const clearButton = document.getElementById("clearbtn");
    const buttons = document.querySelectorAll(".buttons input");
  
    // Add click event listeners to all buttons
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        handleButtonClick(button.value);
      });
    });
  
    // Handle button clicks
    function handleButtonClick(value) {
      if (value === "=") {
        calculateResult();
      } else if (value === "C") {
        clearResult();
      } else {
        updateResult(value);
      }
    }

    // Add click event listener to the clear button
    clearButton.addEventListener("click", function () {
      clearResult();
    });
    
    // Update the result box with the clicked button value
    function updateResult(value) {
      resultBox.value += value;
    }  
    
    // Clear the result box
    function clearResult() {
      resultBox.value = "";
    }
    
    // Calculate and display the result
    function calculateResult() {
      try {
        resultBox.value = eval(resultBox.value);
      } catch (error) {
        resultBox.value = "Error";
      }
    }
  });