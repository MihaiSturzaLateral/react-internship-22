import "./App.css";
import React, { useState, useEffect } from "react";

// 2.  Functional component

function Name() {
  const [userName, setUsername] = useState("Adela");
  const [firstName, setFirstname] = useState("Maria");
  const [lastName, setLastname] = useState("Tanca");

  useEffect(() => {
    setInterval(() => {
      setUsername("Adela");
      setFirstname("Marica");
      setLastname("Tanca");
    }, 5000);
  });

  const logName = () => {
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
  };

  const handleUserNameInput = (e) => {
    setUsername({ userName: e.target.value });
  };
  const handleFirstNameInput = (e) => {
    setFirstname({ firstName: e.target.value });
  };
  const handleLastNameInput = (e) => {
    setLastname({ lastName: e.target.value });
  };

  return (
    <div>
      <h3>This is a Functional Component</h3>
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

export default Name;

// 2. Transform this class component into a functional component

// import React, { Component } from 'react';

// class Name extends Component {
//     state = {
//         userName: 'Adela',
//         firstName: 'Maria',
//         lastName: 'Tanca'
//     }

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({
//                 userName: 'Adela',
//                 firstName: 'Maria',
//                 lastName: 'Tanca'
//             });
//         }, 5000);
//     }

//     logName = () => {
//         console.log(this.state.userName);
//         console.log(this.state.firstName);
//         console.log(this.state.lastName);
//     };

//     handleUserNameInput = e => {
//         this.setState({ userName: e.target.value });
//     };
//     handleFirstNameInput = e => {
//         this.setState({ firstName: e.target.value });
//     };
//     handleLastNameInput = e => {
//         this.setState({ lastName: e.target.value });
//     };

//     render() {
//         return (
//             <div>
//                 <h3>This is a Class Component</h3>
//                 <input
//                     type="text"
//                     onChange={this.handleUserNameInput}
//                     value={this.state.userName}
//                     placeholder="Your Username"
//                 />
//                 <input
//                     type="text"
//                     onChange={this.handleFirstNameInput}
//                     value={this.state.firstName}
//                     placeholder="Your First Name"
//                 />
//                 <input
//                     type="text"
//                     onChange={this.handleLastNameInput}
//                     value={this.state.lastName}
//                     placeholder="Your Last Name"
//                 />
//                 <button
//                     onClick={this.logName}
//                 >
//                     Log Names
//                 </button>
//             </div>
//         );
//     }
// }

// export default Name;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
