const promise1 = Promise.resolve(3)
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
})

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values)
})

// Using Promise.all

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 100);
})

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
})

/*

const p = Promise.all([1, 2, 3])
const p_2 = Promise.all([1, 2, 3, Promise.resolve(444)])
const p_3 = Promise.all([1, 2, 3, Promise.reject(555)])

setTimeout(function () {
    console.log(p)
    console.log(p_2)
    console.log(p_3)
})

*/

/*
const p = Promise.all([])
const p2 = Promise.all([1337, "hi"])
console.log(p)
console.log(p2)
setTimeout(function() {
    console.log('the stack is now empty')
    console.log(p2)
})

*/

// Promise.all fail-fast behavior

const p__1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('one'), 1000);
})

const p__2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('two'), 2000);
})

const p__3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('three'), 3000);
})

const p__4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('four'), 4000);
})

const p__5 = new Promise((resolve, reject) => {
    reject(new Error('reject'));
})

Promise.all([p__1, p__2, p__3, p__4, p__5])
    .then((values) => {
        console.log(values)
    })
    .catch((error) => {
        console.error(error.message)
    })
/*
const p___1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1_delayed_resolution'), 1000);
});

const p___2 = new Promise((resolve, reject) => {
    reject(new Error('p2_immediate_rejection'));
});

Promise.all([
    p___1.catch((error) => { return error }),
    p___2.catch((error) => { return error }),
]).then((values) => {
    console.log(values[0]) // "p1_delayed_resolution"
    console.error(values[1]) // "Error: p2_immediate_rejection"
})

*/