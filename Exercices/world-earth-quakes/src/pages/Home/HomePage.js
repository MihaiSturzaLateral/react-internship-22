import React, { useState } from "react";
import MapComponent from "../../shared/MapComponent/MapComponent";
import TestData from "../../shared/MapComponent/TestData.json"
import './Home.css'
import { Link } from 'react-router-dom';
import axios from "axios";


const HomePage = () => {
    //to do : add real data
    //add filter functionality for past days 
    const [earthquakeData, setEarthquakeData] = useState(TestData.features)
    const renderList = () => earthquakeData.map((data) => {
        return (
            <li className="d-flex flex-column container border list-group-item my-3">
                <div className="row">
                    <div className={`py-3 col-2 rounded-circle 
                    ${data.properties.mag < 2.5 &&
                        'bg-success'}
                    ${data.properties.mag < 4.5 &&
                        data.properties.mag > 2.5 &&
                        'bg-warning'}
                    ${data.properties.mag > 4.5 &&
                        'bg-danger'}
                    d-flex justify-content-center align-items-center`}>
                        {data.properties.mag}
                    </div>
                    <h1 className="col h6">{data.properties.title}</h1>
                </div>
                <div className="d-flex justify-content-end">
                    {/* 
    Sending earthquake details object as props to EarthquakeDetailsPage 
*/}
                    <Link
                        to={`/earthquake-details/${data.id}`}
                        state={{ data: data }}
                        className="btn btn-danger">
                        View Details
                    </Link >
                </div>
            </li>
        )
    })

    const showLastHour = async () => {
        await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson').then(({ data }) => setEarthquakeData(data.features))
    }
    const showLastDay = async () => {
        await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson').then(({ data }) => setEarthquakeData(data.features))
    }
    const showLastWeek = async () => {
        await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(({ data }) => setEarthquakeData(data.features))
    }
    const showLastMonth = async () => {
        await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson').then(({ data }) => setEarthquakeData(data.features))
    }


    const showBasedOnMag = (severity) => {
        let filterData = TestData.features;
        console.log(`is called?? ${severity}`)
        if (severity) {
            if (severity === 'low') {
                filterData = filterData.filter(data => data.properties.mag < 2.5)
            }
            if (severity === 'medium') {
                filterData = filterData.filter(data => {
                    return data.properties.mag > 2.5 && data.properties.mag < 4.5;
                })
            }
            if (severity === 'high') {
                filterData = filterData.filter(data => {
                    return data.properties.mag > 4.5;
                })
            }
            console.log(`is called?? ${filterData}`)

            setEarthquakeData(filterData);

        } else {
            setEarthquakeData(filterData);
        };
    }

    return (
        <div className="container mt-3 mb-3">
            <div className="row mb-4 p-2">
                <div className="col">
                    <button onClick={showLastHour} className="btn btn-outline-primary">Past hour</button>
                    <button onClick={showLastDay} className="btn btn-outline-primary">Past day</button>
                    <button onClick={showLastWeek} className="btn btn-outline-primary">Past 7 days</button>
                    <button onClick={showLastMonth} className="btn btn-outline-primary">Past 30 days</button>
                </div>
                <div className="col-6">
                    <div class="dropdown">
                        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Magnitude
                        </button>
                        <ul class="dropdown-menu">
                            <li><button onClick={() => showBasedOnMag()} class="dropdown-item">Any</button></li>
                            <li><button onClick={() => showBasedOnMag('high')} class="dropdown-item">4.5+</button></li>
                            <li><button onClick={() => showBasedOnMag('medium')} class="dropdown-item">2.5+</button></li>
                            <li><button onClick={() => showBasedOnMag('low')} class="dropdown-item">1+</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col">
                    <MapComponent earthquakes={TestData} height={500} />
                </div>
                <div className="col-4 border">
                    <ul style={{ height: "500px", overflow: "auto" }} className="list-group">
                        {renderList()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage;