"use strict"

//Finding many numbers/indexes that meet the condition. use .filter

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function isOver60(array){
    if(array > 60){
        return true
    }else{
        return false
    }
}

let findingsFilter = numbers.filter(isOver60)
console.log(findingsFilter)