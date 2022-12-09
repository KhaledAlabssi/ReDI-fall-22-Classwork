const btn = document.getElementById("btn");
const img = document.getElementById("img");
const input = document.getElementById("input");
const container = document.getElementById("container");
let search = "car";
let pics = [];
if(JSON.parse(localStorage.getItem("picturesLS"))) {
    pics = JSON.parse(localStorage.getItem('picturesLS'))
    console.log("We have pictures");
    pics.forEach((element) => {
        let newImage = document.createElement("img");
        newImage.src = element;
        newImage.style.width = "200px";
        newImage.style.height = "200px";
        container.appendChild(newImage);
      });
} 

btn.addEventListener("click", function () {
  pics = [];
  container.innerHTML = "";
  if (!input.value) {
    search = "forest";
  } else {
    search = input.value;
  }
  console.log("clicked");
  axios(
    `https://api.unsplash.com/search/photos?query=${search}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
  )
    .then((d) => {
      for (let i = 0; i < 5; i++) {
        let url = d.data.results[Math.floor(Math.random() * 30)].urls.small;

        pics.push(url);
      }
      localStorage.setItem('picturesLS', JSON.stringify(pics))

      pics.forEach((element) => {
        let newImage = document.createElement("img");
        newImage.src = element;
        newImage.style.width = "200px";
        newImage.style.height = "200px";
        container.appendChild(newImage);
      });
      console.log(pics)
    })
    .catch((d) => console.log("Error"));
});

// https://reqres.in/api/users

// 'https://api.unsplash.com/search/photos?query=children&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'

// const fetchUsers = () => {
//   axios("https://reqres.in/api/users")
//     .then((response) => {
//       users = response.data.data;
//       for (let i = 0; i < users.length; i++) {
//         const element = users[i];
//         let newItem = document.createElement("tr");
//         newItem.innerHTML = `
//             <td>${element.first_name}</td><td>${element.email}</td>
//             `;
//         table.appendChild(newItem);
//       }
//     })
//     .catch((error) => console.error(error));
// };

// fetchUsers();

// let array = [9, 66, 'hei', 'dsaf']
// localStorage.setItem("data", JSON.stringify(array))
// let fromLS = JSON.parse(localStorage.getItem('data'))
// console.log(fromLS);