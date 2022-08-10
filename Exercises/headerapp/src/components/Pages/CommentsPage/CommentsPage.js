import React,{useEffect, useState} from "react";
import CommentComponent from "./CommentComponent/CommentComponent";
import './CommentsPage.css';

const url='https://jsonplaceholder.typicode.com/comments';
function CommentsPage(){
    const [data,setData]=useState([]);
    const fetchData=async()=>{
        const response=await fetch(url);
        const dt=await response.json();
        setData(dt);
    }
    useEffect(()=>{fetchData()},[]);
    return(
        <>
         <div className='title'>
            <h1>{'Comments'}</h1>
         </div>
         {/* <ul>
            {data.map((el)=>{
                const {id,name,email,body}=el;
                return(
                    <li key={id}>
                    <div>
                        <h4>{`name: ${name}`}</h4>
                        <p>{`email: ${email}`}</p>
                        <p>{`body: ${body}`}</p>
                    </div>
                </li>

                )
                
            })}
         </ul> */}
         <div>
            {data.map((el)=>{
                const{id,name,email,body}=el;
                return <CommentComponent id={id} name={name} email={email} body={body}/>
            })}
         </div>
        </>
    )
}
export default CommentsPage;