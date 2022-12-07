let list = document.getElementById('list')
let todoList = [{text: 'walk the dog', isDone: false}, 
    {text: "read teh book", isDone: true}, 
    {text: "cook the tea", isDone: true},
    {text: "eat the food", isDone: false},
]
// let mapped = todoList.map(i => {
//     if (i.text == "read teh book"){
//         i['isDone'] = true
//     }
//     return i
// })

let filtered = todoList.filter(i => {
    return i.isDone == false
})




todoList.push({text: 'clean the bath', isDone: false})
console.log(todoList);
console.log(filtered);


// let newArray = todos.filter((i) => {
//     return i != 'buy drinks'
// })




for (let i = 0; i < todoList.length; i++) {
    let listItem = document.createElement('li')
    listItem.innerHTML = `<li>${todoList[i].text}</li>`
    list.appendChild(listItem)
}

