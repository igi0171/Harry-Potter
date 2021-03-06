import React from "react";

import styles from "./Character.module.css";

const Character = (props) => {
  const handleWikiSearch = (event) => {
    const url = `https://harrypotter.fandom.com/wiki/Special:Search?query=${event.target.alt}&scope=internal&contentType=&ns%5B0%5D=0`;
    window.open(url, "_blank").focus();
  };
  let characters;
  if (props.findCharacter !== "") {
    characters = props.characters.map((character, index) => {
      if (props.findCharacter === character.name) {
        return (
          <div key={index} className={styles.character}>
            <img
              src={character.image}
              alt={character.name}
              onClick={handleWikiSearch}
            />
            <div>
              <p>Name: {character.name}</p>
              <p>
                {character.gender === "male" ? "♂" : "♀"} {character.ancestry}{" "}
                {character.species}
                {character.wizard ? " wizard" : ""}
              </p>
              <p>House: {character.house}</p>
              <p>Date Of Birth: {character.dateOfBirth}</p>
              <p>Eye colour: {character.eyeColour}</p>
              <p>
                Wand: {character.wand.wood} wood; {character.wand.core} core;{" "}
                {character.wand.length}"
              </p>
              <p>Patronus: {character.patronus}</p>
            </div>
          </div>
        );
      }
      return "";
    });
  } else {
    characters = props.characters.map((character, index) => {
      return (
        <div key={index} className={styles.character}>
          <img
            src={character.image}
            alt={character.name}
            onClick={handleWikiSearch}
          />
          <div>
            <p>Name: {character.name}</p>
            <p>
              {character.gender === "male" ? "♂" : "♀"} {character.ancestry}{" "}
              {character.species}
              {character.wizard ? " wizard" : ""}
            </p>
            <p>House: {character.house}</p>
            <p>Date of Birth: {character.dateOfBirth}</p>
            <p>Eye colour: {character.eyeColour}</p>
            <p>
              Wand: {character.wand.wood} wood; {character.wand.core} core;{" "}
              {character.wand.length}"
            </p>
            <p>Patronus: {character.patronus}</p>
          </div>
        </div>
      );
    });
  }

  return <div>{characters}</div>;
};

export default Character;
