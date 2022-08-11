import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import LabelValue from "./components/LabelValueComponent/LabelValue.js";
import "./App.css";

//USING FUNCTION COMPONENT

function Componenta(props) {
  const [message, setMessage] = useState("GT - Exerc1 (modifica acest text)");
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const onChangeInput = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="DIVV">
      <LabelValue label={message} value={counter} />
      <button
        style={{ backgroundColor: "lightpink" }}
        type="button"
        onClick={handleIncrement}
      >
        Incrementeaza
      </button>
      <button
        style={{ backgroundColor: "lightblue" }}
        type="button"
        onClick={handleDecrement}
      >
        Decrementeaza
      </button>
      <input type="text" onChange={onChangeInput} value={message} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Componenta />);

export default Componenta;
//USING CLASS COMPONENT
// class Componenta extends React.Component {
//   handleIncrement = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   handleDecrement = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   constructor(props) {
//     super(props); // super apeleaza construcotrul de baza React.Component
//     this.state = {
//       // am initializat state-ul
//       // la label ii dam o valoare initiala
//       name: "React",
//       counter: 0,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <label htmlFor="name">Label :{this.state.counter} </label>
//         <button type="button" onClick={this.handleIncrement}>
//           Incrementeaza
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrementeaza
//         </button>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Componenta />);
