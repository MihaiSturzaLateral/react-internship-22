import React from "react";
import Bar from "./components/inputBar";
import LabelValue from "./components/LabelValue";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { label: "", value: 0 };
	}

	onChangeInput = (e) => {
		this.setState({ label: e.target.value });
	};

	onIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	onDecrement = () => {
		this.setState({ value: this.state.value - 1 });
	};

	render() {
		return (
			<div className="app">
				<label>Your text:</label>
				<input
					type="text"
					onChange={this.onChangeInput}
					value={this.state.label}
				/>
				<Bar label={this.state.label} />
				<LabelValue value={this.state.value} />
				<div className="buttons">
					<button className="increment-button" onClick={this.onIncrement}>
						+
					</button>
					<button className="decrement-button" onClick={this.onDecrement}>
						-
					</button>
				</div>
			</div>
		);
	}
}

export default App;
