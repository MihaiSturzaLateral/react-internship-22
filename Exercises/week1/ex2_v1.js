const countries=['Albania','Romania','Kenya','Greece','Maroc'];
const contLength=(countries)=>{
    countries.map(el=>{
        if(el.length==5)
            console.log(el);
    })
}
contLength(countries);


