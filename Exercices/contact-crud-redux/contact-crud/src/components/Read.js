import { React, useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Read.css";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_contactAction,
  get_contactAction,
} from "./redux/actions/creator";

 const Read = () => {


  let dispatch = useDispatch();
  const { contacts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(get_contactAction());
  }, []);
  const getData = () => {
    dispatch(get_contactAction());
  };
  const onDelete = (id) => {
    delete_contactAction(id)(dispatch)
      .then(() => {
        getData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <Button className="but" id="form">
          GoTo ADD
        </Button>
      </Link>
      <Table className="tabel">
        <Table.Header className="header">
          <Table.Row className="row-head">
            <Table.HeaderCell className="cells">ID</Table.HeaderCell>
            <Table.HeaderCell className="cells">Email</Table.HeaderCell>
            <Table.HeaderCell className="cells">Name</Table.HeaderCell>
            <Table.HeaderCell className="cells">Message</Table.HeaderCell>
            <Table.HeaderCell className="cells">Update</Table.HeaderCell>
            <Table.HeaderCell className="cells">Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Array.isArray(contacts)
            ? contacts.map((data, key) => (
                <Table.Row className="row" key={key}>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.email}</Table.Cell>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>{data.message}</Table.Cell>
                  <Table.Cell>
                    {console.log(data)}
                    <Link
                      to="/update"
                      state={{
                        updatedId: data.id,
                        EmailUpdated: data.email,
                        NameUpdated: data.name,
                        MessageUpdated: data.message,
                      }}
                    >
                      <Button className="but" id="update">
                        Update
                      </Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      className="but"
                      id="delete"
                      onClick={() => {
                        onDelete(data.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))
            : null}
        </Table.Body>
      </Table>
    </>
  );
};
export default Read;