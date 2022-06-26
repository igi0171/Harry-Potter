import React, { useState, useEffect } from "react";
import Character from "./Character";

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
    const url = "http://hp-api.herokuapp.com/api/characters";

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
      <h1>Harry Potter Characters</h1>
      <form>
        <div>
          <label htmlFor="character">Find Character</label>
        </div>
        <div>
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
