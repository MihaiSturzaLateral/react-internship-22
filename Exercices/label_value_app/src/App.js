import React from "react";

import LabelValue from "./components/LabelValueComponent/LabelValue";
import "./App.css";

class App extends React.Component {
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

export default App;
