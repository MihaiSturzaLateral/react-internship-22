// 4. Implement a function that takes a mark as parameter and returns true if mark is greater than 4, returns false if the mark is less than 5 and returns nothing if the mark is invalid - also with an appropriate message. Implement this as an expression function, arrow function and declaration function.

const checkMark = (mark) => {
    if (mark > 4) {
        return true;
    }
    if (mark < 5) {
        return false;
    }
    if (typeof mark !== 'number') {
        console.log("Please use a number instead");
        return null;
    }
}

// function checkMark(mark) {
//     if (mark > 4) {
//         return true;
//     }
//     if (mark < 5) {
//         return false;
//     }
//     if (typeof mark !== 'number') {
//         console.log("Please use a number instead");
//         return null;
//     }
// }

// const checkMark = function (mark) {
//     if (mark > 4) {
//         return true;
//     }
//     if (mark < 5) {
//         return false;
//     }
//     if (typeof mark !== 'number') {
//         console.log("Please use a number instead");
//         return null;
//     }
// }
// console.log(checkMark(3))