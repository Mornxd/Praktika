const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");
console.log(section);
console.log(button);

button.addEventListener("click", getRandomCats);
