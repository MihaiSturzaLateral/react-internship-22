import axios from "axios";
import React from "react";
import './Time.css';

export default function Time() {
  const [post, setPost] = React.useState(null);
  const [value, setValue] = React.useState('all');
  const [timeFrame, setTimeFrame] = React.useState('hour');

    const handleChange = (event) => {
      setValue(event.target.value);
    };



  React.useEffect(() => {
    axios.get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${value}_${timeFrame}.geojson`).then((response) => {
      setPost(response.data.features);
    });
  }, [value, timeFrame]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <div className='filterbuttons'>
            <button className="hour" onClick={() => setTimeFrame('hour')}>Past Hour</button>
            <button className="day" onClick={() => setTimeFrame('day')}>Past Day</button>
            <button className="week" onClick={() => setTimeFrame('week')}>Past 7 days</button>
            <button className="month" onClick={() => setTimeFrame('month')}>Past 30 days</button>
        </div>
        <div className='dropdown'>
        <button>
          Magnitude
          <select value={value} onChange={handleChange}>
            <option value="all">Any</option>
            <option value="1.0">1.0+</option>
            <option value="2.5">2.5+</option>
            <option value="4.5">4.5+</option>
          </select>
        </button>
  
      </div>
        {post.map(post => (
                  <div key={post.id}>
       <b>Title: </b> {post.properties.title} <br/>
       </div>
  ))};
  </div>
  )}