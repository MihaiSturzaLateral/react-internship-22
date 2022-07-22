//example of a callback function

let square=(n)=>n*2;
let cube=function(square,n){
    return square(n)*n;
}
console.log(cube(square,2));

