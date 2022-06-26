import React, { useState, useEffect } from "react";

const Staff = () => {
  const [staff, setStaff] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStaff = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setStaff(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "http://hp-api.herokuapp.com/api/characters/staff";

    const controller = new AbortController();
    fetchStaff(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  let staffCharacters = staff.map((character, index) => {
    return (
      <div key={index}>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Staff</h1>
      {!isLoading && <div>{staffCharacters}</div>}
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Staff;
