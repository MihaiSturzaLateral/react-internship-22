/* 9. Use this API link https://jsonplaceholder.typicode.com/photos  fetch data (only images) and display 
(insert) them into a div with document.createElement('img’). Call this API using a button, add an event 
listener for it. You can play around creating also a menu bar, footer, some cool content to display the 
images.
 As you know, an API request returns a promise (with fetch) - you should also implement this 
 request using async await concept. */
var up = document.getElementById("parag");
up.innerHTML = "Click pe buton pentru a vizualiza paleta de culori";

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      data.map((photos) => {
        let h2 = document.createElement("h2"); //create the paragraph tag
        let img = document.createElement("img");
        let p = document.createElement("p");
        h2.innerHTML = `Culoarea nr. : ${photos.id}`;
        img.src = `${photos.url}`;
        p.innerHTML = `Semnificaţia culorii: ${photos.title} `;
        document.getElementById("divs").appendChild(h2);
        document.getElementById("divs").appendChild(img);
        document.getElementById("divs").appendChild(p);
      });
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
document.getElementById("bttn").addEventListener("click", fetchData);
