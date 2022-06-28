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
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === "Vernon Dursley") {
          data[i].image = "https://i.imgur.com/O7OWjpV.png";
        }
        if (data[i].name === "Petunia Dursley") {
          data[i].image = "https://i.imgur.com/BeMTbcU.png";
        }
        if (data[i].name === "Dudley Dursley") {
          data[i].image = "https://i.imgur.com/wNNZOu4.png";
        }
        if (data[i].name === "Lily Potter") {
          data[i].image = "https://i.imgur.com/yMyS1jv.png";
        }
        if (data[i].name === "James Potter") {
          data[i].image = "https://i.imgur.com/T8CJr9Q.png";
        }
        if (data[i].name === "Albus Dumbledore") {
          data[i].image = "https://i.imgur.com/gU7j1rB.png";
        }
        if (data[i].name === "Madam Pomfrey") {
          data[i].image = "https://i.imgur.com/ZgtrVKl.png";
        }
        if (data[i].name === "Mrs Figg") {
          data[i].image = "https://i.imgur.com/jgGRpmk.png";
        }
        if (data[i].name === "Marge Dursley") {
          data[i].image = "https://i.imgur.com/IqMC8YJ.png";
        }
        if (data[i].name === "Yvonne") {
          data[i].image = "https://i.imgur.com/tfOFrPD.png";
        }
        if (data[i].name === "Piers Polkiss") {
          data[i].image = "https://i.imgur.com/mfExEh7.png";
        }
        if (data[i].name === "Dennis") {
          data[i].image = "https://i.imgur.com/AXH4AOj.png";
        }
        if (data[i].name === "Malcolm") {
          data[i].image = "https://i.imgur.com/uzNs4nk.png";
        }
        if (data[i].name === "Gordon") {
          data[i].image = "https://i.imgur.com/bdCARLx.png";
        }
        if (data[i].name === "Miranda Gaushawk") {
          data[i].image = "https://i.imgur.com/nnfWybt.png";
        }
        if (data[i].name === "Bathilda Bagshot") {
          data[i].image = "https://i.imgur.com/yQnGN9G.png";
        }
        if (data[i].name === "Adalbert Waffling") {
          data[i].image = "https://i.imgur.com/QwHBApV.png";
        }
        if (data[i].name === "Emeric Switch") {
          data[i].image = "https://i.imgur.com/ijZ2WuY.png";
        }
        if (data[i].name === "Phyllida Spore") {
          data[i].image = "https://i.imgur.com/c5Bb5ZX.png";
        }
        if (data[i].name === "Arsenius Jigger") {
          data[i].image = "https://i.imgur.com/8xhVB2Z.png";
        }
        if (data[i].name === "Newt Scamander") {
          data[i].image = "https://i.imgur.com/2pxqOOp.png";
        }
        if (data[i].name === "Quentin Trimble") {
          data[i].image = "https://i.imgur.com/0oRxdmR.png";
        }
        if (data[i].name === "Tom") {
          data[i].image = "https://i.imgur.com/UbEFCzD.png";
        }
        if (data[i].name === "Doris Crockford") {
          data[i].image = "https://i.imgur.com/U1HYVIo.png";
        }
        if (data[i].name === "Quirinus Quirrel") {
          data[i].image = "https://i.imgur.com/bM9DZ8d.png";
        }
        if (data[i].name === "Griphook") {
          data[i].image = "https://i.imgur.com/DZ9Djdt.png";
        }
        if (data[i].name === "Madam Malkin") {
          data[i].image = "https://i.imgur.com/OSYaU6l.png";
        }
        if (data[i].name === "Vindictus Viridian") {
          data[i].image = "https://i.imgur.com/H9fhdVr.png";
        }
        if (data[i].name === "Garrick Ollivander") {
          data[i].image = "https://i.imgur.com/FcswXPF.png";
        }
        if (data[i].name === "Hedwig") {
          data[i].image = "https://i.imgur.com/QgtCtTA.png";
        }
        if (data[i].name === "Molly Weasley") {
          data[i].image = "https://i.imgur.com/KGQw7MO.png";
        }
        if (data[i].name === "Percy Weasley") {
          data[i].image = "https://i.imgur.com/TUYxWMy.png";
        }
        if (data[i].name === "Fred Weasley") {
          data[i].image = "https://i.imgur.com/2lfOlp8.png";
        }
        if (data[i].name === "George Weasley") {
          data[i].image = "https://i.imgur.com/vzDorMb.png";
        }
        if (data[i].name === "Lee Jordan") {
          data[i].image = "https://i.imgur.com/z3rYTUD.png";
        }
        if (data[i].name === "Bill Weasley") {
          data[i].image = "https://i.imgur.com/r80z6Lb.png";
        }
        if (data[i].name === "Charlie Weasley") {
          data[i].image = "https://i.imgur.com/kNVlNuF.png";
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
