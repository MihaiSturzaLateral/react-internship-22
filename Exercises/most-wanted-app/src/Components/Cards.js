import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useNavigate} from "react-router-dom";
import "./Cards.css";

const Cards = ({ fname, lname, dateOfBirth, nationalities, imag, badgeColor, linkDetails,linkImages }) => {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);
  const navigate=useNavigate();
  return (
    <Card
      style={{ width: "18rem",margin:'30px 20px 20px 20px', height:'500px' }}
    >
      <Badge bg={badgeColor} style={{position:'absolute',height:'45px',width:'45px',borderRadius:'50%',transform:'translate(-30%,-20%)'}}>{' '}
      </Badge>
      <Card.Img variant="top" src={imag} style={{ height: "280px" }} />
      <Card.Body>
        <Card.Title style={{height:'50px'}}>{fname} {lname}</Card.Title>
        <Card.Text className="divCardText">
          <div>
            <span className="spanStyle">Date of birth: </span>
            {dateOfBirth}
          </div>
          <div>
            <span className="spanStyle">Age: </span>
            {currentDate.getFullYear() - birthDate.getFullYear()}
          </div>
          <div>
            <span className="spanStyle">Nationalities: </span>
            {nationalities?.map((item) => {
              return(
               <img src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${item}.svg`} style={{marginRight:'5px', height:'20px'}}/>
              )
            })}
          </div>
        </Card.Text>
        <div style={{ textAlign: "center"}}>
          <Button variant="dark"  onClick={()=>navigate('/mydetailspage', {state:{linkDetails,badgeColor,linkImages}})}>View more info</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
