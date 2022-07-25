// 3. Transform elements from that array to be upper case using for, do while and while loop.
// (Print them to the console) You can try also with map() function.
array2 = ["miere", "alb", "pisica", "fluier"];
//transformarea elementelor to UpperCase, folosind for();
const upper = [];
for (var i = 0; i < array2.length; i++) {
  upper.push(array2[i].toUpperCase());
}
console.log(upper);

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
