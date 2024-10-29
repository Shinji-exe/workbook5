"use strict";

//Finding the first number/index that meets the condition. use .find()

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function findNumbersOver60(arrayIndexValue) {
  if (arrayIndexValue > 60) {
    return true;
  } else {
    return false;
  }
}

let findings = numbers.find(findNumbersOver60) 
console.log(findings)

/////////////////////////

function findTheNumber(arrayOfNumbers){
    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > 60){
            return arrayOfNumbers[i]
        }
    }
    return undefined
    }

    let callTheIndex = findTheNumber(numbers);
    console.log(callTheIndex)

    ////////////////////////////

// if(findings != undefined){
//     console.log(findings)
// }else{
//     console.log("No values over 60")
// }

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 60){
//         over60.push(numbers[i])
//     }
// }

// console.log(over60)