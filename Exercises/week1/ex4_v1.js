function func(mark){
    if(mark>4 && mark<10)
        return true;
    else if(mark<5 && mark>0)
        return false;
    else
        return "Invalid mark";
}

console.log(func(5));

//arrow function
let answ=(mark)=>{
    if(mark>4 && mark<=10)
        return true;
    else if(mark<5 && mark>0)
        return false;
    else
        return "Invalid mark";
}
console.log(answ(3));

//expression function
let ansExp=function(mark){
    if(mark>4 && mark<=10)
        return true;
    else if(mark<5 && mark>0)
        return false;
    else
        return "Invalid mark";
}
console.log(ansExp(-3));

