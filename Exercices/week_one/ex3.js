// 3. Transform elements from that array to be upper case using for, do while and while loop. (Print them to the console) You can try also with map() function.

const countries = ['Spain', 'China', 'Portugal', 'India', 'Gremany', 'Japan']

console.log(countries.filter(word => word.length === 5))



for (country of countries) {
    console.log(country.toUpperCase())

}

// let i = 0;
// while (i < countries.length) {
//     console.log(countries[i].toUpperCase())
//     i++
// }

let i = 0;
do {
    i++
    console.log(countries[i].toUpperCase())
} while (i < countries.length - 1);

countries.map((country) => console.log(country.toUpperCase()))