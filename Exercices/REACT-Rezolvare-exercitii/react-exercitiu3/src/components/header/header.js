import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo"></Link>
      <ul className="navigare">
        <li>
          <Link to="/photosPage" className="active">
            Photos
          </Link>
        </li>
        <li>
          <Link to="/commentsPage" className="active">
            Comments
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
