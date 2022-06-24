import React from "react";
import { Link } from "react-router-dom";

const Houses = () => {
  return (
    <>
      <h1>Hogwarts Houses</h1>
      <ul>
        <li>
          <Link to="/house/gryffindor">Gryffindor</Link>
        </li>
        <li>
          <Link to="/house/hufflepuff">Hufflepuff</Link>
        </li>
        <li>
          <Link to="/house/ravenclaw">Ravenclaw</Link>
        </li>
        <li>
          <Link to="/house/slytherin">Slytherin</Link>
        </li>
      </ul>
    </>
  );
};

export default Houses;
