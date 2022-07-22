

//sortare, min, max ex1
const arr = [12, 18, 5, 2, 22]

arr.sort(function (a, b) { return a - b })
console.log('sort: ', arr)

let min = Math.min(...arr)
console.log('min', min)

const oldest = arr[arr.length - 1]
console.log('max:', oldest)

let max = Math.max(...arr)
console.log(max)

const youngtest = arr[0]
console.log(youngtest)


const min_max = (arr) => {
    let arr1 = [];
    arr.sort(function (a, b) { return a - b })

    arr1.push(Math.min(...arr))
    arr1.push(Math.max(...arr))

    return arr1
}

console.log('min: ', min_max(arr)[0], 'max: ', min_max(arr)[1])

//countries ex2
const arr_countries = ['china', 'romania', 'japan', 'ungaria', 'india']
const countries = (arr) => {
    arr.map(el => {
        if (el.length == 5) console.log(el)
    })
}
countries(arr_countries)

//toupper() ex3
const arr_toUp = ['apple', 'banana', 'kiwi']

const withFor = (arr_toUp) => {
    let arr1 = [...arr_toUp]

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].toUpperCase()
    }
    return arr1
}

console.log("withFor: ", withFor(arr_toUp))

const withWhile = (arr_toUp) => {
    let arr1 = [...arr_toUp], i = 0

    while (i != arr1.length) {
        arr1[i] = arr1[i].toUpperCase()
        i += 1
    }
    return arr1
}

console.log("withWhile: ", withWhile(arr_toUp))



const withDoWhile = (arr_toUp) => {
    let arr1 = [...arr_toUp], i = 0

    do {
        arr1[i] = arr1[i].toUpperCase()
        i += 1
    } while (i < arr1.length)
    return arr1
}

console.log("withDoWhile: ", withDoWhile(arr_toUp))

const withMap = (arr_toUp) => {
    let arr1 = [...arr_toUp]
    let arr2 = []
    arr1.map(el => { arr2.push(el.toUpperCase()) })

    return arr2
}

console.log("withMap: ", withMap(arr_toUp))


// function ex4

let x
const mark_exprr = function (x) {

    if (x > 4 && x <= 10) return true;
    else if (x < 5 && x >= 0) return false;
    else if (typeof x != 'number' || x > 10 || x < 1) return 'Erorr. Invalid mark'

}

console.log(mark_exprr('a'))

const mark_arrow = (x) => {
    if (x > 4 && x <= 10) return true;
    else if (x < 5 && x >= 0) return false;
    else if (typeof x != 'number' || x > 10 || x < 1) return 'Erorr. Invalid mark'
}
console.log(mark_arrow('10'))

function mark_declaration(x) {
    if (x > 4 && x <= 10) return true;
    else if (x < 5 && x >= 0) return false;
    else if (typeof x != 'number' || x > 10 || x < 1) return 'Erorr. Invalid mark'
}
console.log(mark_declaration('10'))


//callback ex5

const afis = (x) => { console.log(x) }

const sumDisplay = (x, y, callback) => {
    let sum
    sum = x + y
    callback(sum)
}

sumDisplay(2, 4, afis)

//extract countries ex6

const countries1 = [
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

const extract = (arr) => {

    /*let arr1 = arr.forEach(function(el){if (el.indexOf(' ') > 0) return el })
 return  arr1*/
    let arr1 = []
    arr.map(el => { if (el.indexOf(' ') > 0) arr1.push(el) })
    return arr1
}

console.log(extract(countries1))


// animal ex7

class Animal {
    constructor(name, color, legs) {
        this.name = name;
        this.color = color;
        this.leg = 0;

    }

    get getInfo() {
        return `animalul e ${this.name}, are  ${this.leg} picioare`;
    }
    set setPicior(leg) {
        this.leg += leg;
    }

}

// Dog ex8
class Dog extends Animal {

    constructor(name, color, legs, breed) {
        super(name, color, legs)
        this.breed = breed
    }

    set setBreed(breed) {
        this.breed = breed
    }
    set setName(name) {
        this.name = name
    }
    set setColor(color) {
        this.color = color
    }
    set setLegs(legs) {
        this.legs = legs
    }

    get getBreed() {
        return this.breed
    }
    get getName() {
        return this.name
    }

    get getLegs() {
        return this.legs
    }

    get getColor() {
        return this.color
    }
}

let caine = new Dog('Rex', 'red', 'white', 'buldog')
caine.setColor = 'blue'
console.log(caine.getColor)