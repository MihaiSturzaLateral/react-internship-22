//exercise 1
const ages = [18, 22, 55, 44, 5, 14, 23, 77, 16, 7, ];
const agesSorted = ages.sort((a,b) => a-b);
console.log(agesSorted);

const oldest = agesSorted[agesSorted.length-1]

const youngest = agesSorted[0];

console.log('Min is: ', youngest);
console.log('Max is: ', oldest);

//extra part for exercise 1

let agesArr = [];
const minmax = (ages) => {
    ages.sort((a, b) => a-b);
    agesArr.push(Math.min(...ages));
    agesArr.push(Math.max(...ages));
    return agesArr
}

console.log('Min is: ',minmax(ages)[0],'and Max is: ',minmax(ages)[1])

//exercise 2

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

let sortedCountries = []
for(country of countries)
{
    if(country.length == 5)
    {
        sortedCountries.push(country);
    }
}

console.log('Countries that have 5 characters in their name: ',sortedCountries);

//exercise 3

//with for

let upperCaseCountriesFor = []
for(i=0;i<countries.length;i++)
{
    upperCaseCountriesFor.push(countries[i].toUpperCase());
}

console.log(upperCaseCountriesFor);

//with while

let upperCaseCountriesWhile = []
let j=0
while(j!=countries.length)
{
    upperCaseCountriesWhile.push(countries[j].toUpperCase());
    j++;
}

console.log(upperCaseCountriesWhile);

//with do while

let upperCaseCountriesDoWhile = []
let k=0
do{
    upperCaseCountriesDoWhile.push(countries[k].toUpperCase());
    k++
}while(k!=countries.length)

console.log(upperCaseCountriesDoWhile);

//with map function

let upperCaseCountriesMap = []
countries.map(el => { upperCaseCountriesMap.push(el.toUpperCase())})
console.log(upperCaseCountriesMap);
//exercise 4

//with arrow function

const mark = (number) => {
    if(number>4)
    {
        console.log('false')
    }
    if(number<5 && number>0)
    {
        console.log('true')
    }
    if(number>10 || number<1)
    {
        console.log('Invalid mark')
    }
}

mark(6);

//with declaration function

function mark1(number){
    if(number>4)
    {
        console.log('false')
    }
    if(number<5 && number>0)
    {
        console.log('true')
    }
    if(number>10 || number<1)
    {
        console.log('Invalid mark')
    }
}

mark1(6);

//with function expression

const mark2 = function(number) {
    if(number>4)
    {
        console.log('false')
    }
    if(number<5 && number>0)
    {
        console.log('true')
    }
    if(number>10 || number<1)
    {
        console.log('Invalid mark')
    }
}

mark2(6);

//exercise 5 callback function

const oddOrEven = (number, callback) => {
    const result = (number % 2 == 0) ? 'Even' : 'Odd';
    callback(number, result);
}

oddOrEven(14, (number, result) => {
    console.log(number + ' is ' + result);
});

//exercise 6

let twoWordsCountries = []
for(country of countries)
{
    if(country.includes(' '))
    {
        twoWordsCountries.push(country);
    }
}

console.log('Countries that have 2 or more words:',twoWordsCountries)

//exercise 7

class Animal {
    constructor(name, color, legs) {
        this.name = name;
        this.color = color;
        this.legs = legs;
    }

    getAnimal() {
        return `The name of the animal is ${this.name}, his color is ${this.color} and has ${this.legs} legs` 
    }

    setAnimal(name, color, legs) {
        this.name = name;
        this.color = color;
        this.legs = legs;
    }
}

const myAnimal = new Animal('Chris','grey','3')
console.log(myAnimal.getAnimal())
myAnimal.setAnimal('Daisy', 'black', '4')
console.log(myAnimal.getAnimal())
console.log(myAnimal)

//eighth ex

class Dog extends Animal {
    constructor(name, color, legs, breed) {
        super(name, color, legs);
        this.breed = breed;
    }

    setName(name) {
        this.name = name;
    }

    setColor(color) {
        this.color = color;
    }

    setLegs(legs) {
        this.legs = legs;
    }

    setBreed(breed) {
        this.breed = breed;
    }

    getName() {
        return this.name;
    }

    getColor() {
        return this.color;
    }

    getLegs() {
        return this.legs;
    }

    getBreed() {
        return this.breed;
    }
}

const myDog =  new Dog('Rex', 'brown', '4', 'German Sheperd');
console.log(myDog);
myDog.setName('Max')
myDog.setColor('black')
myDog.setLegs('3')
myDog.setBreed('Beagle')
console.log('The name of the dog is',myDog.getName());
console.log('The color of the dog is',myDog.getColor());
console.log('The amount of legs the dog has is',myDog.getLegs());
console.log('The dog is a',myDog.getBreed());
