import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards({
  imgWanted,
  forenameWanted,
  nameWanted,
  birthWanted,
  natWanted,
  danger,
  urlDetails,
}) {
  const getAges = (birthDate) => {
    let d = new Date();
    let y = d.getFullYear();
    let date = new Date(birthDate);
    let b = date.getFullYear();
    return y - b;
  };
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate("/details", { state: { urlDetails } });
  };

  return (
    <Card style={{ width: "25rem" }}>
      <label className="card-label" style={{ backgroundColor: `${danger}` }}>
        Wanted
      </label>
      <Card.Img variant="top" src={imgWanted} />
      <Card.Body>
        <Card.Title>
          {forenameWanted} {nameWanted}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Date of birth: {birthWanted}</ListGroup.Item>
        <ListGroup.Item>Age: {getAges(birthWanted)}</ListGroup.Item>
        <ListGroup.Item>Nationalities: {natWanted}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button
          variant="secondary"
          onClick={() => {
            navigateToDetails();
          }}
        >
          View more info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
