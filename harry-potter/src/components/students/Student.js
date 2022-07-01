import React, { useState } from "react";
import StudentModal from "./StudentModal";

import styles from "../StudentStaffHouses.module.css";

const Student = (props) => {
  const [studentClicked, setStudentClicked] = useState(false);
  const [studentData, setStudentData] = useState({});

  const handleStudentClick = (event) => {
    for (let i = 0; i < props.students.length; i++) {
      if (event.target.alt === props.students[i].name) {
        setStudentData(props.students[i]);
      }
    }
    setStudentClicked(true);
  };

  const handleModalReturn = () => {
    setStudentClicked(false);
  };

  let students = props.students.map((student, index) => {
    return (
      <div key={index} className={styles.student_staff_houses}>
        <img
          src={student.image}
          alt={student.name}
          onClick={handleStudentClick}
        />
        <p>{student.name}</p>
        <p>{student.house}</p>
      </div>
    );
  });
  return (
    <>
      {studentClicked && (
        <StudentModal
          studentData={studentData}
          returnClicked={handleModalReturn}
        ></StudentModal>
      )}
      {students}
    </>
  );
};

export default Student;
