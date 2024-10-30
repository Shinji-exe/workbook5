let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

    function whichMember(actor){
        return academyMembers.find((acting)=> acting.memID === actor)
    }

    let showActor = whichMember(187);
    console.log(showActor.name);

    function threeMovies(leastThree){
        return academyMembers.filter((action)=> action.films.length <= leastThree)
    }

    let showPeople = threeMovies(3);
    console.log(showPeople)

    function certainPerson(nameOfPerson){
        return academyMembers.find((person)=> person.name.includes(nameOfPerson))
    }

    let returnActor = certainPerson("Bob")
    console.log(returnActor)

    function letterA(letters){
        return academyMembers.find((theA)=> theA.films.some((theA)=>theA.includes(letters)))
    }

    let getA = letterA("A")
    console.log(getA)