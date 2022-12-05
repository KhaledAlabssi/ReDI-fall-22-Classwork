// MAP: 

// let cars = ["a", "b", "c", "d"]
// let newArray = cars.map((i) => {
//     if (i == 'b'){
//         i = "Divya's question"
//     }
//    return "Car name: " + i
// })
// console.log(newArray);

// let secNewArray = cars.map(function(i) {
//     if (i == 'b'){
//         i = "Divya's question"
//     }
//    return "Car name: " + i

// })
// console.log(secNewArray);

// console.log(cars);
// console.log(newArray);
// --------------------------------

// for (let i = 0; i < cars.length; i++) {
//     console.log(i);

// }

// cars.forEach(function(i) {
//     console.log(i);
// })
// --------------------------------

// Make an array of numbers that are doubles of the first array

// let a = [3, 5, 7, 9];
// console.log(a);
// let b = a.map((i) => {
//   return i + i;
// });
// console.log(b);

// function c(array) {
//   let result = array.map((i) => {
//     return i * 2;
//   });
//   console.log(result);
// }

// c(b);
// --------------------------------

// Take an array of numbers and make them strings
// let firstArray = [3, 5, 7, 9];
// console.log(firstArray);
// let secondArray = firstArray.map((i) => {
//     return String(i) //i.toString()
// })

// console.log(secondArray);
// function thirdArray (array) {
//     let result = array.map((i) => {
//         return i.toString()
//     })
//     console.log(result)
// }
// thirdArray(firstArray)
// --------------------------------
// Capitalize each of an array of names

// let names = ["ali", "MARIA", "irene"]

// let captNames = names.map(i => {
//     return i[0].toUpperCase() + i.slice(1).toLowerCase()
// })
// console.log(captNames);

//=============================================================================
// FILTER:

// let numbers = [33, 21, 99, 107, 511]

// let underHundred = numbers.filter(i => {
//     return i < 100
// })

// console.log(underHundred);

// --------------------------------

// Given an array of numbers, return a new array that only includes the even numbers.

// let numbers = [13, 18, 27, 48, 77, 90]
// let even = numbers.filter(i => {
//     return (i % 2 == 0)
// })

// console.log(even);
// let newEven = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element % 2 == 0) {
//         newEven.push(element)
//         continue
//     }
    
// }
// console.log(newEven);

// --------------------------------

// let employee = [
//     {name: "Sarah", salary: 220},
//     {name: "John", salary: 218},
//     {name: "Bob", salary: 222},
//     {name: "Mike", salary: 220},
// ]
// let kickOut = employee.filter(i => {
//     return i['salary'] > 220
// })
// console.log(kickOut);
// ----------------------------------
// REDUCE

// let array = [4, 6, 8, 11, 13]

// let total = array.reduce(function(acc, curr) {
//     let even = 0;
//     if(curr % 2 == 0) {
//         even = curr
//     }
//     return acc += even

// }, 0)

// console.log(total);

// let array = [3, 45, 3, 1, 98, 8, 7, 3, 45, 3, 1, 98, 8, 7]

// let newArray = array.reduce(function(acc, cur) {
//     // let a = (acc += cur)
//     // return a.toString()
//     return acc += cur

// }, '')
// console.log(newArray);
// =========================================================
// Destructuring

// let name = ["Sarah", "Mike", "John"]
// const per1 = name[0]
// const per2 = name[1]
// const per3 = name[2]

// const [p1, p2, p3] = name
// -----------------------------
const car = {
    name: 'civic',
    color: "white", 
    power: 306,
    brand: "Honda"
}

let name = car.name
let {color, power, brand} = car