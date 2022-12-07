const form = document.forms[0];
const input = document.getElementById("input");
const list = document.getElementById("list");
let items = [{ text: 'fads', isDone: false }, { text: 'iuy', isDone: false }, { text: 'sdfa', isDone: false }];
displyItems()
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = input.value;
  input.value = "";
  if (!value) {
    return;
  }
  items.push({ text: value, isDone: false });
  displyItems()
})

function deleteBtn (e) {
  let target = e.parentElement.children[0].textContent
  let remove = items.filter((i) => {
    return i.text != target
  })
  items = remove
  displyItems()
}

function displyItems() {
  list.innerHTML = ``
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    let item = document.createElement("li");
    item.innerHTML = `
    <li><span>${element.text}</span><button onclick="deleteBtn(this)">X</button></li>
    `
    list.appendChild(item);
    console.log(items);
  }
}
