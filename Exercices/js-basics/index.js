/*// This is my first JavaScript!
//console.log("Hello World");

// tot ce am facut astai sa il punem intr un folder si sa il denumim week 1 

// SPREAD operators! - learn abt it ... 
//ARROW FUNCTIONS ex
/*const functie = (arr)=>{
   // arrow function
}

const suma = () => {
    let tottal = 0;
    arr.map( el => { total += el }); 
      // map is a callback function
      return total;
}
*/

const nume = ["Reia", "Ana", "Mircea"];
console.log(nume.sort());
console.log(nume.reverse());

//pentru gasirea maximului si a minimuluui varstei
const ages = [2, 5, 7, 1, 6];
const age_maxim = Math.max(...ages);
const age_minim = Math.min(...ages);
console.log("Maximul este " + age_maxim);
console.log("Minimul este " + age_minim);
// ages.length - 1 - pt a accesa pe ultimul
// ages.length - 2 - pt a accesa pe penultimul

//2. Create an array with countries and find the countries that contain only 5 characters.(Print them to the console) Spain, China, India, Japan…
const tari = ["Spain", "Romania", "France", "Japan"];
console.log(tari.filter((tara) => tara.length < 6));

/*SAU function verificare(tari) {
  return (tari.length < 6);
}
const raspuns = tari.filter(verificare);
console.log(raspuns); */

// 3. Transform elements from that array to be upper case using for, do while and while loop. (Print them to the console) You can try also with map() function.
array2 = ["miere", "alb", "pisica", "fluier"];
//transformarea elementelor to UpperCase, folosind for();
const upper = [];
for (var i = 0; i < array2.length; i++) {
  upper.push(array2[i].toUpperCase());
}
console.log(upper);
// mai puteam sa fac de ex daca am array-ul tari = ['romania','italia,'spania'']: for(tara of tari){...}
//transformarea elementelor to UPPERCASE folosind do ... while
const upper1 = [];
let c = 0;

do {
  upper1.push(array2[c].toUpperCase());
  c = c + 1;
} while (c < array2.length);

console.log(upper1);
//transformarea elementelor to uppercase, folosind while
var upper2 = [];
let contor = 0;
while (contor < array2.length) {
  upper2.push(array2[contor].toUpperCase());
  contor++;
}

console.log(upper2);
//transformarea elementelor to UPPERCASE, folosind map()
const uppercased = array2.map((array2) => array2.toUpperCase());
console.log(uppercased);
//transformarea elementelor to UNDERCASE, folosind map()
array3 = ["Rece", "Negru", "Elementar"];
const lowercased = array3.map((array3) => array3.toLowerCase());
console.log(lowercased);

/* 4. Implement a function that takes a mark as parameter and returns true if mark is greater than 4, returns false if the mark is less
 than 5 and returns nothing if the mark is invalid - also with an appropriate message. Implement this as an expression function, arrow
  function and declaration function. */
// expression function
const rezultatExpressionFunction = function (mark) {
  if (mark > 4) {
    return "true";
  } else if (mark < 5) {
    return "false";
  } else return null;
};
console.log(rezultatExpressionFunction(10));

// arrow function
const rezultatArrow = (mark) => {
  if (mark > 4) {
    return "true";
  } else if (mark < 5) {
    return "false";
  } else return null;
};
console.log(rezultatArrow(3));

// declaration function
function rezultatDeclaration(mark) {
  if (mark > 4) {
    return "true";
  } else if (mark < 5) {
    return "false";
  } else return null;
}
console.log(rezultatDeclaration("m"));

// 5. Implement an example of a callback function.
// function
function greet(name, callback) {
  console.log("Numele meu este " + name);
  callback();
}

// callback function
function callMe() {
  console.log("Aceasta este o functie callback");
}

// passing function as an argument
greet("Georgiana", callMe);

/* 6. Extract all the countries containing two or more words from the countries array and print it as array. Here is the array 
with countries - https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js  */
const countries = [
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
let countries1 = [];
const word1 = "m";
const match = countries.find((element) => {
  if (element.includes(word1)) {
    return true;
  }
});
countries1 = match;
console.log(countries1);
