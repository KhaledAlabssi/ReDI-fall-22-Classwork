// Exercise 1

// Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1)
// and return "Hello" + name if num is 1, otherwise return "Bye" + name.

// Examples
// sayHelloBye("alon", 1) ➞ "Hello Alon"

// sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

// sayHelloBye("jose", 0) ➞ "Bye Jose"
// Notes
// The name you return must be capitalized.

function sayHelloBye (t, n) {
    t = t[0].toUpperCase() + t.slice(1).toLowerCase()
    let result = n == 1? `Hello ${t}` : `Bye ${t}`
    return result
}
// console.log(sayHelloBye("kddddd", 0));

// =========================================

// Exercise 2

// Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2)
// as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

// Each argument will contain a single string: "Rock", "Paper", or "Scissors".
// Return the winner according to the following rules:

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If p1 wins, return the string "The winner is p1". If p2 wins, return the string
// "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

// Examples
// rps("Rock", "Paper") ➞ "The winner is p2"

// rps("Scissors", "Paper") ➞ "The winner is p1"

// rps("Paper", "Paper") ➞ "It's a draw"
// Notes
// All inputs will be valid strings.

function rps (p1, p2) {
    let result
    if (p1 == "Rock"){
        if(p2 == "Paper") {
            result = 'The winner is p2'
            return result
        } else if (p2 == "Scissors") {
            result = 'The winner is p1'
            return result
        } else {
            result = "It's a draw"
            return result
        }

    } else if (p1 == "Paper") {
        if (p2 == "Rock"){
            result = "The winner is p1"
            return result
        } else if (p2 == "Scissors") {
            result = "The winner is p2"
            return result
        } else {
            result = "It's a draw"
            return result
        } 
    }else {
        if (p2 == "Rock") {
            result = "The winner is p2"
            return result
        } else if (p2 == "Paper") {
            result = "The winner is p1"
            return result
        } else {
            result = "It's a draw"
            return result
        }
    }
}

// console.log(rps("Scissors", "Rock"));

// =========================================
// Exercise 3 with map

// Make an array of strings of the names
// function namesOnly(arr){
//   // your code here
// }

let namesOnly =[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; 
let namesArray = namesOnly.map(i => i.name)

// console.log(namesArray);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// =========================================
// Exercise 4 with Filter

// Given an array of people objects, return a new array
// that has filtered out all those who don't belong to the club.
// function peopleWhoBelongToTheIlluminati(arr){
  // your code here
// }
// test
let peopleWhoBelongToTheIlluminati = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

let clubPeople = peopleWhoBelongToTheIlluminati.filter(i => i.member == true)
// console.log(clubPeople);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]


// =========================================
// Exercise 5 with reduce

// Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//    // your code here    
// }

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let trueVoters = voters.reduce((acc, cur) => {
    let count = 0
    if(cur.voted) {
        count = 1
    }
    return acc += count
}, 0)

// console.log(trueVoters);
// console.log(totalVotes(voters)); // 7
// =========================================


// Exercise 6:

// Write a JavaScript program to display the current day and 
// time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let time = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let t = new Date()
    console.log(t);
    console.log(`Today is : ${days[t.getDay()]}`);
    console.log(`Current time is: ${t.toLocaleTimeString()}`);
}
// time()

// =========================================

// Exercise 7: 

// Write a JavaScript program to rotate the string 'frontend' in right 
// direction by periodically removing one letter from the end of the 
// string and attaching it to the front.  Go to the editor

function rotate (s) {
    let firstLetter = s[0]
    let result = s.slice(1) + firstLetter
    console.log(result);
    return result
}
// let firstResult = rotate("Divya")
// rotate(firstResult)
// console.log(firstResult);

function rotateV2 (s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
       
        result += s[s.length - (i + 1)]
                
    }
    console.log(result);
}

// rotateV2("frontend")
// =========================================

// Exercise 8:

// Write a JavaScript function to add rows to a table.


// =========================================
const table = document.getElementById('table')
const newItem = document.createElement('tr')
newItem.innerHTML = `

<td>JavaScript</td>
<td>30</td>
<td>sara@email.com</td>

`

// table.appendChild(newItem)