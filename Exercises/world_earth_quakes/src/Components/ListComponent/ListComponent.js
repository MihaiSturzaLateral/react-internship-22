import React from "react";
import './ListComponent.css'
import { useNavigate} from 'react-router-dom';

const ListComponent=({ids,mag,title,detail})=>{
    const navigate=useNavigate();
    let color={
        backgroundColor:'green',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        textAlign: 'center',
        padding: '10px',
        margin: '10px 10px 10px 0px'
    }
    let btnColor={
        backgroundColor:'green',
        textAlign: 'center',
        padding:'5px',
        borderRadius:'8px',
        border:'none',
        float:'right',
        marginTop:'5%'
    }
        
    if(mag>=2.5){
        color={...color,
            backgroundColor:'orange'
        }
        btnColor={...btnColor,
            backgroundColor:'orange'
        }
    }
    if(mag>=4.5){
        color={...color,
            backgroundColor:'red'
        }
        btnColor={...btnColor,
            backgroundColor:'red'
        }
    }
    return(
    <>
        <ul className='ulListComponent'>
            <li className='liListComponent' key={ids}>
                <span  style={color}>{mag}</span>
                <span className='spanTitle'>{title}</span>
                <button style={btnColor} onClick={()=>navigate('/DetailsPage',{state:detail})}>View details</button>
            </li>
        </ul>
    </>)
}            
export default ListComponent;