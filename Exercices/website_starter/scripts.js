// view me in browser console

console.log("it works!");

let apilink = 'https://jsonplaceholder.typicode.com/photos'
let contact= document.getElementById('contact')

let div = document.createElement('div')
div.id = 'image'
div.innerHTML = '<p>POZA</p>'
document.body.appendChild(div);
document.body.insertBefore(div, contact);
const changeBut = document.getElementById('but')

// WITH THEN

const change = () => {
    fetch(apilink)
        .then(response => response.json())
        .then(data => {

            let x = Math.floor(Math.random() * 5000);
            div.innerHTML = `<img src='${data[x].url}'/>`

        })
}
change();
changeBut.addEventListener("click", change);


//WITH ASYNC, AWAIT

//     async function fetchApi() {

//         const response = await fetch(apilink)
//         const data = await response.json()
//         let x = Math.floor(Math.random() * 5000);
//         div.innerHTML = `<img src='${data[x].url}'/>`

//     }


// changeBut.addEventListener("click", fetchApi);