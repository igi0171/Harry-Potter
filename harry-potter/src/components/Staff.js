import React, { useState, useEffect } from "react";
import StaffModal from "./StaffModal";

import styles from "./StudentStaffHouses.module.css";

const Staff = () => {
  const [staff, setStaff] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [staffClicked, setStaffClicked] = useState(false);
  const [staffData, setStaffData] = useState({});

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

  const handleStaffClick = (event) => {
    for (let i = 0; i < staff.length; i++) {
      if (event.target.src === staff[i].image) {
        setStaffData(staff[i]);
      }
    }
    setStaffClicked(true);
  };

  const handleModalReturn = () => {
    setStaffClicked(false);
  };

  let staffCharacters = staff.map((character, index) => {
    return (
      <div key={index} className={styles.student_staff_houses}>
        <img
          src={character.image}
          alt={character.name}
          onClick={handleStaffClick}
        />
        <p>{character.name}</p>
      </div>
    );
  });

  return (
    <>
      {staffClicked && (
        <StaffModal
          staffData={staffData}
          returnClicked={handleModalReturn}
        ></StaffModal>
      )}
      {!isLoading && <div>{staffCharacters}</div>}
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Staff;
