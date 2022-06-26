import React from "react";

const Student = (props) => {
  let students = props.students.map((student, index) => {
    return (
      <div key={index}>
        <img src={student.image} alt={student.name} />
        <p>{student.name}</p>
        <p>{student.house}</p>
      </div>
    );
  });
  return <div>{students}</div>;
};

export default Student;
