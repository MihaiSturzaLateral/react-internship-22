import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactAction,
  getContactsAction,
} from "../../redux/actions/contactActions";

const Read = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state);

  useEffect(() => {
    dispatch(getContactsAction());
  }, []);

  const getData = () => {
    dispatch(getContactsAction());
  };

  const onDelete = (id) => {
    deleteContactAction(id)(dispatch)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="container">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="row">ID</Table.HeaderCell>
            <Table.HeaderCell className="row">Email</Table.HeaderCell>
            <Table.HeaderCell className="row">Name</Table.HeaderCell>
            <Table.HeaderCell className="row">Message</Table.HeaderCell>
            <Table.HeaderCell className="row">Update</Table.HeaderCell>
            <Table.HeaderCell className="row">Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contacts?.map((data, key) => {
            return (
              <Table.Row key={key}>
                <Table.Cell className="column">{data.id}</Table.Cell>
                <Table.Cell className="column">{data.email}</Table.Cell>
                <Table.Cell className="column">{data.name}</Table.Cell>
                <Table.Cell className="column">{data.message}</Table.Cell>
                <Table.Cell>
                  <Link
                    to="/update"
                    state={{
                      idUpdated: data.id,
                      emailUpdated: data.email,
                      nameUpdated: data.name,
                      messageUpdated: data.message,
                    }}
                  >
                    <Button className="upbtn">Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button className="delbtn" onClick={() => onDelete(data.id)}>
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
};

export default Read;
