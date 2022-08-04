const list = document.getElementById('posts')
let array = [];
let index = 0

const fetchPromise = fetch('https://jsonplaceholder.typicode.com/posts');

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
    const datas = document.createElement('dtas')
    datas.src = array[index].id;
    list.appendChild(datas)
    index++
}