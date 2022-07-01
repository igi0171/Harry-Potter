import React from "react";
import ReactDOM from "react-dom";

import styles from "../Modal.module.css";
import StudentButton from "./StudentButton";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.returnClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.studentData.name}</h2>
        </header>
        <div className={styles.content}>
          <p>
            {props.studentData.gender === "male" ? "♂" : "♀"}{" "}
            {props.studentData.ancestry} {props.studentData.species}
            {props.studentData.wizard ? " wizard" : ""}
          </p>
          <p>House: {props.studentData.house}</p>
          <p>Date of Birth: {props.studentData.dateOfBirth}</p>
          <p>Eye colour: {props.studentData.eyeColour}</p>
          <p>
            Wand: {props.studentData.wand.wood} wood;{" "}
            {props.studentData.wand.core} core; {props.studentData.wand.length}"
          </p>
          <p>Patronus: {props.studentData.patronus}</p>
        </div>
        <img
          src={props.studentData.image}
          alt={props.studentData.name}
          className={styles.image}
        ></img>
        <footer className={styles.actions}>
          <StudentButton onclick={props.returnClicked}>Return</StudentButton>
        </footer>
      </div>
    </div>
  );
};

const StudentModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          studentData={props.studentData}
          returnClicked={props.returnClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default StudentModal;
