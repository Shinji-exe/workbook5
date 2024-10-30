//The map() function is used to transform (or map) elements from one array into elements in a new array

//To do this, map() iterates over each element in the array and passes the current element to a transform function

//Array of objects that represent a kid
let kids = [
    { first : "Natalie", last : "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly", martial: "Mr"}
    ];

    //array of string that represents the fullname of a kid
    let kidsname = kids.map(function (kid){
return kid.first + kid.last
    })

    console.log(kidsname)

    // function(){

    // }

    // ()=>{

    // }