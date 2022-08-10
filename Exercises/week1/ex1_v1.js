/*const numbers=[17,16,19,20];
numbers.sort(function(a,b){
        return a-b;
})
console.log("Vectorul sortat: ",numbers);
console.log("Numarul maxim din vector:",Math.max(...numbers));
console.log("Numarul minim din vector:", Math.min(...numbers));
*/
const numbers=[17,16,19,20];
numbers.sort(function(a,b){
    return a-b;
})
function sortArr(numbers){
    /*
    const v=[];
    v[0]=Math.min(...numbers);
    v[1]=Math.max(...numbers);
    return v;
    */
   // /*
    const v=[];
    const sortAr=numbers.sort((a,b)=>a-b);
    v[0]=sortAr[0];
    v[1]=sortAr[sortAr.length-1];
    return v;
   // */
}
console.log(sortArr(numbers));