const container = document.getElementById("container")
const h1 = document.getElementsByTagName('h1')[0]

container.addEventListener("click", creatingP)



function creatingP () {
    let ele = document.createElement('p')
    ele.textContent = "text from function inside js"
    container.appendChild(ele)
}


