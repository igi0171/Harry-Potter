import React, { useState, useEffect } from "react";
import Student from "./Student";

const Students = () => {
  const [students, setStudents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudents = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setStudents(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "http://hp-api.herokuapp.com/api/characters/students";

    const controller = new AbortController();
    fetchStudents(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {!isLoading && <Student students={students}></Student>}
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Students;
