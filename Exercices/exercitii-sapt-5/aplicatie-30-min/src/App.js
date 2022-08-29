import "./App.css";
import { useState } from "react";
import { modifyCounter } from "./redux/Actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const counter = useSelector((state) => state.value);
	const dispatch = useDispatch();
	const [value, setValue] = useState(0);
	return (
		<div className="App">
			<div>Counter:{counter}</div>
			<input
				type="number"
				onChange={(e) => {
					if (e.target.value !== null) setValue(parseInt(e.target.value));
				}}
			></input>
			<button onClick={() => dispatch(modifyCounter(value))}>Submit</button>
			<button onClick={() => dispatch(modifyCounter(-value))}>Revert</button>
		</div>
	);
}

export default App;
