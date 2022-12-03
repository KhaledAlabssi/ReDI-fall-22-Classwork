const carsList = document.getElementById("carList");
const timeList = document.getElementById("timePerSecondList");
const starsList = document.getElementById("starsList");

// cars list...
const cars = ["Honda", "Ford", "Mercedes", "Acura"];
cars.forEach((car) => {
  let logCar = document.createElement("li");
  logCar.textContent = `Brand: ${car}`;
  carsList.appendChild(logCar);
});

// time list...
let limit = 10;
const timer = setInterval(function () {
  const time = new Date();
  const newE = document.createElement("li");
  newE.textContent = time;
  timeList.appendChild(newE);
  limit--;
  if (limit == 0) {
    clearInterval(timer);
  }
}, 1000);

// stars list...
const stars = [
  "Ali",
  "Maria",
  "Irene",
  "Sergi",
  "Maryna",
  "Nadia",
  "Peace",
  "Shabnam",
  "Divya",
  "Julian",
];

for (let i = 0; i < stars.length; i++) {
  let newE = document.createElement("li");
  newE.textContent = `Super star: ${stars[i]}`;
  starsList.appendChild(newE);
}
