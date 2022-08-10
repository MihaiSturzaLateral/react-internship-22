import React from "react";
import './PhotosComponent.css'

function PhotosComponent(props){
    return(
        <>
            <div className="divCard">
                  <img src={props.url} alt='pic'/>
                  <div className='container'>
                    <p>{'title: '}
                        <span>{props.title}</span>
                    </p>
                   </div> 
            </div>
        </>
    )
}

export default PhotosComponent;