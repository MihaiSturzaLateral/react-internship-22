/*3. Transform elements from that array to be upper case using for, do while and while loop.
 (Print them to the console) You can try also with map() function.*/

 const countries = ['Spain', 'China', 'India', 'Japan', 'Germania']

 //map()
console.log(countries.map(value => value.toUpperCase())); 

 //for()
 /*function transformare(countries){
    const newCountry = [];
    for(const country of countries){
        newCountry.push(country.toUpperCase());
    }
    return newCountry
  }
 console.log(transformare(countries));*/

//while()
/*function transformare(countries){
    const newCountry = [];
    let i = 0;
    while(i<countries.length) 
  {
    newCountry.push(countries[i].toUpperCase());
    i++;
  }
  return newCountry
}
console.log(transformare(countries));*/

// do while()
/*function transformare(countries){
    const newCountry = [];
    let i = 0;
    do{
    newCountry.push(countries[i].toUpperCase());
    i++;
    } while(i<countries.length) 

  return newCountry
}
console.log(transformare(countries));*/