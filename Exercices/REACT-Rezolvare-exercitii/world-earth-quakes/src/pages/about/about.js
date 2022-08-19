import React from "react";
import "./about.css";

export default function About() {
  return (
    <section>
      <h1 className="AboutH1">About</h1>
      <div className="Container">
        <p className="imag"></p>
        <div className="info">
          <p>
            <b>Name:</b> <span>Trifa Georgiana</span>
          </p>
          <p>
            <b>Age:</b> <span>21</span>
          </p>
          <p>
            <b>Contact:</b>
            <span>0734424476</span>
          </p>
        </div>
        <div className="descriere">
          <p className="descP">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expond the actual technings of the great
            explorer of the truth, the master builder of human hapiness. No onme
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but beacuse thos who do not know to pursue pleasure
            rationally encounter consequences that are extremly painful. Not
            again is there anyone who loves or pursue or desires to obtain pain
            of itself, because it is pain, but occasionally circumstances occur
            in which toil and pain can procure him some great pleasure. To take
            a trivial example, which of us ever undertakes laborious physical
            exercises, except to obtain some advantages from it? But who has any
            right to find with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?
          </p>
        </div>
      </div>
    </section>
  );
}
