import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cardCom.css";
function CardCom() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        console.log(response);
        const myRepo = response.data;
        setRepos(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  return (
    <div className="container-comments">
      {repos.map((repo) => (
        <div className="item-comments">
          <p>
            {" "}
            <b> Numele :</b> {repo.name}
          </p>
          <p>
            {" "}
            <b>Email : </b>
            {repo.email}
          </p>
          <p>
            <b>Descriere :</b> {repo.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CardCom;
