import "./CheckCard.css";
import { useNavigate } from "react-router-dom";

const CheckCard = ({
  imgWanted,
  forename,
  name,
  birthDate,
  nationalities,
  urlDetails,
}) => {
  const getAges = (birthDate) => {
    let d = new Date();
    let y = d.getFullYear();
    let date = new Date(birthDate);
    let b = date.getFullYear();
    return y - b;
  };

  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate("../details", { state: { urlDetails } });
  };

  return (
    <>
      <div className="cardd">
        <div className="image-card">
          <img  alt="img" src={imgWanted} />
        </div>
        <div className="info">
          <div className="name">
            {forename} {name}
          </div>
          <div className="birth">Date of birth: {birthDate} </div>
          <div className="age">Age: {getAges(birthDate)}</div>
          <div className="nat">Nationalities: {nationalities}</div>
          <button
            onClick={() => {
              navigateToDetails();
            }}
          >
            View details
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckCard;
