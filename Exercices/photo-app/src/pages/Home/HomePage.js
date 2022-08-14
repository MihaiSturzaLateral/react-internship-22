import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div style={{ height: "30vh", padding: "10px" }} className="ui grid segment container centered">
                <div className="four wide column">
                    <h1>Hello,</h1>
                    <h2>Andreea Gheran !</h2>
                </div>
            </div>
            <div style={{ height: "30vh", padding: "50px" }} className="ui grid segment container centered">
                <div className="two wide column">
                    <Link to="/Photos" className="ui button black" >Go to photos</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage;