//9. Use this API link https://jsonplaceholder.typicode.com/photos  fetch data (only images) and display (insert) them into a div with document.createElement('img’). Call this API using a button, add an event listener for it. You can play around creating also a menu bar, footer, some cool content to display the images.
//As you know, an API request returns a promise (with fetch) - you should also implement this request using async await concept.

const button = document.querySelector('#getImages');
const frame = document.querySelector('#frame');

const fetchPhotos = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/photos`).then(x => x.json())
}

const getRandomPhotos = async () => {
    frame.innerHTML = "Loading...";
    frame.style = `
        display: flex;
        flex-direction: column; 
        align-items: center;
        gap: 5px 
    `
    const minInterval = Math.floor(Math.random() * 10);
    const maxInteval = Math.floor(Math.random() * 20) + 10;
    fetchPhotos().then(x => {
        for (i = minInterval; i <= maxInteval; i++) {
            const image = document.createElement('img');
            image.src = x[i].url;
            const listElement = document.createElement('li').appendChild(image);
            listElement.style = `
            border: 15px solid;
            width: 35%
            `
            frame.append(listElement)
        }
    }).then(frame.innerHTML = "")
}

button.addEventListener("click", () => getRandomPhotos())