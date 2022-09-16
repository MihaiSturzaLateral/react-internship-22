import React, { useEffect, useState } from "react";
import "./MyReportsPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReports,
  deleteReportAction,
} from "../../redux/actions/actionsCreators";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import profile_pic from "./profile_pic.png";
import ModalPageFormik from "../ModalPageFormik/ModalPageFormik";


const MyReportsPage = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const { data } = useSelector((state) => state.report);

  useEffect(() => {
    dispatch(getAllReports());
  }, []);


  return (
    <>
      <div className="titleDiv">
        <h3>My reports: </h3>
      </div>
      <div className="scrollableDiv">
        {data?.map((item, index) => {
          const { fname, lname, nat, not, sex, uploadedfile, id } = item;
          return (
            <>
              <Card
                key={index}
                style={{ width: "18rem", margin: "10px", float: "left",height:'480px' }}
              >
                <Badge bg={not} style={{ height: "10px" }}>
                  {" "}
                </Badge>
                <Card.Img variant="top" src={profile_pic} height="200px" />

                <Card.Body>
                  <Card.Title style={{ height: "50px" }}>
                    {fname} {lname}
                  </Card.Title>
                  <Card.Text className="divCardText">
                    <div>
                      <span className="spanStyle">Nationality: </span>
                      <img src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${nat}.svg`}></img>
                    </div>
                    <div>
                      <span className="spanStyle">Gender: </span>
                      {sex}
                    </div>
                    <div>
                      <span className="spanStyle">Uploaded file: </span>
                      {uploadedfile}
                    </div>
                  </Card.Text>
                  <div style={{ textAlign: "center",marginBottom:"10px" }}>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deleteReportAction(id))}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="dark"
                      style={{ marginLeft: "10px" }}
                      onClick={() => {
                        setOpenModal(true);
                        setUpdate(true);
                        setCurrentItem(item)
                      }}
                    >
                      Edit info
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
         {openModal&&currentItem&&(
                <ModalPageFormik
                  closeModal={setOpenModal}
                  fname={currentItem.fname}
                  lname={currentItem.lname}
                  nat={currentItem.nat}
                  not={currentItem.not}
                  sex={currentItem.sex}
                  uploadedfile={currentItem.uploadedfile}
                  id={currentItem.id}
                  update
                />
              )}
      </div>
    </>
  );
};
export default MyReportsPage;
