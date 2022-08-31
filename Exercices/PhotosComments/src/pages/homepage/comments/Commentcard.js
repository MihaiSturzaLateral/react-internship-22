import axios from "axios";
import React from "react";
import './Commentcard.css';

const baseURL = "https://jsonplaceholder.typicode.com/comments";

export default function Commentcard() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div className='photos'>
        {post.map(post => (
                  <div key={post.id} className='commcard'>
       <b>Name:</b> {post.name} <br/>
       <b>Email:</b> {post.email} <br/>
       <b>Body:</b> {post.body}
    </div>
  ))};
  </div>
  )}