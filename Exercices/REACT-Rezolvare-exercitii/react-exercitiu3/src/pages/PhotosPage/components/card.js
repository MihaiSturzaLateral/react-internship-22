import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
function Card() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid-container">
      {posts.map((post) => (
        <div className="grid-item">
          <img src={post.url} alt=""></img>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Card;
// text-shadow: 2px 2px 5px blue;
// import { useEffect, useState } from "react";
// const Card = () => {
//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const [items, setItems] = useState([]);

//   const fetchItems = async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const items = await data.json();
//     console.log(items);
//     setItems(items);
//   };

//   return (
//     <div>
//       {items.map((item) => (
//         <div>
//           <img src={item.url} alt="imagini"></img>
//           <h3 key={item.itemid}>{item.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;
