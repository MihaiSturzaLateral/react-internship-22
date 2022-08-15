import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">WorldEarthQuakes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="about">About</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="contact">Contact</Link>

                            </li>
                        </ul>
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar