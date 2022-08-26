import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../shared/Navbar/SecondNavbar";

const MessagesPage = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, [])

    const deleteMessage = (id) => {
        axios.delete(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`).then(() => fetchMessages())
    }

    const fetchMessages = () => {
        axios.get('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud').then(({ data }) => setMessages(data));
    }

    const renderMessages = () => {
        return messages.map((msg, index) => {
            return (
                <li key={index} className="row border p-2">
                    <div className="col-4 border-end">
                        <h4>Name: {msg.name}</h4>
                        <h6>{msg.email}</h6>
                    </div>
                    <div className="col d-flex align-items-center">
                        <h5>{msg.message}</h5>
                    </div>
                    <div className="col-2 d-flex justify-content-end py-3">
                        <Link
                            to='/contact'
                            className="btn btn-outline-success"
                            state={{
                                messageData: { ...msg }
                            }}>
                            Edit
                        </Link>
                        <button onClick={() => deleteMessage(msg.id)} className="btn btn-danger">X</button>
                    </div>
                </li>
            )
        })
    }

    return (
        <>
            <SecondNavbar />
            <ul className="w-75 mb-0 mt-5 mx-auto">
                <li className="row border border-bottom-0 p-2">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <h4>Name</h4>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <h4>Message</h4>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <h4>Options</h4>
                    </div>
                </li>
            </ul>
            <ul className="w-75 mt-0 mx-auto">
                {renderMessages()}
            </ul>
        </>
    )
}

export default MessagesPage;