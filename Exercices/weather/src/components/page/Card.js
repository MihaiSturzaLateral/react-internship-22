import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Card.css";

const Cards = ({
  name,
  country,
  weather,
  icon,
  sunrise,
  sunset,
  wind,
  temp,
}) => {
  return (
    <Card className="cardStyle" style={{ width: "18rem" }}>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {"Location: "}
            <span>{name}</span> <span>{country}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>{weather}</span>
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="Icon"
              width="50px"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            {"Soarele rasare: "}
            <span>{sunrise}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            {"Soarele apune: "}
            <span>{sunset}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            {"Viteza vant: "}
            <span>{wind}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            {"Temperatura: "}
            <span>{temp}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default Cards;
