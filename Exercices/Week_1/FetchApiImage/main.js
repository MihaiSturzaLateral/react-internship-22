const list = document.getElementById('list-image')
let array = [];
let index = 0

const fetchPromise = fetch('https://jsonplaceholder.typicode.com/photos');

fetchPromise
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((data) => {
        console.log(data);
        array = [...data]
    });
//console.log(array)

const doFunction = () => {

    console.log(array[index])
    const image = document.createElement('img')
    image.src = array[index].url;
    list.appendChild(image)
    index++
}