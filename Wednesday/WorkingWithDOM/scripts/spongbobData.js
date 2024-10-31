const charactersTBody = document.getElementById("charactersTBody");
const rowElement = document.getElementById("rowElement");
const tBody = document.getElementById("body");
const ascendingOrder = document.querySelector("#ascendingOrder");
const descendingOrder = document.querySelector("#descendingOrder");

let friends = [
  "Main Characters",
  "Bikini Bottom Business Owners",
  "Educators",
  "Sports and Fitness Enthusiasts",
  "Teenagers of Bikini Bottom",
  "Superheroes",
  "Otherworldly Characters",
];

const spongebobCharacters = [
  {
    name: "SpongeBob SquarePants",
    species: "Sea Sponge",
    occupation: "Fry Cook",
    favoriteActivity: "Jellyfishing",
    friendGroup: "Main Characters",
  },
  {
    name: "Patrick Star",
    species: "Starfish",
    occupation: "Unemployed",
    favoriteActivity: "Eating and sleeping",
    friendGroup: "Main Characters",
  },
  {
    name: "Squidward Tentacles",
    species: "Octopus",
    occupation: "Cashier",
    favoriteActivity: "Playing the clarinet",
    friendGroup: "Main Characters",
  },
  {
    name: "Mr. Krabs",
    species: "Crab",
    occupation: "Restaurant Owner",
    favoriteActivity: "Counting money",
    friendGroup: "Bikini Bottom Business Owners",
  },
  {
    name: "Sandy Cheeks",
    species: "Squirrel",
    occupation: "Scientist/Inventor",
    favoriteActivity: "Karate and science experiments",
    friendGroup: "Main Characters",
  },
  {
    name: "Plankton",
    species: "Plankton",
    occupation: "Restaurant Owner",
    favoriteActivity: "Stealing the Krabby Patty formula",
    friendGroup: "Bikini Bottom Business Owners",
  },
  {
    name: "Mrs. Puff",
    species: "Pufferfish",
    occupation: "Boating School Instructor",
    favoriteActivity: "Teaching and avoiding SpongeBob",
    friendGroup: "Educators",
  },
  {
    name: "Gary the Snail",
    species: "Snail",
    occupation: "Pet",
    favoriteActivity: "Meowing and eating",
    friendGroup: "Main Characters",
  },
  {
    name: "Larry the Lobster",
    species: "Lobster",
    occupation: "Lifeguard",
    favoriteActivity: "Weightlifting and staying fit",
    friendGroup: "Sports and Fitness Enthusiasts",
  },
  {
    name: "Karen Plankton",
    species: "Computer",
    occupation: "Plankton's Wife/Assistant",
    favoriteActivity: "Calculating and assisting Plankton",
    friendGroup: "Bikini Bottom Business Owners",
  },
  {
    name: "Pearl Krabs",
    species: "Whale",
    occupation: "Student",
    favoriteActivity: "Shopping and hanging out with friends",
    friendGroup: "Teenagers of Bikini Bottom",
  },
  {
    name: "Mermaid Man",
    species: "Human",
    occupation: "Retired Superhero",
    favoriteActivity: "Fighting crime",
    friendGroup: "Superheroes",
  },
  {
    name: "Barnacle Boy",
    species: "Human",
    occupation: "Retired Superhero Sidekick",
    favoriteActivity: "Being grumpy",
    friendGroup: "Superheroes",
  },
  {
    name: "Flying Dutchman",
    species: "Ghost",
    occupation: "Ghostly Pirate",
    favoriteActivity: "Scaring people and collecting souls",
    friendGroup: "Otherworldly Characters",
  },
  {
    name: "Bubble Buddy",
    species: "Bubble",
    occupation: "Friend of SpongeBob",
    favoriteActivity: "Floating around and having fun",
    friendGroup: "Main Characters",
  },
];

// function sortingObject(a, b) {
//   if (ascendingOrder.checked) {
//     if (a.name < b.name) {
//       return -1;
//     } else if (a.name == b.name) {
//       return 0;
//     } else {
//       return 1;
//     }
//   }
// }

// let bringName = spongebobCharacters.sort(sortingObject);
// console.log(bringName);

// function buildTableRow(character) {}

// for (let i = 0; i < spongebobCharacters.length; i++) {

//   let tr = document.createElement("tr"); //table row
//   charactersTBody.appendChild(tr)

//   let td1 = document.createElement("td"); //cell
//   td1.innerText = spongebobCharacters[i].name;
//   tr.appendChild(td1);
//   console.log(td1)

//   let td2 = document.createElement("td"); //cell
//   td2.innerText = spongebobCharacters[i].species;
//   tr.appendChild(td2)
//   console.log(td2)

//   let td3 = document.createElement("td"); //cell
//   td3.innerText = spongebobCharacters[i].occupation;
//   tr.appendChild(td3)
//   console.log(td3)

//   let td4 = document.createElement("td"); //cell
//   td4.innerText = spongebobCharacters[i].favoriteActivity;
//   tr.appendChild(td4)
//   console.log(td4)
// }

