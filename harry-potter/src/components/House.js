import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  return (
    <section>
      <h1>{params.house}</h1>
    </section>
  );
};

export default Details;
