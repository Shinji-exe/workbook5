let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

function cheapCandy(price) {
  return products.filter((candies)=> candies.price < price);
}

let underFour = cheapCandy(4);
console.log(underFour);

function certainName(name){
    return products.filter((candy) => candy.product.includes(name))
}

let findingMandMs = certainName("M&Ms")
console.log(findingMandMs)

function swedish(fish){
return products.find((candy)=> candy.product === fish)
}

let foundFish = swedish("Swedish Fish");
console.log("Yes we have: " + foundFish.product);

////////////////////////////////New version with map and forEach

// function displayCandies(candys){
//     if(candys <= 4){
//         candys.forEach(candy => {
//             console.log(candy)
//         })
//     }
// }

// displayCandies(products)