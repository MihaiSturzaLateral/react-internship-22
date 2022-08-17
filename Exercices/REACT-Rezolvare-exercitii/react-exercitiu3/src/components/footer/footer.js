import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <section className="footer">
      <ul className="lista">
        <li>
          <Link to="/ ">Home</Link>
        </li>
        <li>
          <Link to="/photosPage">Photos</Link>
        </li>
        <li>
          <Link to="/commentsPage">Comments</Link>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
