let btnGImg;
let con=0;
let main=document.getElementById("main");
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){

    document.getElementById("btnGetImg").addEventListener("click",onGetImg);
}
async function onGetImg(){
    let res= await fetch("https://jsonplaceholder.typicode.com/photos");
    let json= await res.json();
    for(let i=0;i<1;i++){
        // photo.src=json[con].url;
        main.innerHTML+=`
            <div class="card mx-2" style="width: 18rem;">
            <img src="${json[con].url}" class="card-img-top" alt="img form api>
            <div class="card-body">
            <p class="card-text">${json[con].title}</p>
            </div>
            </div>
            `
        con++;
    }
}
document.getElementById("btnClear").addEventListener("click",onClear);

function onClear(){
    main.innerHTML="";
   
}
