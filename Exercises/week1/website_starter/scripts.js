// function fetchData() {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         let dt=data;
//         dt.map(function (d){
//             let img=document.createElement('img');
//             img.src=`${d.url}`;
//             document.getElementById('divPhoto').appendChild(img);
//         })
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//document.getElementById('myBtn').addEventListener('click',fetchData);
//rezv cu async/await
const fetchData=async()=>{
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/photos");
        let result=await response.json();
        return result;
    }
    catch(error){
        console.log(error);
    }
}
async function funct(){
    let dt=await fetchData();
    dt.map(d=>{
        let img=document.createElement('img');
        img.src=`${d.url}`;
        document.getElementById('divPhoto').appendChild(img);
    })
}
  document.getElementById('myBtn').addEventListener('click',funct);