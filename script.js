 function T1() {
        let a = new Date();
        window.alert(a.getFullYear());
      }
      function T2() {
        let b = new Date();
        window.alert(b.getMonth());
      }
      function T3() {
        let c = new Date();
        window.alert(c.getDay());
      }
      function T4() {
        let d = new Date();
        window.alert(d.getHours());
      }
      function T5() {
        let e = new Date();
        window.alert(e.getMinutes());
      }

      var a = new Date();
      document.write(a.get());
      let display = document.getElementById("display");
      // Add value to display
      function addValue(value) {
        display.value = display.value + value;
      }
      // Clear display
      function clearDisplay() {
        display.value = "";
      }
      // Delete last character
      function deleteLast() {
        display.value = display.value.slice(0, -1);
      }
      // Calculate result
      function calculate() {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      }