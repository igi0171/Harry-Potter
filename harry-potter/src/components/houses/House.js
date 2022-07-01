import React, { useState, useEffect } from "react";
import HouseCharacterModal from "./HouseCharacterModal";
import { useParams } from "react-router-dom";

import styles from "../StudentStaffHouses.module.css";

const House = () => {
  const params = useParams();

  const [houseCharacters, setHouseCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [houseCharacterClicked, setHouseCharacterClicked] = useState(false);
  const [houseCharacterData, setHouseCharacterData] = useState({});

  const handleHouseCharacterClick = (event) => {
    for (let i = 0; i < houseCharacters.length; i++) {
      if (event.target.alt === houseCharacters[i].name) {
        setHouseCharacterData(houseCharacters[i]);
      }
    }
    setHouseCharacterClicked(true);
  };

  const handleModalReturn = () => {
    setHouseCharacterClicked(false);
  };

  const fetchHouseCharacters = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      for (let i = 0; i < data.length; i++) {
        if (data[i].image === "") {
          data[i].image = "https://i.imgur.com/AAQNYhy.png";
        }
      }

      setHouseCharacters(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url =
      "https://hp-api.herokuapp.com/api/characters/house/" + params.house;

    const controller = new AbortController();
    fetchHouseCharacters(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [params.house]);

  let hogwartsHouseCharacters = houseCharacters.map((houseCharacter, index) => {
    return (
      <div key={index} className={styles.student_staff_houses}>
        <img
          src={houseCharacter.image}
          alt={houseCharacter.name}
          onClick={handleHouseCharacterClick}
        />
        <p>{houseCharacter.name}</p>
      </div>
    );
  });
  return (
    <>
      {houseCharacterClicked && (
        <HouseCharacterModal
          houseCharacterData={houseCharacterData}
          returnClicked={handleModalReturn}
        ></HouseCharacterModal>
      )}
      <h1 className={styles.house_name}>
        {params.house.charAt(0).toUpperCase() + params.house.slice(1)}
      </h1>
      {!isLoading && <div>{hogwartsHouseCharacters}</div>}
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default House;
