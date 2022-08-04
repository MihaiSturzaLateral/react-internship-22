function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log('Booom!')
}

//countDown(3)

function countDownRecursive(n) {
    if (n <= 0) {
        console.log('Booom!')
        return
    }
    console.log(n)
    countDownRecursive(n - 1)
}

countDownRecursive(3)

// countDownRecursive(3)
// countDownRecursive(2)
// countDownRecursive(1)
// countDownRecursive(0)
// return
// return
// return
// return 

console.log('-------------')

function sumRange(n) {
    let total = 0
    for (let i = n; i > 0; i--) {
        total += i
    }
    return total
}

function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        return total
    }
    return sumRangeRecursive(n - 1, total + n)
}

// sumRangeRecursive(3, 0)
    // sumRangeRecursive(2, 3)
        // sumRangeRecursive(1, 5)
            // sumRangeRecursive(0, 6)
            // return 6
        // return 6
    // return 6
// return 6