import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 3. Create a <Header/> component with 2-3 links to other pages using React Router. (Home Page, Photos Page, Comments Page)
// Make use of - BrowserRouter, Route, Link from react-router-dom

// Extra:
// On Photos Page - using this resource https://jsonplaceholder.typicode.com/photos make a reusable component which can be like a <Card/> where you add/fetch/display  dynamically the id, photo, title.
// Use the useEffect hook for making the API request, map function to map through posts and display them in a creative way.
// Do the same for Comments Page - with this API https://jsonplaceholder.typicode.com/comments

// Help:
// - https://www.w3schools.com/react/react_router.asp
// -  https://www.youtube.com/watch?v=bYFYF2GnMy8&list=LL&index=1
