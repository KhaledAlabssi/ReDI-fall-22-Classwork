const btn = document.getElementById("btn");
const body = document.body;
const title = document.getElementById("title")
let isDark = false
btn.addEventListener("click", function() {
    if(isDark == false) {

        body.style.backgroundColor = "gray"
        isDark = true
        title.textContent = "is dark = true"
    } else {
        body.style.backgroundColor = "white"
        isDark = false
        title.textContent = "is dark = false"
    }

})