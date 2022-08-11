import React, { useState } from "react";
import LabelValueComp from "./components/LabelValueComp";
import "./App.css";

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "ceva",
      count: 0,
    };
  }

  onChangeInput = (event) => {
    this.setState({ text: event.target.value });
  };

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Label Value App</h1>
        <div className="wrapper">
          <LabelValueComp text={this.state.text} count={this.state.count} />
          <div className="buttons">
            <button onClick={this.onDecrement} className="minusBtn">
              -
            </button>
            <button onClick={this.onIncrement} className="plusBtn">
              +
            </button>
          </div>
          <input
            type="text"
            onChange={this.onChangeInput}
            placeholder="input"
            value={this.state.text}
          />
        </div>
      </div>
    );
  }
}
*/

const App = () => {
  const [text, setText] = useState("Ceva: ");
  const [count, setCount] = useState(0);

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="title">Label Value App</h1>
      <div className="wrapper">
        <LabelValueComp text={text} count={count} />
        <div className="buttons">
          <button onClick={onDecrement} className="minusBtn">
            -
          </button>
          <button onClick={onIncrement} className="plusBtn">
            +
          </button>
        </div>
        <input
          type="text"
          onChange={onChangeInput}
          placeholder="input"
          value={text}
        />
      </div>
    </div>
  );
};

export default App;
