import React, { useEffect, useState } from "react";
import axios from 'axios';

const PhotosPage = () => {
    const [pictureData, setPictureData] = useState([]);

    // onComponentMount (because we have empty brackets [] )
    // First thing that will run and will run only once! Like onComponentMount (class component)
    useEffect(() => {
        pictureData.length === 0 &&
            axios.get('https://jsonplaceholder.typicode.com/photos')
                .then(({ data }) => setPictureData(data));
    }, [])

    const renderData = () => {
        return pictureData.map((data, index) => {
            // return the first 20 pictures
            if (index > 20) return;
            return (
                <div style={{ margin: '10px auto', width: '450px' }} className="ui card">
                    <div className="image">
                        <img alt="" src={data.url}></img>
                    </div>
                    <div className="content">
                        <h3 className="header">{data.title}</h3>
                    </div>
                </div>
            )
        })
    }
    if (pictureData.length === 0)
        return <div style={{ margin: "35px auto" }}>Loading...</div>
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", padding: '25px' }}>
            {renderData()}
        </div>
    )


}

export default PhotosPage;