import React from "react";
import './Card.css'

const Card=(props)=>{
    //time=time.format("dd/mm/yyyy hh:MM:ss");
    return(
        <>
            <div className='divCard'>
                <div className='first'>{`${'Title'}:`}</div>
                <div className="second">{props.title}</div>
            </div>
            <div className='divCard'>
                <div className='first'>{`${'Place'}:`}</div>
                <div className="second">{props.place}</div>
            </div>
            <div className='divCard'>
                <div className='first'>{`${'Time'}:`}</div>
                <div className="second">{new Date(props.time).toLocaleString()}</div>
            </div>
            <div className='divCard'>
                <div className='first'>{`${'Status'}:`}</div>
                <div className="second">{props.status}</div>
            </div>
            <div className='divCard'>
                <div className='first'>{`${'Tsunami risk'}:`}</div>
                <div className="second">{props.tsunami}</div>
            </div>

        </>
    )
}
export default Card;