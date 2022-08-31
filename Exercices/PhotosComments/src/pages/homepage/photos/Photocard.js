// import React, { Component } from 'react';
// import './Photocard.css';

// class Photocard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false
//         };
//     }


//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/photos")
//         .then(res => res.json())
//         .then(json => {
//             this.setState({
//             isLoaded: true,
//             items: json
//             })
//         })
//     }
//     render() { 

//         let { isLoaded, items } = this.state;

//         if(!isLoaded) {
//             return <div>Loading...</div>;
//         }

//         else {

//         return (
//             <div className='photos'>
//                 {items.map(item => (
//                     <div key={item.id} className='card'>
//                        <img src={item.thumbnailUrl}/> <br/> Title: {item.title} 
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
// }
 
// export default Photocard;

import axios from "axios";
import React from "react";
import './Photocard.css';

const baseURL = "https://jsonplaceholder.typicode.com/photos";

export default function Photocard() {
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
                  <div key={post.id} className='card'>
      <img src={post.thumbnailUrl}/> <br/> <b>Title:</b> {post.title}
    </div>
  ))};
  </div>
  )}