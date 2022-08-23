import React, { useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './read.css';
import { deleteContactAction, getAllContacts } from '../redux/actions/creators';

export default function Read() {
  let dispatch = useDispatch();
  const { contacts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  const getData = () => {
    dispatch(getAllContacts());
  };

  const onDelete = (id) => {
    deleteContactAction(id)(dispatch)
      .then(() => {
        getData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='container'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contacts?.map((data, key) => {
            return (
              <Table.Row key={key}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={{
                      pathname: '/update',
                      state: {
                        updatedId: data.id,
                        firstNameUpdated: data.firstName,
                        lastNameUpdated: data.lastName,
                      },
                    }}>
                    <Button color='green'>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color='red' onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
