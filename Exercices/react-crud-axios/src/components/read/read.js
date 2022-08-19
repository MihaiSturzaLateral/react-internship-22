import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './read.css';

export default function Read() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    // const setData = (id, firstName, lastName) => {
    //     localStorage.setItem('ID', id)
    //     localStorage.setItem('firstName', firstName)
    //     localStorage.setItem('lastName', lastName)
    // }

    const getData = () => {
        axios.get(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud`)
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
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to={{pathname:'/update', state:{updatedId:data.id, firstNameUpdated:data.firstName, lastNameUpdated:data.lastName}}}>
                                        <Button
                                            color="green"                
                                            // onClick={() => setData(data.id, data.firstName, data.lastName)}>     
                                            >                                        
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
