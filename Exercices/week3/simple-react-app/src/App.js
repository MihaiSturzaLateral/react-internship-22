
import './App.css';
import Label from './components/Label';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count1: 0, count2: 190, label: "IQ Personal" }
  }
  // console.log(this.state)
  // => { count1: 0, count2: 190, label: "IQ Personal" }
  // console.log(this.state.count1) => 0

  incrementValues = () => {
    const { count1, count2 } = this.state;
    // sau
    // const count1 = this.state.count1;
    // const count2 = this.state.count2;
    this.setState({
      count1: count1 + 1,
      count2: count2 + 1
    })
  }

  decrementValues = () => {
    const { count1, count2 } = this.state;
    this.setState({
      count1: count1 - 1,
      count2: count2 - 1
    })
  }

  render() {
    return (
      <div className="app">
        <input
          type="text"
        />
        <Label value={this.state.count1} label={this.state.label} />

        <Label value={this.state.count2} label={this.state.label} />

        <div class="button-wrapper">
          <button onClick={this.incrementValues} className="btn-i">
            +
          </button>
          <button onClick={this.decrementValues} className="btn-d">
            -
          </button>
        </div>

      </div>
    );
  }
}

export default App;
