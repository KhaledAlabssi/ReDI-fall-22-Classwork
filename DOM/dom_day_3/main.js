const input = document.getElementById("input")
const button = document.getElementById("button")
const list = document.getElementById("list")

button.addEventListener("dbclick", function() {
    let value = input.value
    if(!value){
        return
    }
    const newEle = document.createElement("li")
    newEle.textContent = value
    newEle.classList.add("dark")
    newEle.id = "i" + list.childElementCount
    input.value = ''
    list.appendChild(newEle)
    newEle.addEventListener("click", function() {
        newEle.remove()
    })
    
})
