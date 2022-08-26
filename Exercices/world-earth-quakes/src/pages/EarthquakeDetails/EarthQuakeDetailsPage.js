import React, { useEffect, useState } from "react";
import './EarthQuakeDetails.css'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import MapComponent from "../../shared/MapComponent/MapComponent";

const EarthQuakeDetailsPage = () => {
    // Obtain the state props send via <Link /> component
    // From HomePage
    const location = useLocation();
    const data = location.state.data.properties;

    const [details, setDetails] = useState();

    useEffect(() => {
        axios.get(data.detail).then(result => setDetails(result.data));
    }, [])

    return (
        <div className="container">
            <div className="row d-flex flex-row">
                <Link className="col-1 btn btn-warning h-50" to='/home'>Go back</Link>
                <h2 className="col-11 h2 text-primary h-50">Earthquake Details:</h2>
            </div>
            <div className="row d-flex flex-row">
                <div className="col">
                    <ul className="list-group">
                        <li className="bg-primary p-2 m-1 rounded-3 list-group-item text-light">
                            <h2>Tile:</h2>
                            <h4>{data.title}</h4>
                        </li>
                        <li className="bg-primary p-2 m-1 rounded-3 list-group-item text-light">
                            <h2>Place:</h2>
                            <h4>{data.place}</h4>
                        </li>
                        <li className="bg-primary p-2 m-1 rounded-3 list-group-item text-light">
                            <h2>Time:</h2>
                            <h4>{data.time}</h4>
                        </li>
                        <li className="bg-primary p-2 m-1 rounded-3 list-group-item text-light">
                            <h2>Status:</h2>
                            <h4>{data.status}</h4>
                        </li>
                        <li className="bg-primary p-2 m-1 rounded-3 list-group-item text-light">
                            <h2>Tsunami risk:</h2>
                            <h4>{data.tsunami === 0 ? 'no risk' : `risk of ${data.tsunami}`}</h4>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    {details && <MapComponent earthquakes={details} />}
                </div>
            </div>

        </div>
    )
}

export default EarthQuakeDetailsPage;