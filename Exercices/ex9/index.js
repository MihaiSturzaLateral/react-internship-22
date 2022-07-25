//exercise 9

let api = 'https://jsonplaceholder.typicode.com/photos';
const photoResult = document.getElementById('photoResult');
const btn = document.getElementById('photoBtn');

//with THEN
/*
const getRandomPhoto = () => {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let random = Math.floor(Math.random()*5000);
            photoResult.innerHTML = `<img src="${data[random].url}"/>`
        })
}

btn.addEventListener('click', getRandomPhoto)
*/

//with ASYNC, AWAIT

const randomPhoto = async() => {
    const res = await fetch(api);
    const data = await res.json();
    let random1 = Math.floor(Math.random()*5000);
    photoResult.innerHTML += `<div class="result"><img src="${data[random1].url}"/></div>`


}

btn.addEventListener("click", randomPhoto);
