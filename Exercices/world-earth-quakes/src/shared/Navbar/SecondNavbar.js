import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import './Navbar.css'

const SecondNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 mb-2 mb-lg-0 d-flex justify-content-center w-100">
                            <li className="nav-item">
                                <Link className="btn btn-outline-dark px-4 py-0 mx-1" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-dark px-4 py-0 mx-1" to="/messages-list">Messages</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SecondNavbar