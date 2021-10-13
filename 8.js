const doOperations = (a, b, type) => {
  let result;
  type = prompt("Enter operator : +, - or * :");
   a = parseFloat(prompt("Enter the first number "));
   b = parseFloat(prompt("Enter the second number: "));
  switch (type) {
    case "+":
      result = a + b;
      console.log(`${a} * ${b} = ${result}`);
      break;
    case "-":
      result = a - b;
      console.log(`${a} * ${b} = ${result}`);
      break;
    case "*":
      result = a * b;
      console.log(`${a} * ${b} = ${result}`);
      break;
    default:
      console.log("invalid operator found");
      break;
  }
};
doOperations()