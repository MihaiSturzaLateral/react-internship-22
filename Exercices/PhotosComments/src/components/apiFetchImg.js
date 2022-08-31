const url1 = "https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
function loadImg() {
    const imageDiv = document.querySelector('.image');
    fetch(url1)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                let imageElement = document.createElement('img');
                imageElement.src = data.results[i].urls.thumb;
                imageDiv.append(imageElement);
            }
        })
        .catch(e => {
            console.log("error --> ", e)
        });;
}
const element = document.getElementById("clickedBtn");
element.addEventListener("click", function () {
    loadImg();
})

export default loadImg;
