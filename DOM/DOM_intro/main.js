const btn = document.getElementById("btn");
const body = document.body;
let mode = "light";

btn.addEventListener("click", function () {
  if (mode == "light") {
    mode = 'dark'
    body.style.backgroundColor = "#333";
    body.style.color = "#eee";
  } else {
    mode = "light";
    body.style.backgroundColor = "#eee";
    body.style.color = "#333";
  }
});
