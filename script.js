document.addEventListener("DOMContentLoaded", function() {
   const screen = document.getElementById("screen");
   const buttons = document.querySelectorAll("button");

   buttons.forEach(button => {
       button.addEventListener("click", function() {
           const value = this.textContent;
           if (value === "C") {
               clearScreen();
           } else if (value === "=") {
               calculate();
           } else {
               getInput(value);
           }
       });
   });

   function getInput(value) {
       screen.value += value;
   }

   function calculate() {
       try {
           screen.value = eval(screen.value);
       } catch {
           screen.value = "Error";
       }
   }

   function clearScreen() {
       screen.value = "";
   }
});
