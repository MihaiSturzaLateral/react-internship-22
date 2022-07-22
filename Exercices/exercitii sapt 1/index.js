
/*arr = [20,19,18,17]
//crescator
arr.sort((a,b) => a-b)
console.log(arr)
//descrescator
arr.sort((a,b) => b-a)
console.log(arr)*/


/* 
//exercitiu 1

function youngestOldest(arr) {
    let person = {
        young: null,
        old: null
    };
    arr.sort((a,b) => a-b)
    person.young=arr[0]
    person.old=arr[arr.length-1]
    console.log(person)
}
youngestOldest([20,19,18,17])

//exercitiu 1 -alta varianta-
function oldestYoungest(arr){
    const min=arr.sort((a,b) => a-b).slice(0,1)
    const max=arr.sort((a,b) => a-b).slice(-1)
    let person = {
        young: null,
        old: null
    };
    const returnValues = [...min,...max]
    console.log(returnValues)
}
oldestYoungest([20,19,18,17])


// exercitiu 2
const countries = ['Romania','Rusia','Franta','Spania','Malta','China']
function filter(arr){
    for(let i=0;i<arr.length;i++)
        if(arr[i].length===5)
            console.log(arr[i])
    console.log('-----------')
    arr.map(el => {if(el.length===5) console.log(el)})
}
filter(countries)


//exercitiu 3
const countries = ['Romania','Rusia','Franta','Spania','Malta','China']
let constanta=0
for(let i=0;i<countries.length;i++)
    console.log(countries[i].toUpperCase())
console.log('-----------')
do{
    console.log(countries[constanta].toUpperCase())
    constanta++
}while(constanta!=countries.length-1);
console.log('-----------')
while(constanta!=countries.length-1){
    console.log(countries[constanta].toUpperCase())
    constanta++
}
console.log('-----------')
countries.map(element => element.toUpperCase)


//exercitiu 4

//function declaration
function validation(mark){
    if(mark>=5)
        return true;
    else if(mark<5)
        return false;
        else
            return "Mark format invalid!";
}
console.log(validation(9))
console.log(validation(4))
console.log(validation('red'))

//function expression
const validation = function(mark){
    if(mark>=5)
        return true;
    else if(mark<5)
        return false;
        else
            return "Mark format invalid!";
}
console.log(validation(9))
console.log(validation(4))
console.log(validation('red'))

//arrow function
let validation = (mark) => {
    if(mark>=5)
    return true;
else if(mark<5)
    return false;
    else
        return "Mark format invalid!";
}
console.log(validation(9))
console.log(validation(4))
console.log(validation('red'))

//exercitiu 5

function displayer(something){
    console.log(something);
}
function validation(mark,callback){
    let message
    if(mark>=5)
        message='true'
    else if(mark<5)
        message='false'
        else
            message='Mark format invalid!'
    callback(message)
}
validation(9,displayer)
validation(4,displayer)
validation('red',displayer)

//exercitiu 6

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
  const compoundCountries = []
  countries.map(element => {
    let status=false
    for(let i=0;i<element.length;i++)
        if((/[a-zA-Z]/).test(element[i])===false && !status){
            compoundCountries.push(element)
            status=true
        }
    status=false
    })
  console.log(compoundCountries)

  //exercitiu 7 + exercitiu 8

  class Animal{
    constructor (color,name,legs){
        this.color=color
        this.name=name
        this.legs=legs
    }
    get getColor(){
        return this.color
    }
    get getName(){
        return this.name
    }
    get getLegs(){
        return this.legs
    }
    set setColor(color){
        this.color=color
    }
    set setName(name){
        this.name=name
    }
    set setLegs(legs){
        this.legs=legs
    }
  }

  class Dog extends Animal {
    constructor(color, name, legs,breed){
        super(color,name,legs)
        this.breed=breed
    }
    get getBreed(){
        return this.breed
    }
    set setBreed(breed){
        this.breed=breed
    }

  }
  let animal1=new Animal('maro','Athos',4)
  console.log(animal1)
  console.log(animal1.getColor)
  animal1.setColor='alb'
  console.log(animal1.getColor)
  console.log('--------')
  let caine1=new Dog('maro','Athos',4,'Yorkshire')
  console.log(caine1)
  console.log(caine1.getColor)
  caine1.setColor='alb'
  caine1.setBreed='Labrador'
  console.log(caine1.getColor)
  console.log(caine1.getBreed)*/