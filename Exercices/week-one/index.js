// 1. crescator, descrescator, sort function,max, min, 3 oldest ppl,
const ages = [21, 23, 25, 16, 17, 17, 18, 19, 20, -3, -5];

// console.log(ages.sort((a, b) => a - b));
// console.log(ages.sort((a, b) => b - a));
// console.log(Math.max(...ages));
// console.log(Math.min(...ages));
// console.log(ages.sort((a, b) => a - b).slice(-3));

// return arr with min value and max value
const arrMaxMin = function (arr) {
  const max = arr.sort((a, b) => a - b).slice(-1);
  const min = arr.sort((a, b) => a - b).slice(0, 1);
  const arrMM = [...min, ...max];
  return arrMM;
};

// console.log(arrMaxMin(ages));

// 2. Create an array with countries and find the countries that contain only 5 characters.(Print them to the console) Spain, China, India, Japan…

const countries = ["romania", "japan", "hungary", "america", "china", "india"];
// console.log(countries.filter((x) => x.length === 5));

// 3. Transform elements from that array to be upper case using for, do while and while loop. (Print them to the console) You can try also with map() function.

// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i].toUpperCase());
// }
// console.log(countries.map((x) => x.toUpperCase()));

// do {
//   console.log(countries[i].toUpperCase());
//   i++;
// } while (i < countries.length);

// let i = 0;
// while (i < countries.length) {
//   console.log(countries[i].toUpperCase());
//   i++;
// }

let i = 0;
do {
  // console.log(countries[i].toUpperCase());
  i++;
} while (i < countries.length);

// 4. Implement a function that takes a mark as parameter and returns true if mark is greater than 4, returns false if the mark is less than 5 and returns nothing if the mark is invalid - also with an appropriate message. Implement this as an expression function, arrow function and declaration function.
// expression function
const markParam = function (mark) {
  if (mark > 5) {
    return true;
  } else if (mark < 4) {
    return false;
  } else {
    return "Not a number";
  }
};
const number1 = markParam(6);
// console.log(number1);
// declaration function
function markParamDecl(mark) {
  if (mark > 5) {
    return true;
  }
  if (mark < 4) {
    return false;
  }
  if (typeof mark !== "number") {
    return "Mark is not a number";
  }
}
// console.log(markParamDecl(3));
// // arrow function

const markParam3 = (mark) => {
  if (mark > 5) {
    return true;
  }
  if (mark < 4) {
    return false;
  }
  if (typeof mark !== "number") {
    return "Mark is not a number";
  }
};
// console.log(markParam3(3));

// 5. Implement an example of a callback function.

const cutFruitPieces = (fruit) => {
  return fruit * 3;
};

const juice = function (apple) {
  const applePieces = cutFruitPieces(apple); //cutFruitPieces is a callback function
  return `Juice with ${applePieces} pieces of apple`;
};
// console.log(juice(3));

// 6.extract countries from array with 2 or more words:
const countries1 = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const arrTwoWords = countries1.filter((x) => x.includes(" "));
// console.log(arrTwoWords);

// 7. Create an Animal class that has color, name, legs as parameters. Create different methods for these - constructors, getters, setters.

class Animal {
  constructor(color, name, legs) {
    this.color = color;
    this.name = name;
    this.legs = legs;
  }
  get age() {
    return this.age;
  }
  set theCol(col) {
    this.color = col;
  }
  get Col() {
    return this.theCol;
  }
}
const dog = new Animal("red", "dog", "short");

dog.theCol = "blue";
// console.log(dog.color);

// 8.  8. Define  a Dog class that extends the Animal class with a constructor(use the specific function to access all the properties from the parent class) - breed, color, name, legs as parameters. Also to have  setBreed(), setColor(), setName(), setLegs() methods- that set the breed, color, name and legs for dog with getBreed(), getColor(), getName(), getLegs() methods that return the breed, the color, name and the legs for each dog. Create an instance of the Dog class and play around with the setters and getters.(Print them to the console)

class Dog extends Animal {
  constructor(color, name, legs, breed) {
    super(color, name, legs);
    this.breed = breed;
  }

  set setBreed(breed) {
    this.breed = breed;
  }

  get getBreed() {
    return this.breed;
  }
}

const dog2 = new Dog("red", "Rex", "long", "Husky");
dog2.Color = "pink";
console.log(dog2.Color);
dog2.setBreed = "German Shepperd";
console.log(dog2.getBreed);

// 9. Use this API link https://jsonplaceholder.typicode.com/photos  fetch data (only images) and display (insert) them into a div with document.createElement('img’). Call this API using a button, add an event listener for it. You can play around creating also a menu bar, footer, some cool content to display the images.
//As you know, an API request returns a promise (with fetch) - you should also implement this request using async await concept.

const fetchTheData = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();
  console.log(data);
  return await data;
};

fetchTheData();
