console.log("Hello world");
const myName = "kowit 123 kowit";
const h1 = document.querySelector(".name-test");

console.log(myName);
console.log(h1);

h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

//make mobile navigation work
const btnNavEl = document.querySelector(".button1");
const headerEl = document.querySelector(".back");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("back");
});
