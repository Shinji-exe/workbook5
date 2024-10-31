const randomNumbers = [298, 754, 855, 413, 579, 932, 533, 64, 464, 344, 65, 636, 439, 903, 606, 205, 971, 743, 623];

function sortingAscending(a,b){
    if(a < b){
return -1 //A negative value indicates that a showuld come before b. 
    }else if(a == b){
return 0 //Zero or NaN indicates that a and b are considered equal.
    }else{
return 1 //A positive value indicates that a should come after b
    }
}

randomNumbers.sort(sortingAscending);
console.log(randomNumbers)

//OR

randomNumbers.sort(function(a,b){
    if(a < b){
        return -1
            }else if(a == b){
        return 0
            }else{
        return 1
            }
})

let altVersion = randomNumbers
console.log(altVersion)

//OR

randomNumbers.sort((a,b)=> a-b)
console.log(randomNumbers)