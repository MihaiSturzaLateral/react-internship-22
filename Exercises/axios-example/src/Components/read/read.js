import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './read.css'

const Read1=()=>{
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    
    const getData=()=>{
      axios.get('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud')
              .then((response)=>{
                setData(response.data)})
    }
    useEffect(()=>{getData()},[]);
    

    const deleteRow=(id)=>{
      axios.delete(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`)
            .then(()=>getData())
    }
      
    return(
      <>
      <div>
        <button className='backBtn' onClick={()=>navigate('/')}>{'<-'}Contact Form</button>
      </div>
        <div className="readDiv">
        <table>
        <caption><h2>Data from API</h2></caption>
            <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Options</th>
          </tr>
          </tbody>
          {data?.map((val, key) => {
            return (
                <tbody>
                  <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.message}</td>
                    <td>
                     <button onClick={()=>navigate('/update',{state:{name:val.name,email:val.email,message:val.message,ID:val.id}})}>Update</button>
                      <button onClick={()=>deleteRow(val.id)}>Delete</button>
                    </td>
                  </tr>
              </tbody>
            )
          })}
        </table>
      </div>
      
      </>
    )
}
export default Read1;