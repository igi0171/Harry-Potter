import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const House = () => {
  const params = useParams();

  const [houseCharacters, setHouseCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHouseCharacters = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setHouseCharacters(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url =
      "http://hp-api.herokuapp.com/api/characters/house/" + params.house;

    const controller = new AbortController();
    fetchHouseCharacters(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  let hogwartsHouseCharacters = houseCharacters.map((houseCharacter, index) => {
    return (
      <div key={index}>
        <img src={houseCharacter.image} alt={houseCharacter.name} />
        <p>{houseCharacter.name}</p>
      </div>
    );
  });
  return (
    <>
      <h1>{params.house}</h1>
      {!isLoading && <div>{hogwartsHouseCharacters}</div>}
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default House;
