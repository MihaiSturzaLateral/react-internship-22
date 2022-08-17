import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu">
      <h1>WorldEarthQuakes</h1>
    <ul className="nav">
      <li>
        <Link to='/' className="text-link">Home</Link>
      </li>
      <li>
        <Link to='/about' className="text-link">About</Link>
      </li>
      <li>
        <Link to='/contact' className="text-link">Contact</Link>
      </li>
    </ul>
    <input type='text'></input>
    <button>Search</button>
    </div>
  );
};

export default Header;
