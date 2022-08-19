import { React,useState } from 'react';

const magnitudes = [
    { label: "Any", value: "all" },
    { label: "4.5+", value: "4.5" },
    { label: "2.5+", value: "2.5" },
    { label: "1+", value: "1.0" },
  ];

const DropDown = ({sendValue}) => {
    const [value, setValue] = useState(magnitudes[0]);
    const handleChange = (event) => {
      setValue(event.target.value);
      sendValue(event.target.value);
    };
    return (
      <button className="but-drop">
        Magnitude
        <select className="select-drop" value={value} onChange={handleChange}>
          {magnitudes.map((mag,key) => (
            <option key={key} className="option-drop" value={mag.value}>
              {mag.label}
            </option>
          ))}
        </select>
      </button>
    );
  };
export default DropDown;