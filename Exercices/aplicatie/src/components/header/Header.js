import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/Photos">Photos</Link>
          </li>
          <li>
            <Link to="/Comments">Comments</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
