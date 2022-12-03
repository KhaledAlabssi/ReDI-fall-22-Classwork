const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.getElementById('ul')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let value = input.value
    input.value = ''
    if(!value) {
        alert("invalid inputs")
        return
    }
    let newE = document.createElement('li')
    newE.innerHTML = `
    <input onclick="done(this)" type="checkbox" id="check">
    <span class="yellow">${value}</span><i onclick="edit(this)" class="fa-regular fa-pen-to-square"></i
    ><i onclick="deleteItem(this)" class="fa-regular fa-trash-can"></i>
    `
    ul.appendChild(newE)

})

function done (e) {
    let ele = e.parentElement.children[1]
    ele.classList.toggle('done')

}
function deleteItem (e) {
    let ele = e.parentElement
    ele.remove()

}
function edit (e) {
    let eleValue = e.parentElement.children[1].textContent
    let ele = e.parentElement
    input.value = eleValue
    ele.remove()

}