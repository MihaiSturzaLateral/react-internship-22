import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router';

import { updateContactAction } from '../redux/actions/creators';
import { useDispatch } from 'react-redux';

export default function Update() {
  let dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  const { updatedId, firstNameUpdated, lastNameUpdated } = location.state || {};
  const [firstName, setFirstName] = useState(firstNameUpdated || '');
  const [lastName, setLastName] = useState(lastNameUpdated || '');
  const [ID, setID] = useState(updatedId || '');

  const sendDataToAPI = () => {
    updateContactAction(
      { firstName, lastName },
      ID
    )(dispatch)
      .then(() => {
        history.push('/read');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name='fname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name='lname'
            value={lastName}
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
}
