import "./wantedCard.css";
import { NavLink } from "react-router-dom";

const WantedCard = ({
  forename,
  images,
  nationalities,
  date_of_birth,
  detail,
}) => {
  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  }

  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const lower = nationalities?.map((element) => {
    return element.toLowerCase();
  });
  //console.log(lower);
  return (
    <div className="card">
      <div className="image">
        <img src={images} alt=" " />
      </div>
      <div className="title">
        <h1>{forename}</h1>
      </div>
      <div className="des">
        <p>
          <b style={{ fontSize: "17px", paddingRight: "10px" }}>
            Date of birth:
          </b>
          {formatDate(date_of_birth)} <br />
          <b style={{ fontSize: "17px", paddingRight: "10px" }}>
            Nationalities:
          </b>
          <img
            className="flag-img"
            src={`https://flagcdn.com/48x36/${lower}.png`}
            alt="..."
          />
          <br />
          <b style={{ fontSize: "17px", paddingRight: "10px" }}>Age:</b>
          {getAge(date_of_birth)}
        </p>
        <button className="button-cards">
          <NavLink to="/details" state={detail}>
            View more info
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default WantedCard;
