import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { addContactAction } from '../redux/actions/creators';

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const sendDataToAPI = () => {
    addContactAction({ firstName, lastName })(dispatch)
      .then((e) => {
        history.push('/read');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name='fname'
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name='lname'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
