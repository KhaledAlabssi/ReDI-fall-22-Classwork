const button = document.getElementById('button')
const input = document.getElementById('input')
const list = document.getElementById('list')

button.addEventListener("click", function() {
    let value = input.value
    if(!value) {
        alert("No value been found")
        return
        
    }
    input.value = ''
    let n = document.createElement("li")
    n.innerHTML = `
        ${value} <button class="l-btn" onclick="">x</button>
    `
    list.appendChild(n)
    n.childNodes[1].addEventListener('click', function(e) {
        e.currentTarget.parentElement.remove()
    })
    n.addEventListener("click", function() {
        n.classList.add("done")
    })
    

})