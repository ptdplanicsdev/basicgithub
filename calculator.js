function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
  }
  
  console.log("Add:", add(5, 3));
  console.log("Subtract:", subtract(5, 3));
  console.log("Multiply:", multiply(5, 3));
  console.log("Divide:", divide(5, 3));