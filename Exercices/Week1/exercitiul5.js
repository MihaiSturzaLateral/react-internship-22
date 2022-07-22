/*5. Implement an example of a callback function.*/
//function
function exemplu(name, callback){
    console.log(name);
    callback();
}
//callback function
function numele(){
    console.log('Is my name');
}
//passing function as an argument
exemplu('Andreea', numele);