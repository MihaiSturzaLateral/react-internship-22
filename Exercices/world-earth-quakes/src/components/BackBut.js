import React from 'react';
import {useNavigate} from "react-router-dom";

const BackBut = () => {
    const navigate=useNavigate();
    return (
        
        <button onClick={()=>navigate(-1)}>GoBack</button>
       
    );
};

export default BackBut;