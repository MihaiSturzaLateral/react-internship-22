// import React from "react";
// import './LabelValue.css';

// class LabelValue extends React.Component{
//     render(){
//         return(
//             <div className="LabelValue">
//                 <div className='lbl'>{this.props.label}</div> 
//                 <div className="val">{this.props.value}</div>
//             </div>

//         );
//     }
// }
// export default LabelValue;

//function component

import React from "react";
import './LabelValue.css';

function LabelValue(props){
    return(
        <div className="LabelValue">
        <div className='lbl'>{props.label}</div> 
        <div className="val">{props.value}</div>
    </div>
    )
}
export default LabelValue;