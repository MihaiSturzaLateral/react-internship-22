/*2. Create an array with countries and find the countries that contain only 5 characters.
(Print them to the console) Spain, China, India, Japan…*/

const countries = ['Spain', 'China', 'India', 'Japan', 'Germania']
for(let i = 0; i < countries.length; i++){
    if(countries[i].length==5){
        console.log(countries[i]);
    }
}