// function buildTable(characters) {
//   //Helper
//   for (let i = 0; i < spongebobCharacters.length; i++) {
//     // let tr = document.createElement("tr"); //table row
//     // let td = document.createElement("td"); //cell
//     // td.innerText = characters[i].name;
//     // tr.appendChild(td);
//     // tBody.appendChild(tr);
//     // console.log(tr);

//     let tr = document.createElement("tr"); //table row
//     charactersTBody.appendChild(tr);

//     let td1 = document.createElement("td"); //cell
//     td1.innerText = characters[i].name;
//     tr.appendChild(td1);
//     console.log(td1);

//     let td2 = document.createElement("td"); //cell
//     td2.innerText = characters[i].species;
//     tr.appendChild(td2);
//     console.log(td2);

//     let td3 = document.createElement("td"); //cell
//     td3.innerText = characters[i].occupation;
//     tr.appendChild(td3);
//     console.log(td3);

//     let td4 = document.createElement("td"); //cell
//     td4.innerText = characters[i].favoriteActivity;
//     tr.appendChild(td4);
//     console.log(td4);
//   }
// }
// buildTable(spongebobCharacters);

//This code and function below is the short way

const friendSelector = document.getElementById("speciesSelector");
// const speciesSelector2 = document.querySelector("#speciesSelector2");

// function pick() {
//   // let letFirstvalue = speciesSelector.value;
//   speciesSelector.innerHTML = ""
//   for (let i = 0; i < spongebobCharacters.length; i++) {
//     // if(spongebobCharacters[i].species === letFirstvalue){
//     let createOptions = document.createElement("option");
//     createOptions.innerText = spongebobCharacters[i].friendGroup;
//     createOptions.value = spongebobCharacters[i].friendGroup;
//     speciesSelector.appendChild(createOptions);
//     // }
//   }
// }

// pick();

function filterByFriendGroup() {
  for (let i = 0; i < friends.length; i++) {
    let createOptions = document.createElement("option");
    createOptions.innerText = friends[i];
    createOptions.value = friends[i];
    friendSelector.appendChild(createOptions);
    console.log(friendSelector);
  }
}

filterByFriendGroup();

function filteringFriends() {
  let friendData = friendSelector.value;
  let filteredCharacters = spongebobCharacters.filter((character) => character.friendGroup === friendData);

  charactersTBody.innerHTML = ""

  for (let i = 0; i < filteredCharacters.length; i++) {
    let tr = charactersTBody.insertRow(); //makes a row calling the tBody called charactersTBody

    let td1 = tr.insertCell();
    td1.innerText = filteredCharacters[i].name;

    let td2 = tr.insertCell();
    td2.innerText = filteredCharacters[i].species;

    let td3 = tr.insertCell();
    td3.innerText = filteredCharacters[i].occupation;

    let td4 = tr.insertCell();
    td4.innerText = filteredCharacters[i].favoriteActivity;

    let td5 = tr.insertCell();
    td5.innerText = filteredCharacters[i].friendGroup;
  }
}

function buildTableAltVersion(characters) {
  //Helper

  let tr = charactersTBody.insertRow(); //makes a row calling the tBody called charactersTBody

  let td1 = tr.insertCell();
  td1.innerText = characters.name;

  let td2 = tr.insertCell();
  td2.innerText = characters.species;

  let td3 = tr.insertCell();
  td3.innerText = characters.occupation;

  let td4 = tr.insertCell();
  td4.innerText = characters.favoriteActivity;

  let td5 = tr.insertCell();
  td5.innerText = characters.friendGroup;
}

// let friendData = friendSelector.value;
// let filteredCharacters = spongebobCharacters.filter((character)=> character.friendGroup === friendData)

function loadCharacterTables() {
  spongebobCharacters.sort((characterA, characterB) => {
    // return characterA.name - characterB.name; //Numerical
    if (characterA.name < characterB.name) {
      return -1;
    } else if (characterA.name == characterB.name) {
      return 0;
    } else {
      return 1;
    }
  });
}

loadCharacterTables();

for (let i = 0; i < spongebobCharacters.length; i++) {
  buildTableAltVersion(spongebobCharacters[i]);
}

///////////////////////////////////////////////////////////////////////////////////////

// function getSpecies() {
//    speciesSelector2.innerHTML = "";
//   let getTheSpecies = speciesSelector.value;
//   for (let i = 0; i < spongebobCharacters.length; i++) {
//     if (spongebobCharacters[i].species === getTheSpecies) {
//       let createOptions = document.createElement("option");
//       createOptions.innerText = spongebobCharacters[i].name;
//       createOptions.value = spongebobCharacters[i].name;
//       speciesSelector2.appendChild(createOptions);
//     }
//   }
// }

// function showFilteredData(array) {
//   let filtered = speciesSelector2.value;
//   let selectedData;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].species === filtered) {
//      return selectedData = array[i];
//     }else{
//       return false
//     }
//   }
// }

// let findings =

// spongebobCharacters.sort(function (playerA, playerB) {
//   return playerA.threePointPercentage - playerB.threePointPercentage; //OR playerB.threePointPercentage - playerA.threePointPercentage switch between ascending or descending
// });
