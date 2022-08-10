import React from 'react';
import './Header.css'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul className='ulHeader'>
          <li>
            <Link className='link' to="/">Home Page</Link>
          </li>
          <li>
            <Link className='link' to="/PhotosPage">Photos Page</Link>
          </li>
          <li>
            <Link className='link' to="/CommentsPage">Comments Page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;
