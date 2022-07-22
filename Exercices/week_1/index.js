// let x=[1,2,3];

// function test(a){
//     a.push(23);
//     console.log('in functie:'+a);
// }
// test(x);
// console.log("in afara:"+x);


// let y=3;
// function test2(b){
//     b=b+2;
//     console.log('in functie 2:'+b);
// }
// test2(y);
//console.log("in afara 2:"+y);
//console.log("test");

// const arr=[1,2,3,4];
// const suma =()=>{
//     let total=0;
//     arr.map(el=>{
//         total+=el;
//     })
//     return total;

// }
// const numbers = [0, 1 , 23, 3, 104, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// const y=[];
// // const a=(numbers)=>
// // {
// //     y.push(numbers[0]);
// //     y.push(numbers[length-1]);
// //     return y;

// // }
// // console.log(a(numbers));

// function maxMIn(numbers){

//     y.push(numbers[0]);
//     y.push(numbers[length-1]);
//     return y;

// }
// maxMIn(numbers);
// console.log(y);


//2
// const countries=["Romaa","Anglia","Turcia","Estonia","Germania","Islanda"];
// const arr=[];
 
// for (let i in countries){
//     if(countries[i].length==5)  
//     arr.push(countries[i]);  
// }
// //console.log(arr);
// const arr=["fsfdsf","fdshtds","dgfgsf","fdgf"];

// const arrAux=[];
// for(let i in arr){
//     arrAux.push(arr[i].toUpperCase());
// }
// console.log(arrAux);
// let i=0;
// do{
   
//  arrAux.push(arr[i].toUpperCase());
//  i++;

// }while(i<arr.length);
// console.log(arrAux);
// let i=0;
// while(i<arr.length){

//     arrAux.push(arr[i].toUpperCase());
//      i++;

// }
// const uppercased = arr.map(arrAux => arrAux .toUpperCase());

// console.log(uppercased);
// const mess="invalid";       
// function marksFunctions(mark){
//     if(mark>4)
//     return true;
//     if(mark<0 && mark>5)
//     return mess;
//     if(mark<5)
//     return false;
// }
// console.log(marksFunctions(5));

// const a=(mark)=>{
//     if(mark>4)
//     return true;
//     if(mark<0 && mark>5)
//     return mess;
//     if(mark<5)
//     return false;
// }

// const b=function(mark){
//     if(mark>4)
//     return true;
//     if(mark<0 && mark>5)
//     return mess;
//     if(mark<5)
//     return false;
  
// }

// function log(){
//     console.log("task-ul este gata");
// }
// function task(callback){
//     for(let i=0;i<20;i++)
//     {
//         console.log(i);
//     }
//     callback();
// }
// // task(log);


// const countries = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
//   ]
// const countriesWithFilter=[];
// for(let i in countries){

//     if(countries[i].includes(" "))
//     countriesWithFilter.push(countries[i]);

// }
// console.log(countriesWithFilter);
class Animal{
    constructor(color, name, legs){
        this.color=color;
        this.name=name;
        this.legs=legs;
    }
    get name(){
    return this.name;
    }
    get color(){
        return this.color;
    }
    get legs(){
        return this.legs;
    }
    
}
