//The sort() method sorts an array alphabetically
//- By default, sort() method sorts the values in a ascending order as strings.

//Example

let kids = ["Natalie", "Brittany", "Zachary"];
kids.sort(); // Sorts the array
let numKids = kids.length;
for (let i = 0; i < numKids; i++) {
  console.log(kids[i]);
}

//BUT this doesn't work if an array contains numbers

//Example

// let number = [3,27,400,1,111,5]
// number.sort()
// console.log(number)

//To sort arrays of numbers, you have to provide a helper method that assist the sort() method.
//-The helper function is called repetitively pairs of adjacent elements

//-It should return:
//a negative number if the elements are in the right order
//0 if the elements are the same
//a positive number if the elements need to be swapped

//You can use a named function and pass the sort function the named function

//Example
//Sorting numbers in an array in ASCENDING order

let numbers = [3, 27, 400, 1, 111, 5];

function compareAscendingNumber(a, b) {
  if (a < b) {
    return -1; //right order
  } else if (a == b) {
    return 0; //same value
  } else {
    return 1; //swap, wrong order
  }
}

numbers.sort(compareAscendingNumber);

console.log(numbers);

//OR
// anonymous function and pass the function expression

//Example - anonymous function

let numbers2 = [3, 27, 400, 1, 111, 5];

numbers2.sort(function (a, b) {
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
});

console.log(numbers2);

//If you want a descending numeric sort(), reverse your logic
// -Swap if a < b

//Example

//Sort numbers in an array in DESCENDING order

let numbers3 = [3, 27, 400, 1, 111, 5];

function compareDescendingNumber(a, b) {
  if (a > b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
}

numbers3.sort(compareDescendingNumber);
console.log(numbers3);

//Example - anonymous function
numbers3.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
});

console.log(numbers3);

//You can shorthand the comparison function for a numeric sort by taking advantage of math
//-If a-b is negative number, they are in the right order so do swap the numbers

//Sort numbers in an array in ASCENDING order
let numbers4 = [7,1,9,4,11,90,12,6]
function compareAscendingNumberShort(a,b){
    return a-b
}

numbers4.sort(compareAscendingNumberShort)
console.log(numbers4)

//Sort numbers in a DESCENDING order.
let numbers5 = [7,1,9,4,11,90,12,6]
function compareDescendingNumberShort(a,b){
    return b-a
}
numbers5.sort(compareDescendingNumberShort)
console.log(numbers5)
