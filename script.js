window.onload = function () {

  let display = document.getElementById("display");

  // Add value
  window.addValue = function(value) {
    display.value += value;
  };

  // Clear display
  window.clearDisplay = function() {
    display.value = "";
  };

  // Delete last character
  window.deleteLast = function() {
    display.value = display.value.slice(0, -1);
  };

  // Calculate result
  window.calculate = function() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  };

};
