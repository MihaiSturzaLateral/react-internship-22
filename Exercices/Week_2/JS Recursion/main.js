function countDown(number) {
    console.log(number)

    const newNumber = number - 1

    if (newNumber > 0) {
        countDown(newNumber)
    }
}

countDown(10)

console.log('----------')

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1)
    }
}

const num = 3

if (num > 0) {
    let result = factorial(num)
    console.log(`The factorial of ${num} is ${result}`)
}