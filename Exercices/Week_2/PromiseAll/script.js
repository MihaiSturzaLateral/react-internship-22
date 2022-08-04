const fetchUsers = fetch('user.json');
const fetchColors = fetch('colors.json')

// Promise.all([fetchUsers, fetchColors]).then(values => {
//     console.log(values)
// })

// Promise.all([fetchUsers, fetchColors]).then(values => {
//     return Promise.all(values.map(r => r.json()))
// }).then(values => {
//     console.log(values)
// })

Promise.all([fetchUsers, fetchColors]).then(values => {
    return Promise.all(values.map(r => r.json()))
}).then(([users, colors]) => {
    console.log(users)
    console.log(colors)
}).catch(e => {
    console.log('caught')
    console.log(e)
})