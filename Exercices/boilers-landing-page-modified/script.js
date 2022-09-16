const closeSection = document.querySelector(".close-section");
const closeSection1 = document.querySelector(".close-section1");
const closeSection2 = document.querySelector(".close-section2");
const closeSection3 = document.querySelector(".close-section3");
const techSpecs = document.querySelector(".technical-specifications");
const techSpecs1 = document.querySelector(".technical-specifications1");
const description = document.querySelector(".description");
const description1 = document.querySelector(".description1");
const menu = document.querySelector(".fa-bars");
const boilers = document.querySelector(".boilers");
const boilers1 = document.querySelector(".boilers1");

closeSection.addEventListener("click", function () {
  description.classList.toggle("close");
});
closeSection1.addEventListener("click", function () {
  techSpecs.classList.toggle("close");
});
closeSection2.addEventListener("click", function () {
  description1.classList.toggle("close");
});
closeSection3.addEventListener("click", function () {
  techSpecs1.classList.toggle("close");
});
menu.addEventListener("click", function () {
  boilers.classList.toggle("hide");
  boilers1.classList.toggle("hide");
});
