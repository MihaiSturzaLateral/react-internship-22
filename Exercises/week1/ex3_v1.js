//using map()
const countries=['Albania','Romania','Kenya','Greece','Maroc'];
const majs=(countries)=>{
    countries.map(el=>{
        console.log(el.toUpperCase());
    })
}
majs(countries);
//using for
const majs2=(countries)=>{
    const v=[];
    for(el of countries)
    {
        v.push(el.toUpperCase());
    }
        
    return v;
}
console.log(majs2(countries));

//while
const majs3=(countries)=>{
    const v=[];
    let i=0;
    while(i<countries.length){
        v.push(countries[i].toUpperCase());
        i++;
    }
    return v;
}
console.log(majs3(countries));

//do...while
const majs4=(countries)=>{
    const v=[];
    let i=0;
    do{
        v.push(countries[i].toUpperCase());
        i++;
    }while(i<countries.length);

    return v;
}

console.log(majs4(countries));