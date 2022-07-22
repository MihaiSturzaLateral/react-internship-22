/*4. Implement a function that takes a mark as parameter and returns true
 if mark is greater than 4, returns false if the mark is less than 5 and 
 returns nothing if the mark is invalid - also with an appropriate message. 
 Implement this as an expression function, arrow function and declaration function.*/

 let expFunc = function(mark){
    if(mark > 5){
        return true
    }
    if(mark < 4){
        return false
    }
    else{
        console.log('Invalid!');
    }
    
}
console.log(expFunc(6));

/*let arrFunc = (mark) => {
    if(mark > 5){
        return true
    }
    if(mark < 4){
        return false
    }
    else{
        console.log('Invalid!');
    }
}
console.log(arrFunc(3));*/

/*function decFunc(mark){
    if(mark > 5){
        return true
    }
    if(mark < 4){
        return false
    }
    else{
        console.log('Invalid!');
    }
}
console.log(decFunc(5));*/