//first ex
const ages = [18, 22, 50, 44, 5, 14, 23, 77];
const agesSorted = ages.sort((a,b) => a-b);
console.log(agesSorted);

const oldest = agesSorted[agesSorted.length-1]

const youngest = agesSorted[0];

console.log('Min is: ', youngest);
console.log('Max is: ', oldest);

//extra part for first ex

//second ex

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
for(i=0;i<countries.length;i++)
{
    if(countries[i].length == 5)
    {
        sortedCountries.push(countries[i]);
    }
}

console.log(sortedCountries);

//third ex

//with for

let upperCaseCountriesFor = []
for(i=0;i<countries.length;i++)
{
    upperCaseCountriesFor.push(countries[i].toUpperCase());
}

console.log(upperCaseCountriesFor);

//with while
/*
let upperCaseCountriesWhile = []
while()
{
    upperCaseCountriesWhile.push(countries[i].toUpperCase());
}

console.log(upperCaseCountriesWhile);
*/
//fourth ex

//arrow function

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

//declaration function

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

//function expression

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

//fifth ex

const firstMsg = (name) => {
    console.log('first Message ' + name);
}

const userInput = (callback) => {
    let name = prompt('Please enter your name.');
    callback(name);
}

userInput(firstMsg);

//sixth ex
/*
let twoWordsCountries = []
for(i=0; i<countries.length; i++)
{
    if()
    {
        twoWordsCountries.push(countries[i]);
    }
}

console.log(twoWordsCountries)
*/
//seventh ex


//eighth ex



//ninth ex
