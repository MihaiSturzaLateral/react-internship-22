import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

function Cards({ imgWanted, forenameWanted,nameWanted, birthWanted, natWanted,danger }) {

  const getAges=(birthDate)=>{
    let d=new Date();
    let y=d.getFullYear();
    let date=new Date(birthDate);
    let b=date.getFullYear();
    return y-b;
  }
  
  return (
   
    <Card  style={{ width: "18rem" }}>
      <label style={{ backgroundColor:`${danger}`, fontSize:"1.25em", width:"100%"}}>Wanted</label>
      <Card.Img variant="top" src={imgWanted}/>
      <Card.Body>
        <Card.Title>{forenameWanted} {nameWanted}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Date of birth: {birthWanted}</ListGroup.Item>
        <ListGroup.Item>Age: {getAges(birthWanted)}</ListGroup.Item>
        <ListGroup.Item>Nationalities: {natWanted}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="secondary">View more info</Button>
      </Card.Body>
    </Card>
  
  );
}

export default Cards;
