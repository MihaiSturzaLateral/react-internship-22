import React, { useState } from "react";
import LabelValue from "./LabelValue";

function Ex1() {
  const [label, setLabel] = useState("");
  const [value1, setValue1] = useState(190);
  const [value2, setValue2] = useState(0);

  const onChangeInput = (event) => {
    setLabel(event.target.value);
  };

  const onIncrement = () => {
    setValue1(value1 + 1);
    setValue2(value2 + 1);
  };

  const onDecrement = () => {
    setValue1(value1 - 1);
    setValue2(value2 - 1);
  };

  return (
    <>
      <h1>Exercitiul 1</h1>
      <div className="App">
        <input type="text" onChange={onChangeInput} value={label} />
        <LabelValue label={label} value={value1} />

        <LabelValue label={label} value={value2} />
        <br></br>
        <div className="buttons-wrapper">
          <button className="increment-btn" onClick={onIncrement}>
            +
          </button>
          <button className="decrement-btn" onClick={onDecrement}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
export default Ex1;

/*class Ex1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: "IQ personal:", value1: 190, value2: 0 };
  }

  onChangeInput = (event) => {
    this.setState({ label: event.target.value });
  };

  onIncrement = () => {
    this.setState({
      value1: this.state.value1 + 1,
      value2: this.state.value2 + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      value1: this.state.value1 - 1,
      value2: this.state.value2 - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.onChangeInput}
          value={this.state.label}
        />
        <LabelValue label={this.state.label} value={this.state.value1} />

        <LabelValue label={this.state.label} value={this.state.value2} />
        <br></br>
        <div className="buttons-wrapper">
          <button className="increment-btn" onClick={this.onIncrement}>
            +
          </button>
          <button className="decrement-btn" onClick={this.onDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Ex1;*/
