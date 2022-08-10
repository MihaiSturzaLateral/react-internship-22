import React,{useEffect, useState} from "react";
import PhotosComponent from "./PhotosComponents/PhotosComponent";

const url='https://jsonplaceholder.typicode.com/photos';

function PhotoPages(){
    const [data,setData]=useState([]);

    const fetchData=async()=>{
        const response=await fetch(url);
        const dt=await response.json();
        setData(dt);
    }
    useEffect(()=>{fetchData()},[]);
    console.log(data);
    return(
        <>
            <div className='title'>
                <h1>{'Photos'}</h1>
            </div>
            <div>
                {data.map((el)=>{
                    const {id,title,url}=el;
                    return(<PhotosComponent title={title} url={url}/>)
                })}
            </div>  
        </>
    )
}
export default PhotoPages;