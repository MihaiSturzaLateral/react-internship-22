import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
	const [userName, setUserName] = useState("Bogdan");
	const [firstName, setFirstName] = useState("Bogdan");
	const [lastName, setLastName] = useState("Bogdan");

	const handleUserNameInput = (e) => {
		setUserName(e.target.value);
	};
	const handleFirstNameInput = (e) => {
		setFirstName(e.target.value);
	};
	const handleLastNameInput = (e) => {
		setLastName(e.target.value);
	};

	useEffect(() => {
		setUserName("Bogdan");
		setFirstName("Bogdan");
		setLastName("Bogdan");
	}, []);

	const logName = () => {
		console.log(userName);
		console.log(firstName);
		console.log(lastName);
	};

	return (
		<div>
			<h3>This is a Class Component</h3>
			<input
				type="text"
				onChange={handleUserNameInput}
				value={userName}
				placeholder="Your Username"
			/>
			<input
				type="text"
				onChange={handleFirstNameInput}
				value={firstName}
				placeholder="Your First Name"
			/>
			<input
				type="text"
				onChange={handleLastNameInput}
				value={lastName}
				placeholder="Your Last Name"
			/>
			<button onClick={logName}>Log Names</button>
		</div>
	);
}

export default App;

// class App extends Component {
// 	state = {
// 		userName: "Adela",
// 		firstName: "Maria",
// 		lastName: "Tanca",
// 	};

// 	componentDidMount() {
// 		setInterval(() => {
// 			this.setState({
// 				userName: "Adela",
// 				firstName: "Maria",
// 				lastName: "Tanca",
// 			});
// 		}, 5000);
// 	}

// 	logName = () => {
// 		console.log(this.state.userName);
// 		console.log(this.state.firstName);
// 		console.log(this.state.lastName);
// 	};

// 	handleUserNameInput = (e) => {
// 		this.setState({ userName: e.target.value });
// 	};
// 	handleFirstNameInput = (e) => {
// 		this.setState({ firstName: e.target.value });
// 	};
// 	handleLastNameInput = (e) => {
// 		this.setState({ lastName: e.target.value });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<h3>This is a Class Component</h3>
// 				<input
// 					type="text"
// 					onChange={this.handleUserNameInput}
// 					value={this.state.userName}
// 					placeholder="Your Username"
// 				/>
// 				<input
// 					type="text"
// 					onChange={this.handleFirstNameInput}
// 					value={this.state.firstName}
// 					placeholder="Your First Name"
// 				/>
// 				<input
// 					type="text"
// 					onChange={this.handleLastNameInput}
// 					value={this.state.lastName}
// 					placeholder="Your Last Name"
// 				/>
// 				<button onClick={this.logName}>Log Names</button>
// 			</div>
// 		);
// 	}
// }
