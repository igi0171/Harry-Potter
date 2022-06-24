import React, { useState, useEffect } from "react";

const Characters = () => {
  const [findCharacter, setFindCharacter] = useState("");
  const [characterNames, setCharacterNames] = useState([]);
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
      const alphabeticalData = JSON.parse(JSON.stringify(data));
      console.log(data, alphabeticalData);
      alphabeticalData.sort(function (a, b) {
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
      setCharacterNames(alphabeticalData);
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
          ></input>
          <datalist id="characters">
            <option value="" />
            {characterNames.map((d, i) => {
              return <option value={d.name} key={i} />;
            })}
          </datalist>
        </div>
      </form>
    </>
  );
};

export default Characters;
