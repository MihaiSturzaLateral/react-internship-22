import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../../shared/FormComponent/Form";
import SecondNavbar from "../../shared/Navbar/SecondNavbar";
import './Contact.css'


const ContactPage = () => {
    // Obtain the state props send via <Link /> component
    // From MessagesPage
    const location = useLocation();
    const data = location.state?.messageData;

    const postMessage = async (formValues) => {
        // Check if we had any data on component mount(first render).
        data ?
            // Edit message
            await axios.put(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${data?.id}`,
                { ...formValues })
            :
            // Add new message
            await axios.post('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud', { ...formValues })
    }

    return (
        <>
            <SecondNavbar />
            <div className="container">
                <h3 className="mb-5">
                    {data ? 'Edit message' : 'Add new message'}
                </h3>
                <Form messageData={data} onSubmit={postMessage} />
            </div>
        </>
    )
}

export default ContactPage