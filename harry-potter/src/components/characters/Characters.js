import React, { useState, useEffect } from "react";
import Character from "./Character";

import styles from "./Characters.module.css";

const Characters = (props) => {
  const [findCharacter, setFindCharacter] = useState("");
  const [charactersAlphabetical, setCharactersAlphabetical] = useState([]);
  const [characters, setCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = async (url, signal) => {
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
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].name === data[j].name) {
            data.splice(j, 1);
          }
        }
      }
      const dataAlphabetical = JSON.parse(JSON.stringify(data));

      dataAlphabetical.sort(function (a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
      setCharactersAlphabetical(dataAlphabetical);
      setCharacters(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "https://hp-api.herokuapp.com/api/characters";

    const controller = new AbortController();
    fetchCharacters(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const handleCharacterChange = (event) => {
    setFindCharacter(event.target.value);
  };

  const handleCharacterChangeRandom = (event) => {
    event.preventDefault();
    setFindCharacter(
      charactersAlphabetical[
        Math.floor(Math.random() * charactersAlphabetical.length)
      ].name
    );
  };

  return (
    <>
      <div className={styles.top_bar}>
        <form>
          <div className={styles.find_character}>
            <label htmlFor="character">Find Character:</label>
          </div>
          <div className={styles.select_character}>
            <input
              id="character"
              type="text"
              onChange={handleCharacterChange}
              list="characters"
              placeholder="Select a character"
              value={findCharacter}
            ></input>
            <datalist id="characters">
              {charactersAlphabetical.map((character, index) => {
                return <option value={character.name} key={index} />;
              })}
            </datalist>
          </div>
        </form>
        <button onClick={handleCharacterChangeRandom}>Random Character</button>
      </div>
      {!isLoading && (
        <Character
          characters={characters}
          findCharacter={findCharacter}
        ></Character>
      )}
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Characters;
