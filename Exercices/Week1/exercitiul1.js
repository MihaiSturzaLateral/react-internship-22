/*1. Create an array with ages (numbers)
 and sort the array.
Find the min and the max age.(Print them to the console)*/

//console.log('Varsta cea mai mare este: ' + Math.max(...ages));
//console.log('Varsta cea mai mica este: ' + Math.min(...ages));

const ages = [18, 20, 21, 19]
console.log(ages.sort());

const arr = []
function compara(ages){
    arr[0] = Math.min(...ages);
    arr[1] = Math.max(...ages);
    return arr
}

console.log(compara(ages));