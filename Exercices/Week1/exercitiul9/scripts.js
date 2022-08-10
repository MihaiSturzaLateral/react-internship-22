function imagesFetch() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let dates = data;
      dates.map(function (i) {
        let img = document.createElement("img");
        img.src = `${i.url}`;
        document.getElementById("img").appendChild(img);
      });
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
document.getElementById("imgBtn").onclick = imagesFetch();

// const imgBtn = document.getElementById("imgBtn");
// if (imgBtn) {
//   imgBtn.addEventListener("click", imagesFetch, false) = imagesFetch();
// }

/*const imagesAsync = async () => {
  try {
    let url = await fetch("https://jsonplaceholder.typicode.com/photos");
    let resolve = await url.json();
    return resolve;
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("imgBtn").addEventListener("onclick", imagesFetch());*/
