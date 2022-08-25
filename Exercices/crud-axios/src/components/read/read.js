import React, {useEffect, useState} from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Read() {

  const [apiData, setApiData]=useState([]);

  useEffect(() => {
    axios.get('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud')
    .then((getData) => {
      setApiData(getData.data);
    })
  }, [])

  const setID = (id) => {
    console.log(id);
    localStorage.setItem('ID', id) 
  }

  const getData = () => {
    axios.get('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud')
    .then((getData) => {
      setApiData(getData.data);
    })
  }

  const onDelete = (id) => {
    axios.delete(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`)
    .then(() => {
      getData();
    })
  }

    return(
        <div className='main'>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Message</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {apiData.map((data) => {
        return (
      
      <Table.Row>
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.email}</Table.Cell>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>{data.message}</Table.Cell>
        <Table.Cell>
          <Link to = '/update'>
          <Button variant="warning" onClick={() => setID(data.id)}>Update</Button>
          </Link>
        </Table.Cell>
        <Table.Cell>
          <Button variant="danger" onClick={() => onDelete(data.id)}>Delete</Button>
        </Table.Cell>
      </Table.Row>
        )
      })}
    </Table.Body>
  </Table>
  <Outlet/>
        </div>
    )
}