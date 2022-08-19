import axios from "axios";
import React from "react";

const baseURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
export default function PastDay() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.features);
    });
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div className='photos'>
        {post.map(post => (
                  <div key={post.id}>
       <b>Title: </b> {post.properties.title} <br/>
       </div>
  ))};
  </div>
  )}