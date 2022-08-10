import React from 'react';
import './CommentComponent.css'

function CommentComponent(props){
    return(
        <>
            <ul className='commComp'>
            <li key={props.id}>
                    <div>
                        <p>{'name: '} 
                            <span>{props.name}</span>
                        </p>
                        <p>{'email: '}
                            <span>{props.email}</span>
                        </p>
                        <p>{'body: '}
                            <span>{props.body}</span>
                        </p>
                        
                    </div>
                </li>

            </ul>
        </>
    )
}
export default CommentComponent;