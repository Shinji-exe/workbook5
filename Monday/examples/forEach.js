//The forEach() method calls a function for each element in the array;
//- That function can "process" the element

//The forEach() method minimizes the need to write for loops

//Third was of for-loop

//example

let kids = [
    {first: "Nathan", last: "Myers"},
    {first: "Alec", last: "Trevelyn"},
    {first: "Sara", last: "Fields"},
    {first: "Maggie", last: "Powers"},
]

function displayKids(kidsArray){
    // console.log(arrays.first + " " + arrays.last)
    kidsArray.forEach(kid => {
        console.log(kid.first + " " + kid.last)
    })

    //OR
    // kidsArray.forEach((kid) => console.log(kid.first + " " + kid.last))
}

// kids.forEach(displayKids)

displayKids(kids)

// let 

//Some people love forEach(), while other people continue to write loops that iterate through arrays using for statements
// - You will see a mix of these in the rest of our workbooks

let kidsAltVersion = [
    { first : "Natalie", last : "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
    ];

    function displayKid(arrayElement) {
    console.log(arrayElement.first + " " + arrayElement.last);
    }

    kidsAltVersion.forEach(displayKid)

    kidsAltVersion.forEach(function (kid) {
        console.log(kid.first)
    })