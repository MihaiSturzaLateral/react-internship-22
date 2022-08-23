import React from 'react';
import './LabelValue.css';

const LabelValue = (props) => {
    return (
        <div className='detailsCard'>
        <div className="labelDetail">{props.label}</div>
        <div className="valueDetail">{props.value}</div>
        </div>
    );
}

export default LabelValue;