// const sum = (n, total = 0) => {

//     if (n <= 0) {
//         return total
//     }
//     return sum(n - 1, total + n)
// }

// console.log(sum(3, 0))

// const countDown = (n) => {

//     if (n < 1) return

//     console.log(n)
//     countDown(n - 1)

// }

// countDown(4)

// const factorial = (n) => {
//     if (n == 0) return 1

//     return n * factorial(n - 1)
// }
// console.log(factorial((5)))


// // promises
// function divide(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (b === 0) {
//             reject(new Error('eroaree'))
//             return;
//         }

//         resolve(a / b)
//     })
// }

// //console.log(divide(10,2))

// divide(10, 2).then(function (result) {
//     console.log(`div: ${result}`);
// }).catch(function (err) {
//     console.log(err);
// });

// // wait function with promises

// function wait(ms) {
//     return new Promise(function (resolve, reject) {
//         if (ms <= 0) {
//             reject(new Error("less or egal with 0"))
//         }

//         setTimeout(function () {
//             resolve()
//         }, ms)
//     })
// }
// wait(1000).then(function () {
//     console.log('we have waited 1 sec');
// }).catch(function (error) {
//     console.log(`eroare: ${error.message}`)
// })

// //connnect to sql

// const mysql = require("mysql");
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'chatroom'

// })

// connection.connect(function (err) {
//     if (err) {
//         console.log('there was an error')
//         return;
//     }
//     console.log("connection successful")
//     connection.end();
// })

// function connectToDatabase(config) {
//     return new Promise(function (resolve, reject) {
//         const connection = mysql.createConnection(config);

//         connection.connect(function (err) {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             resolve(connection)
//         })
//     })
// }

// connectToDatabase({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'chatroom'

// }).then(function (conn) {

//     console.log("succes")
//     conn.end();
// }).catch(function (err) {
//     console.log(err.message)
// })


//function in function

// function interviewQuestion(job) {
//     switch (job) {
//         case 'Teacher':
//             return function (name) {
//                 console.log("what subjecct do you teach " + name + "?")
//             }
//             break;
//         case 'Designer':
//             return function (name) {
//                 console.log(name + "can you explain what UX design is?")
//             }
//             break;
//         case 'Lawyer':
//             return function (name){
//                 console.log(name+ "how long do you practice?")
//             }
//             break;
//             default: return function(name){
//                 console.log(name+"how are you?")
//             }
//     }
// }
// let teacherQuest=interviewQuestion('Teacher');
// teacherQuest("Mary");

// interviewQuestion("Lawyer")( "Alex ")

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);

// console.log(numbers)


// a = 3;

// var a;

// console.log(a)

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)

// var num; // Declaration

// num = 6; // Initialization