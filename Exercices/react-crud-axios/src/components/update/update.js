import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
export default function Update() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    let location = useLocation();
    const {updatedId, firstNameUpdated, lastNameUpdated} = location.state || {}

    const sendDataToAPI = () => {
        axios.put(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${ID}`, {
            firstName,
            lastName
        }).then(() => {
            history.push('/read')
        })
    }

    useEffect(() => {
        // setFirstName(localStorage.getItem('firstName'));
        // setLastName(localStorage.getItem('lastName'));
        // setID(localStorage.getItem('ID'))
        setFirstName(firstNameUpdated);
        setLastName(lastNameUpdated);
        setID(updatedId);
    }, [])


    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}
