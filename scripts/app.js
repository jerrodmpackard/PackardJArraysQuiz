let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");
let question5 = document.getElementById("question5");
let question5b = document.getElementById("question5b");
let extraCredit1 = document.getElementById("extraCredit1");
let extraCredit2 = document.getElementById("extraCredit2");

let people;

async function getData() {
    const promise = await fetch("../data/quizdata.json");

    const data = await promise.json();

    people = data.People;

    console.log(people);

    return people;
};

getData();

// async function getPeopleAge() {
//     const promise = await fetch("../data/quizdata.json");

//     const data = await promise.json();

//     peopleAge = data.People.age;

//     console.log(peopleAge);

//     return people;
// }

// getPeopleAge();

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].age);
// }

// people.forEach(person => console.log(person));

// console.log(people.age);