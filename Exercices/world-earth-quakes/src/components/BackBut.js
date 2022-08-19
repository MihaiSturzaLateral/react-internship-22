import React from 'react';
import {useNavigate} from "react-router-dom";


const BackBut = () => {
    const navigate=useNavigate();
    return (
        
        <button className='back-but' onClick={()=>navigate(-1)}>&lArr; Go Back</button>
       
    );
};

export default BackBut;