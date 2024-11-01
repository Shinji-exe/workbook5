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

const friendSelector = document.getElementById("speciesSelector");

const speciesSelector2 = document.querySelector("#speciesSelector2");

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

function secondSelector() {
  let firstValue = friendSelector.value;
  for (let i = 0; i < spongebobCharacters.length; i++) {
    if (spongebobCharacters[i].friendGroup === firstValue) {
      let createOptions = document.createElement("option");
      createOptions.innerText = spongebobCharacters[i].name;
      createOptions.value = spongebobCharacters[i].name;
      speciesSelector2.appendChild(createOptions);
      console.log(friendSelector);
    }
  }
}

function filteringFriends() {
  let friendData = speciesSelector2.value;
  let filteredCharacters = spongebobCharacters.filter((character) => character.name === friendData);

  charactersTBody.innerHTML = "";

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

function filteringFriendsTwo() {
    let friendData = friendSelector.value;
    let filteredCharacters = spongebobCharacters.filter((character) => character.friendGroup === friendData);
  
    charactersTBody.innerHTML = "";
  
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

function buildRow(character) {
  //Helper

  let tr = charactersTBody.insertRow(); //makes a row calling the tBody called charactersTBody

  let td1 = tr.insertCell();
  td1.innerText = character.name;

  let td2 = tr.insertCell();
  td2.innerText = character.species;

  let td3 = tr.insertCell();
  td3.innerText = character.occupation;

  let td4 = tr.insertCell();
  td4.innerText = character.favoriteActivity;

  let td5 = tr.insertCell();
  td5.innerText = character.friendGroup;
}

function sortCharacters() {
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

sortCharacters();

function loadTable() {
  //
  for (let i = 0; i < spongebobCharacters.length; i++) {
    buildRow(spongebobCharacters[i]);
  }
}

loadTable();

///////////////////////////////////////////////////////////////////////////////////////
