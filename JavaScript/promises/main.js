// Promises

// console.log("file start");
// let promise = new Promise((resolve, reject) => {
//   console.log("begin of promise block");
//   let x = true;
//   if (x == true) {
//     setTimeout(() => {
//       resolve("Resolved, from sto");
//     }, 3000);
//   } else {
//     setTimeout(() => {
//       reject("Rejected, from sto");
//     }, 3000);
//   }
//   console.log("end of promise block");
// });

// promise.then((i) => {
//     console.log(i)
//   }).catch((i) => console.log(i));
// console.log(promise);
// console.log("file end");

// =============================================

// const fetchPromise = fetch("https://api.unsplash.com/search/photos?query=tree&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo");
// fetchPromise.then(response => {
//   return response.json()
// })
// .then(d => console.log(d))

// .catch(e => console.log(e.message))

// ============================================

// console.log('first');

// async function fetchPromise () {
//     let response = await fetch("https://api.unsplash.com/search/photos?query=tree&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo");
//     let result = await response.json()
//     console.log(result);
//     return result}

//     console.log('second');

// fetchPromise().then(i => i)
// console.log('third');
// fetchPromise()
// console.log('forth');

// ============================================

const fetchUsers = () => {
    axios
('https://api.unsplash.com/search/photos?query=children&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
      .then(response => {
        console.log(response.data.results[0].urls.small)
        const img = document.getElementById('img')
        img.src = response.data.results[3].urls.small
      })
      .catch(error => console.error(error))
  }

  fetchUsers()


// const getData = async () => {
// 	const response = await axios.get(
// 		`https://reqres.in/api/users`
// 	);
//     console.log(response.data.data);
// };

// getData()

// ============================================

// const fetchPromise = fetch("https://rqres.in/", {
//   mode: "cors",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//   },
// });
// fetchPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((d) => {
//     for (let i = 0; i < d.data.length; i++) {
//       const element = d.data[i];
//       console.log(element.email);
//     }
//   })

//   .catch((e) => console.log(e.message));

// ============================================
