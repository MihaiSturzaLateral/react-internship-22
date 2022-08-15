import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="container mt-auto">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-muted">
                        &copy;Copyright 2022 Andreea Gheran
                    </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <span className="text-muted">API used from earthquake.usgs.gov</span>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer