import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const Name = () => {
  const [userName, setUserName] = useState('Adela');
  const [firstName, setFirstName] = useState('Maria');
  const [lastName, setLastName] = useState('Tanca');

  useEffect(() => {
    setInterval(() => {
      setUserName('Ionut');
      setFirstName('Nicolae');
      setLastName('Iova');
    }, 5000);
  });

  const logName = () => {
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
  };

  const handleUserNameInput = e => {
    setUserName(e.target.value);
  };

  const handleFirstNameInput = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameInput = e => {
    setLastName(e.target.value);
  };

  return (
    <div>
        <h3>This is a Class Component</h3>
        <input
            type="text"
            onChange={handleUserNameInput}
            value={this.state.userName}
            placeholder="Your Username"
        />
        <input
            type="text"
            onChange={handleFirstNameInput}
            value={this.state.firstName}
            placeholder="Your First Name"
        />
        <input
            type="text"
            onChange={handleLastNameInput}
            value={this.state.lastName}
            placeholder="Your Last Name"
        />
        <button
            onClick={logName}
        >
            Log Names
        </button>
    </div>
  );
};

export default Name;
