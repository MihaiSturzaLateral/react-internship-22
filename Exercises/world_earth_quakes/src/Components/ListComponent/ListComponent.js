import React from "react";
import './ListComponent.css'
import { useNavigate} from 'react-router-dom';

const ListComponent=({ids,mag,title,detail})=>{
    const navigate=useNavigate();

    if(mag>=1.0 && mag<2.5)
    {
        return(
        <>
            <ul className='ulListComponent'>
                <li className='liListComponent' key={ids}>
                    <span style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            textAlign: 'center',
                            backgroundColor: 'green',
                            padding: '8px',
                            margin: '10px 10px 10px 0px'
                        }}>
                            {mag}
                    </span>
                    <span className='spanTitle'>{title}</span>
                    <button style={{
                                backgroundColor:'green',
                                textAlign: 'center',
                                padding:'5px',
                                borderRadius:'8px',
                                border:'none',
                                float:'right',
                                marginTop:'5%'
                            }}onClick={()=>navigate('/DetailsPage',{state:detail})}>
                                
                            
                            View details</button>
                </li>
            </ul>
        </>)
    }
    else
        if(mag>=2.5 && mag<4.5)
            return(
                <>
                    <ul className='ulListComponent'>
                        <li className='liListComponent' key={ids}>
                            <span style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                textAlign: 'center',
                                backgroundColor: 'orange',
                                padding: '8px',
                                margin: '10px 10px 10px 0px'
                        }}>
                            {mag}</span>
                            <span className='spanTitle'>{title}</span>
                            <button style={{
                                backgroundColor:'orange',
                                textAlign: 'center',
                                padding:'5px',
                                borderRadius:'8px',
                                border:'none',
                                float:'right',
                                marginTop:'5%'
                            }}onClick={()=>navigate('/DetailsPage',{state:detail})}>View details</button>
                        </li>
                     </ul>
                </>)
        else
            if(mag>=4.5)
                return(
                    <>
                    <ul className='ulListComponent'>
                        <li className='liListComponent' key={ids}>
                            <span style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                textAlign: 'center',
                                backgroundColor: 'red',
                                padding: '10px',
                                margin: '10px 10px 10px 0px'
                        }}>
                            {mag}</span>
                            <span className='spanTitle'>{title}</span>
                            <button style={{
                                backgroundColor:'red',
                                textAlign: 'center',
                                padding:'5px',
                                borderRadius:'8px',
                                border:'none',
                                float:'right',
                                marginTop:'5%'
                            }}onClick={()=>navigate('/DetailsPage',{state:detail})}>View details</button>
                        </li>
                     </ul>
                    </>
                )

}            
export default ListComponent;