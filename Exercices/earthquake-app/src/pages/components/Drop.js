import React from 'react';
import './Drop.css';

const Drop = () => {
    const [value, setValue] = React.useState('Any');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div className='dropdown'>
        <button>
          Magnitude
          <select value={value} onChange={handleChange}>
            <option value="any">Any</option>
            <option value="1.0">1.0+</option>
            <option value="2.5">2.5+</option>
            <option value="4.5">4.5+</option>
          </select>
        </button>
  
      </div>
    );
  };
    
    export default Drop;