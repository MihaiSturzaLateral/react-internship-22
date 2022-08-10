import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Hello Andreea</h1>
      <div className="photoButton">
        <Link to="/Photos">
          <button>Button for Photos</button>
          <br></br>
        </Link>
      </div>
      <br></br>
      <div className="imgHome">
        <img
          src="https://apod.nasa.gov/apod/image/2208/LagoonStarFree_Dhar_1251.jpg"
          alt="Lagoon Star"
          width={500}
          height={500}
        ></img>
      </div>
    </>
  );
};

export default HomePage;
