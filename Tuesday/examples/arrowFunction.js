//ES6 introduces a shorthand notation for defining functions called arrow functions

//Without arrow function
// function add(number1, number2) {
//     //number1, number2 are parameters
//     let result = number1 + number2;
//     return result;
//   }
//   // 1. function keyword
//   // 2. function name
//   // 3. parenthesis() hold the parameters (input variables) separated by commas
//   // 4. curly braces are a code block and enclose the function body (the steps)

//   //calling a function
// //   let output = add(2, 2); //function name followed by parenthesis
//   //          <-------
//   //when called the function returns its output into the variable on the left
//   console.log(output); //4

let add = (number1, number2) => {
  //if function is more than one line curly braces ({}) are needed and the return keyword is neeeded
  let result = number1 + number2;
  return result;
};
//1.Delete function keyword, add arrow after the argument list
//2. remove the name, make the function anonymous
//3. assign arrow function into a variable

//calling a function
let output = add(2, 2); //function name followed by parenthesis
//          <-------
//when called the function returns its output into the variable on the left
console.log(output); //4

let addAlt = (number1, number2) => number1 + number2; //if function has only one line, curly brackets {} are NOT needed and the return keyword is NOT neeeded

//1.Delete function keyword, add arrow after the argument list
//2. remove the name, make the function anonymous
//3. assign arrow function into a variable

//calling a function
let outputAlt = addAlt(2, 2); //function name followed by parenthesis
//          <-------
//when called the function returns its output into the variable on the left
console.log(outputAlt); //4
