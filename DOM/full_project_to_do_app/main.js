const form = document.getElementById("form")
const list = document.getElementById("list")
const input = document.getElementById("input-value")
const icon = document.getElementById("icon")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  const value = input.value

  if (!value) {
    return
  }
  input.value = ""
  let item = document.createElement("article")
  item.classList.add("item")
  item.innerHTML = `<span class="item-text">${value}</span>
          <div class="button-group">
            <button class="edit-btn" onclick="editItem(this)">
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="delete-btn" onclick="deleteItem(this)">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>`

  list.appendChild(item)
  iconToggle()
  item.firstChild.addEventListener("click", function () {
    item.firstChild.classList.toggle("done")
  })
})
function deleteItem(e) {
  e.parentElement.parentElement.remove()
  iconToggle()
}
function editItem(e) {
  let value = e.parentElement.parentElement.firstChild.textContent
  e.parentElement.parentElement.remove()
  input.value = value
  iconToggle()
}

function iconToggle() {
  if (list.childElementCount > 1) {
    if (!icon.classList.contains("invi")) {
      icon.classList.add("invi")
    } else {
      return
    }
  } else if (list.childElementCount == 1) {
    if (icon.classList.contains("invi")) {
      icon.classList.remove("invi")
    } else {
      return
    }
  }
}
