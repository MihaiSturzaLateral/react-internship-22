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

import React, { useEffect, useState } from 'react';
import './ex_Adela.css';

function Name () {
    const [user,setUser]=useState({userName:'Adela',firstName:'Maria',lastName:'Tanca'});
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            
            setUser({...user, userName:'Adela',firstName:'Maria',lastName:'Tanca'});
          
        },5000)
        return()=> clearInterval(interval);
    },[])

    const logName = () => {
        console.log(user.userName);
        console.log(user.firstName);
        console.log(user.lastName);
    };

   const  handleUserNameInput = e => {
        setUser({...user, userName: e.target.value });
    };
    const handleFirstNameInput = e => {
        setUser({ ...user,firstName: e.target.value });
    };
    const handleLastNameInput = e => {
        setUser({ ...user,lastName: e.target.value });
    };

    return (
            <div>
                <div className='title'>
                    <h1>This is a Class Component</h1>
                </div>
               
                <input
                    type="text"
                    onChange={handleUserNameInput}
                    value={user.userName}
                    placeholder="Your Username"
                />
                <input
                    type="text"
                    onChange={handleFirstNameInput}
                    value={user.firstName}
                    placeholder="Your First Name"
                />
                <input
                    type="text"
                    onChange={handleLastNameInput}
                    value={user.lastName}
                    placeholder="Your Last Name"
                />
                <div className='btn'>
                    <button className='divBtn'
                        onClick={logName}
                    >
                    Log Names
                    </button>
                </div>
                
            </div>
        );
    }


export default Name;

